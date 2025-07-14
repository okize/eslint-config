import { fixupPluginRules } from '@eslint/compat';
import ssrFriendlyPlugin from 'eslint-plugin-ssr-friendly';
import reactHooksSSRPlugin from 'eslint-plugin-react-hooks-ssr';
import noTypeofWindowUndefinedPlugin from 'eslint-plugin-no-typeof-window-undefined';
import reactSSRCompatibilityRules from '../rules/react-ssr-compatibility.mjs';

export default [
  {
    plugins: {
      'ssr-friendly': fixupPluginRules(ssrFriendlyPlugin),
      'react-hooks-ssr': fixupPluginRules(reactHooksSSRPlugin),
      'no-typeof-window-undefined': fixupPluginRules(noTypeofWindowUndefinedPlugin),
    },
    rules: {
      ...reactSSRCompatibilityRules,
    },
  },
];
