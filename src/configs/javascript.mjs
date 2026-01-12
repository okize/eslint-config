import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import jsPlugin from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import filenamesPlugin from 'eslint-plugin-filenames';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import promisePlugin from 'eslint-plugin-promise';
import baseRules from '../rules/base.mjs';
import stylisticRules from '../rules/stylistic.mjs';
import promiseRules from '../rules/promise.mjs';
import filenameRules from '../rules/filenames.mjs';
import importRules from '../rules/import.mjs';

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
    settings: {
      'import/extensions': ['.js', '.jsx', '.mjs', '.cjs'],
    },
    plugins: {
      js: jsPlugin,
      '@stylistic': stylisticPlugin,
      filenames: fixupPluginRules(filenamesPlugin),
      import: importPlugin,
      prettier: prettierPlugin,
      promise: promisePlugin,
    },
    rules: {
      ...baseRules,
      ...stylisticRules,
      ...filenameRules,
      ...importRules,
      ...promiseRules,
      'prettier/prettier': 'error',
    },
  },
];
