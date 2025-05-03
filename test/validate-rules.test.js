import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir } from 'node:fs/promises';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const configsDir = join(__dirname, '..', 'src', 'eslint', 'configs');

describe('ESLint Rule Validation', () => {
  it('validates that all plugin rules have their plugins properly configured', async () => {
    const configFiles = await readdir(configsDir);
    const errors = [];

    for (const configFile of configFiles) {
      if (!configFile.endsWith('.mjs')) continue;

      // import config file
      const { default: configArray } = await import(join(configsDir, configFile));

      // get the rules from config
      const configRules = configArray.reduce(
        (rules, config) => ({
          ...rules,
          ...(config.rules || {}),
        }),
        {},
      );

      // get configured plugins from config
      const configuredPlugins = new Set(
        configArray
          .filter((config) => config.plugins)
          .flatMap((config) => Object.keys(config.plugins || {})),
      );

      for (const [ruleName] of Object.entries(configRules)) {
        // only check rules with plugin prefix (e.g. 'observers/no-async-promise-executor')
        if (ruleName.includes('/')) {
          const [pluginName] = ruleName.split('/');

          if (!configuredPlugins.has(pluginName)) {
            errors.push(
              `Config \`${configFile}\`: Rule "${ruleName}" requires plugin "${pluginName}" which is not configured in the ESLint config`,
            );
          }
        }
      }
    }

    // if there are errors, fail the test with details
    if (errors.length > 0) {
      throw new Error('Plugin validation failed:\n' + errors.join('\n'));
    }
  });
});
