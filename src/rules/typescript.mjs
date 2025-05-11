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

  // reports usage of deprecated code
  // https://typescript-eslint.io/rules/no-deprecated/
  '@typescript-eslint/no-deprecated': 'error',

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

  // Disallow non-null assertion operator
  // https://typescript-eslint.io/rules/no-non-null-assertion
  '@typescript-eslint/no-non-null-assertion': 'error',

  // Disallow the use of parameter properties in class constructors
  // https://typescript-eslint.io/rules/no-parameter-properties
  '@typescript-eslint/no-parameter-properties': 'error',

  // Disallow members of unions and intersections that do nothing or override type information
  // https://typescript-eslint.io/rules/no-redundant-type-constituents
  '@typescript-eslint/no-redundant-type-constituents': 'error',

  // Disallow invocation of require()
  // https://typescript-eslint.io/rules/no-require-imports
  '@typescript-eslint/no-require-imports': 'error',

  // Disallow aliasing this
  // https://typescript-eslint.io/rules/no-this-alias
  '@typescript-eslint/no-this-alias': 'error',

  // Disallow type aliases
  // https://typescript-eslint.io/rules/no-type-alias
  '@typescript-eslint/no-type-alias': 'off',

  // Disallow unnecessary equality comparisons against boolean literals
  // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

  // Disallow conditionals where the type is always truthy or always falsy
  // https://typescript-eslint.io/rules/no-unnecessary-condition
  '@typescript-eslint/no-unnecessary-condition': 'error',

  // Disallow unnecessary namespace qualifiers
  // https://typescript-eslint.io/rules/no-unnecessary-qualifier
  '@typescript-eslint/no-unnecessary-qualifier': 'error',

  // Disallow type arguments that are equal to the default
  // https://typescript-eslint.io/rules/no-unnecessary-type-arguments
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',

  // Disallow type assertions that do not change the type of an expression
  // https://typescript-eslint.io/rules/no-unnecessary-type-assertion
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',

  // Disallow unnecessary constraints on generic types
  // https://typescript-eslint.io/rules/no-unnecessary-type-constraint
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',

  // Disallow calling a function with a value with type any
  // https://typescript-eslint.io/rules/no-unsafe-argument
  '@typescript-eslint/no-unsafe-argument': 'error',

  // Disallow assigning a value with type any to variables and properties
  // https://typescript-eslint.io/rules/no-unsafe-assignment
  '@typescript-eslint/no-unsafe-assignment': 'error',

  // Disallow calling a value with type any
  // https://typescript-eslint.io/rules/no-unsafe-call
  '@typescript-eslint/no-unsafe-call': 'error',

  // Disallow declaring variables with type any
  // https://typescript-eslint.io/rules/no-unsafe-declaration-merging
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',

  // Disallow member access on a value with type any
  // https://typescript-eslint.io/rules/no-unsafe-member-access
  '@typescript-eslint/no-unsafe-member-access': 'error',

  // Disallow returning a value with type any from a function
  // https://typescript-eslint.io/rules/no-unsafe-return
  '@typescript-eslint/no-unsafe-return': 'error',

  // Disallow empty exports that don't change anything in a module file
  // https://typescript-eslint.io/rules/no-useless-empty-export
  '@typescript-eslint/no-useless-empty-export': 'error',

  // Disallow require statements except in import statements
  // https://typescript-eslint.io/rules/no-var-requires
  '@typescript-eslint/no-var-requires': 'error',

  // Prefer usage of as const over literal type
  // https://typescript-eslint.io/rules/prefer-as-const
  '@typescript-eslint/prefer-as-const': 'error',

  // Require each enum member value to be explicitly initialized
  // https://typescript-eslint.io/rules/prefer-enum-initializers
  '@typescript-eslint/prefer-enum-initializers': 'error',

  // Require using function property assignments in classes instead of methods
  // https://typescript-eslint.io/rules/prefer-function-type
  '@typescript-eslint/prefer-function-type': 'error',

  // Require all enum members to be literal values
  // https://typescript-eslint.io/rules/prefer-literal-enum-member
  '@typescript-eslint/prefer-literal-enum-member': 'error',

  // Require using namespace keyword over module keyword to declare custom TypeScript modules
  // https://typescript-eslint.io/rules/prefer-namespace-keyword
  '@typescript-eslint/prefer-namespace-keyword': 'error',

  // Require private members to be marked as readonly if they're never modified outside of the constructor
  // https://typescript-eslint.io/rules/prefer-readonly
  '@typescript-eslint/prefer-readonly': 'error',

  // Require function parameters to be typed as readonly to prevent accidental mutation of inputs
  // https://typescript-eslint.io/rules/prefer-readonly-parameter-types
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',

  // Require using RegExp.exec() over String.match() for consistency
  // https://typescript-eslint.io/rules/prefer-regexp-exec
  '@typescript-eslint/prefer-regexp-exec': 'error',

  // Require rest parameters over arguments
  // https://typescript-eslint.io/rules/prefer-rest-params
  '@typescript-eslint/prefer-rest-params': 'error',

  // Require spread operator over Array.from()
  // https://typescript-eslint.io/rules/prefer-spread
  '@typescript-eslint/prefer-spread': 'error',

  // Require private members to be marked as readonly if they're never modified outside of the constructor
  // https://typescript-eslint.io/rules/prefer-string-starts-ends-with
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',

  // Require consistent spacing around type annotations
  // https://typescript-eslint.io/rules/type-annotation-spacing
  '@typescript-eslint/type-annotation-spacing': 'error',

  // Requires type annotations to exist
  // https://typescript-eslint.io/rules/typedef
  '@typescript-eslint/typedef': 'off',

  // Enforces unbound methods are called with their expected scope
  // https://typescript-eslint.io/rules/unbound-method
  '@typescript-eslint/unbound-method': 'error',

  // Disallow two overloads that could be unified into one with a union or an optional/rest parameter
  // https://typescript-eslint.io/rules/unified-signatures
  '@typescript-eslint/unified-signatures': 'error',
};
