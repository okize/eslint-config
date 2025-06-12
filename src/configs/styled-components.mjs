import styledComponentsA11yPlugin from 'eslint-plugin-styled-components-a11y';
import styledComponentsRules from '../rules/styled-components.mjs';

export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'styled-components-a11y': styledComponentsA11yPlugin,
    },
    rules: {
      ...styledComponentsRules,
    },
  },
];
