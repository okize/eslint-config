export default {
  // plugins are now imported and used at the config level

  // enforces getter/setter pairs in objects
  // https://eslint.org/docs/rules/accessor-pairs
  'accessor-pairs': 'off',

  // enforces return statements in callbacks of array's methods
  // https://eslint.org/docs/rules/array-callback-return
  'array-callback-return': ['error', { allowImplicit: true }],

  // treat var statements as if they were block scoped
  // https://eslint.org/docs/rules/block-scoped-var
  'block-scoped-var': 'error',

  // specify the maximum cyclomatic complexity allowed in a program
  // https://eslint.org/docs/rules/complexity
  complexity: ['off', 20],

  // enforce that class methods use "this"
  // https://eslint.org/docs/rules/class-methods-use-this
  'class-methods-use-this': [
    'off',
    {
      exceptMethods: [],
    },
  ],

  // require return statements to either always or never specify values
  // https://eslint.org/docs/rules/consistent-return
  'consistent-return': 'error',

  // specify curly brace conventions for all control statements
  // https://eslint.org/docs/rules/curly
  curly: ['error', 'multi-line'], // multiline

  // require default case in switch statements
  // https://eslint.org/docs/rules/default-case
  'default-case': ['error', { commentPattern: '^no default$' }],

  // Enforce default clauses in switch statements to be last
  // https://eslint.org/docs/rules/default-case-last
  'default-case-last': 'error',

  // https://eslint.org/docs/rules/default-param-last
  'default-param-last': 'error',

  // encourages use of dot notation whenever possible
  // https://eslint.org/docs/rules/dot-notation
  'dot-notation': ['error', { allowKeywords: true }],

  // enforces consistent newlines before or after dots
  // https://eslint.org/docs/rules/dot-location
  'dot-location': ['error', 'property'],

  // require the use of === and !==
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ['error', 'always', { null: 'ignore' }],

  // Require grouped accessor pairs in object literals and classes
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': 'error',

  // make sure for-in loops have an if statement
  // https://eslint.org/docs/rules/guard-for-in
  'guard-for-in': 'error',

  // enforce a maximum number of classes per file
  // https://eslint.org/docs/rules/max-classes-per-file
  'max-classes-per-file': ['error', 1],

  // disallow the use of alert, confirm, and prompt
  // https://eslint.org/docs/rules/no-alert
  'no-alert': 'warn',

  // disallow use of arguments.caller or arguments.callee
  // https://eslint.org/docs/rules/no-caller
  'no-caller': 'error',

  // disallow lexical declarations in case/default clauses
  // https://eslint.org/docs/rules/no-case-declarations
  'no-case-declarations': 'error',

  // Disallow returning value in constructor
  // https://eslint.org/docs/rules/no-constructor-return
  'no-constructor-return': 'error',

  // disallow division operators explicitly at beginning of regular expression
  // https://eslint.org/docs/rules/no-div-regex
  'no-div-regex': 'off',

  // disallow else after a return in an if
  // https://eslint.org/docs/rules/no-else-return
  'no-else-return': ['error', { allowElseIf: false }],

  // disallow empty functions, except for standalone funcs/arrows
  // https://eslint.org/docs/rules/no-empty-function
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],

  // disallow empty destructuring patterns
  // https://eslint.org/docs/rules/no-empty-pattern
  'no-empty-pattern': 'error',

  // disallow comparisons to null without a type-checking operator
  // https://eslint.org/docs/rules/no-eq-null
  'no-eq-null': 'off',

  // disallow use of eval()
  // https://eslint.org/docs/rules/no-eval
  'no-eval': 'error',

  // disallow adding to native types
  // https://eslint.org/docs/rules/no-extend-native
  'no-extend-native': 'error',

  // disallow unnecessary function binding
  // https://eslint.org/docs/rules/no-extra-bind
  'no-extra-bind': 'error',

  // disallow Unnecessary Labels
  // https://eslint.org/docs/rules/no-extra-label
  'no-extra-label': 'error',

  // disallow fallthrough of case statements
  // https://eslint.org/docs/rules/no-fallthrough
  'no-fallthrough': 'error',

  // disallow the use of leading or trailing decimal points in numeric literals
  // https://eslint.org/docs/rules/no-floating-decimal
  'no-floating-decimal': 'error',

  // disallow reassignments of native objects or read-only globals
  // https://eslint.org/docs/rules/no-global-assign
  'no-global-assign': ['error', { exceptions: [] }],

  // deprecated in favor of no-global-assign
  // https://eslint.org/docs/rules/no-native-reassign
  'no-native-reassign': 'off',

  // disallow implicit type conversions
  // https://eslint.org/docs/rules/no-implicit-coercion
  'no-implicit-coercion': [
    'off',
    {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    },
  ],

  // disallow var and named functions in global scope
  // https://eslint.org/docs/rules/no-implicit-globals
  'no-implicit-globals': 'off',

  // disallow use of eval()-like methods
  // https://eslint.org/docs/rules/no-implied-eval
  'no-implied-eval': 'error',

  // disallow this keywords outside of classes or class-like objects
  // https://eslint.org/docs/rules/no-invalid-this
  'no-invalid-this': 'off',

  // disallow usage of __iterator__ property
  // https://eslint.org/docs/rules/no-iterator
  'no-iterator': 'error',

  // disallow use of labels for anything other than loops and switches
  // https://eslint.org/docs/rules/no-labels
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

  // disallow unnecessary nested blocks
  // https://eslint.org/docs/rules/no-lone-blocks
  'no-lone-blocks': 'error',

  // disallow creation of functions within loops
  // https://eslint.org/docs/rules/no-loop-func
  'no-loop-func': 'error',

  // disallow magic numbers
  // https://eslint.org/docs/rules/no-magic-numbers
  'no-magic-numbers': [
    'off',
    {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    },
  ],

  // disallow use of multiple spaces
  // https://eslint.org/docs/rules/no-multi-spaces
  'no-multi-spaces': [
    'error',
    {
      ignoreEOLComments: false,
    },
  ],

  // disallow use of multiline strings
  // https://eslint.org/docs/rules/no-multi-str
  'no-multi-str': 'error',

  // disallow use of new operator when not part of the assignment or comparison
  // https://eslint.org/docs/rules/no-new
  'no-new': 'error',

  // disallow use of new operator for Function object
  // https://eslint.org/docs/rules/no-new-func
  'no-new-func': 'error',

  // disallows creating new instances of String, Number, and Boolean
  // https://eslint.org/docs/rules/no-new-wrappers
  'no-new-wrappers': 'error',

  // Disallow \8 and \9 escape sequences in string literals
  // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
  'no-nonoctal-decimal-escape': 'error',

  // disallow use of (old style) octal literals
  // https://eslint.org/docs/rules/no-octal
  'no-octal': 'error',

  // disallow use of octal escape sequences in string literals, such as
  // var foo = 'Copyright \251';
  // https://eslint.org/docs/rules/no-octal-escape
  'no-octal-escape': 'error',

  // disallow reassignment of function parameters
  // disallow parameter object manipulation except for specific exclusions
  // rule: https://eslint.org/docs/rules/no-param-reassign.html
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'context', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'staticContext', // for ReactRouter context
      ],
    },
  ],

  // disallow usage of __proto__ property
  // https://eslint.org/docs/rules/no-proto
  'no-proto': 'error',

  // disallow declaring the same variable more than once
  // https://eslint.org/docs/rules/no-redeclare
  'no-redeclare': 'error',

  // disallow certain object properties
  // https://eslint.org/docs/rules/no-restricted-properties
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ],

  // disallow use of assignment in return statement
  // https://eslint.org/docs/rules/no-return-assign
  'no-return-assign': ['error', 'always'],

  // disallow redundant `return await`
  // https://eslint.org/docs/rules/no-return-await
  'no-return-await': 'error',

  // disallow use of `javascript:` urls.
  // https://eslint.org/docs/rules/no-script-url
  'no-script-url': 'error',

  // disallow self assignment
  // https://eslint.org/docs/rules/no-self-assign
  'no-self-assign': [
    'error',
    {
      props: true,
    },
  ],

  // disallow comparisons where both sides are exactly the same
  // https://eslint.org/docs/rules/no-self-compare
  'no-self-compare': 'error',

  // disallow use of comma operator
  // https://eslint.org/docs/rules/no-sequences
  'no-sequences': 'error',

  // restrict what can be thrown as an exception
  // https://eslint.org/docs/rules/no-throw-literal
  'no-throw-literal': 'error',

  // disallow unmodified conditions of loops
  // https://eslint.org/docs/rules/no-unmodified-loop-condition
  'no-unmodified-loop-condition': 'off',

  // disallow usage of expressions in statement position
  // https://eslint.org/docs/rules/no-unused-expressions
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],

  // disallow unused labels
  // https://eslint.org/docs/rules/no-unused-labels
  'no-unused-labels': 'error',

  // disallow unnecessary .call() and .apply()
  // https://eslint.org/docs/rules/no-useless-call
  'no-useless-call': 'off',

  // Disallow unnecessary catch clauses
  // https://eslint.org/docs/rules/no-useless-catch
  'no-useless-catch': 'error',

  // disallow useless string concatenation
  // https://eslint.org/docs/rules/no-useless-concat
  'no-useless-concat': 'error',

  // disallow unnecessary string escaping
  // https://eslint.org/docs/rules/no-useless-escape
  'no-useless-escape': 'error',

  // disallow redundant return; keywords
  // https://eslint.org/docs/rules/no-useless-return
  'no-useless-return': 'error',

  // disallow use of void operator
  // https://eslint.org/docs/rules/no-void
  'no-void': 'error',

  // disallow usage of configurable warning terms in comments: e.g. todo
  // https://eslint.org/docs/rules/no-warning-comments
  'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

  // disallow use of the with statement
  // https://eslint.org/docs/rules/no-with
  'no-with': 'error',

  // require using Error objects as Promise rejection reasons
  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

  // Suggest using named capture group in regular expression
  // https://eslint.org/docs/rules/prefer-named-capture-group
  'prefer-named-capture-group': 'off',

  // https://eslint.org/docs/rules/prefer-regex-literals
  'prefer-regex-literals': [
    'error',
    {
      disallowRedundantWrapping: true,
    },
  ],

  // require use of the second argument for parseInt()
  // https://eslint.org/docs/rules/radix
  radix: 'error',

  // require `await` in `async function` (note: this is a horrible rule that should never be used)
  // https://eslint.org/docs/rules/require-await
  'require-await': 'off',

  // Enforce the use of u flag on RegExp
  // https://eslint.org/docs/rules/require-unicode-regexp
  'require-unicode-regexp': 'off',

  // requires to declare all vars on top of their containing scope
  // https://eslint.org/docs/rules/vars-on-top
  'vars-on-top': 'error',

  // require immediate function invocation to be wrapped in parentheses
  // https://eslint.org/docs/rules/wrap-iife.html
  'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

  // require or disallow Yoda conditions
  // https://eslint.org/docs/rules/yoda
  yoda: 'error',

  // Enforce "for" loop update clause moving the counter in the right direction
  // https://eslint.org/docs/rules/for-direction
  'observers/for-direction': 'error',

  // Enforces that a return statement is present in property getters
  // https://eslint.org/docs/rules/getter-return
  'observers/getter-return': ['error', { allowImplicit: true }],

  // disallow using an async function as a Promise executor
  // https://eslint.org/docs/rules/no-async-promise-executor
  'observers/no-async-promise-executor': 'error',

  // Disallow await inside of loops
  // https://eslint.org/docs/rules/no-await-in-loop
  'observers/no-await-in-loop': 'error',

  // Disallow comparisons to negative zero
  // https://eslint.org/docs/rules/no-compare-neg-zero
  'observers/no-compare-neg-zero': 'error',

  // disallow assignment in conditional expressions
  // https://eslint.org/docs/rules/no-cond-assign
  'observers/no-cond-assign': ['error', 'always'],

  // disallow use of console
  // https://eslint.org/docs/rules/no-console
  'observers/no-console': 'error',

  // disallow use of constant expressions in conditions
  // https://eslint.org/docs/rules/no-constant-condition
  'observers/no-constant-condition': 'warn',

  // disallow control characters in regular expressions
  // https://eslint.org/docs/rules/no-control-regex
  'observers/no-control-regex': 'error',

  // disallow use of debugger
  // https://eslint.org/docs/rules/no-debugger
  'observers/no-debugger': 'error',

  // disallow duplicate arguments in functions
  // https://eslint.org/docs/rules/no-dupe-args
  'observers/no-dupe-args': 'error',

  // disallow duplicate keys when creating object literals
  // https://eslint.org/docs/rules/no-dupe-keys
  'observers/no-dupe-keys': 'error',

  // disallow a duplicate case label.
  // https://eslint.org/docs/rules/no-duplicate-case
  'observers/no-duplicate-case': 'error',

  // disallow empty statements
  // https://eslint.org/docs/rules/no-empty
  'observers/no-empty': 'error',

  // disallow the use of empty character classes in regular expressions
  // https://eslint.org/docs/rules/no-empty-character-class
  'observers/no-empty-character-class': 'error',

  // disallow assigning to the exception in a catch block
  // https://eslint.org/docs/rules/no-ex-assign
  'observers/no-ex-assign': 'error',

  // disallow double-negation boolean casts in a boolean context
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  'observers/no-extra-boolean-cast': 'error',

  // disallow unnecessary parentheses
  // https://eslint.org/docs/rules/no-extra-parens
  'observers/no-extra-parens': [
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

  // disallow unnecessary semicolons
  // https://eslint.org/docs/rules/no-extra-semi
  'observers/no-extra-semi': 'error',

  // disallow overwriting functions written as function declarations
  // https://eslint.org/docs/rules/no-func-assign
  'observers/no-func-assign': 'error',

  // disallow function or variable declarations in nested blocks
  // https://eslint.org/docs/rules/no-inner-declarations
  'observers/no-inner-declarations': 'error',

  // disallow invalid regular expression strings in the RegExp constructor
  // https://eslint.org/docs/rules/no-invalid-regexp
  'observers/no-invalid-regexp': 'error',

  // disallow irregular whitespace outside of strings and comments
  // https://eslint.org/docs/rules/no-irregular-whitespace
  'observers/no-irregular-whitespace': 'error',

  // disallow the use of object properties of the global object (Math and JSON) as functions
  // https://eslint.org/docs/rules/no-obj-calls
  'observers/no-obj-calls': 'error',

  // disallow use of Object.prototypes builtins directly
  // https://eslint.org/docs/rules/no-prototype-builtins
  'observers/no-prototype-builtins': 'error',

  // disallow multiple spaces in a regular expression literal
  // https://eslint.org/docs/rules/no-regex-spaces
  'observers/no-regex-spaces': 'error',

  // disallow sparse arrays
  // https://eslint.org/docs/rules/no-sparse-arrays
  'observers/no-sparse-arrays': 'error',

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  'observers/no-template-curly-in-string': 'error',

  // Avoid code that looks like two expressions but is actually one
  // https://eslint.org/docs/rules/no-unexpected-multiline
  'observers/no-unexpected-multiline': 'error',

  // disallow unreachable statements after a return, throw, continue, or break statement
  // https://eslint.org/docs/rules/no-unreachable
  'observers/no-unreachable': 'error',

  // disallow return/throw/break/continue inside finally blocks
  // https://eslint.org/docs/rules/no-unsafe-finally
  'observers/no-unsafe-finally': 'error',

  // disallow negating the left operand of relational operators
  // https://eslint.org/docs/rules/no-unsafe-negation
  'observers/no-unsafe-negation': 'error',

  // disallow comparisons with the value NaN
  // https://eslint.org/docs/rules/use-isnan
  'observers/use-isnan': 'error',

  // ensure JSDoc comments are valid
  // https://eslint.org/docs/rules/valid-jsdoc
  'observers/valid-jsdoc': 'off',

  // ensure that the results of typeof are compared against a valid string
  // https://eslint.org/docs/rules/valid-typeof
  'observers/valid-typeof': ['error', { requireStringLiterals: true }],
};
