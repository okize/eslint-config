import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRules from '../rules/react.mjs';
import reactA11yRules from '../rules/react-a11y.mjs';
import reactHooksRules from '../rules/react-hooks.mjs';

export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: reactPlugin,
      'jsx-a11y': jsxA11yPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactRules,
      ...reactA11yRules,
      ...reactHooksRules,
    },
  },
];
