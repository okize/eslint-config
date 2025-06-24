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

  // Require the use of === and !==
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ['error', 'always', { null: 'ignore' }],

  // Require grouped accessor pairs in object literals and classes
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

  // Disallow empty functions
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

  // Disallow assignments to native objects or read-only global variables
  // https://eslint.org/docs/rules/no-global-assign
  'no-global-assign': ['error', { exceptions: [] }],

  // deprecated in favor of no-global-assign
  // https://eslint.org/docs/rules/no-native-reassign
  'no-native-reassign': 'off',

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
        'event', // for event.returnvalue
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
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

  // Disallow specified modules when loaded by import
  // https://eslint.org/docs/rules/no-restricted-imports
  'no-restricted-imports': [
    'off',
    {
      paths: [],
      patterns: [],
    },
  ],

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

  // Disallow assignment operators in return statements
  // https://eslint.org/docs/rules/no-return-assign
  'no-return-assign': ['error', 'always'],

  // Disallow redundant `return await`
  // https://eslint.org/docs/rules/no-return-await
  'no-return-await': 'error',

  // Disallow javascript: URLs
  // https://eslint.org/docs/rules/no-script-url
  'no-script-url': 'error',

  // Disallow assignments where both sides are exactly the same
  // https://eslint.org/docs/rules/no-self-assign
  'no-self-assign': [
    'error',
    {
      props: true,
    },
  ],

  // Disallow comparisons where both sides are exactly the same
  // https://eslint.org/docs/rules/no-self-compare
  'no-self-compare': 'error',

  // Disallow comma operators
  // https://eslint.org/docs/rules/no-sequences
  'no-sequences': 'error',

  // Disallow this/super before calling super() in constructors
  // https://eslint.org/docs/rules/no-this-before-super
  'no-this-before-super': 'error',

  // Disallow throwing literals as exceptions
  // https://eslint.org/docs/rules/no-throw-literal
  'no-throw-literal': 'error',

  // Disallow unmodified loop conditions
  // https://eslint.org/docs/rules/no-unmodified-loop-condition
  'no-unmodified-loop-condition': 'off',

  // Disallow unused expressions
  // https://eslint.org/docs/rules/no-unused-expressions
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],

  // Disallow unused labels
  // https://eslint.org/docs/rules/no-unused-labels
  'no-unused-labels': 'error',

  // Disallow unnecessary calls to .call() and .apply()
  // https://eslint.org/docs/rules/no-useless-call
  'no-useless-call': 'off',

  // Disallow unnecessary catch clauses
  // https://eslint.org/docs/rules/no-useless-catch
  'no-useless-catch': 'error',

  // Disallow unnecessary concatenation of literals or template literals
  // https://eslint.org/docs/rules/no-useless-concat
  'no-useless-concat': 'error',

  // Disallow unnecessary computed property keys in objects and classes
  // https://eslint.org/docs/rules/no-useless-computed-key
  'no-useless-computed-key': 'error',

  // Disallow unnecessary constructors
  // https://eslint.org/docs/rules/no-useless-constructor
  'no-useless-constructor': 'error',

  // Disallow unnecessary escape characters
  // https://eslint.org/docs/rules/no-useless-escape
  'no-useless-escape': 'error',

  // Disallow redundant return statements
  // https://eslint.org/docs/rules/no-useless-return
  'no-useless-return': 'error',

  // Disallow renaming import, export, and destructured assignments to the same name
  // https://eslint.org/docs/rules/no-useless-rename
  'no-useless-rename': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],

  // Require let or const instead of var
  // https://eslint.org/docs/rules/no-var
  'no-var': 'error',

  // Disallow void operators
  // https://eslint.org/docs/rules/no-void
  'no-void': 'error',

  // Disallow specified warning terms in comments
  // https://eslint.org/docs/rules/no-warning-comments
  'no-warning-comments': ['off', { terms: ['todo', 'fixme'], location: 'start' }],

  // Disallow with statements
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
      args: 'after-used',
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
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

  // Disallow duplicate keys in object literals
  // https://eslint.org/docs/rules/no-dupe-keys
  'no-dupe-keys': 'error',

  // Disallow duplicate case labels
  // https://eslint.org/docs/rules/no-duplicate-case
  'no-duplicate-case': 'error',

  // Disallow empty block statements
  // https://eslint.org/docs/rules/no-empty
  'no-empty': 'error',

  // Disallow empty character classes in regular expressions
  // https://eslint.org/docs/rules/no-empty-character-class
  'no-empty-character-class': 'error',

  // Disallow reassigning exceptions in catch clauses
  // https://eslint.org/docs/rules/no-ex-assign
  'no-ex-assign': 'error',

  // Disallow unnecessary boolean casts
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': 'error',

  // Disallow reassigning function declarations
  // https://eslint.org/docs/rules/no-func-assign
  'no-func-assign': 'error',

  // Disallow assigning to imported bindings
  // https://eslint.org/docs/rules/no-import-assign
  'no-import-assign': 'error',

  // Disallow variable or function declarations in nested blocks
  // https://eslint.org/docs/rules/no-inner-declarations
  'no-inner-declarations': 'error',

  // Disallow invalid regular expression strings in RegExp constructors
  // https://eslint.org/docs/rules/no-invalid-regexp
  'no-invalid-regexp': 'error',

  // Disallow irregular whitespace
  // https://eslint.org/docs/rules/no-irregular-whitespace
  'no-irregular-whitespace': 'error',

  // Disallow literal numbers that lose precision
  // https://eslint.org/docs/rules/no-loss-of-precision
  'no-loss-of-precision': 'error',

  // Disallow characters which are made with multiple code points in character class syntax
  // https://eslint.org/docs/rules/no-misleading-character-class
  'no-misleading-character-class': 'error',

  // Disallow calling global object properties as functions
  // https://eslint.org/docs/rules/no-obj-calls
  'no-obj-calls': 'error',

  // Disallow returning values from Promise executor functions
  // https://eslint.org/docs/rules/no-promise-executor-return
  'no-promise-executor-return': 'error',

  // Disallow calling some Object.prototype methods directly on objects
  // https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'error',

  // Disallow multiple spaces in regular expressions
  // https://eslint.org/docs/rules/no-regex-spaces
  'no-regex-spaces': 'error',

  // Disallow returning values from setters
  // https://eslint.org/docs/rules/no-setter-return
  'no-setter-return': 'error',

  // Disallow sparse arrays
  // https://eslint.org/docs/rules/no-sparse-arrays
  'no-sparse-arrays': 'error',

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  'no-template-curly-in-string': 'error',

  // Disallow confusing multiline expressions
  // https://eslint.org/docs/rules/no-unexpected-multiline
  // decision: disabled because this is a formatter concern
  'no-unexpected-multiline': 'off',

  // Disallow unreachable code after return, throw, continue, and break statements
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

  // Disallow control flow statements in finally blocks
  // https://eslint.org/docs/rules/no-unsafe-finally
  'no-unsafe-finally': 'error',

  // Disallow negating the left operand of relational operators
  // https://eslint.org/docs/rules/no-unsafe-negation
  'no-unsafe-negation': 'error',

  // Disallow use of optional chaining in contexts where the undefined value is not allowed
  // https://eslint.org/docs/rules/no-unsafe-optional-chaining
  'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

  // Disallow unused private class members
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

  // Require calls to isNaN() when checking for NaN
  // https://eslint.org/docs/rules/use-isnan
  'use-isnan': 'error',

  // Enforce comparing typeof expressions against valid strings
  // https://eslint.org/docs/rules/valid-typeof
  'valid-typeof': ['error', { requireStringLiterals: true }],

  // Require or disallow "Yoda" conditions
  // https://eslint.org/docs/rules/yoda
  yoda: 'error',

  // Disallow empty static blocks
  // https://eslint.org/docs/rules/no-empty-static-block
  'no-empty-static-block': 'error',

  // Disallow variable assignments when the value is not used
  // https://eslint.org/docs/rules/no-useless-assignment
  'no-useless-assignment': 'error',

  // Disallow calls to the Object constructor without an argument
  // https://eslint.org/docs/rules/no-object-constructor
  'no-object-constructor': 'error',

  // Disallow new operators with global non-constructor functions
  // https://eslint.org/docs/rules/no-new-native-nonconstructor
  'no-new-native-nonconstructor': 'error',

  // Disallow the use of Math.pow in favor of the ** operator
  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  'prefer-exponentiation-operator': 'error',
};
