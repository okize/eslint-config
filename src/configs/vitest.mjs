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
      'jest-formatting': jestFormattingPlugin,
      'no-only-tests': noOnlyTestsPlugin,
    },
    rules: {
      ...vitestRules,
      ...jestFormattingRules,
    },
  },
];
