// only add react hooks rules
// see: https://react.dev/reference/rules/rules-of-hooks

export default {
  // Enforce Rules of Hooks
  // https://react.dev/reference/eslint-plugin-react-hooks#rules-of-hooks
  'react-hooks/rules-of-hooks': 'error',

  // Verify the list of the dependencies for Hooks like useEffect and similar
  // https://react.dev/reference/eslint-plugin-react-hooks#exhaustive-deps
  'react-hooks/exhaustive-deps': 'error',

  // Validates the compiler configuration options
  // https://react.dev/reference/eslint-plugin-react-hooks#config
  'react-hooks/config': 'off',

  // Validates higher order functions defining nested components or hooks
  // https://react.dev/reference/eslint-plugin-react-hooks#component-hook-factories
  'react-hooks/component-hook-factories': 'error',

  // Validates usage of Error Boundaries instead of try/catch for child errors
  // https://react.dev/reference/eslint-plugin-react-hooks#error-boundaries
  'react-hooks/error-boundaries': 'error',

  // Validates configuration of gating mode
  // https://react.dev/reference/eslint-plugin-react-hooks#gating
  'react-hooks/gating': 'off',

  // Validates against assignment/mutation of globals during render
  // https://react.dev/reference/eslint-plugin-react-hooks#globals
  'react-hooks/globals': 'error',

  // Validates against mutating props, state, and other immutable values
  // https://react.dev/reference/eslint-plugin-react-hooks#immutability
  'react-hooks/immutability': 'error',

  // Validates against usage of libraries which are incompatible with memoization
  // https://react.dev/reference/eslint-plugin-react-hooks#incompatible-library
  'react-hooks/incompatible-library': 'error',

  // Validates that existing manual memoization is preserved by the compiler
  // https://react.dev/reference/eslint-plugin-react-hooks#preserve-manual-memoization
  'react-hooks/preserve-manual-memoization': 'error',

  // Validates that components/hooks are pure by checking known-impure functions
  // https://react.dev/reference/eslint-plugin-react-hooks#purity
  'react-hooks/purity': 'error',

  // Validates correct usage of refs, not reading/writing during render
  // https://react.dev/reference/eslint-plugin-react-hooks#refs
  'react-hooks/refs': 'error',

  // Validates against calling setState synchronously in an effect
  // https://react.dev/reference/eslint-plugin-react-hooks#set-state-in-effect
  'react-hooks/set-state-in-effect': 'error',

  // Validates against setting state during render
  // https://react.dev/reference/eslint-plugin-react-hooks#set-state-in-render
  'react-hooks/set-state-in-render': 'error',

  // Validates that components are static, not recreated every render
  // https://react.dev/reference/eslint-plugin-react-hooks#static-components
  'react-hooks/static-components': 'error',

  // Validates against syntax that React Compiler does not support
  // https://react.dev/reference/eslint-plugin-react-hooks#unsupported-syntax
  'react-hooks/unsupported-syntax': 'error',

  // Validates usage of the useMemo hook without a return value
  // https://react.dev/reference/eslint-plugin-react-hooks#use-memo
  'react-hooks/use-memo': 'error',
};
