import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, sep, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));
const packageJsonPath = join(rootDir, '..', 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

describe('validate export map', () => {
  it('validates that the export map in package.json is correct', () => {
    expect(packageJson).toHaveProperty(
      'exports',
      expect.any(Object),
      'Package.json must have an "exports" field',
    );

    const exports = packageJson.exports;
    const dir = dirname(packageJsonPath);
    const seen = new Set();
    let hasDotEntry = false;
    let hasPackageJsonEntry = false;
    const errors = [];

    // Check all export entries
    for (const entry in exports) {
      // Check if entry has been seen before (duplicate check)
      if (seen.has(entry)) {
        errors.push(`Duplicate entry "${entry}"`);
        continue;
      }
      seen.add(entry);

      // Check if entry starts with a dot
      if (!entry.startsWith('.')) {
        errors.push(
          `Export map entries must be relative and start with a ".", got "${entry}" instead`,
        );
        continue;
      }

      // Mark special entries
      if (entry === '.') hasDotEntry = true;
      if (entry === './package.json') {
        hasPackageJsonEntry = true;

        // Check if package.json entry has the correct value
        if (exports[entry] !== './package.json') {
          errors.push(
            `Entry "./package.json" should have value "./package.json". Got "${exports[entry]}" instead`,
          );
        }
      }

      const value = exports[entry];

      // Check value based on type
      if (typeof value === 'string') {
        validateValue(entry, value, dir, errors);
      } else if (typeof value === 'object' && value !== null) {
        // Check each entry type in the object
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
});

/**
 * Validates a value in the export map
 * @param {string} entry The export entry key
 * @param {string} value The export entry value
 * @param {string} dir The directory where package.json is located
 * @param {string[]} errors Array to collect errors
 * @param {string} [type] Optional entry type (e.g., 'import', 'require')
 */
function validateValue(entry, value, dir, errors, type = null) {
  // Check if value starts with a dot
  if (!value.startsWith('.')) {
    errors.push(
      `File paths must be relative and start with a dot. Got "${value}" instead for entry "${entry}"`,
    );
    return;
  }

  // Handle wildcards in exports
  if (entry.includes('*')) {
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
  }
  // For non-wildcard entries, check if the file exists
  else if (!existsSync(join(dir, value))) {
    errors.push(`File not found for "${entry}"${type ? ` ${type}:` : ''} ${value}`);
  }
}
