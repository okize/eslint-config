import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';
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
    },
    rules: {
      ...nodeRules,
    },
  },
];
