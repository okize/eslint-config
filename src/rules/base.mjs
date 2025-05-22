import confusingBrowserGlobals from 'confusing-browser-globals';

export default {
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

  // verify super() callings in constructors
  // https://eslint.org/docs/rules/constructor-super
  'constructor-super': 'error',

  // specify curly brace conventions for all control statements
  // https://eslint.org/docs/rules/curly
  // decision: enforce curly braces for all control statements because even the `multiline` option can allow subtle bugs
  curly: ['error', 'all'],

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

  // require the use of === and !==
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ['error', 'always', { null: 'ignore' }],

  // Require grouped accessor pairs in object literals and classes
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': 'error',

  // make sure for-in loops have an if statement
  // https://eslint.org/docs/rules/guard-for-in
  'guard-for-in': 'error',

  // enforce or disallow variable initializations at definition
  // https://eslint.org/docs/rules/init-declarations
  'init-declarations': 'off',

  // enforce a maximum number of classes per file
  // https://eslint.org/docs/rules/max-classes-per-file
  'max-classes-per-file': ['error', 1],

  // disallow the use of alert, confirm, and prompt
  // https://eslint.org/docs/rules/no-alert
  'no-alert': 'error',

  // disallow use of arguments.caller or arguments.callee
  // https://eslint.org/docs/rules/no-caller
  'no-caller': 'error',

  // disallow lexical declarations in case/default clauses
  // https://eslint.org/docs/rules/no-case-declarations
  'no-case-declarations': 'error',

  // disallow modifying variables of class declarations
  // https://eslint.org/docs/rules/no-class-assign
  'no-class-assign': 'error',

  // disallow modifying variables that are declared using const
  // https://eslint.org/docs/rules/no-const-assign
  'no-const-assign': 'error',

  // Disallow returning value in constructor
  // https://eslint.org/docs/rules/no-constructor-return
  'no-constructor-return': 'error',

  // disallow division operators explicitly at beginning of regular expression
  // https://eslint.org/docs/rules/no-div-regex
  'no-div-regex': 'off',

  // disallow duplicate class members
  // https://eslint.org/docs/rules/no-dupe-class-members
  'no-dupe-class-members': 'error',

  // disallow importing from the same path more than once
  // https://eslint.org/docs/rules/no-duplicate-imports
  // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  'no-duplicate-imports': 'off',

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
        'event', // for event.returnvalue
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
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

  // disallow specified names in exports
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

  // browser globals that commonly cause confusion and are not recommended
  // to use without an explicit `window`.` qualifier
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

  // disallow specific imports
  // https://eslint.org/docs/rules/no-restricted-imports
  'no-restricted-imports': [
    'off',
    {
      paths: [],
      patterns: [],
    },
  ],

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

  // disallow deletion of variables
  // https://eslint.org/docs/rules/no-delete-var
  'no-delete-var': 'error',

  // disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  'no-label-var': 'error',

  // disallow declaration of variables already declared in the outer scope
  // https://eslint.org/docs/rules/no-shadow
  'no-shadow': 'error',

  // disallow shadowing of names such as arguments
  // https://eslint.org/docs/rules/no-shadow-restricted-names
  'no-shadow-restricted-names': 'error',

  // disallow use of undeclared variables unless mentioned in a /*global */ block
  // https://eslint.org/docs/rules/no-undef
  'no-undef': 'error',

  // disallow use of undefined when initializing variables
  // https://eslint.org/docs/rules/no-undef-init
  'no-undef-init': 'error',

  // disallow use of undefined variable
  // https://eslint.org/docs/rules/no-undefined
  'no-undefined': 'off',

  // disallow declaration of variables that are not used in the code
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

  // disallow use of variables before they are defined
  // https://eslint.org/docs/rules/no-use-before-define
  'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],

  // require method and property shorthand syntax for object literals
  // https://eslint.org/docs/rules/object-shorthand
  'object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],

  // suggest using arrow functions as callbacks
  // https://eslint.org/docs/rules/prefer-arrow-callback
  'prefer-arrow-callback': [
    'error',
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],

  // suggest using of const declaration for variables that are never modified after declared
  // https://eslint.org/docs/rules/prefer-const
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],

  // Prefer destructuring from arrays and objects
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

  // Suggest using named capture group in regular expression
  // https://eslint.org/docs/rules/prefer-named-capture-group
  'prefer-named-capture-group': 'off',

  // disallow parseInt() in favor of binary, octal, and hexadecimal literals
  // https://eslint.org/docs/rules/prefer-numeric-literals
  'prefer-numeric-literals': 'error',

  // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
  // https://eslint.org/docs/rules/prefer-object-has-own
  'prefer-object-has-own': 'error',

  // require using Error objects as Promise rejection reasons
  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

  // https://eslint.org/docs/rules/prefer-regex-literals
  'prefer-regex-literals': [
    'error',
    {
      disallowRedundantWrapping: true,
    },
  ],

  // use rest parameters instead of arguments
  // https://eslint.org/docs/rules/prefer-rest-params
  'prefer-rest-params': 'error',

  // suggest using the spread syntax instead of .apply()
  // https://eslint.org/docs/rules/prefer-spread
  'prefer-spread': 'error',

  // suggest using template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  'prefer-template': 'error',

  // require use of the second argument for parseInt()
  // https://eslint.org/docs/rules/radix
  radix: 'error',

  // require `await` in `async function` (note: this is a horrible rule that should never be used)
  // https://eslint.org/docs/rules/require-await
  'require-await': 'off',

  // Enforce the use of u flag on RegExp
  // https://eslint.org/docs/rules/require-unicode-regexp
  'require-unicode-regexp': 'off',

  // disallow generator functions that do not have yield
  // https://eslint.org/docs/rules/require-yield
  'require-yield': 'error',

  // import sorting
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

  // compiler/transpiler inserts `'use strict';` for us
  strict: ['error', 'never'],

  // require a Symbol description
  // https://eslint.org/docs/rules/symbol-description
  'symbol-description': 'error',

  // requires to declare all vars on top of their containing scope
  // https://eslint.org/docs/rules/vars-on-top
  'vars-on-top': 'error',

  // Enforce "for" loop update clause moving the counter in the right direction
  // https://eslint.org/docs/rules/for-direction
  'for-direction': 'error',

  // Enforces that a return statement is present in property getters
  // https://eslint.org/docs/rules/getter-return
  'getter-return': ['error', { allowImplicit: true }],

  // disallow using an async function as a Promise executor
  // https://eslint.org/docs/rules/no-async-promise-executor
  'no-async-promise-executor': 'error',

  // Disallow await inside of loops
  // https://eslint.org/docs/rules/no-await-in-loop
  'no-await-in-loop': 'error',

  // Disallow comparisons to negative zero
  // https://eslint.org/docs/rules/no-compare-neg-zero
  'no-compare-neg-zero': 'error',

  // disallow assignment in conditional expressions
  // https://eslint.org/docs/rules/no-cond-assign
  'no-cond-assign': ['error', 'always'],

  // disallow use of console
  // https://eslint.org/docs/rules/no-console
  'no-console': 'error',

  // Disallows expressions where the operation doesn't affect the value
  // https://eslint.org/docs/rules/no-constant-binary-expression
  'no-constant-binary-expression': 'error',

  // disallow use of constant expressions in conditions
  // https://eslint.org/docs/rules/no-constant-condition
  'no-constant-condition': 'error',

  // disallow control characters in regular expressions
  // https://eslint.org/docs/rules/no-control-regex
  'no-control-regex': 'error',

  // disallow use of debugger
  // https://eslint.org/docs/rules/no-debugger
  'no-debugger': 'error',

  // disallow duplicate arguments in functions
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

  // ensure that the results of typeof are compared against a valid string
  // https://eslint.org/docs/rules/valid-typeof
  'valid-typeof': ['error', { requireStringLiterals: true }],

  // require or disallow Yoda conditions
  // https://eslint.org/docs/rules/yoda
  yoda: 'error',
};
