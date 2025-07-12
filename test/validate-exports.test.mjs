import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { join, sep, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'glob';

const rootDir = fileURLToPath(new URL('..', import.meta.url));
const packageJsonPath = join(rootDir, 'package.json');
const configsDir = join(rootDir, 'src', 'configs');
const configFiles = globSync('*.mjs', { cwd: configsDir });
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
const packageJsonExports = packageJson.exports || {};

// Helper functions
/**
 * Formats a list of errors into a bulleted list
 * @param {string[]} items List of items to format
 * @returns {string} Formatted bulleted list
 */
const formatBulletList = (items) => items.map((item) => `  - ${item}`).join('\n');

/**
 * Checks if a path starts with a dot
 * @param {string} path Path to check
 * @param {string} errorPrefix Prefix for error message
 * @param {string[]} errors Array to collect errors
 * @returns {boolean} True if valid, false if not
 */
const checkPathStartsWithDot = (path, errorPrefix, errors) => {
  if (!path.startsWith('.')) {
    errors.push(`${errorPrefix} must be relative and start with a dot. Got "${path}" instead`);
    return false;
  }
  return true;
};

/**
 * Validates a value in the export map
 * @param {string} entry The export entry key
 * @param {string} value The export entry value
 * @param {string} dir The directory where package.json is located
 * @param {string[]} errors Array to collect errors
 * @param {string} [type] Optional entry type (e.g., 'import', 'require')
 */
const validateValue = (entry, value, dir, errors, type = null) => {
  // Check if value starts with a dot
  if (!checkPathStartsWithDot(value, 'File paths', errors)) {
    return;
  }

  // Handle wildcards in exports
  if (entry.includes('*')) {
    validateWildcardEntry(entry, value, dir, errors, type);
  }
  // For non-wildcard entries, check if the file exists
  else if (!existsSync(join(dir, value))) {
    errors.push(`File not found for "${entry}"${type ? ` ${type}:` : ''} ${value}`);
  }
};

/**
 * Validates a wildcard entry in the export map
 * @param {string} entry The export entry key
 * @param {string} value The export entry value
 * @param {string} dir The directory where package.json is located
 * @param {string[]} errors Array to collect errors
 * @param {string} [type] Optional entry type (e.g., 'import', 'require')
 */
const validateWildcardEntry = (entry, value, dir, errors, type = null) => {
  // Wildcard must be at the end
  if (!entry.endsWith('*')) {
    errors.push(
      `Invalid entry "${entry}". A wildcard character must always be positioned at the end`,
    );
  }

  // Value must include wildcard too
  else if (!value.includes('*')) {
    errors.push(
      `Invalid value for entry "${entry}". Didn't find a wildcard character in "${value}".`,
    );
  }

  // Check that the resolved directory exists (for wildcard paths)
  let subPath = value.substring(0, value.indexOf('*'));

  // Ensure we check the directory, not partial filenames
  if (!subPath.endsWith(posix.sep)) {
    subPath = posix.dirname(subPath);
  }

  // Normalize path separator for platform compatibility
  subPath = subPath.split(posix.sep).join(sep);

  const resolvedDir = join(dir, subPath);
  if (!existsSync(resolvedDir)) {
    errors.push(
      `Invalid subpath for "${entry}"${type ? ` ${type}:` : ''} ${value}. Folder "${resolvedDir}" doesn't exist.`,
    );
  }
};

/**
 * Validates the structure of the export map entry value
 * @param {string} entry The export entry key
 * @param {any} value The export entry value
 * @param {object} packageJson The package.json object
 * @param {string} dir The directory where package.json is located
 * @param {string[]} errors Array to collect errors
 */
const validateExportValue = (entry, value, packageJson, dir, errors) => {
  if (typeof value === 'string') {
    validateValue(entry, value, dir, errors);
  } else if (typeof value === 'object' && value !== null) {
    for (const type in value) {
      // Entry types shouldn't start with a dot
      if (type.startsWith('.')) {
        errors.push(`Entry type must not start with a dot. Got "${type}"`);
      }

      // If type is 'import', value must end with .mjs
      if (type === 'import' && !value[type].endsWith('.mjs') && packageJson.type !== 'module') {
        errors.push(
          `Value of entry type "import" must end with ".mjs". Got ${value[type]} instead`,
        );
      }

      validateValue(entry, value[type], dir, errors, type);
    }
  }
};

/**
 * Checks if a config file has a matching export
 * @param {string} configFile Config filename
 * @param {object} exports Exports object from package.json
 * @returns {boolean} True if has matching export, false if not
 */
const hasMatchingExport = (configFile, exports) => {
  const configName = configFile.replace('.mjs', '');

  // Check for direct export like './typescript'
  const hasDirectExport = Object.keys(exports).includes(`./${configName}`);

  // Check if file is exported as default ('.') or through another path
  const isExportedSomewhere = Object.values(exports).some(
    (exportPath) =>
      typeof exportPath === 'string' && exportPath.endsWith(`/src/configs/${configFile}`),
  );

  return hasDirectExport || isExportedSomewhere;
};

describe('Package.json exports validation', () => {
  it('validates that the export map structure is correct', () => {
    expect(packageJson).toHaveProperty(
      'exports',
      expect.any(Object),
      'Package.json must have an "exports" field',
    );

    const seen = new Set();
    let hasDotEntry = false;
    let hasPackageJsonEntry = false;
    const errors = [];

    for (const entry in packageJsonExports) {
      // Check if entry has been seen before (duplicate check)
      if (seen.has(entry)) {
        errors.push(`Duplicate entry "${entry}"`);
        continue;
      }
      seen.add(entry);

      // Check if entry starts with a dot
      if (!checkPathStartsWithDot(entry, 'Export map entries', errors)) {
        continue;
      }

      // Mark special entries
      if (entry === '.') hasDotEntry = true;
      if (entry === './package.json') {
        hasPackageJsonEntry = true;

        // Check if package.json entry has the correct value
        if (packageJsonExports[entry] !== './package.json') {
          errors.push(
            `Entry "./package.json" should have value "./package.json". Got "${packageJsonExports[entry]}" instead`,
          );
        }
      }

      validateExportValue(entry, packageJsonExports[entry], packageJson, rootDir, errors);
    }

    // Check for required entries
    if (!hasDotEntry) {
      errors.push('Export map does not have a "." entry');
    }

    if (!hasPackageJsonEntry) {
      errors.push('Export map does not have a "./package.json" entry');
    }

    // Report all errors
    expect(errors, errors.join('\n')).toHaveLength(0);
  });

  it('every config file in src/configs should have a matching export in package.json', () => {
    const missingExports = configFiles.filter(
      (configFile) => !hasMatchingExport(configFile, packageJsonExports),
    );

    if (missingExports.length > 0) {
      const missingExportsStr = formatBulletList(missingExports);
      const message = `The following config files don't have matching exports in package.json:\n${missingExportsStr}\n\nThey should be added to the 'exports' field in package.json.`;

      expect(missingExports, message).toHaveLength(0);
    }
  });
});
