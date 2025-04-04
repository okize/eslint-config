// only add react rules
// see: https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules

export default {
  // Enforce that class methods utilize this
  // https://eslint.org/docs/rules/class-methods-use-this
  'class-methods-use-this': [
    'error',
    {
      exceptMethods: [
        'UNSAFE_componentWillMount',
        'UNSAFE_componentWillReceiveProps',
        'UNSAFE_componentWillUpdate',
        'componentDidCatch',
        'componentDidMount',
        'componentDidUpdate',
        'componentWillMount',
        'componentWillReceiveProps',
        'componentWillUnmount',
        'componentWillUpdate',
        'getChildContext',
        'getDefaultProps',
        'getInitialState',
        'getSnapshotBeforeUpdate',
        'render',
        'shouldComponentUpdate',
      ],
    },
  ],

  // Surfaces problematic React code found by the React compiler
  'react-compiler/react-compiler': 'error',

  // Prevent missing displayName in a React component definition
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
  'react/display-name': ['off', { ignoreTranspilerName: false }],

  // Forbid certain propTypes (any, array, object)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
  // decision: prop-types are deprecated in favor of TypeScript types
  'react/forbid-prop-types': 'off',

  // Forbid certain props on DOM Nodes
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
  'react/forbid-dom-props': ['off', { forbid: [] }],

  // Enforce boolean attributes notation in JSX; enable for consistency
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  'react/jsx-boolean-value': ['error', 'always'],

  // Validate closing bracket location in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
  // decision: disabled because this is a formatter concern
  'react/jsx-closing-bracket-location': 'off',

  // Validate closing tag location in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
  // decision: disabled because this is a formatter concern
  'react/jsx-closing-tag-location': 'off',

  // Enforce or disallow spaces inside of curly braces in JSX attributes
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
  // decision: disabled because this is a formatter concern
  'react/jsx-curly-spacing': 'off',

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
  // decision: disabled because this is a formatter concern
  'react/jsx-indent-props': 'off',

  // Validate JSX has key prop when in array or iterator
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
  'react/jsx-key': [
    'error',
    { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true },
  ],

  // Limit maximum of props on a single line in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
  // decision: disabled because this is a formatter concern
  'react/jsx-max-props-per-line': 'off',

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
  // decision: prop-types are deprecated in favor of TypeScript types
  'react/sort-prop-types': 'off',

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
  'react/no-did-mount-set-state': 'error',

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
  // decision: prop-types are deprecated in favor of TypeScript types
  'react/prop-types': 'off',

  // Prevent missing React when using JSX
  // decision: no longer required with React 17 & babel `automatic` runtime
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
  'react/react-in-jsx-scope': 'off',

  // Require render() methods to return something
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
  'react/require-render-return': 'error',

  // Prevent extra closing tags for components without children
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
  'react/self-closing-comp': 'error',

  // Enforce component methods order
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
  'react/sort-comp': [
    'error',
    {
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^handle.+$/',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
        ],
        rendering: ['/^render.+$/', 'render'],
      },
    },
  ],

  // Enforce defaultProps declarations alphabetical sorting
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md
  'react/sort-default-props': [
    'error',
    {
      ignoreCase: true,
    },
  ],

  // Prevent missing parentheses around multilines JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
  // decision: disabled because this is a formatter concern
  'react/jsx-wrap-multilines': 'off',

  // Require that the first prop in a JSX element be on a new line when the element is multiline
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
  // decision: disabled because this is a formatter concern
  'react/jsx-first-prop-new-line': 'off',

  // Enforce spacing around jsx equals signs
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
  // decision: disabled because this is a formatter concern
  'react/jsx-equals-spacing': 'off',

  // Enforce JSX indentation
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
  // decision: disabled because this is a formatter concern
  'react/jsx-indent': 'off',

  // Disallow target="_blank" on links
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
  'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

  // only .jsx & .tsx files may have JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  // decision: include typescript extensions to allow interop
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

  // prevent accidental JS comments from being injected into JSX as text
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
  'react/jsx-no-comment-textnodes': 'error',

  // disallow using React.render/ReactDOM.render's return value
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
  'react/no-render-return-value': 'error',

  // require a shouldComponentUpdate method, or PureRenderMixin
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
  'react/require-optimization': ['off', { allowDecorators: [] }],

  // warn against using findDOMNode()
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
  'react/no-find-dom-node': 'error',

  // Forbid certain props on Components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
  'react/forbid-component-props': ['off', { forbid: [] }],

  // Forbid certain elements
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
  'react/forbid-elements': ['off', { forbid: [] }],

  // Prevent problem with children and props.dangerouslySetInnerHTML
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
  'react/no-danger-with-children': 'error',

  // Prevent unused propType definitions
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
  // decision: prop-types are deprecated in favor of TypeScript types
  'react/no-unused-prop-types': 'off',

  // Require style prop value be an object or var
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
  'react/style-prop-object': 'error',

  // Prevent invalid characters from appearing in markup
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
  'react/no-unescaped-entities': 'error',

  // Prevent passing of children as props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
  'react/no-children-prop': 'error',

  // Validate whitespace in and around the JSX opening and closing brackets
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
  // decision: disabled because this is a formatter concern
  'react/jsx-tag-spacing': 'off',

  // Enforce spaces before the closing bracket of self-closing JSX elements
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
  // decision: disabled because this is a formatter concern
  'react/jsx-space-before-closing': 'off',

  // Prevent usage of Array index in keys
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
  'react/no-array-index-key': 'error',

  // Enforce a defaultProps definition for every prop that is not a required prop
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
  // decision: default prop types shouldn't be necessary for optional parameters as they can just default to undefined
  'react/require-default-props': 'off',

  // Forbids using non-exported propTypes
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
  // decision: prop-types are deprecated in favor of TypeScript types
  'react/forbid-foreign-prop-types': 'off',

  // Prevent void DOM elements from receiving children
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
  'react/void-dom-elements-no-children': 'error',

  // Enforce all defaultProps have a corresponding non-required PropType
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
  // decision: prop-types are deprecated in favor of TypeScript types
  'react/default-props-match-prop-types': 'off',

  // Prevent usage of shouldComponentUpdate when extending React.PureComponent
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
  'react/no-redundant-should-component-update': 'error',

  // Prevent unused state values
  // https://github.com/jsx-eslint/eslint-plugin-react/pull/1103/
  'react/no-unused-state': 'error',

  // Enforces consistent naming for boolean props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
  'react/boolean-prop-naming': [
    'off',
    {
      propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      message: '',
    },
  ],

  // Prevents common casing typos
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
  'react/no-typos': 'error',

  // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
  'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

  // One JSX Element Per Line
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
  // decision: disabled because this is a formatter concern
  'react/jsx-one-expression-per-line': 'off',

  // Enforce consistent usage of destructuring assignment of props, state, and context
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
  // decision: it's acceptable to mix these even at the expense of consistency
  'react/destructuring-assignment': ['off', 'always'],

  // Prevent using this.state within a this.setState
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
  'react/no-access-state-in-setstate': 'error',

  // Prevent usage of button elements without an explicit type attribute
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
  'react/button-has-type': [
    'error',
    {
      button: true,
      submit: true,
      reset: false,
    },
  ],

  // Ensures inline tags are not rendered without spaces between them
  'react/jsx-child-element-spacing': 'off',

  // Prevent this from being used in stateless functional components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
  'react/no-this-in-sfc': 'error',

  // Validate JSX maximum depth
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
  'react/jsx-max-depth': 'off',

  // Disallow multiple spaces between inline JSX props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
  'react/jsx-props-no-multi-spaces': 'off',

  // Prevent usage of UNSAFE_ methods
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
  'react/no-unsafe': 'off',

  // Enforce shorthand or standard form for React fragments
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
  'react/jsx-fragments': ['error', 'syntax'],

  // Enforce linebreaks in curly braces in JSX attributes and expressions.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
  // decision: disabled because this is a formatter concern
  'react/jsx-curly-newline': 'off',

  // Enforce state initialization style
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
  'react/state-in-constructor': ['error', 'never'],

  // Enforces where React component static properties should be positioned
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
  'react/static-property-placement': ['error', 'static public field'],

  // Disallow JSX props spreading
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
  // decision: because we have type safety in TypeScript, this rule isn't necessary as we will see
  // TS errors for prop spreading against mismatched (prop)type declarations
  'react/jsx-props-no-spreading': 'off',

  // Enforce that props are read-only
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
  'react/prefer-read-only-props': 'off',

  // Prevent usage of `javascript:` URLs
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
  'react/jsx-no-script-url': [
    'error',
    [
      {
        name: 'Link',
        props: ['to'],
      },
    ],
  ],

  // Disallow unnecessary fragments
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
  'react/jsx-no-useless-fragment': 'error',

  // Prevent adjacent inline elements not separated by whitespace
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
  'react/no-adjacent-inline-elements': 'error',

  // Enforce a specific function type for function components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],

  // Enforce a new line after jsx elements and expressions
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
  // decision: disabled because this is a formatter concern
  'react/jsx-newline': 'off',

  // Prevent react contexts from taking non-stable values
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  'react/jsx-no-constructed-context-values': 'error',

  // Prevent creating unstable components inside components
  // decision: adjusted to allow for render props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
  'react/no-unstable-nested-components': ['error', { allowAsProps: true }],

  // Enforce that namespaces are not used in React elements
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
  'react/no-namespace': 'error',

  // Prefer exact proptype definitions
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
  'react/prefer-exact-props': 'error',

  // Lifecycle methods should be methods on the prototype, not class fields
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
  'react/no-arrow-function-lifecycle': 'error',

  // Prevent usage of invalid attributes
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
  'react/no-invalid-html-attribute': 'error',

  // Prevent declaring unused methods of component class
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
  'react/no-unused-class-component-methods': 'error',

  // Ensure destructuring and symmetric naming of useState hook value and setter variables
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
  'react/hook-use-state': 'error',

  // Enforce sandbox attribute on iframe elements
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
  'react/iframe-missing-sandbox': 'error',

  // Prevent problematic leaked values from being rendered
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
  'react/jsx-no-leaked-render': 'error',

  // Enforce using `onChange` or `readonly` attribute when `checked` is used
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md
  'react/checked-requires-onchange-or-readonly': 'error',

  // Disallow usage of referential-type variables as default param in functional component
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
  // decision: there's an edge case issue this could prevent but it's not common enough to warrant the rule
  'react/no-object-type-as-default-prop': 'off',

  // This rule is deprecated. It was replaced by `react/sort-default-props`
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
  'react/jsx-sort-default-props': 'off',

  // Require all forwardRef components include a ref parameter
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forward-ref-uses-ref.md
  'react/forward-ref-uses-ref': 'error',

  // Disallow JSX prop spreading the same identifier multiple times
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
  'react/jsx-props-no-spread-multi': 'error',
};
