// only add stylistic rules
// see: https://eslint.style/packages/default#rules

export default {
  // Enforce linebreaks after opening and before closing array brackets
  // https://eslint.style/rules/default/array-bracket-newline
  'array-bracket-newline': ['error', 'consistent'],

  // Enforce line breaks between array elements
  // https://eslint.style/rules/default/array-element-newline
  'array-element-newline': ['error', { multiline: true, minItems: 3 }],

  // Enforce spacing inside array brackets
  // https://eslint.style/rules/default/array-bracket-spacing
  'array-bracket-spacing': ['error', 'never'],

  // Require parens in arrow function arguments
  // https://eslint.style/rules/default/arrow-parens
  'arrow-parens': ['error', 'always'],

  // Require space before/after arrow function's arrow
  // https://eslint.style/rules/default/arrow-spacing
  'arrow-spacing': ['error', { before: true, after: true }],

  // Enforce spacing inside single-line blocks
  // https://eslint.style/rules/default/block-spacing
  'block-spacing': ['error', 'always'],

  // Enforce one true brace style
  // https://eslint.style/rules/default/brace-style
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],

  // Require trailing commas in multiline object literals
  // https://eslint.style/rules/default/comma-dangle
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    },
  ],

  // Enforce spacing before and after comma
  // https://eslint.style/rules/default/comma-spacing
  'comma-spacing': ['error', { before: false, after: true }],

  // Enforce one true comma style
  // https://eslint.style/rules/default/comma-style
  'comma-style': [
    'error',
    'last',
    {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    },
  ],

  // Disallow padding inside computed properties
  // https://eslint.style/rules/default/computed-property-spacing
  'computed-property-spacing': ['error', 'never'],

  // Enforces consistent newlines before or after dots
  // https://eslint.style/rules/default/dot-location
  'dot-location': ['error', 'property'],

  // Enforce newline at the end of file, with no multiple empty lines
  // https://eslint.style/rules/default/eol-last
  'eol-last': ['error', 'always'],

  // Enforce line breaks between arguments of a function call
  // https://eslint.style/rules/default/function-call-argument-newline
  'function-call-argument-newline': ['error', 'consistent'],

  // Enforce spacing between functions and their invocations
  // https://eslint.style/rules/default/func-call-spacing
  'func-call-spacing': ['error', 'never'],

  // Require line breaks inside function parentheses if there are line breaks between parameters
  // https://eslint.style/rules/default/function-paren-newline
  'function-paren-newline': ['error', 'multiline-arguments'],

  // Enforce the spacing around the * in generator functions
  // https://eslint.style/rules/default/generator-star-spacing
  'generator-star-spacing': ['error', { before: false, after: true }],

  // Enforce the location of arrow function bodies with implicit returns
  // https://eslint.style/rules/default/implicit-arrow-linebreak
  'implicit-arrow-linebreak': ['error', 'beside'],

  // This option sets a specific tab width for your code
  // https://eslint.style/rules/default/indent
  indent: [
    'error',
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: [
        'JSXElement',
        'JSXElement > *',
        'JSXAttribute',
        'JSXIdentifier',
        'JSXNamespacedName',
        'JSXMemberExpression',
        'JSXSpreadAttribute',
        'JSXExpressionContainer',
        'JSXOpeningElement',
        'JSXClosingElement',
        'JSXFragment',
        'JSXOpeningFragment',
        'JSXClosingFragment',
        'JSXText',
        'JSXEmptyExpression',
        'JSXSpreadChild',
      ],
      ignoreComments: false,
    },
  ],

  // Specify whether double or single quotes should be used in JSX attributes
  // https://eslint.style/rules/default/jsx-quotes
  'jsx-quotes': ['off', 'prefer-double'],

  // Enforces spacing between keys and values in object literal properties
  // https://eslint.style/rules/default/key-spacing
  'key-spacing': ['error', { beforeColon: false, afterColon: true }],

  // Require a space before & after certain keywords
  // https://eslint.style/rules/default/keyword-spacing
  'keyword-spacing': [
    'error',
    {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    },
  ],

  // Enforce position of line comments
  // https://eslint.style/rules/default/line-comment-position
  'line-comment-position': [
    'off',
    {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    },
  ],

  // Disallow mixed 'LF' and 'CRLF' as linebreaks
  // https://eslint.style/rules/default/linebreak-style
  'linebreak-style': ['error', 'unix'],

  // Require or disallow an empty line between class members
  // https://eslint.style/rules/default/lines-between-class-members
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

  // Enforces empty lines around comments
  // https://eslint.style/rules/default/lines-around-comment
  // decision: disabled because this is a prettier concern
  'lines-around-comment': 'off',

  // Require or disallow newlines around directives
  // https://eslint.style/rules/default/lines-around-directive
  'lines-around-directive': [
    'error',
    {
      before: 'always',
      after: 'always',
    },
  ],

  // Specify the maximum length of a line in your program
  // https://eslint.style/rules/default/max-len
  // decision: disabled because this is a prettier concern
  'max-len': 'off',

  // Restrict the number of statements per line
  // https://eslint.style/rules/default/max-statements-per-line
  'max-statements-per-line': ['off', { max: 1 }],

  // Enforce a particular style for multiline comments
  // https://eslint.style/rules/default/multiline-comment-style
  'multiline-comment-style': ['off', 'starred-block'],

  // Require multiline ternary
  // https://eslint.style/rules/default/multiline-ternary
  'multiline-ternary': ['off', 'never'],

  // Disallow the omission of parentheses when invoking a constructor with no arguments
  // https://eslint.style/rules/default/new-parens
  'new-parens': 'error',

  // Allow/disallow an empty newline after var statement
  // https://eslint.style/rules/default/newline-after-var
  'newline-after-var': 'off',

  // Require an empty line before return statements
  // https://eslint.style/rules/default/newline-before-return
  'newline-before-return': 'off',

  // Enforces new line after each method call in the chain to make it
  // more readable and easy to maintain
  // https://eslint.style/rules/default/newline-per-chained-call
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

  // Disallow arrow functions where they could be confused with comparisons
  // https://eslint.style/rules/default/no-confusing-arrow
  'no-confusing-arrow': [
    'error',
    {
      allowParens: true,
    },
  ],

  // Disallow unnecessary parentheses
  // https://eslint.style/rules/default/no-extra-parens
  'no-extra-parens': [
    'off',
    'all',
    {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    },
  ],

  // Disallow unnecessary semicolons
  // https://eslint.style/rules/default/no-extra-semi
  'no-extra-semi': 'error',

  // Disallow the use of leading or trailing decimal points in numeric literals
  // https://eslint.style/rules/default/no-floating-decimal
  'no-floating-decimal': 'error',

  // Disallow un-paren'd mixes of different operators
  // https://eslint.style/rules/default/no-mixed-operators
  'no-mixed-operators': [
    'error',
    {
      // the list of arithmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    },
  ],

  // Disallow mixed spaces and tabs for indentation
  // https://eslint.style/rules/default/no-mixed-spaces-and-tabs
  'no-mixed-spaces-and-tabs': 'error',

  // Disallow use of multiple spaces
  // https://eslint.style/rules/default/no-multi-spaces
  'no-multi-spaces': [
    'error',
    {
      ignoreEOLComments: false,
    },
  ],

  // Disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
  // https://eslint.style/rules/default/no-multiple-empty-lines
  'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

  // Disallow space between function identifier and application
  // https://eslint.style/rules/default/no-spaced-func
  'no-spaced-func': 'error',

  // Disallow tab characters entirely
  // https://eslint.style/rules/default/no-tabs
  'no-tabs': 'error',

  // Disallow trailing whitespace at the end of lines
  // https://eslint.style/rules/default/no-trailing-spaces
  'no-trailing-spaces': [
    'error',
    {
      skipBlankLines: false,
      ignoreComments: false,
    },
  ],

  // Disallow whitespace before properties
  // https://eslint.style/rules/default/no-whitespace-before-property
  'no-whitespace-before-property': 'error',

  // Enforce the location of single-line statements
  // https://eslint.style/rules/default/nonblock-statement-body-position
  'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

  // Enforce line breaks between braces
  // https://eslint.style/rules/default/object-curly-newline
  'object-curly-newline': [
    'error',
    {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    },
  ],

  // Require padding inside curly braces
  // https://eslint.style/rules/default/object-curly-spacing
  'object-curly-spacing': ['error', 'always'],

  // Enforce "same line" or "multiple line" on object properties
  // https://eslint.style/rules/default/object-property-newline
  'object-property-newline': [
    'error',
    {
      allowAllPropertiesOnSameLine: true,
    },
  ],

  // Require a newline around variable declaration
  // https://eslint.style/rules/default/one-var-declaration-per-line
  'one-var-declaration-per-line': ['error', 'always'],

  // Requires operator at the beginning of the line in multiline statements
  // https://eslint.style/rules/default/operator-linebreak
  'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

  // Disallow padding within blocks
  // https://eslint.style/rules/default/padded-blocks
  'padded-blocks': [
    'error',
    {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    },
    {
      allowSingleLineBlocks: true,
    },
  ],

  // Require or disallow padding lines between statements
  // https://eslint.style/rules/default/padding-line-between-statements
  'padding-line-between-statements': 'off',

  // Require quotes around object literal property names
  // https://eslint.style/rules/default/quote-props
  'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

  // Specify whether double or single quotes should be used
  // https://eslint.style/rules/default/quotes
  quotes: ['error', 'single', { avoidEscape: true }],

  // Enforce spacing between object rest-spread
  // https://eslint.style/rules/default/rest-spread-spacing
  'rest-spread-spacing': ['error', 'never'],

  // Require or disallow use of semicolons instead of ASI
  // https://eslint.style/rules/default/semi
  semi: ['error', 'always'],

  // Enforce spacing before and after semicolons
  // https://eslint.style/rules/default/semi-spacing
  'semi-spacing': ['error', { before: false, after: true }],

  // Enforce location of semicolons
  // https://eslint.style/rules/default/semi-style
  'semi-style': ['error', 'last'],

  // Require or disallow space before blocks
  // https://eslint.style/rules/default/space-before-blocks
  'space-before-blocks': 'error',

  // Require or disallow space before function opening parenthesis
  // https://eslint.style/rules/default/space-before-function-paren
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],

  // Require or disallow spaces inside parentheses
  // https://eslint.style/rules/default/space-in-parens
  'space-in-parens': ['error', 'never'],

  // Require spaces around operators
  // https://eslint.style/rules/default/space-infix-ops
  'space-infix-ops': 'error',

  // Require or disallow spaces before/after unary operators
  // https://eslint.style/rules/default/space-unary-ops
  'space-unary-ops': [
    'error',
    {
      words: true,
      nonwords: false,
      overrides: {},
    },
  ],

  // Require or disallow a space immediately following the // or /* in a comment
  // https://eslint.style/rules/default/spaced-comment
  'spaced-comment': [
    'error',
    'always',
    {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
        balanced: true,
      },
    },
  ],

  // Enforce spacing around colons of switch statements
  // https://eslint.style/rules/default/switch-colon-spacing
  'switch-colon-spacing': ['error', { after: true, before: false }],

  // Enforce usage of spacing in template strings
  // https://eslint.style/rules/default/template-curly-spacing
  'template-curly-spacing': 'error',

  // Require or disallow spacing between template tags and their literals
  // https://eslint.style/rules/default/template-tag-spacing
  'template-tag-spacing': ['error', 'never'],

  // Require immediate function invocation to be wrapped in parentheses
  // https://eslint.style/rules/default/wrap-iife
  'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

  // Require regex literals to be wrapped in parentheses
  // https://eslint.style/rules/default/wrap-regex
  'wrap-regex': 'off',

  // Enforce spacing around the * in yield* expressions
  // https://eslint.style/rules/default/yield-star-spacing
  'yield-star-spacing': ['error', 'after'],

  // Enforce consistent line breaks after opening and before closing braces
  // https://eslint.style/rules/default/curly-newline
  'curly-newline': 'off',

  // Indentation for binary operators
  // https://eslint.style/rules/default/indent-binary-ops
  'indent-binary-ops': 'off',

  // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  // https://eslint.style/rules/default/jsx-child-element-spacing
  'jsx-child-element-spacing': 'off',

  // Enforce closing bracket location in JSX
  // https://eslint.style/rules/default/jsx-closing-bracket-location
  'jsx-closing-bracket-location': 'off',

  // Enforce closing tag location for multiline JSX
  // https://eslint.style/rules/default/jsx-closing-tag-location
  'jsx-closing-tag-location': 'off',

  // Disallow unnecessary JSX expressions when literals alone are sufficient
  // https://eslint.style/rules/default/jsx-curly-brace-presence
  'jsx-curly-brace-presence': 'off',

  // Enforce consistent linebreaks in curly braces in JSX attributes and expressions
  // https://eslint.style/rules/default/jsx-curly-newline
  'jsx-curly-newline': 'off',

  // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  // https://eslint.style/rules/default/jsx-curly-spacing
  'jsx-curly-spacing': 'off',

  // Enforce or disallow spaces around equal signs in JSX attributes
  // https://eslint.style/rules/default/jsx-equals-spacing
  'jsx-equals-spacing': 'off',

  // Enforce proper position of the first property in JSX
  // https://eslint.style/rules/default/jsx-first-prop-new-line
  'jsx-first-prop-new-line': 'off',

  // Enforce line breaks before and after JSX elements when they are used as arguments
  // https://eslint.style/rules/default/jsx-function-call-newline
  'jsx-function-call-newline': 'off',

  // Enforce JSX indentation
  // https://eslint.style/rules/default/jsx-indent
  'jsx-indent': 'off',

  // Enforce props indentation in JSX
  // https://eslint.style/rules/default/jsx-indent-props
  'jsx-indent-props': 'off',

  // Enforce maximum of props on a single line in JSX
  // https://eslint.style/rules/default/jsx-max-props-per-line
  'jsx-max-props-per-line': 'off',

  // Require or prevent a new line after jsx elements and expressions
  // https://eslint.style/rules/default/jsx-newline
  'jsx-newline': 'off',

  // Require one JSX element per line
  // https://eslint.style/rules/default/jsx-one-expression-per-line
  'jsx-one-expression-per-line': 'off',

  // Enforce PascalCase for user-defined JSX components
  // https://eslint.style/rules/default/jsx-pascal-case
  'jsx-pascal-case': 'off',

  // Disallow multiple spaces between inline JSX props
  // https://eslint.style/rules/default/jsx-props-no-multi-spaces
  'jsx-props-no-multi-spaces': 'off',

  // Disallow extra closing tags for components without children
  // https://eslint.style/rules/default/jsx-self-closing-comp
  'jsx-self-closing-comp': 'off',

  // Enforce props alphabetical sorting
  // https://eslint.style/rules/default/jsx-sort-props
  'jsx-sort-props': 'off',

  // Enforce whitespace in and around the JSX opening and closing brackets
  // https://eslint.style/rules/default/jsx-tag-spacing
  'jsx-tag-spacing': 'off',

  // Disallow missing parentheses around multiline JSX
  // https://eslint.style/rules/default/jsx-wrap-multilines
  'jsx-wrap-multilines': 'off',

  // Require a specific member delimiter style for interfaces and type literals
  // https://eslint.style/rules/default/member-delimiter-style
  'member-delimiter-style': 'off',

  // Require consistent spacing around type annotations
  // https://eslint.style/rules/default/type-annotation-spacing
  'type-annotation-spacing': 'off',

  // Enforce consistent spacing inside TypeScript type generics
  // https://eslint.style/rules/default/type-generic-spacing
  'type-generic-spacing': 'off',

  // Expect space before the type declaration in the named tuple
  // https://eslint.style/rules/default/type-named-tuple-spacing
  'type-named-tuple-spacing': 'off',
};
