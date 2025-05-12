import babelParser from '@babel/eslint-parser';
import globals from 'globals';
import base from '../rules/base.mjs';

export default [
  {
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
    rules: {
      ...base,
    },
  },
];
