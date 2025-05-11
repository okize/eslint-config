// only add react hooks rules
// see: https://react.dev/reference/rules/rules-of-hooks

export default {
  // Enforce Rules of Hooks
  // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/rules/RulesOfHooks.ts
  'react-hooks/rules-of-hooks': 'error',

  // Verify the list of the dependencies for Hooks like useEffect and similar
  // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/rules/ExhaustiveDeps.ts
  'react-hooks/exhaustive-deps': 'error',
};
