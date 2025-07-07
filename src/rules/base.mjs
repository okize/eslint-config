import confusingBrowserGlobals from 'confusing-browser-globals';

export default {
  // Possible Problems

  // Enforce return statements in callbacks of array methods
  // https://eslint.org/docs/rules/array-callback-return
  'array-callback-return': ['error', { allowImplicit: true }],

  // Require super() calls in constructors
  // https://eslint.org/docs/rules/constructor-super
  'constructor-super': 'error',

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

  // Disallow reassigning class members
  // https://eslint.org/docs/rules/no-class-assign
  'no-class-assign': 'error',

  // Disallow comparing against -0
  // https://eslint.org/docs/rules/no-compare-neg-zero
  'no-compare-neg-zero': 'error',

  // Disallow assignment operators in conditional expressions
  // https://eslint.org/docs/rules/no-cond-assign
  'no-cond-assign': ['error', 'always'],

  // Disallow reassigning const variables
  // https://eslint.org/docs/rules/no-const-assign
  'no-const-assign': 'error',

  // Disallow expressions where the operation doesn't affect the value
  // https://eslint.org/docs/rules/no-constant-binary-expression
  'no-constant-binary-expression': 'error',

  // Disallow constant expressions in conditions
  // https://eslint.org/docs/rules/no-constant-condition
  'no-constant-condition': 'error',

  // Disallow returning value from constructor
  // https://eslint.org/docs/rules/no-constructor-return
  'no-constructor-return': 'error',

  // Disallow control characters in regular expressions
  // https://eslint.org/docs/rules/no-control-regex
  'no-control-regex': 'error',

  // Disallow the use of debugger
  // https://eslint.org/docs/rules/no-debugger
  'no-debugger': 'error',

  // Disallow duplicate arguments in function definitions
  // https://eslint.org/docs/rules/no-dupe-args
  'no-dupe-args': 'error',

  // Disallow duplicate class members
  // https://eslint.org/docs/rules/no-dupe-class-members
  'no-dupe-class-members': 'error',

  // Disallow duplicate conditions in if-else-if chains
  // https://eslint.org/docs/rules/no-dupe-else-if
  'no-dupe-else-if': 'error',

  // Disallow duplicate keys in object literals
  // https://eslint.org/docs/rules/no-dupe-keys
  'no-dupe-keys': 'error',

  // Disallow duplicate case labels
  // https://eslint.org/docs/rules/no-duplicate-case
  'no-duplicate-case': 'error',

  // Disallow duplicate module imports
  // https://eslint.org/docs/rules/no-duplicate-imports
  // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  'no-duplicate-imports': 'off',

  // Disallow empty character classes in regular expressions
  // https://eslint.org/docs/rules/no-empty-character-class
  'no-empty-character-class': 'error',

  // Disallow empty destructuring patterns
  // https://eslint.org/docs/rules/no-empty-pattern
  'no-empty-pattern': 'error',

  // Disallow reassigning exceptions in catch clauses
  // https://eslint.org/docs/rules/no-ex-assign
  'no-ex-assign': 'error',

  // Disallow fallthrough of case statements
  // https://eslint.org/docs/rules/no-fallthrough
  'no-fallthrough': 'error',

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

  // Disallow irregular whitespace (except strings)
  // https://eslint.org/docs/rules/no-irregular-whitespace
  'no-irregular-whitespace': [
    'error',
    {
      skipStrings: true, // (default) allows any whitespace characters in string literals
      skipComments: false, // allows any whitespace characters in comments
      skipRegExps: false, // allows any whitespace characters in regular expression literals
      skipTemplates: false, // allows any whitespace characters in template literals
      skipJSXText: false, // allows any whitespace characters in JSX text
    },
  ],

  // Disallow literal numbers that lose precision
  // https://eslint.org/docs/rules/no-loss-of-precision
  'no-loss-of-precision': 'error',

  // Disallow characters which are made with multiple code points in character class syntax
  // https://eslint.org/docs/rules/no-misleading-character-class
  'no-misleading-character-class': 'error',

  // TODO missing no-new-native-nonconstructor

  // Disallow calling global object properties as functions
  // https://eslint.org/docs/rules/no-obj-calls
  'no-obj-calls': 'error',

  // Disallow returning values from Promise executor functions
  // https://eslint.org/docs/rules/no-promise-executor-return
  'no-promise-executor-return': 'error',

  // Disallow calling some Object.prototype methods directly on objects
  // https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'error',

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

  // Disallow returning values from setters
  // https://eslint.org/docs/rules/no-setter-return
  'no-setter-return': 'error',

  // Disallow sparse arrays
  // https://eslint.org/docs/rules/no-sparse-arrays
  'no-sparse-arrays': 'error',

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  'no-template-curly-in-string': 'error',

  // Disallow this/super before calling super() in constructors
  // https://eslint.org/docs/rules/no-this-before-super
  'no-this-before-super': 'error',

  // Disallow the use of undeclared variables unless mentioned in /*global */ comments
  // https://eslint.org/docs/rules/no-undef
  'no-undef': 'error',

  // Disallow confusing multiline expressions
  // https://eslint.org/docs/rules/no-unexpected-multiline
  // decision: disabled because this is a formatter concern
  'no-unexpected-multiline': 'off',

  // Disallow unmodified loop conditions
  // https://eslint.org/docs/rules/no-unmodified-loop-condition
  'no-unmodified-loop-condition': 'off',

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

  // Disallow Unused Private Class Members
  // https://eslint.org/docs/rules/no-unused-private-class-members
  'no-unused-private-class-members': 'error',

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

  // TODO missing  no-useless-assignment

  // Disallow useless backreferences in regular expressions
  // https://eslint.org/docs/rules/no-useless-backreference
  'no-useless-backreference': 'error',

  // Disallow assignments that can lead to race conditions due to usage of await or yield
  // https://eslint.org/docs/rules/require-atomic-updates
  // decision: not enabled because it is very buggy
  'require-atomic-updates': 'off',

  // Require calls to isNaN() when checking for NaN
  // https://eslint.org/docs/rules/use-isnan
  'use-isnan': 'error',

  // Enforce comparing typeof expressions against valid strings
  // https://eslint.org/docs/rules/valid-typeof
  'valid-typeof': ['error', { requireStringLiterals: true }],

  // Suggestions

  // Enforce getter and setter pairs in objects and classes
  // https://eslint.org/docs/rules/accessor-pairs
  'accessor-pairs': 'error',

  // Require braces around arrow function bodies
  // https://eslint.org/docs/rules/arrow-body-style
  // decision: small preferance for immediate returns but if we enfore it can lead to a frustrating
  // developer experience where code may be autocorrected in the middle of debugging a function;
  'arrow-body-style': 'off',

  // Enforce the use of variables within the scope they are defined
  // https://eslint.org/docs/rules/block-scoped-var
  'block-scoped-var': 'error',

  // Enforce camelcase naming convention
  // https://eslint.org/docs/rules/camelcase
  camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

  // Enforce or disallow capitalization of the first letter of a comment
  // https://eslint.org/docs/rules/capitalized-comments
  // decision: turned off to allow flexibility in comments
  'capitalized-comments': 'off',

  // Enforce that class methods utilize this
  // https://eslint.org/docs/rules/class-methods-use-this
  'class-methods-use-this': 'error',

  // Enforce a maximum cyclomatic complexity allowed in a program
  // https://eslint.org/docs/rules/complexity
  // decision: this can be accomplished better by other tools
  complexity: ['off', 20],

  // Require return statements to either always or never specify values
  // https://eslint.org/docs/rules/consistent-return
  'consistent-return': 'error',

  // Enforce consistent naming when capturing the current execution context
  // https://eslint.org/docs/rules/consistent-this
  // decision: best left up to the implementer
  'consistent-this': 'off',

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

  // Require function names to match the name of the variable or property to which they are assigned
  // https://eslint.org/docs/rules/func-name-matching
  // decision: best left up to the implementer
  'func-name-matching': 'off',

  // Require or disallow named function expressions
  // https://eslint.org/docs/rules/func-names
  'func-names': ['error', 'always'],

  // Enforce the consistent use of either function declarations or expressions assigned to variables
  // https://eslint.org/docs/rules/func-style
  'func-style': ['error', 'expression'],

  // Enforce grouped accessor pairs in object literals and classes
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': 'error',

  // Require for-in loops to include an if statement
  // https://eslint.org/docs/rules/guard-for-in
  'guard-for-in': 'error',

  // Disallow specified identifiers
  // https://eslint.org/docs/rules/id-denylist
  'id-denylist': 'off',

  // Enforce minimum and maximum identifier lengths
  // decision: enabled to avoid using ambiguous `e` for `event` or `error` variables
  // https://eslint.org/docs/rules/id-length
  'id-length': ['error', { min: 2, exceptions: ['_', 'i', 'j', 'x', 'y'] }],

  // Require identifiers to match a specified regular expression
  // https://eslint.org/docs/rules/id-match
  'id-match': 'off',

  // Require or disallow initialization in variable declarations
  // https://eslint.org/docs/rules/init-declarations
  'init-declarations': 'off',

  // Require or disallow logical assignment operator shorthand
  // https://eslint.org/docs/rules/logical-assignment-operators
  'logical-assignment-operators': ['error', 'always'],

  // Enforce a maximum number of classes per file
  // https://eslint.org/docs/rules/max-classes-per-file
  'max-classes-per-file': ['error', 1],

  // Enforce a maximum depth that blocks can be nested
  // https://eslint.org/docs/rules/max-depth
  // decision: best left up to the implementer
  'max-depth': ['off', 4],

  // Enforce a maximum number of lines per file
  // https://eslint.org/docs/rules/max-lines
  // decision: best left up to the implementer
  'max-lines': [
    'off',
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    },
  ],

  // Enforce a maximum number of lines of code in a function
  // https://eslint.org/docs/rules/max-lines-per-function
  // decision: best left up to the implementer
  'max-lines-per-function': 'off',

  // Enforce a maximum depth that callbacks can be nested
  // https://eslint.org/docs/rules/max-nested-callbacks
  // decision: best left up to the implementer
  'max-nested-callbacks': 'off',

  // Enforce a maximum number of parameters in function definitions
  // https://eslint.org/docs/rules/max-params
  // decision: best left up to the implementer
  'max-params': ['off', 3],

  // Enforce a maximum number of statements allowed in function blocks
  // https://eslint.org/docs/rules/max-statements
  // decision: best left up to the implementer
  'max-statements': ['off', 10],

  // Require constructor names to begin with a capital letter
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

  // Disallow the use of alert, confirm, and prompt
  // https://eslint.org/docs/rules/no-alert
  'no-alert': 'error',

  // Disallow Array constructors
  // https://eslint.org/docs/rules/no-array-constructor
  'no-array-constructor': 'error',

  // Disallow bitwise operators
  // https://eslint.org/docs/rules/no-bitwise
  'no-bitwise': 'error',

  // Disallow the use of arguments.caller or arguments.callee
  // https://eslint.org/docs/rules/no-caller
  'no-caller': 'error',

  // Disallow lexical declarations in case clauses
  // https://eslint.org/docs/rules/no-case-declarations
  'no-case-declarations': 'error',

  // Disallow the use of console
  // https://eslint.org/docs/rules/no-console
  'no-console': 'error',

  // Disallow continue statements
  // https://eslint.org/docs/rules/no-continue
  'no-continue': 'error',

  // Disallow deleting variables
  // https://eslint.org/docs/rules/no-delete-var
  'no-delete-var': 'error',

  // Disallow equal signs explicitly at the beginning of regular expressions
  // https://eslint.org/docs/rules/no-div-regex
  'no-div-regex': 'off',

  // Disallow else blocks after return statements in if statements
  // https://eslint.org/docs/rules/no-else-return
  'no-else-return': ['error', { allowElseIf: false }],

  // Disallow empty block statements
  // https://eslint.org/docs/rules/no-empty
  'no-empty': 'error',

  // Disallow empty functions, except for standalone funcs/arrows
  // https://eslint.org/docs/rules/no-empty-function
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],

  // TODO missing no-empty-static-block

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

  // Disallow unnecessary boolean casts
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': 'error',

  // Disallow unnecessary labels
  // https://eslint.org/docs/rules/no-extra-label
  'no-extra-label': 'error',

  // Disallow assignments to native objects or read-only global variables
  // https://eslint.org/docs/rules/no-global-assign
  'no-global-assign': ['error', { exceptions: [] }],

  // Disallow shorthand type conversions
  // https://eslint.org/docs/rules/no-implicit-coercion
  'no-implicit-coercion': 'error',

  // Disallow declarations in the global scope
  // https://eslint.org/docs/rules/no-implicit-globals
  'no-implicit-globals': 'error',

  // Disallow the use of eval()-like methods
  // https://eslint.org/docs/rules/no-implied-eval
  'no-implied-eval': 'error',

  // Disallow inline comments after code
  // https://eslint.org/docs/rules/no-inline-comments
  // decision: this can be useful for readability in some cases
  'no-inline-comments': 'off',

  // Disallow use of this in contexts where the value of this is undefined
  // https://eslint.org/docs/rules/no-invalid-this
  'no-invalid-this': 'error',

  // Disallow the use of the __iterator__ property
  // https://eslint.org/docs/rules/no-iterator
  'no-iterator': 'error',

  // Disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  'no-label-var': 'error',

  // Disallow labeled statements
  // https://eslint.org/docs/rules/no-labels
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

  // TODO missing no-lone-blocks

  // Disallow if statements as the only statement in else blocks
  // https://eslint.org/docs/rules/no-lonely-if
  'no-lonely-if': 'error',

  // Disallow function declarations that contain unsafe references inside loop statements
  // https://eslint.org/docs/rules/no-loop-func
  'no-loop-func': 'error',

  // Disallow magic numbers
  // https://eslint.org/docs/rules/no-magic-numbers
  // decision: there's a typescript rule for this
  'no-magic-numbers': 'off',

  // Disallow use of chained assignment expressions
  // https://eslint.org/docs/rules/no-multi-assign
  'no-multi-assign': ['error'],

  // Disallow multiline strings
  // https://eslint.org/docs/rules/no-multi-str
  'no-multi-str': 'error',

  // Disallow negated conditions
  // https://eslint.org/docs/rules/no-negated-condition
  // decision: best left up to the implementer
  'no-negated-condition': 'off',

  // Disallow nested ternary expressions
  // https://eslint.org/docs/rules/no-nested-ternary
  'no-nested-ternary': 'error',

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

  // Disallow calls to the Object constructor without an argument
  // https://eslint.org/docs/latest/rules/no-object-constructor
  'no-object-constructor': 'error',

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

  // Disallow the unary operators ++ and -- (except in for loops)
  // https://eslint.org/docs/rules/no-plusplus
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

  // Disallow the use of the __proto__ property
  // https://eslint.org/docs/rules/no-proto
  'no-proto': 'error',

  // Disallow variable redeclaration
  // https://eslint.org/docs/rules/no-redeclare
  'no-redeclare': 'error',

  // Disallow multiple spaces in regular expressions
  // https://eslint.org/docs/rules/no-regex-spaces
  'no-regex-spaces': 'error',

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
  // decision: this needs to be decided per project/repo
  'no-restricted-imports': 'off',

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

  // Disallow specified syntax
  // https://eslint.org/docs/rules/no-restricted-syntax
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
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

  // Disallow assignment operators in return statements
  // https://eslint.org/docs/rules/no-return-assign
  'no-return-assign': ['error', 'always'],

  // disallow use of `javascript:` urls.
  // https://eslint.org/docs/rules/no-script-url
  'no-script-url': 'error',

  // Disallow comma operators
  // https://eslint.org/docs/rules/no-sequences
  'no-sequences': 'error',

  // Disallow variable declarations from shadowing variables declared in the outer scope
  // https://eslint.org/docs/rules/no-shadow
  'no-shadow': 'error',

  // Disallow identifiers from shadowing restricted names
  // https://eslint.org/docs/rules/no-shadow-restricted-names
  'no-shadow-restricted-names': 'error',

  // Disallow ternary operators
  // https://eslint.org/docs/rules/no-ternary
  // decision: best left up to the implementer
  'no-ternary': 'off',

  // Disallow throwing literals as exceptions
  // https://eslint.org/docs/rules/no-throw-literal
  'no-throw-literal': 'error',

  // Disallow initializing variables to undefined
  // https://eslint.org/docs/rules/no-undef-init
  'no-undef-init': 'error',

  // Disallow the use of undefined as an identifier
  // https://eslint.org/docs/rules/no-undefined
  'no-undefined': 'off',

  // Disallow dangling underscores in identifiers
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

  // Disallow ternary operators when simpler alternatives exist (ie. `a || b` over `a ? a : b`)
  // https://eslint.org/docs/rules/no-unneeded-ternary
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

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

  // Disallow unnecessary computed property keys in objects and classes
  // https://eslint.org/docs/rules/no-useless-computed-key
  'no-useless-computed-key': 'error',

  // Disallow unnecessary concatenation of literals or template literals
  // https://eslint.org/docs/rules/no-useless-concat
  'no-useless-concat': 'error',

  // Disallow unnecessary constructors
  // https://eslint.org/docs/rules/no-useless-constructor
  'no-useless-constructor': 'error',

  // Disallow unnecessary escape characters
  // https://eslint.org/docs/rules/no-useless-escape
  'no-useless-escape': 'error',

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

  // Disallow redundant return statements
  // https://eslint.org/docs/rules/no-useless-return
  'no-useless-return': 'error',

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

  // Enforce variables to be declared either together or separately in functions
  // https://eslint.org/docs/rules/one-var
  'one-var': ['error', 'never'],

  // Require or disallow assignment operator shorthand where possible
  // https://eslint.org/docs/rules/operator-assignment
  'operator-assignment': ['error', 'always'],

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

  // Disallow the use of Math.pow in favor of the ** operator
  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  'prefer-exponentiation-operator': 'error',

  // Enforce using named capture group in regular expression
  // https://eslint.org/docs/rules/prefer-named-capture-group
  'prefer-named-capture-group': 'off',

  // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
  // https://eslint.org/docs/rules/prefer-numeric-literals
  'prefer-numeric-literals': 'error',

  // Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn()
  // https://eslint.org/docs/rules/prefer-object-has-own
  'prefer-object-has-own': 'error',

  // Prefer use of an object spread over Object.assign
  // https://eslint.org/docs/rules/prefer-object-spread
  'prefer-object-spread': 'error',

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
      allowSeparatedGroups: false,
    },
  ],

  // Require object keys to be sorted
  // https://eslint.org/docs/rules/sort-keys
  'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

  // Require variables within the same declaration block to be sorted
  // https://eslint.org/docs/rules/sort-vars
  'sort-vars': 'off',

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

  // Layout & Formatting

  // Require or disallow Unicode byte order mark (BOM)
  // https://eslint.org/docs/rules/unicode-bom
  'unicode-bom': ['error', 'never'],
};
