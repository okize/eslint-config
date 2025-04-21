import babelParser from '@babel/eslint-parser';
import globals from 'globals';
import bestPractices from '../rules/best-practices.mjs';
import errors from '../rules/errors.mjs';
import style from '../rules/style.mjs';

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
      ...bestPractices,
      ...errors,
      ...style,
    },
  },
];
