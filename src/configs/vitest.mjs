import globalsVitest from 'globals-vitest';
import vitestPlugin from 'eslint-plugin-vitest';
import jestFormattingPlugin from 'eslint-plugin-jest-formatting';
import noOnlyTestsPlugin from 'eslint-plugin-no-only-tests';
import vitestRules from '../rules/vitest.mjs';
import jestFormattingRules from '../rules/jest-formatting.mjs';

export default [
  {
    languageOptions: {
      globals: {
        ...globalsVitest,
      },
    },
    plugins: {
      vitest: vitestPlugin,
      'no-only-tests': noOnlyTestsPlugin,
      'jest-formatting': jestFormattingPlugin,
    },
    rules: {
      ...vitestRules,
      ...jestFormattingRules,
      'no-only-tests/no-only-tests': 'error',
    },
  },
];
