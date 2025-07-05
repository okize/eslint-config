import ssrFriendlyPlugin from 'eslint-plugin-ssr-friendly';
import reactHooksSSRPlugin from 'eslint-plugin-react-hooks-ssr';
import noTypeofWindowUndefinedPlugin from 'eslint-plugin-no-typeof-window-undefined';
import reactSSRCompatibilityRules from '../rules/react-ssr-compatibility.mjs';

export default [
  {
    plugins: {
      'ssr-friendly': ssrFriendlyPlugin,
      'react-hooks-ssr': reactHooksSSRPlugin,
      'no-typeof-window-undefined': noTypeofWindowUndefinedPlugin,
    },
    rules: {
      ...reactSSRCompatibilityRules,
    },
  },
];
