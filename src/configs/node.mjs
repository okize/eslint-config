import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';
import importPlugin from 'eslint-plugin-import';
import nodeRules from '../rules/node.mjs';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      n: nodePlugin,
      import: importPlugin,
    },
    rules: {
      ...nodeRules,
    },
  },
];
