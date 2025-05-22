import babelParser from '@babel/eslint-parser';
import globals from 'globals';
import stylisticPlugin from '@stylistic/eslint-plugin';
import base from '../rules/base.mjs';
import stylistic from '../rules/stylistic.mjs';

export default [
  {
    plugins: {
      '@stylistic': stylisticPlugin,
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
    rules: {
      ...base,
      ...stylistic,
    },
  },
];
