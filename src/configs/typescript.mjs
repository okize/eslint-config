import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import baseRules from '../rules/base.mjs';
import stylisticRules from '../rules/stylistic.mjs';
import typescriptRules from '../rules/typescript.mjs';

export default [
  {
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
    },
    rules: {
      ...baseRules,
      ...stylisticRules,
      ...typescriptRules,
    },
  },
];
