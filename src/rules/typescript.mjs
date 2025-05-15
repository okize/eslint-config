// only add typescript rules
// see: https://typescript-eslint.io/rules/

export default {
  // the following rules are deliberately disabled (as they may be inherited from other rulesets (eg. best-practices.cjs)) because
  // they have equivalent rules below that are considered "extension rules" by @typescript-eslint

  // prefer @typescript-eslint/block-spacing
  'block-spacing': 'off',

  // prefer @typescript-eslint/class-methods-use-this
  'class-methods-use-this': 'off',

  // prefer @typescript-eslint/default-param-last
  'default-param-last': 'off',

  // prefer @typescript-eslint/dot-notation
  'dot-notation': 'off',

  // prefer @typescript-eslint/init-declarations
  'init-declarations': 'off',

  // prefer @typescript-eslint/key-spacing
  'key-spacing': 'off',

  // prefer @typescript-eslint/lines-around-comment
  'lines-around-comment': 'off',

  // prefer @typescript-eslint/max-params
  'max-params': 'off',

  // prefer @typescript-eslint/no-array-constructor
  'no-array-constructor': 'off',

  // prefer @typescript-eslint/no-dupe-class-members
  'no-dupe-class-members': 'off',

  // prefer @typescript-eslint/no-empty-function
  'no-empty-function': 'off',

  // prefer @typescript-eslint/no-extra-semi
  'no-extra-semi': 'off',

  // prefer @typescript-eslint/no-implied-eval
  'no-implied-eval': 'off',

  // prefer @typescript-eslint/no-invalid-this
  'no-invalid-this': 'off',

  // prefer @typescript-eslint/no-loop-func
  'no-loop-func': 'off',

  // prefer @typescript-eslint/no-loss-of-precision
  'no-loss-of-precision': 'off',

  // prefer @typescript-eslint/no-magic-numbers
  'no-magic-numbers': 'off',

  // prefer @typescript-eslint/no-redeclare
  'no-redeclare': 'off',

  // prefer @typescript-eslint/no-restricted-imports
  'no-restricted-imports': 'off',

  // prefer @typescript-eslint/no-shadow
  'no-shadow': 'off',

  // prefer @typescript-eslint/only-throw-error
  'no-throw-literal': 'off',

  // prefer @typescript-eslint/no-unused-expressions
  'no-unused-expressions': 'off',

  // prefer @typescript-eslint/no-unused-vars
  'no-unused-vars': 'off',

  // prefer @typescript-eslint/no-use-before-define
  'no-use-before-define': 'off',

  // prefer @typescript-eslint/no-useless-constructor
  'no-useless-constructor': 'off',

  // prefer @typescript-eslint/require-await
  'require-await': 'off',

  // prefer @typescript-eslint/return-await
  'no-return-await': 'off',

  // recommended to be disabled for TypeScript projects
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
  'no-undef': 'off',

  // allow void to be used as a statement
  // i.e. when it's not used in an expression position, like in a variable assignment or a function return
  // https://eslint.org/docs/rules/no-void
  'no-void': ['error', { allowAsStatement: true }],

  // ban enums; enum values are assigned unless explicitly set, so the value of the enum can change unexpectedly
  'no-restricted-syntax': [
    'error',
    {
      selector: 'TSEnumDeclaration',
      message:
        'Typescript enums are problematic because the values can change when new keys are added to an enum. Prefer a type of unioned strings in place of an enum type.',
    },
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

  // prefer @typescript-eslint/prefer-destructuring
  'prefer-destructuring': 'off',

  // Require that function overload signatures be consecutive
  // https://typescript-eslint.io/rules/adjacent-overload-signatures
  '@typescript-eslint/adjacent-overload-signatures': 'error',

  // Require consistently using either T[] or Array<T> for arrays
  // https://typescript-eslint.io/rules/array-type
  '@typescript-eslint/array-type': 'error',

  // Disallow awaiting a value that is not a Thenable
  // https://typescript-eslint.io/rules/await-thenable
  '@typescript-eslint/await-thenable': 'error',

  // Disallow @ts-<directive> comments or require descriptions after directives
  // https://typescript-eslint.io/rules/ban-ts-comment
  '@typescript-eslint/ban-ts-comment': 'error',

  // Disallow // tslint:<rule-flag> comments
  // https://typescript-eslint.io/rules/ban-tslint-comment
  '@typescript-eslint/ban-tslint-comment': 'error',

  // Enforce that literals on classes are exposed in a consistent style
  // https://typescript-eslint.io/rules/class-literal-property-style
  '@typescript-eslint/class-literal-property-style': 'error',

  // Enforce that class methods utilize this
  // https://typescript-eslint.io/rules/class-methods-use-this
  // decision: we disable this rule for javascript
  '@typescript-eslint/class-methods-use-this': 'off',

  // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
  // https://typescript-eslint.io/rules/consistent-generic-constructors
  '@typescript-eslint/consistent-generic-constructors': 'error',

  // Require or disallow the Record type
  // https://typescript-eslint.io/rules/consistent-indexed-object-style
  '@typescript-eslint/consistent-indexed-object-style': 'error',

  // Require return statements to either always or never specify values
  // https://typescript-eslint.io/rules/consistent-return
  // decision: it is recommended to use tsconfig's `noImplicitReturns` option rather than this rule
  '@typescript-eslint/consistent-return': 'off',

  // Enforce consistent usage of type assertions
  // https://typescript-eslint.io/rules/consistent-type-assertions
  '@typescript-eslint/consistent-type-assertions': 'error',

  // Enforce type definitions to consistently use either interface or type
  // https://typescript-eslint.io/rules/consistent-type-definitions
  // decision: prefer type to interface for consistency; type is more flexible, but
  // on the other hand, interface is potentially more familiar so they can override if necessary
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

  // Enforce consistent usage of type exports
  // https://typescript-eslint.io/rules/consistent-type-exports
  '@typescript-eslint/consistent-type-exports': 'error',

  // Enforce consistent usage of type imports
  // https://typescript-eslint.io/rules/consistent-type-imports
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
  ],

  // Enforce default parameters to be last
  // https://typescript-eslint.io/rules/default-param-last
  '@typescript-eslint/default-param-last': 'error',

  // Enforce dot notation whenever possible
  // https://typescript-eslint.io/rules/dot-notation
  '@typescript-eslint/dot-notation': 'error',

  // Require explicit return types on functions and class methods
  // https://typescript-eslint.io/rules/explicit-function-return-type
  '@typescript-eslint/explicit-function-return-type': 'off',

  // Require explicit accessibility modifiers on class properties and methods
  // https://typescript-eslint.io/rules/explicit-member-accessibility
  '@typescript-eslint/explicit-member-accessibility': 'error',

  // Require explicit return and argument types on exported functions' and classes' public class methods
  // https://typescript-eslint.io/rules/explicit-module-boundary-types
  '@typescript-eslint/explicit-module-boundary-types': 'error',

  // Require or disallow initialization in variable declarations
  // https://typescript-eslint.io/rules/init-declarations
  '@typescript-eslint/init-declarations': 'error',

  // Enforce a maximum number of parameters in function definitions
  // https://typescript-eslint.io/rules/max-params
  // decision: we disable this rule for javascript
  '@typescript-eslint/max-params': ['off', 3],

  // Require a consistent member declaration order
  // https://typescript-eslint.io/rules/member-ordering
  '@typescript-eslint/member-ordering': 'error',

  // Enforce using a particular method signature syntax
  // https://typescript-eslint.io/rules/method-signature-style
  '@typescript-eslint/method-signature-style': 'error',

  // Enforce naming conventions for everything across a codebase
  // https://typescript-eslint.io/rules/naming-convention
  '@typescript-eslint/naming-convention': 'off',

  // Disallow generic Array constructors
  // https://typescript-eslint.io/rules/no-array-constructor
  '@typescript-eslint/no-array-constructor': 'error',

  // Disallow using the delete operator on array values
  // https://typescript-eslint.io/rules/no-array-delete
  '@typescript-eslint/no-array-delete': 'error',

  // Require .toString() to only be called on objects which provide useful information when stringified
  // https://typescript-eslint.io/rules/no-base-to-string
  '@typescript-eslint/no-base-to-string': 'error',

  // Disallow non-null assertion in locations that may be confusing
  // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',

  // Require expressions of type void to appear in statement position
  // https://typescript-eslint.io/rules/no-confusing-void-expression
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    {
      ignoreArrowShorthand: true,
    },
  ],

  // Disallow duplicate class members
  // https://typescript-eslint.io/rules/no-dupe-class-members
  '@typescript-eslint/no-dupe-class-members': 'error',

  // Disallow duplicate enum member values
  // https://typescript-eslint.io/rules/no-duplicate-enum-values
  '@typescript-eslint/no-duplicate-enum-values': 'error',

  // Disallow duplicate constituents of union or intersection types
  // https://typescript-eslint.io/rules/no-duplicate-type-constituents
  '@typescript-eslint/no-duplicate-type-constituents': 'error',

  // Disallow using the delete operator on computed key expressions
  // https://typescript-eslint.io/rules/no-dynamic-delete
  '@typescript-eslint/no-dynamic-delete': 'error',

  // Disallow empty functions
  // https://typescript-eslint.io/rules/no-empty-function
  '@typescript-eslint/no-empty-function': 'error',

  // Disallow the declaration of empty interfaces
  // https://typescript-eslint.io/rules/no-empty-interface
  // decision: this rule has been deprecated in favour of the more comprehensive @typescript-eslint/no-empty-object-type rule
  '@typescript-eslint/no-empty-interface': 'off',

  // Disallow accidentally using the "empty object" type
  // https://typescript-eslint.io/rules/no-empty-object-type
  '@typescript-eslint/no-empty-object-type': 'error',

  // Disallow the any type
  // https://typescript-eslint.io/rules/no-explicit-any
  '@typescript-eslint/no-explicit-any': 'error',

  // Disallow extra non-null assertions
  // https://typescript-eslint.io/rules/no-extra-non-null-assertion
  '@typescript-eslint/no-extra-non-null-assertion': 'error',

  // Disallow classes used as namespaces
  // https://typescript-eslint.io/rules/no-extraneous-class
  '@typescript-eslint/no-extraneous-class': 'error',

  // Require Promise-like statements to be handled appropriately
  // https://typescript-eslint.io/rules/no-floating-promises
  '@typescript-eslint/no-floating-promises': 'error',

  // Disallow iterating over an array with a for-in loop
  // https://typescript-eslint.io/rules/no-for-in-array
  '@typescript-eslint/no-for-in-array': 'error',

  // Disallow the use of eval()-like methods
  // https://typescript-eslint.io/rules/no-implied-eval
  '@typescript-eslint/no-implied-eval': 'error',

  // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
  // https://typescript-eslint.io/rules/no-import-type-side-effects
  '@typescript-eslint/no-import-type-side-effects': 'error',

  // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
  // https://typescript-eslint.io/rules/no-inferrable-types
  '@typescript-eslint/no-inferrable-types': 'error',

  // Disallow this keywords outside of classes or class-like objects
  // https://typescript-eslint.io/rules/no-invalid-this
  '@typescript-eslint/no-invalid-this': 'error',

  // Disallow void type outside of generic or return types
  // https://typescript-eslint.io/rules/no-invalid-void-type
  '@typescript-eslint/no-invalid-void-type': 'error',

  // Disallow function declarations that contain unsafe references inside loop statements
  // https://typescript-eslint.io/rules/no-loop-func
  '@typescript-eslint/no-loop-func': 'error',

  // Disallow literal numbers that lose precision
  // https://typescript-eslint.io/rules/no-loss-of-precision
  '@typescript-eslint/no-loss-of-precision': 'error',

  // Disallow magic numbers
  // https://typescript-eslint.io/rules/no-magic-numbers
  '@typescript-eslint/no-magic-numbers': [
    'error',
    {
      ignore: [-1, 0, 1, 2, 3, 4, 5, 100, 1024, 1000, 10000],
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
      ignoreTypeIndexes: true,
      ignoreReadonlyClassProperties: true,
      ignoreEnums: true,
      ignoreNumericLiteralTypes: true,
    },
  ],

  // Disallow the void operator except when used to discard a value
  // https://typescript-eslint.io/rules/no-meaningless-void-operator
  '@typescript-eslint/no-meaningless-void-operator': 'error',

  // Enforce valid definition of new and constructor
  // https://typescript-eslint.io/rules/no-misused-new
  '@typescript-eslint/no-misused-new': 'error',

  // Disallow Promises in places not designed to handle them
  // https://typescript-eslint.io/rules/no-misused-promises
  '@typescript-eslint/no-misused-promises': 'error',

  // Disallow enums from having both number and string members
  // https://typescript-eslint.io/rules/no-mixed-enums
  '@typescript-eslint/no-mixed-enums': 'error',

  // Disallow TypeScript namespaces
  // https://typescript-eslint.io/rules/no-namespace
  '@typescript-eslint/no-namespace': 'error',

  // Disallow non-null assertions in the left operand of a nullish coalescing operator
  // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

  // Disallow non-null assertions after an optional chain expression
  // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

  // Disallow non-null assertions using the ! postfix operator
  // https://typescript-eslint.io/rules/no-non-null-assertion
  '@typescript-eslint/no-non-null-assertion': 'error',

  // Disallow variable redeclaration
  // https://typescript-eslint.io/rules/no-redeclare
  '@typescript-eslint/no-redeclare': 'error',

  // Disallow members of unions and intersections that do nothing or override type information
  // https://typescript-eslint.io/rules/no-redundant-type-constituents
  '@typescript-eslint/no-redundant-type-constituents': 'error',

  // Disallow invocation of require()
  // https://typescript-eslint.io/rules/no-require-imports
  '@typescript-eslint/no-require-imports': 'error',

  // Disallow specified modules when loaded by import
  // https://typescript-eslint.io/rules/no-restricted-imports
  '@typescript-eslint/no-restricted-imports': 'error',

  // Disallow certain types
  // https://typescript-eslint.io/rules/no-restricted-types
  '@typescript-eslint/no-restricted-types': 'error',

  // Disallow variable declarations from shadowing variables declared in the outer scope
  // https://typescript-eslint.io/rules/no-shadow
  '@typescript-eslint/no-shadow': 'error',

  // Disallow aliasing this
  // https://typescript-eslint.io/rules/no-this-alias
  '@typescript-eslint/no-this-alias': 'error',

  // Disallow type aliases
  // https://typescript-eslint.io/rules/no-type-alias
  // decision: this rule has been deprecated in favour of the @typescript-eslint/consistent-type-definitions rule
  '@typescript-eslint/no-type-alias': 'off',

  // Disallow unnecessary equality comparisons against boolean literals
  // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

  // Disallow conditionals where the type is always truthy or always falsy
  // https://typescript-eslint.io/rules/no-unnecessary-condition
  '@typescript-eslint/no-unnecessary-condition': 'error',

  // Disallow unnecessary assignment of constructor property parameter
  // https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
  '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',

  // Disallow unnecessary namespace qualifiers
  // https://typescript-eslint.io/rules/no-unnecessary-qualifier
  '@typescript-eslint/no-unnecessary-qualifier': 'error',

  // Disallow unnecessary template expressions
  // https://typescript-eslint.io/rules/no-unnecessary-template-expression
  '@typescript-eslint/no-unnecessary-template-expression': 'error',

  // Disallow type arguments that are equal to the default
  // https://typescript-eslint.io/rules/no-unnecessary-type-arguments
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',

  // Disallow type assertions that do not change the type of an expression
  // https://typescript-eslint.io/rules/no-unnecessary-type-assertion
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',

  // Disallow unnecessary constraints on generic types
  // https://typescript-eslint.io/rules/no-unnecessary-type-constraint
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',

  // Disallow type parameters that only appear once
  // https://typescript-eslint.io/rules/no-unnecessary-type-parameters
  '@typescript-eslint/no-unnecessary-type-parameters': 'error',

  // Disallow calling a function with a value with type any
  // https://typescript-eslint.io/rules/no-unsafe-argument
  '@typescript-eslint/no-unsafe-argument': 'error',

  // Disallow assigning a value with type any to variables and properties
  // https://typescript-eslint.io/rules/no-unsafe-assignment
  '@typescript-eslint/no-unsafe-assignment': 'error',

  // Disallow calling a value with type any
  // https://typescript-eslint.io/rules/no-unsafe-call
  '@typescript-eslint/no-unsafe-call': 'error',

  // Disallow unsafe declaration merging
  // https://typescript-eslint.io/rules/no-unsafe-declaration-merging
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',

  // Disallow comparing an enum value with a non-enum value
  // https://typescript-eslint.io/rules/no-unsafe-enum-comparison
  '@typescript-eslint/no-unsafe-enum-comparison': 'error',

  // Disallow using the unsafe built-in Function type
  // https://typescript-eslint.io/rules/no-unsafe-function-type
  '@typescript-eslint/no-unsafe-function-type': 'error',

  // Disallow member access on a value with type any
  // https://typescript-eslint.io/rules/no-unsafe-member-access
  '@typescript-eslint/no-unsafe-member-access': 'error',

  // Disallow returning a value with type any from a function
  // https://typescript-eslint.io/rules/no-unsafe-return
  '@typescript-eslint/no-unsafe-return': 'error',

  // Require unary negation to take a number
  // https://typescript-eslint.io/rules/no-unsafe-unary-minus
  '@typescript-eslint/no-unsafe-unary-minus': 'error',

  // Disallow unused expressions
  // https://typescript-eslint.io/rules/no-unused-expressions
  '@typescript-eslint/no-unused-expressions': 'error',

  // Disallow unused variables
  // https://typescript-eslint.io/rules/no-unused-vars
  // decision: emulate the TypeScript style of exempting names starting with _
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],

  // Disallow the use of variables before they are defined
  // https://typescript-eslint.io/rules/no-use-before-define
  '@typescript-eslint/no-use-before-define': 'error',

  // Disallow unnecessary constructors
  // https://typescript-eslint.io/rules/no-useless-constructor
  '@typescript-eslint/no-useless-constructor': 'error',

  // Disallow empty exports that don't change anything in a module file
  // https://typescript-eslint.io/rules/no-useless-empty-export
  '@typescript-eslint/no-useless-empty-export': 'error',

  // Disallow require statements except in import statements
  // https://typescript-eslint.io/rules/no-var-requires
  // decision: this rule has been deprecated in favour of the @typescript-eslint/no-require-imports rule.
  '@typescript-eslint/no-var-requires': 'off',

  // Disallow using confusing built-in primitive class wrappers
  // https://typescript-eslint.io/rules/no-wrapper-object-types
  '@typescript-eslint/no-wrapper-object-types': 'error',

  // Enforce non-null assertions over explicit type casts
  // https://typescript-eslint.io/rules/non-nullable-type-assertion-style
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',

  // Disallow throwing non-Error values as exceptions
  // https://typescript-eslint.io/rules/only-throw-error
  '@typescript-eslint/only-throw-error': 'error',

  // Require or disallow parameter properties in class constructors
  // https://typescript-eslint.io/rules/parameter-properties
  '@typescript-eslint/parameter-properties': 'error',

  // Enforce the use of as const over literal type
  // https://typescript-eslint.io/rules/prefer-as-const
  '@typescript-eslint/prefer-as-const': 'error',

  // Require destructuring from arrays and/or objects
  // https://typescript-eslint.io/rules/prefer-destructuring
  '@typescript-eslint/prefer-destructuring': [
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

  // Require each enum member value to be explicitly initialized
  // https://typescript-eslint.io/rules/prefer-enum-initializers
  '@typescript-eslint/prefer-enum-initializers': 'error',

  // Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
  // https://typescript-eslint.io/rules/prefer-find
  '@typescript-eslint/prefer-find': 'error',

  // Enforce the use of for-of loop over the standard for loop where possible
  // https://typescript-eslint.io/rules/prefer-for-of
  '@typescript-eslint/prefer-for-of': 'error',

  // Enforce using function types instead of interfaces with call signatures
  // https://typescript-eslint.io/rules/prefer-function-type
  '@typescript-eslint/prefer-function-type': 'error',

  // Enforce includes method over indexOf method
  // https://typescript-eslint.io/rules/prefer-includes
  '@typescript-eslint/prefer-includes': 'error',

  // Require all enum members to be literal values
  // https://typescript-eslint.io/rules/prefer-literal-enum-member
  '@typescript-eslint/prefer-literal-enum-member': 'error',

  // Require using namespace keyword over module keyword to declare custom TypeScript modules
  // https://typescript-eslint.io/rules/prefer-namespace-keyword
  '@typescript-eslint/prefer-namespace-keyword': 'error',

  // Enforce using the nullish coalescing operator instead of logical assignments or chaining
  // https://typescript-eslint.io/rules/prefer-nullish-coalescing
  '@typescript-eslint/prefer-nullish-coalescing': 'error',

  // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
  // https://typescript-eslint.io/rules/prefer-optional-chain
  '@typescript-eslint/prefer-optional-chain': 'error',

  // Require using Error objects as Promise rejection reasons
  // https://typescript-eslint.io/rules/prefer-promise-reject-errors
  '@typescript-eslint/prefer-promise-reject-errors': 'error',

  // Require private members to be marked as readonly if they're never modified outside of the constructor
  // https://typescript-eslint.io/rules/prefer-readonly
  '@typescript-eslint/prefer-readonly': 'error',

  // Require function parameters to be typed as readonly to prevent accidental mutation of inputs
  // https://typescript-eslint.io/rules/prefer-readonly-parameter-types
  // disabled due to development friction and lackluster linting hints to resolve violations
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',

  // Enforce using type parameter when calling Array#reduce instead of casting
  // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',

  // Enforce RegExp#exec over String#match if no global flag is provided
  // https://typescript-eslint.io/rules/prefer-regexp-exec
  '@typescript-eslint/prefer-regexp-exec': 'error',

  // Enforce that this is used when only this type is returned
  // https://typescript-eslint.io/rules/prefer-return-this-type
  '@typescript-eslint/prefer-return-this-type': 'error',

  // Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings
  // https://typescript-eslint.io/rules/prefer-string-starts-ends-with
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',

  // Enforce using @ts-expect-error over @ts-ignore
  // https://typescript-eslint.io/rules/prefer-ts-expect-error
  // decision: this rule has been deprecated in favor of @typescript-eslint/ban-ts-comment
  '@typescript-eslint/prefer-ts-expect-error': 'off',

  // Require any function or method that returns a Promise to be marked async
  // https://typescript-eslint.io/rules/promise-function-async
  '@typescript-eslint/promise-function-async': 'error',

  // Require Array#sort and Array#toSorted calls to always provide a compareFunction
  // https://typescript-eslint.io/rules/require-array-sort-compare
  '@typescript-eslint/require-array-sort-compare': 'error',

  // Disallow async functions which do not return promises and have no await expression
  // https://typescript-eslint.io/rules/require-await
  '@typescript-eslint/require-await': 'error',

  // Require both operands of addition to be the same type and be bigint, number, or string
  // https://typescript-eslint.io/rules/restrict-plus-operands
  '@typescript-eslint/restrict-plus-operands': 'error',

  // Enforce template literal expressions to be of string type
  // https://typescript-eslint.io/rules/restrict-template-expressions
  '@typescript-eslint/restrict-template-expressions': 'error',

  // Enforce consistent awaiting of returned promises
  // https://typescript-eslint.io/rules/return-await
  '@typescript-eslint/return-await': 'error',

  // Enforce constituents of a type union/intersection to be sorted alphabetically
  // https://typescript-eslint.io/rules/sort-type-constituents
  '@typescript-eslint/sort-type-constituents': 'error',

  // Disallow certain types in boolean expressions
  // https://typescript-eslint.io/rules/strict-boolean-expressions
  '@typescript-eslint/strict-boolean-expressions': [
    'error',
    {
      allowNullableBoolean: true,
    },
  ],

  // Require switch-case statements to be exhaustive
  // https://typescript-eslint.io/rules/switch-exhaustiveness-check
  '@typescript-eslint/switch-exhaustiveness-check': 'error',

  // Disallow certain triple slash directives in favor of ES6-style import declarations
  // https://typescript-eslint.io/rules/triple-slash-reference
  '@typescript-eslint/triple-slash-reference': 'error',

  // Require type annotations in certain places
  // https://typescript-eslint.io/rules/typedef
  '@typescript-eslint/typedef': 'error',

  // Enforce unbound methods are called with their expected scope
  // https://typescript-eslint.io/rules/unbound-method
  '@typescript-eslint/unbound-method': 'error',

  // Disallow two overloads that could be unified into one with a union or an optional/rest parameter
  // https://typescript-eslint.io/rules/unified-signatures
  '@typescript-eslint/unified-signatures': 'error',

  // Enforce typing arguments in .catch() callbacks as unknown
  // https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
  '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',

  // deprecated formating rules; project recommends using ESLint Stylistic (https://eslint.style)

  // Disallow or enforce spaces inside of blocks after opening block and before closing block
  // https://typescript-eslint.io/rules/block-spacing/
  '@typescript-eslint/block-spacing': 'error',

  // Enforce consistent brace style for blocks
  // https://typescript-eslint.io/rules/brace-style
  '@typescript-eslint/brace-style': 'off',

  // Require or disallow trailing commas
  // https://typescript-eslint.io/rules/comma-dangle
  '@typescript-eslint/comma-dangle': 'off',

  // Enforce consistent spacing before and after commas
  // https://typescript-eslint.io/rules/comma-spacing
  '@typescript-eslint/comma-spacing': 'off',

  // Require or disallow spacing between function identifiers and their invocations
  // https://typescript-eslint.io/rules/func-call-spacing
  '@typescript-eslint/func-call-spacing': 'off',

  // Enforce consistent indentation
  // https://typescript-eslint.io/rules/indent
  '@typescript-eslint/indent': 'off',

  // Enforce consistent spacing between property names and type annotations in types and interfaces
  // https://typescript-eslint.io/rules/key-spacing/
  '@typescript-eslint/key-spacing': 'error',

  // Enforce consistent spacing before and after keywords
  // https://typescript-eslint.io/rules/keyword-spacing
  '@typescript-eslint/keyword-spacing': 'off',

  // Require empty lines around comments
  // https://typescript-eslint.io/rules/lines-around-comment/
  '@typescript-eslint/lines-around-comment': 'error',

  // Require or disallow an empty line between class members
  // https://typescript-eslint.io/rules/lines-between-class-members
  '@typescript-eslint/lines-between-class-members': 'off',

  // Require a specific member delimiter style for interfaces and type literals
  // https://typescript-eslint.io/rules/member-delimiter-style
  '@typescript-eslint/member-delimiter-style': 'off',

  // Disallow unnecessary parentheses
  // https://typescript-eslint.io/rules/no-extra-parens
  '@typescript-eslint/no-extra-parens': 'off',

  // Disallow unnecessary semicolons
  // https://typescript-eslint.io/rules/no-extra-semi
  '@typescript-eslint/no-extra-semi': 'off',

  // Enforce the consistent use of either backticks, double, or single quotes
  // https://typescript-eslint.io/rules/quotes
  '@typescript-eslint/quotes': 'off',

  // Require or disallow semicolons instead of ASI
  // https://typescript-eslint.io/rules/semi€
  '@typescript-eslint/semi': 'off',

  // Enforce consistent spacing before blocks
  // https://typescript-eslint.io/rules/space-before-blocks
  '@typescript-eslint/space-before-blocks': 'off',

  // Enforce consistent spacing before function parenthesis
  // https://typescript-eslint.io/rules/space-before-function-paren
  '@typescript-eslint/space-before-function-paren': 'off',

  // Require spacing around infix operators
  // https://typescript-eslint.io/rules/space-infix-ops
  '@typescript-eslint/space-infix-ops': 'off',

  // Require consistent spacing around type annotations
  // https://typescript-eslint.io/rules/type-annotation-spacing
  '@typescript-eslint/type-annotation-spacing': 'off',

  // Disallow using code marked as @deprecated
  // https://typescript-eslint.io/rules/no-deprecated
  '@typescript-eslint/no-deprecated': 'error',

  // Disallow using the spread operator when it might cause unexpected behavior
  // https://typescript-eslint.io/rules/no-misused-spread
  '@typescript-eslint/no-misused-spread': 'error',

  // Disallow type assertions that narrow a type
  // https://typescript-eslint.io/rules/no-unsafe-type-assertion
  '@typescript-eslint/no-unsafe-type-assertion': 'error',

  // Enforce that get() types should be assignable to their equivalent set() type
  // https://typescript-eslint.io/rules/related-getter-setter-pairs
  '@typescript-eslint/related-getter-setter-pairs': 'error',
};
