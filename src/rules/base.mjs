import confusingBrowserGlobals from 'confusing-browser-globals';

export default {
  // Enforce getter and setter pairs in objects and classes
  // https://eslint.org/docs/rules/accessor-pairs
  'accessor-pairs': 'off',

  // Enforce return statements in callbacks of array methods
  // https://eslint.org/docs/rules/array-callback-return
  'array-callback-return': ['error', { allowImplicit: true }],

  // Enforce the use of variables within the scope they are defined
  // https://eslint.org/docs/rules/block-scoped-var
  'block-scoped-var': 'error',

  // Enforce a maximum cyclomatic complexity allowed in a program
  // https://eslint.org/docs/rules/complexity
  complexity: ['off', 20],

  // Enforce that class methods utilize this
  // https://eslint.org/docs/rules/class-methods-use-this
  'class-methods-use-this': [
    'off',
    {
      exceptMethods: [],
    },
  ],

  // Require return statements to either always or never specify values
  // https://eslint.org/docs/rules/consistent-return
  'consistent-return': 'error',

  // Require super() calls in constructors
  // https://eslint.org/docs/rules/constructor-super
  'constructor-super': 'error',

  // Enforce consistent brace style for all control statements
  // https://eslint.org/docs/rules/curly
  // decision: enforce curly braces for all control statements because even the `multiline` option can allow subtle bugs
  curly: ['error', 'all'],

  // Require default cases in switch statements
  // https://eslint.org/docs/rules/default-case
  'default-case': ['error', { commentPattern: '^no default$' }],

  // Enforce default clauses in switch statements to be last
  // https://eslint.org/docs/rules/default-case-last
  'default-case-last': 'error',

  // Enforce default parameters to be last
  // https://eslint.org/docs/rules/default-param-last
  'default-param-last': 'error',

  // Enforce dot notation whenever possible
  // https://eslint.org/docs/rules/dot-notation
  'dot-notation': ['error', { allowKeywords: true }],

  // Enforce consistent newlines before or after dots
  // https://eslint.org/docs/rules/dot-location
  'dot-location': ['error', 'property'],

  // Require the use of === and !==
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ['error', 'always', { null: 'ignore' }],

  // Enforce grouped accessor pairs in object literals and classes
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': 'error',

  // Require for-in loops to include an if statement
  // https://eslint.org/docs/rules/guard-for-in
  'guard-for-in': 'error',

  // Require or disallow initialization in variable declarations
  // https://eslint.org/docs/rules/init-declarations
  'init-declarations': 'off',

  // Enforce a maximum number of classes per file
  // https://eslint.org/docs/rules/max-classes-per-file
  'max-classes-per-file': ['error', 1],

  // Disallow the use of alert, confirm, and prompt
  // https://eslint.org/docs/rules/no-alert
  'no-alert': 'error',

  // Disallow the use of arguments.caller or arguments.callee
  // https://eslint.org/docs/rules/no-caller
  'no-caller': 'error',

  // Disallow lexical declarations in case clauses
  // https://eslint.org/docs/rules/no-case-declarations
  'no-case-declarations': 'error',

  // Disallow reassigning class members
  // https://eslint.org/docs/rules/no-class-assign
  'no-class-assign': 'error',

  // Disallow arrow functions where they could be confused with comparisons
  // https://eslint.org/docs/rules/no-confusing-arrow
  'no-confusing-arrow': [
    'error',
    {
      allowParens: true,
    },
  ],

  // Disallow reassigning const variables
  // https://eslint.org/docs/rules/no-const-assign
  'no-const-assign': 'error',

  // Disallow returning value from constructor
  // https://eslint.org/docs/rules/no-constructor-return
  'no-constructor-return': 'error',

  // Disallow equal signs explicitly at the beginning of regular expressions
  // https://eslint.org/docs/rules/no-div-regex
  'no-div-regex': 'off',

  // Disallow duplicate class members
  // https://eslint.org/docs/rules/no-dupe-class-members
  'no-dupe-class-members': 'error',

  // Disallow duplicate module imports
  // https://eslint.org/docs/rules/no-duplicate-imports
  // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  'no-duplicate-imports': 'off',

  // Disallow else blocks after return statements in if statements
  // https://eslint.org/docs/rules/no-else-return
  'no-else-return': ['error', { allowElseIf: false }],

  // Disallow empty functions, except for standalone funcs/arrows
  // https://eslint.org/docs/rules/no-empty-function
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],

  // Disallow empty destructuring patterns
  // https://eslint.org/docs/rules/no-empty-pattern
  'no-empty-pattern': 'error',

  // Disallow null comparisons without type-checking operators
  // https://eslint.org/docs/rules/no-eq-null
  'no-eq-null': 'off',

  // Disallow the use of eval()
  // https://eslint.org/docs/rules/no-eval
  'no-eval': 'error',

  // Disallow extending native types
  // https://eslint.org/docs/rules/no-extend-native
  'no-extend-native': 'error',

  // Disallow unnecessary calls to .bind()
  // https://eslint.org/docs/rules/no-extra-bind
  'no-extra-bind': 'error',

  // Disallow unnecessary labels
  // https://eslint.org/docs/rules/no-extra-label
  'no-extra-label': 'error',

  // Disallow fallthrough of case statements
  // https://eslint.org/docs/rules/no-fallthrough
  'no-fallthrough': 'error',

  // Disallow floating decimal points
  // https://eslint.org/docs/rules/no-floating-decimal
  'no-floating-decimal': 'error',

  // Disallow assignments to native objects or read-only global variables
  // https://eslint.org/docs/rules/no-global-assign
  'no-global-assign': ['error', { exceptions: [] }],

  // Disallow reassignments of native objects
  // https://eslint.org/docs/rules/no-native-reassign
  'no-native-reassign': 'off',

  // Disallow new operators with the Symbol object
  // https://eslint.org/docs/rules/no-new-symbol
  'no-new-symbol': 'error',

  // Disallow shorthand type conversions
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

  // Disallow declarations in the global scope
  // https://eslint.org/docs/rules/no-implicit-globals
  'no-implicit-globals': 'off',

  // Disallow the use of eval()-like methods
  // https://eslint.org/docs/rules/no-implied-eval
  'no-implied-eval': 'error',

  // Disallow use of this in contexts where the value of this is undefined
  // https://eslint.org/docs/rules/no-invalid-this
  'no-invalid-this': 'off',

  // Disallow the use of the __iterator__ property
  // https://eslint.org/docs/rules/no-iterator
  'no-iterator': 'error',

  // Disallow labeled statements
  // https://eslint.org/docs/rules/no-labels
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

  // Require or disallow logical assignment operator shorthand
  // https://eslint.org/docs/rules/logical-assignment-operators
  'logical-assignment-operators': ['error', 'always'],

  // Disallow unnecessary nested blocks
  // https://eslint.org/docs/rules/no-lone-blocks
  'no-lone-blocks': 'error',

  // Disallow function declarations that contain unsafe references inside loop statements
  // https://eslint.org/docs/rules/no-loop-func
  'no-loop-func': 'error',

  // Disallow magic numbers
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

  // Disallow use of multiple spaces
  // https://eslint.org/docs/rules/no-multi-spaces
  'no-multi-spaces': [
    'error',
    {
      ignoreEOLComments: false,
    },
  ],

  // Disallow multiline strings
  // https://eslint.org/docs/rules/no-multi-str
  'no-multi-str': 'error',

  // Disallow new operators outside of assignments or comparisons
  // https://eslint.org/docs/rules/no-new
  'no-new': 'error',

  // Disallow new operators with the Function object
  // https://eslint.org/docs/rules/no-new-func
  'no-new-func': 'error',

  // Disallow new operators with the String, Number, and Boolean objects
  // https://eslint.org/docs/rules/no-new-wrappers
  'no-new-wrappers': 'error',

  // Disallow \8 and \9 escape sequences in string literals
  // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
  'no-nonoctal-decimal-escape': 'error',

  // Disallow octal literals
  // https://eslint.org/docs/rules/no-octal
  'no-octal': 'error',

  // Disallow octal escape sequences in string literals
  // https://eslint.org/docs/rules/no-octal-escape
  'no-octal-escape': 'error',

  // Disallow reassigning function parameters
  // https://eslint.org/docs/rules/no-param-reassign
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

  // Disallow the use of the __proto__ property
  // https://eslint.org/docs/rules/no-proto
  'no-proto': 'error',

  // Disallow variable redeclaration
  // https://eslint.org/docs/rules/no-redeclare
  'no-redeclare': 'error',

  // Disallow certain properties on certain objects
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

  // disallow to use this/super before super() calling in constructors.
  // https://eslint.org/docs/rules/no-this-before-super
  'no-this-before-super': 'error',

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

  // disallow useless computed property keys
  // https://eslint.org/docs/rules/no-useless-computed-key
  'no-useless-computed-key': 'error',

  // disallow unnecessary constructor
  // https://eslint.org/docs/rules/no-useless-constructor
  'no-useless-constructor': 'error',

  // disallow unnecessary string escaping
  // https://eslint.org/docs/rules/no-useless-escape
  'no-useless-escape': 'error',

  // disallow redundant return; keywords
  // https://eslint.org/docs/rules/no-useless-return
  'no-useless-return': 'error',

  // disallow renaming import, export, and destructured assignments to the same name
  // https://eslint.org/docs/rules/no-useless-rename
  'no-useless-rename': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],

  // require let or const instead of var
  // https://eslint.org/docs/rules/no-var
  'no-var': 'error',

  // disallow use of void operator
  // https://eslint.org/docs/rules/no-void
  'no-void': 'error',

  // disallow usage of configurable warning terms in comments: e.g. todo
  // https://eslint.org/docs/rules/no-warning-comments
  'no-warning-comments': ['off', { terms: ['todo', 'fixme'], location: 'start' }],

  // disallow use of the with statement
  // https://eslint.org/docs/rules/no-with
  'no-with': 'error',

  // disallow the catch clause parameter name being the same as a variable in the outer scope
  // https://eslint.org/docs/rules/no-catch-shadow
  'no-catch-shadow': 'off',

  // Disallow deleting variables
  // https://eslint.org/docs/rules/no-delete-var
  'no-delete-var': 'error',

  // Disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  'no-label-var': 'error',

  // Disallow variable declarations from shadowing variables declared in the outer scope
  // https://eslint.org/docs/rules/no-shadow
  'no-shadow': 'error',

  // Disallow identifiers from shadowing restricted names
  // https://eslint.org/docs/rules/no-shadow-restricted-names
  'no-shadow-restricted-names': 'error',

  // Disallow the use of undeclared variables unless mentioned in /*global */ comments
  // https://eslint.org/docs/rules/no-undef
  'no-undef': 'error',

  // Disallow initializing variables to undefined
  // https://eslint.org/docs/rules/no-undef-init
  'no-undef-init': 'error',

  // Disallow the use of undefined as an identifier
  // https://eslint.org/docs/rules/no-undefined
  'no-undefined': 'off',

  // Disallow unused variables
  // https://eslint.org/docs/rules/no-unused-vars
  'no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'after-used',
      caughtErrors: 'all',
      ignoreRestSiblings: true,
      reportUsedIgnorePattern: false,
      argsIgnorePattern: '^_',
    },
  ],

  // Disallow the use of variables before they are defined
  // https://eslint.org/docs/rules/no-use-before-define
  'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],

  // Require or disallow method and property shorthand syntax for object literals
  // https://eslint.org/docs/rules/object-shorthand
  'object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],

  // Require using arrow functions for callbacks
  // https://eslint.org/docs/rules/prefer-arrow-callback
  'prefer-arrow-callback': [
    'error',
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],

  // Require const declarations for variables that are never reassigned after declared
  // https://eslint.org/docs/rules/prefer-const
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],

  // Require destructuring from arrays and/or objects
  // https://eslint.org/docs/rules/prefer-destructuring
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],

  // Enforce using named capture group in regular expression
  // https://eslint.org/docs/rules/prefer-named-capture-group
  'prefer-named-capture-group': 'off',

  // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
  // https://eslint.org/docs/rules/prefer-numeric-literals
  'prefer-numeric-literals': 'error',

  // Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn()
  // https://eslint.org/docs/rules/prefer-object-has-own
  'prefer-object-has-own': 'error',

  // Require using Error objects as Promise rejection reasons
  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

  // Disallow use of the RegExp constructor in favor of regular expression literals
  // https://eslint.org/docs/rules/prefer-regex-literals
  'prefer-regex-literals': [
    'error',
    {
      disallowRedundantWrapping: true,
    },
  ],

  // Suggest using Reflect methods where applicable
  // https://eslint.org/docs/rules/prefer-reflect
  'prefer-reflect': 'off',

  // Require rest parameters instead of arguments
  // https://eslint.org/docs/rules/prefer-rest-params
  'prefer-rest-params': 'error',

  // Require spread operators instead of .apply()
  // https://eslint.org/docs/rules/prefer-spread
  'prefer-spread': 'error',

  // Require template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  'prefer-template': 'error',

  // Enforce the consistent use of the radix argument when using parseInt()
  // https://eslint.org/docs/rules/radix
  radix: 'error',

  // Disallow async functions which have no await expression
  // https://eslint.org/docs/rules/require-await
  'require-await': 'off',

  // Enforce the use of u or v flag on regular expressions
  // https://eslint.org/docs/rules/require-unicode-regexp
  'require-unicode-regexp': 'off',

  // Require generator functions to contain yield
  // https://eslint.org/docs/rules/require-yield
  'require-yield': 'error',

  // Enforce sorted import declarations within modules
  // https://eslint.org/docs/rules/sort-imports
  'sort-imports': [
    'off',
    {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      allowSeparatedGroups: false,
    },
  ],

  // Require or disallow strict mode directives
  // https://eslint.org/docs/rules/strict
  strict: ['error', 'never'],

  // Require symbol descriptions
  // https://eslint.org/docs/rules/symbol-description
  'symbol-description': 'error',

  // Require var declarations be placed at the top of their containing scope
  // https://eslint.org/docs/rules/vars-on-top
  'vars-on-top': 'error',

  // Require immediate function invocation to be wrapped in parentheses
  // https://eslint.org/docs/rules/wrap-iife
  'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

  // Require or disallow "Yoda" conditions
  // https://eslint.org/docs/rules/yoda
  yoda: 'error',

  // Enforce for loop update clause moving the counter in the right direction
  // https://eslint.org/docs/rules/for-direction
  'for-direction': 'error',

  // Enforce return statements in getters
  // https://eslint.org/docs/rules/getter-return
  'getter-return': ['error', { allowImplicit: true }],

  // Disallow using an async function as a Promise executor
  // https://eslint.org/docs/rules/no-async-promise-executor
  'no-async-promise-executor': 'error',

  // Disallow await inside of loops
  // https://eslint.org/docs/rules/no-await-in-loop
  'no-await-in-loop': 'error',

  // Disallow comparing against -0
  // https://eslint.org/docs/rules/no-compare-neg-zero
  'no-compare-neg-zero': 'error',

  // Disallow assignment operators in conditional expressions
  // https://eslint.org/docs/rules/no-cond-assign
  'no-cond-assign': ['error', 'always'],

  // Disallow the use of console
  // https://eslint.org/docs/rules/no-console
  'no-console': 'error',

  // Disallow expressions where the operation doesn't affect the value
  // https://eslint.org/docs/rules/no-constant-binary-expression
  'no-constant-binary-expression': 'error',

  // Disallow constant expressions in conditions
  // https://eslint.org/docs/rules/no-constant-condition
  'no-constant-condition': 'error',

  // Disallow control characters in regular expressions
  // https://eslint.org/docs/rules/no-control-regex
  'no-control-regex': 'error',

  // Disallow the use of debugger
  // https://eslint.org/docs/rules/no-debugger
  'no-debugger': 'error',

  // Disallow duplicate arguments in function definitions
  // https://eslint.org/docs/rules/no-dupe-args
  'no-dupe-args': 'error',

  // Disallow duplicate conditions in if-else-if chains
  // https://eslint.org/docs/rules/no-dupe-else-if
  'no-dupe-else-if': 'error',

  // disallow duplicate keys when creating object literals
  // https://eslint.org/docs/rules/no-dupe-keys
  'no-dupe-keys': 'error',

  // disallow a duplicate case label.
  // https://eslint.org/docs/rules/no-duplicate-case
  'no-duplicate-case': 'error',

  // disallow empty statements
  // https://eslint.org/docs/rules/no-empty
  'no-empty': 'error',

  // disallow the use of empty character classes in regular expressions
  // https://eslint.org/docs/rules/no-empty-character-class
  'no-empty-character-class': 'error',

  // disallow assigning to the exception in a catch block
  // https://eslint.org/docs/rules/no-ex-assign
  'no-ex-assign': 'error',

  // disallow double-negation boolean casts in a boolean context
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': 'error',

  // disallow unnecessary parentheses
  // https://eslint.org/docs/rules/no-extra-parens
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

  // disallow unnecessary semicolons
  // https://eslint.org/docs/rules/no-extra-semi
  'no-extra-semi': 'error',

  // disallow overwriting functions written as function declarations
  // https://eslint.org/docs/rules/no-func-assign
  'no-func-assign': 'error',

  // https://eslint.org/docs/rules/no-import-assign
  'no-import-assign': 'error',

  // disallow function or variable declarations in nested blocks
  // https://eslint.org/docs/rules/no-inner-declarations
  'no-inner-declarations': 'error',

  // disallow invalid regular expression strings in the RegExp constructor
  // https://eslint.org/docs/rules/no-invalid-regexp
  'no-invalid-regexp': 'error',

  // disallow irregular whitespace outside of strings and comments
  // https://eslint.org/docs/rules/no-irregular-whitespace
  'no-irregular-whitespace': 'error',

  // Disallow Number Literals That Lose Precision
  // https://eslint.org/docs/rules/no-loss-of-precision
  'no-loss-of-precision': 'error',

  // Disallow characters which are made with multiple code points in character class syntax
  // https://eslint.org/docs/rules/no-misleading-character-class
  'no-misleading-character-class': 'error',

  // disallow the use of object properties of the global object (Math and JSON) as functions
  // https://eslint.org/docs/rules/no-obj-calls
  'no-obj-calls': 'error',

  // Disallow returning values from Promise executor functions
  // https://eslint.org/docs/rules/no-promise-executor-return
  'no-promise-executor-return': 'error',

  // disallow use of Object.prototypes builtins directly
  // https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'error',

  // disallow multiple spaces in a regular expression literal
  // https://eslint.org/docs/rules/no-regex-spaces
  'no-regex-spaces': 'error',

  // Disallow returning values from setters
  // https://eslint.org/docs/rules/no-setter-return
  'no-setter-return': 'error',

  // disallow sparse arrays
  // https://eslint.org/docs/rules/no-sparse-arrays
  'no-sparse-arrays': 'error',

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  'no-template-curly-in-string': 'error',

  // Avoid code that looks like two expressions but is actually one
  // https://eslint.org/docs/rules/no-unexpected-multiline
  'no-unexpected-multiline': 'error',

  // disallow unreachable statements after a return, throw, continue, or break statement
  // https://eslint.org/docs/rules/no-unreachable
  'no-unreachable': 'error',

  // Disallow loops with a body that allows only one iteration
  // https://eslint.org/docs/rules/no-unreachable-loop
  'no-unreachable-loop': [
    'error',
    {
      ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    },
  ],

  // disallow return/throw/break/continue inside finally blocks
  // https://eslint.org/docs/rules/no-unsafe-finally
  'no-unsafe-finally': 'error',

  // disallow negating the left operand of relational operators
  // https://eslint.org/docs/rules/no-unsafe-negation
  'no-unsafe-negation': 'error',

  // disallow use of optional chaining in contexts where the undefined value is not allowed
  // https://eslint.org/docs/rules/no-unsafe-optional-chaining
  'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

  // Disallow Unused Private Class Members
  // https://eslint.org/docs/rules/no-unused-private-class-members
  'no-unused-private-class-members': 'error',

  // Disallow useless backreferences in regular expressions
  // https://eslint.org/docs/rules/no-useless-backreference
  'no-useless-backreference': 'error',

  // disallow negation of the left operand of an in expression
  // deprecated in favor of no-unsafe-negation
  // https://eslint.org/docs/rules/no-negated-in-lhs
  'no-negated-in-lhs': 'off',

  // Disallow assignments that can lead to race conditions due to usage of await or yield
  // https://eslint.org/docs/rules/require-atomic-updates
  // note: not enabled because it is very buggy
  'require-atomic-updates': 'off',

  // disallow comparisons with the value NaN
  // https://eslint.org/docs/rules/use-isnan
  'use-isnan': 'error',

  // ensure JSDoc comments are valid
  // https://eslint.org/docs/rules/valid-jsdoc
  // deprecated in favor of https://github.com/gajus/eslint-plugin-jsdoc
  'valid-jsdoc': 'off',

  // ensure that the results of typeof are compared against a valid string
  // https://eslint.org/docs/rules/valid-typeof
  'valid-typeof': ['error', { requireStringLiterals: true }],

  // enforce line breaks after opening and before closing array brackets
  // https://eslint.org/docs/rules/array-bracket-newline
  'array-bracket-newline': ['error', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

  // enforce line breaks between array elements
  // https://eslint.org/docs/rules/array-element-newline
  'array-element-newline': ['error', { multiline: true, minItems: 3 }],

  // enforce spacing inside array brackets
  // https://eslint.org/docs/rules/array-bracket-spacing
  'array-bracket-spacing': ['error', 'never'],

  // enforces no braces where they can be omitted
  // https://eslint.org/docs/rules/arrow-body-style
  // decision: small preferance for immediate returns but if we enfore it can lead to a frustrating
  // developer experience where code may be autocorrected in the middle of debugging a function;
  'arrow-body-style': 'off',

  // require parens in arrow function arguments
  // https://eslint.org/docs/rules/arrow-parens
  'arrow-parens': ['error', 'always'],

  // require space before/after arrow function's arrow
  // https://eslint.org/docs/rules/arrow-spacing
  'arrow-spacing': ['error', { before: true, after: true }],

  // enforce spacing inside single-line blocks
  // https://eslint.org/docs/rules/block-spacing
  'block-spacing': ['error', 'always'],

  // enforce one true brace style
  // https://eslint.org/docs/rules/brace-style
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],

  // require camel case names
  // https://eslint.org/docs/rules/camelcase
  camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

  // enforce or disallow capitalization of the first letter of a comment
  // https://eslint.org/docs/rules/capitalized-comments
  'capitalized-comments': [
    'off',
    'never',
    {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    },
  ],

  // require trailing commas in multiline object literals
  // https://eslint.org/docs/rules/comma-dangle
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

  // enforce spacing before and after comma
  // https://eslint.org/docs/rules/comma-spacing
  'comma-spacing': ['error', { before: false, after: true }],

  // enforce one true comma style
  // https://eslint.org/docs/rules/comma-style
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

  // disallow padding inside computed properties
  // https://eslint.org/docs/rules/computed-property-spacing
  'computed-property-spacing': ['error', 'never'],

  // enforces consistent naming when capturing the current execution context
  // https://eslint.org/docs/rules/consistent-this
  'consistent-this': 'off',

  // enforce newline at the end of file, with no multiple empty lines
  // https://eslint.org/docs/rules/eol-last
  'eol-last': ['error', 'always'],

  // Enforce line breaks between arguments of a function call
  // https://eslint.org/docs/rules/function-call-argument-newline
  'function-call-argument-newline': ['error', 'consistent'],

  // enforce spacing between functions and their invocations
  // https://eslint.org/docs/rules/func-call-spacing
  'func-call-spacing': ['error', 'never'],

  // requires function names to match the name of the variable or property to which they are
  // assigned
  // https://eslint.org/docs/rules/func-name-matching
  'func-name-matching': [
    'off',
    'always',
    {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    },
  ],

  // require function expressions to have a name
  // https://eslint.org/docs/rules/func-names
  'func-names': ['error', 'always'],

  // enforces use of function declarations or expressions
  // https://eslint.org/docs/rules/func-style
  'func-style': ['error', 'expression'],

  // require line breaks inside function parentheses if there are line breaks between parameters
  // https://eslint.org/docs/rules/function-paren-newline
  'function-paren-newline': ['error', 'multiline-arguments'],

  // enforce the spacing around the * in generator functions
  // https://eslint.org/docs/rules/generator-star-spacing
  'generator-star-spacing': ['error', { before: false, after: true }],

  // disallow specified identifiers
  // https://eslint.org/docs/rules/id-denylist
  'id-denylist': 'off',

  // this option enforces minimum and maximum identifier lengths
  // (variable names, property names etc.)
  // decision: enabled to avoid using ambiguous e for event/error variables
  // https://eslint.org/docs/rules/id-length
  'id-length': ['error', { min: 2, exceptions: ['_', 'i', 'j', 'x', 'y'] }],

  // require identifiers to match the provided regular expression
  // https://eslint.org/docs/rules/id-match
  'id-match': 'off',

  // Enforce the location of arrow function bodies with implicit returns
  // https://eslint.org/docs/rules/implicit-arrow-linebreak
  'implicit-arrow-linebreak': ['error', 'beside'],

  // this option sets a specific tab width for your code
  // https://eslint.org/docs/rules/indent
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

  // specify whether double or single quotes should be used in JSX attributes
  // https://eslint.org/docs/rules/jsx-quotes
  'jsx-quotes': ['off', 'prefer-double'],

  // enforces spacing between keys and values in object literal properties
  // https://eslint.org/docs/rules/key-spacing
  'key-spacing': ['error', { beforeColon: false, afterColon: true }],

  // require a space before & after certain keywords
  // https://eslint.org/docs/rules/keyword-spacing
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

  // enforce position of line comments
  // https://eslint.org/docs/rules/line-comment-position
  'line-comment-position': [
    'off',
    {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    },
  ],

  // disallow mixed 'LF' and 'CRLF' as linebreaks
  // https://eslint.org/docs/rules/linebreak-style
  'linebreak-style': ['error', 'unix'],

  // require or disallow an empty line between class members
  // https://eslint.org/docs/rules/lines-between-class-members
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

  // enforces empty lines around comments
  // https://eslint.org/docs/rules/lines-around-comment
  'lines-around-comment': 'off',

  // require or disallow newlines around directives
  // https://eslint.org/docs/rules/lines-around-directive
  'lines-around-directive': [
    'error',
    {
      before: 'always',
      after: 'always',
    },
  ],

  // specify the maximum depth that blocks can be nested
  // https://eslint.org/docs/rules/max-depth
  'max-depth': ['off', 4],

  // specify the maximum length of a line in your program
  // https://eslint.org/docs/rules/max-len
  'max-len': [
    'error',
    100,
    2,
    {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    },
  ],

  // specify the max number of lines in a file
  // https://eslint.org/docs/rules/max-lines
  'max-lines': [
    'off',
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    },
  ],

  // enforce a maximum function length
  // https://eslint.org/docs/rules/max-lines-per-function
  'max-lines-per-function': [
    'off',
    {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    },
  ],

  // specify the maximum depth callbacks can be nested
  // https://eslint.org/docs/rules/max-nested-callbacks
  'max-nested-callbacks': 'off',

  // limits the number of parameters that can be used in the function declaration.
  // https://eslint.org/docs/rules/max-params
  'max-params': ['off', 3],

  // specify the maximum number of statement allowed in a function
  // https://eslint.org/docs/rules/max-statements
  'max-statements': ['off', 10],

  // restrict the number of statements per line
  // https://eslint.org/docs/rules/max-statements-per-line
  'max-statements-per-line': ['off', { max: 1 }],

  // enforce a particular style for multiline comments
  // https://eslint.org/docs/rules/multiline-comment-style
  'multiline-comment-style': ['off', 'starred-block'],

  // require multiline ternary
  // https://eslint.org/docs/rules/multiline-ternary
  'multiline-ternary': ['off', 'never'],

  // require a capital letter for constructors
  // https://eslint.org/docs/rules/new-cap
  'new-cap': [
    'error',
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    },
  ],

  // disallow the omission of parentheses when invoking a constructor with no arguments
  // https://eslint.org/docs/rules/new-parens
  'new-parens': 'error',

  // allow/disallow an empty newline after var statement
  // https://eslint.org/docs/rules/newline-after-var
  'newline-after-var': 'off',

  // Require an empty line before return statements
  // https://eslint.org/docs/rules/newline-before-return
  'newline-before-return': 'off',

  // enforces new line after each method call in the chain to make it
  // more readable and easy to maintain
  // https://eslint.org/docs/rules/newline-per-chained-call
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

  // disallow use of the Array constructor
  // https://eslint.org/docs/rules/no-array-constructor
  'no-array-constructor': 'error',

  // disallow use of bitwise operators
  // https://eslint.org/docs/rules/no-bitwise
  'no-bitwise': 'error',

  // disallow use of the continue statement
  // https://eslint.org/docs/rules/no-continue
  'no-continue': 'error',

  // disallow comments inline after code
  // https://eslint.org/docs/rules/no-inline-comments
  'no-inline-comments': 'off',

  // disallow if as the only statement in an else block
  // https://eslint.org/docs/rules/no-lonely-if
  'no-lonely-if': 'error',

  // disallow un-paren'd mixes of different operators
  // https://eslint.org/docs/rules/no-mixed-operators
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

  // disallow mixed spaces and tabs for indentation
  // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
  'no-mixed-spaces-and-tabs': 'error',

  // disallow use of chained assignment expressions
  // https://eslint.org/docs/rules/no-multi-assign
  'no-multi-assign': ['error'],

  // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
  // https://eslint.org/docs/rules/no-multiple-empty-lines
  'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

  // disallow negated conditions
  // https://eslint.org/docs/rules/no-negated-condition
  'no-negated-condition': 'off',

  // disallow nested ternary expressions
  // https://eslint.org/docs/rules/no-nested-ternary
  'no-nested-ternary': 'error',

  // disallow use of the Object constructor
  // https://eslint.org/docs/rules/no-new-object
  'no-new-object': 'error',

  // disallow use of unary operators (++ and --) except in for loops
  // https://eslint.org/docs/rules/no-plusplus
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

  // disallow certain syntax forms
  // https://eslint.org/docs/rules/no-restricted-syntax
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'ForOfStatement',
      message: 'Loops should be avoided in favor of array iterations.',
    },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],

  // disallow space between function identifier and application
  // https://eslint.org/docs/rules/no-spaced-func
  'no-spaced-func': 'error',

  // disallow tab characters entirely
  // https://eslint.org/docs/rules/no-tabs
  'no-tabs': 'error',

  // disallow the use of ternary operators
  // https://eslint.org/docs/rules/no-ternary
  'no-ternary': 'off',

  // disallow trailing whitespace at the end of lines
  // https://eslint.org/docs/rules/no-trailing-spaces
  'no-trailing-spaces': [
    'error',
    {
      skipBlankLines: false,
      ignoreComments: false,
    },
  ],

  // disallow dangling underscores in identifiers
  // https://eslint.org/docs/rules/no-underscore-dangle
  'no-underscore-dangle': [
    'error',
    {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    },
  ],

  // disallow the use of Boolean literals in conditional expressions
  // also, prefer `a || b` over `a ? a : b`
  // https://eslint.org/docs/rules/no-unneeded-ternary
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  // disallow whitespace before properties
  // https://eslint.org/docs/rules/no-whitespace-before-property
  'no-whitespace-before-property': 'error',

  // enforce the location of single-line statements
  // https://eslint.org/docs/rules/nonblock-statement-body-position
  'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

  // require padding inside curly braces
  // https://eslint.org/docs/rules/object-curly-spacing
  'object-curly-spacing': ['error', 'always'],

  // enforce line breaks between braces
  // https://eslint.org/docs/rules/object-curly-newline
  'object-curly-newline': [
    'error',
    {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    },
  ],

  // enforce "same line" or "multiple line" on object properties.
  // https://eslint.org/docs/rules/object-property-newline
  'object-property-newline': [
    'error',
    {
      allowAllPropertiesOnSameLine: true,
    },
  ],

  // allow just one var statement per function
  // https://eslint.org/docs/rules/one-var
  'one-var': ['error', 'never'],

  // require a newline around variable declaration
  // https://eslint.org/docs/rules/one-var-declaration-per-line
  'one-var-declaration-per-line': ['error', 'always'],

  // require assignment operator shorthand where possible or prohibit it entirely
  // https://eslint.org/docs/rules/operator-assignment
  'operator-assignment': ['error', 'always'],

  // Requires operator at the beginning of the line in multiline statements
  // https://eslint.org/docs/rules/operator-linebreak
  'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

  // disallow padding within blocks
  // https://eslint.org/docs/rules/padded-blocks
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
  // https://eslint.org/docs/rules/padding-line-between-statements
  'padding-line-between-statements': 'off',

  // Disallow the use of Math.pow in favor of the ** operator
  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  'prefer-exponentiation-operator': 'error',

  // Prefer use of an object spread over Object.assign
  // https://eslint.org/docs/rules/prefer-object-spread
  'prefer-object-spread': 'error',

  // require quotes around object literal property names
  // https://eslint.org/docs/rules/quote-props.html
  'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

  // specify whether double or single quotes should be used
  // https://eslint.org/docs/rules/quotes
  quotes: ['error', 'single', { avoidEscape: true }],

  // enforce spacing between object rest-spread
  // https://eslint.org/docs/rules/rest-spread-spacing
  'rest-spread-spacing': ['error', 'never'],

  // do not require jsdoc
  // https://eslint.org/docs/rules/require-jsdoc
  'require-jsdoc': 'off',

  // require or disallow use of semicolons instead of ASI
  // https://eslint.org/docs/rules/semi
  semi: ['error', 'always'],

  // enforce spacing before and after semicolons
  // https://eslint.org/docs/rules/semi-spacing
  'semi-spacing': ['error', { before: false, after: true }],

  // Enforce location of semicolons
  // https://eslint.org/docs/rules/semi-style
  'semi-style': ['error', 'last'],

  // requires object keys to be sorted
  // https://eslint.org/docs/rules/sort-keys
  'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

  // sort variables within the same declaration block
  // https://eslint.org/docs/rules/sort-vars
  'sort-vars': 'off',

  // require or disallow space before blocks
  // https://eslint.org/docs/rules/space-before-blocks
  'space-before-blocks': 'error',

  // require or disallow space before function opening parenthesis
  // https://eslint.org/docs/rules/space-before-function-paren
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],

  // require or disallow spaces inside parentheses
  // https://eslint.org/docs/rules/space-in-parens
  'space-in-parens': ['error', 'never'],

  // require spaces around operators
  // https://eslint.org/docs/rules/space-infix-ops
  'space-infix-ops': 'error',

  // Require or disallow spaces before/after unary operators
  // https://eslint.org/docs/rules/space-unary-ops
  'space-unary-ops': [
    'error',
    {
      words: true,
      nonwords: false,
      overrides: {},
    },
  ],

  // require or disallow a space immediately following the // or /* in a comment
  // https://eslint.org/docs/rules/spaced-comment
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
  // https://eslint.org/docs/rules/switch-colon-spacing
  'switch-colon-spacing': ['error', { after: true, before: false }],

  // enforce usage of spacing in template strings
  // https://eslint.org/docs/rules/template-curly-spacing
  'template-curly-spacing': 'error',

  // Require or disallow spacing between template tags and their literals
  // https://eslint.org/docs/rules/template-tag-spacing
  'template-tag-spacing': ['error', 'never'],

  // require or disallow the Unicode Byte Order Mark
  // https://eslint.org/docs/rules/unicode-bom
  'unicode-bom': ['error', 'never'],

  // require regex literals to be wrapped in parentheses
  // https://eslint.org/docs/rules/wrap-regex
  'wrap-regex': 'off',

  // enforce spacing around the * in yield* expressions
  // https://eslint.org/docs/rules/yield-star-spacing
  'yield-star-spacing': ['error', 'after'],

  // Disallow specified modules when loaded by import
  // https://eslint.org/docs/rules/no-restricted-imports
  'no-restricted-imports': [
    'off',
    {
      paths: [],
      patterns: [],
    },
  ],

  // Disallow specified global variables
  // https://eslint.org/docs/rules/no-restricted-globals
  'no-restricted-globals': [
    'error',
    ...confusingBrowserGlobals.map((name) => ({
      name,
      message: `'${name}' should be written as 'window.${name}' or 'document.${name}' instead.`,
    })),
    {
      name: 'isFinite',
      message: 'Use Number.isFinite instead...',
    },
    {
      name: 'isNaN',
      message: 'Use Number.isNaN instead...',
    },
  ],

  // Disallow specified names in exports
  // https://eslint.org/docs/rules/no-restricted-exports
  'no-restricted-exports': [
    'error',
    {
      restrictedNamedExports: [
        'default', // use `export default` to provide a default export
        'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
      ],
    },
  ],
};
