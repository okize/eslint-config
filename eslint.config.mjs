import babelParser from '@babel/eslint-parser';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
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
      reportUnusedDisableDirectives: 'warn',
      noInlineConfig: false,
    },
  },
  // enables prettier & disables any prior rules that conflict with prettier
  prettierPluginRecommended,
];

export default config;
