import { ESLint } from 'eslint';
import { readdir } from 'node:fs/promises';
import { join, dirname, parse } from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const configDir = join(__dirname, '../src/configs');
const configs = await readdir(configDir);

describe(`validate config`, () => {
  configs.forEach((configFile) => {
    describe(`${parse(configFile).name}`, () => {
      let eslint;
      let calculatedConfig;
      let serializedConfig;

      beforeAll(async () => {
        const configPath = join(configDir, configFile);
        const configModule = await import(configPath);
        const config = configModule.default;

        // create ESLint instance with the config
        eslint = new ESLint({
          overrideConfig: config,
          overrideConfigFile: true, // do not search for a configuration file
        });

        // try to calculate config for a fake file
        calculatedConfig = await eslint.calculateConfigForFile('fake.js');

        serializedConfig = JSON.parse(
          JSON.stringify(calculatedConfig, (key, value) => {
            // remove absolute paths and unstable properties
            if (key === 'filePath' || key === 'basePath' || key.includes('Path')) {
              return '<path>';
            }
            // remove functions since they can't be serialized and aren't needed for snapshots
            if (typeof value === 'function') {
              return '<function>';
            }

            return value;
          }),
        );
      });

      it('should have valid ESLint configuration', () => {
        // if we got here, the config is valid since ESLint initialization would have thrown
        expect(calculatedConfig).toBeDefined();
        expect(calculatedConfig.rules).toBeDefined();
      });

      it('should match snapshot', async () => {
        await expect(serializedConfig).toMatchFileSnapshot(`__snapshots__/${configFile}.snap`);
      });
    });
  });
});
