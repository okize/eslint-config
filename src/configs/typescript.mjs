import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import { fixupPluginRules } from '@eslint/compat';
import stylisticPlugin from '@stylistic/eslint-plugin';
import promisePlugin from 'eslint-plugin-promise';
import filenamesPlugin from 'eslint-plugin-filenames';
import importPlugin from 'eslint-plugin-import';
import baseRules from '../rules/base.mjs';
import stylisticRules from '../rules/stylistic.mjs';
import promiseRules from '../rules/promise.mjs';
import filenameRules from '../rules/filenames.mjs';
import importRules from '../rules/import.mjs';
import typescriptRules from '../rules/typescript.mjs';

export default [
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
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
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      '@stylistic': stylisticPlugin,
      filenames: fixupPluginRules(filenamesPlugin),
      import: importPlugin,
      promise: promisePlugin,
    },
    settings: {
      'import/extensions': ['.ts', '.cts', '.mts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'],

      'import/external-module-folders': ['node_modules', 'node_modules/@types'],

      'import/parsers': {
        // omit `.d.ts` because
        //   1) TypeScript compilation already confirms that types are resolved, and
        //   2) it would mask an unresolved `.ts`/`.tsx`/`.js`/`.jsx` implementation.
        '@typescript-eslint/parser': ['.ts', '.cts', '.mts', '.tsx'],
      },

      'import/resolver': {
        typescript: {
          node: {
            extensions: ['.ts', '.cts', '.mts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'],
          },

          // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/lodash`
          alwaysTryTypes: true,

          // use <root>/path/to/folder/tsconfig.json
          project: '<root>/tsconfig.json',
        },
      },
    },
    rules: {
      ...baseRules,
      ...stylisticRules,
      ...filenameRules,
      ...importRules,
      ...promiseRules,
      ...typescriptRules,

      'import/named': 'off', // conflicts with TS's type system
      'import/no-unused-modules': 'off', // false positives
    },
  },
];
