import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import jsPlugin from '@eslint/js';
import { fixupPluginRules } from '@eslint/compat';
import stylisticPlugin from '@stylistic/eslint-plugin';
import promisePlugin from 'eslint-plugin-promise';
import filenamesPlugin from 'eslint-plugin-filenames';
import baseRules from '../rules/base.mjs';
import stylisticRules from '../rules/stylistic.mjs';
import promiseRules from '../rules/promise.mjs';
import filenameRules from '../rules/filenames.mjs';

export default [
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2024,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
      globals: {
        ...globals.es2024,
      },
    },
    plugins: {
      js: jsPlugin,
      '@stylistic': stylisticPlugin,
      promise: promisePlugin,
      filenames: fixupPluginRules(filenamesPlugin),
    },
    rules: {
      ...baseRules,
      ...stylisticRules,
      ...promiseRules,
      ...filenameRules,
    },
  },
];
