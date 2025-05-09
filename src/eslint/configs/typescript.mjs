import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import bestPractices from '../rules/best-practices.mjs';
import errors from '../rules/errors.mjs';
import style from '../rules/style.mjs';
import typescript from '../rules/typescript.mjs';

export default [
  {
    plugins: {
      '@typescript-eslint': typescriptPlugin,
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
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.mts'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: '<root>/tsconfig.json',
        },
      },
    },
    rules: {
      ...bestPractices,
      ...errors,
      ...style,
      ...typescript,
    },
  },
];
