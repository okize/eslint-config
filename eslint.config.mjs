import babelParser from '@babel/eslint-parser';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

const config = [
  {
    ignores: ['.changeset/**', '.github/**', '.husky/**', '.yarn/**'],
  },
  {
    files: ['**/*.{mjs}'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2024,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
      globals: {
        ...globals.node,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
      noInlineConfig: false,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];

export default config;
