import jestPlugin from 'eslint-plugin-jest';
import jestFormattingPlugin from 'eslint-plugin-jest-formatting';
import noOnlyTestsPlugin from 'eslint-plugin-no-only-tests';
import jestRules from '../rules/jest.mjs';
import jestFormattingRules from '../rules/jest-formatting.mjs';

export default [
  {
    languageOptions: {
      globals: jestPlugin.environments.globals.globals,
    },
    plugins: {
      jest: jestPlugin,
      'jest-formatting': jestFormattingPlugin,
      'no-only-tests': noOnlyTestsPlugin,
    },
    rules: {
      ...jestRules,
      ...jestFormattingRules,
    },
  },
];
