import babelParser from '@babel/eslint-parser';
import globals from 'globals';
import jsPlugin from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import baseRules from '../rules/base.mjs';
import stylisticRules from '../rules/stylistic.mjs';

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
    plugins: {
      js: jsPlugin,
      '@stylistic': stylisticPlugin,
    },
    rules: {
      ...baseRules,
      ...stylisticRules,
    },
  },
];
