import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'glob';

describe('Config files exports', () => {
  it('every config file in src/configs should have a matching export in package.json', () => {
    // Get directory of current module
    const __dirname = fileURLToPath(new URL('.', import.meta.url));

    // Read package.json
    const packageJsonPath = join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    const exports = packageJson.exports || {};

    // Get all config files from src/configs
    const configsDir = join(__dirname, '..', 'src', 'configs');
    const configFiles = globSync('*.mjs', { cwd: configsDir });

    // Keep track of missing exports
    const missingExports = [];

    // Check that each config file has a corresponding export
    for (const configFile of configFiles) {
      const configName = configFile.replace('.mjs', '');

      // Check for direct export like './typescript'
      const hasDirectExport = Object.keys(exports).includes(`./${configName}`);
      // Also check if file is exported as default ('.') or through another path
      const isExportedSomewhere = Object.values(exports).some(
        (exportPath) =>
          typeof exportPath === 'string' && exportPath.endsWith(`/src/configs/${configFile}`),
      );

      if (!(hasDirectExport || isExportedSomewhere)) {
        missingExports.push(configFile);
      }
    }

    // Generate helpful error message with all missing exports
    if (missingExports.length > 0) {
      const missingExportsStr = missingExports.map((file) => `  - ${file}`).join('\n');
      const message = `The following config files don't have matching exports in package.json:\n${missingExportsStr}\n\nThey should be added to the 'exports' field in package.json.`;

      expect(missingExports, message).toHaveLength(0);
    }
  });
});
