import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import stylisticPlugin from '@stylistic/eslint-plugin';
import promisePlugin from 'eslint-plugin-promise';
import baseRules from '../rules/base.mjs';
import stylisticRules from '../rules/stylistic.mjs';
import typescriptRules from '../rules/typescript.mjs';
import promiseRules from '../rules/promise.mjs';

export default [
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaVersion: 2024,
      },
      globals: {
        ...globals.es2024,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      '@stylistic': stylisticPlugin,
      promise: promisePlugin,
    },
    rules: {
      ...baseRules,
      ...stylisticRules,
      ...promiseRules,
      ...typescriptRules,
    },
  },
];
