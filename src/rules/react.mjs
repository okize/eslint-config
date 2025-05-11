// only add react rules
// see: https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules

export default {
  // Specify whether double or single quotes should be used in JSX attributes
  // https://eslint.org/docs/rules/jsx-quotes
  'jsx-quotes': ['error', 'prefer-double'],

  // Enforce that class methods utilize this
  // https://eslint.org/docs/rules/class-methods-use-this
  'class-methods-use-this': [
    'error',
    {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'UNSAFE_componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'UNSAFE_componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'UNSAFE_componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'componentDidCatch',
        'getSnapshotBeforeUpdate',
      ],
    },
  ],

  // Prevent missing displayName in a React component definition
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
  'react/display-name': ['off', { ignoreTranspilerName: false }],

  // Forbid certain propTypes (any, array, object)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
  'react/forbid-prop-types': [
    'error',
    {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    },
  ],

  // Forbid certain props on DOM Nodes
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
  'react/forbid-dom-props': ['off', { forbid: [] }],

  // Enforce boolean attributes notation in JSX; enable for consistency
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  'react/jsx-boolean-value': ['error', 'always'],

  // Validate closing bracket location in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

  // Validate closing tag location in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
  'react/jsx-closing-tag-location': 'error',

  // Enforce or disallow spaces inside of curly braces in JSX attributes
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
  'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

  // Enforce event handler naming conventions in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
  'react/jsx-handler-names': [
    'error',
    {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
      checkLocalVariables: true,
      checkInlineFunction: false,
    },
  ],

  // Validate props indentation in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
  'react/jsx-indent-props': ['error', 2],

  // Validate JSX has key prop when in array or iterator
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
  'react/jsx-key': [
    'error',
    { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true },
  ],

  // Limit maximum of props on a single line in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
  'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

  // Prevent usage of .bind() in JSX props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
  'react/jsx-no-bind': [
    'error',
    {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    },
  ],

  // Prevent duplicate props in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

  // Prevent usage of unwrapped JSX strings
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
  'react/jsx-no-literals': ['off', { noStrings: true }],

  // Disallow undeclared variables in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
  'react/jsx-no-undef': 'error',

  // Enforce PascalCase for user-defined JSX components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
  'react/jsx-pascal-case': [
    'error',
    {
      allowAllCaps: true,
      ignore: [],
    },
  ],

  // Enforce propTypes declarations alphabetical sorting
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
  'react/sort-prop-types': [
    'error',
    {
      ignoreCase: true,
      callbacksLast: false,
      requiredFirst: false,
      sortShapeProp: true,
    },
  ],

  // Deprecated in favor of react/jsx-sort-props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md
  'react/jsx-sort-prop-types': 'off',

  // Enforce props alphabetical sorting
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
  'react/jsx-sort-props': [
    'error',
    {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    },
  ],

  // Prevent React to be incorrectly marked as unused
  // decision: no longer required with React 17 & babel `automatic` runtime
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
  'react/jsx-uses-react': 'off',

  // Prevent variables used in JSX to be incorrectly marked as unused
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
  'react/jsx-uses-vars': 'error',

  // Prevent usage of dangerous JSX properties
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
  'react/no-danger': 'error',

  // Prevent usage of deprecated methods
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
  'react/no-deprecated': 'error',

  // Prevent usage of setState in componentDidMount
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
  // this is necessary for server-rendering
  'react/no-did-mount-set-state': 'off',

  // Prevent usage of setState in componentDidUpdate
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
  'react/no-did-update-set-state': 'error',

  // Prevent usage of setState in componentWillUpdate
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
  'react/no-will-update-set-state': 'error',

  // Prevent direct mutation of this.state
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
  'react/no-direct-mutation-state': 'off',

  // Prevent usage of isMounted
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
  'react/no-is-mounted': 'error',

  // Prevent multiple component definition per file
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
  'react/no-multi-comp': 'off',

  // Prevent usage of setState
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
  'react/no-set-state': 'off',

  // Prevent using string references
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
  'react/no-string-refs': 'error',

  // Prevent usage of unknown DOM property
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
  'react/no-unknown-property': 'error',

  // Require ES6 class declarations over React.createClass
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
  'react/prefer-es6-class': ['error', 'always'],

  // Require stateless functions when not using lifecycle methods, setState or ref
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
  'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

  // Prevent missing props validation in a React component definition
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  'react/prop-types': [
    'error',
    {
      ignore: [],
      customValidators: [],
      skipUndeclared: false,
    },
  ],

  // Prevent missing React when using JSX
  // decision: no longer required with React 17 & babel `automatic` runtime
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
  'react/react-in-jsx-scope': 'off',
};
