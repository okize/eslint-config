// only add stylistic rules
// see: https://eslint.style/packages/default#rules

export default {
  // Enforce linebreaks after opening and before closing array brackets
  // https://eslint.style/rules/default/array-bracket-newline
  // decision: disabled because this is a formatter concern
  '@stylistic/array-bracket-newline': 'off',

  // Enforce line breaks between array elements
  // https://eslint.style/rules/default/array-element-newline
  // decision: disabled because this is a formatter concern
  '@stylistic/array-element-newline': 'off',

  // Enforce spacing inside array brackets
  // https://eslint.style/rules/default/array-bracket-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/array-bracket-spacing': 'off',

  // Require parens in arrow function arguments
  // https://eslint.style/rules/default/arrow-parens
  // decision: disabled because this is a formatter concern
  '@stylistic/arrow-parens': 'off',

  // Require space before/after arrow function's arrow
  // https://eslint.style/rules/default/arrow-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/arrow-spacing': 'off',

  // Enforce spacing inside single-line blocks
  // https://eslint.style/rules/default/block-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/block-spacing': 'off',

  // Enforce one true brace style
  // https://eslint.style/rules/default/brace-style
  // decision: disabled because this is a formatter concern
  '@stylistic/brace-style': 'off',

  // Require trailing commas in multiline object literals
  // https://eslint.style/rules/default/comma-dangle
  // decision: disabled because this is a formatter concern
  '@stylistic/comma-dangle': 'off',

  // Enforce spacing before and after comma
  // https://eslint.style/rules/default/comma-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/comma-spacing': 'off',

  // Enforce one true comma style
  // https://eslint.style/rules/default/comma-style
  // decision: disabled because this is a formatter concern
  '@stylistic/comma-style': 'off',

  // Disallow padding inside computed properties
  // https://eslint.style/rules/default/computed-property-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/computed-property-spacing': 'off',

  // Enforces consistent newlines before or after dots
  // https://eslint.style/rules/default/dot-location
  // decision: disabled because this is a formatter concern
  '@stylistic/dot-location': 'off',

  // Enforce newline at the end of file, with no multiple empty lines
  // https://eslint.style/rules/default/eol-last
  // decision: disabled because this is a formatter concern
  '@stylistic/eol-last': 'off',

  // Enforce line breaks between arguments of a function call
  // https://eslint.style/rules/default/function-call-argument-newline
  // decision: disabled because this is a formatter concern
  '@stylistic/function-call-argument-newline': 'off',

  // Enforce spacing between functions and their invocations
  // https://eslint.style/rules/default/function-call-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/function-call-spacing': 'off',

  // Require line breaks inside function parentheses if there are line breaks between parameters
  // https://eslint.style/rules/default/function-paren-newline
  // decision: disabled because this is a formatter concern
  '@stylistic/function-paren-newline': 'off',

  // Enforce the spacing around the * in generator functions
  // https://eslint.style/rules/default/generator-star-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/generator-star-spacing': 'off',

  // Enforce the location of arrow function bodies with implicit returns
  // decision: disabled because this is a formatter concern
  // https://eslint.style/rules/default/implicit-arrow-linebreak
  '@stylistic/implicit-arrow-linebreak': 'off',

  // This option sets a specific tab width for your code
  // https://eslint.style/rules/default/indent
  // decision: disabled because this is a formatter concern
  '@stylistic/indent': 'off',

  // Specify whether double or single quotes should be used in JSX attributes
  // https://eslint.style/rules/default/jsx-quotes
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-quotes': 'off',

  // Enforces spacing between keys and values in object literal properties
  // https://eslint.style/rules/default/key-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/key-spacing': 'off',

  // Require a space before & after certain keywords
  // https://eslint.style/rules/default/keyword-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/keyword-spacing': 'off',

  // Enforce position of line comments
  // https://eslint.style/rules/default/line-comment-position
  // decision: disabled because this is a formatter concern
  '@stylistic/line-comment-position': 'off',

  // Disallow mixed 'LF' and 'CRLF' as linebreaks
  // https://eslint.style/rules/default/linebreak-style
  // decision: disabled because this is a formatter concern
  '@stylistic/linebreak-style': 'off',

  // Require or disallow an empty line between class members
  // https://eslint.style/rules/default/lines-between-class-members
  // decision: disabled because this is a formatter concern
  '@stylistic/lines-between-class-members': 'off',

  // Enforces empty lines around comments
  // https://eslint.style/rules/default/lines-around-comment
  // decision: disabled because this is a formatter concern
  '@stylistic/lines-around-comment': 'off',

  // Specify the maximum length of a line in your program
  // https://eslint.style/rules/default/max-len
  // decision: disabled because this is a formatter concern
  '@stylistic/max-len': 'off',

  // Restrict the number of statements per line
  // https://eslint.style/rules/default/max-statements-per-line
  // decision: disabled because this is a formatter concern
  '@stylistic/max-statements-per-line': 'off',

  // Enforce a particular style for multiline comments
  // https://eslint.style/rules/default/multiline-comment-style
  // decision: disabled because this is a formatter concern
  '@stylistic/multiline-comment-style': ['off', 'starred-block'],

  // Require multiline ternary
  // https://eslint.style/rules/default/multiline-ternary
  // decision: disabled because this is a formatter concern
  '@stylistic/multiline-ternary': 'off',

  // Disallow the omission of parentheses when invoking a constructor with no arguments
  // https://eslint.style/rules/default/new-parens
  // decision: disabled because this is a formatter concern
  '@stylistic/new-parens': 'off',

  // Enforces new line after each method call in the chain to make it
  // more readable and easy to maintain
  // https://eslint.style/rules/default/newline-per-chained-call
  // decision: disabled because this is a formatter concern
  '@stylistic/newline-per-chained-call': 'off',

  // Disallow arrow functions where they could be confused with comparisons
  // https://eslint.style/rules/default/no-confusing-arrow
  // decision: disabled because this is a formatter concern
  '@stylistic/no-confusing-arrow': 'off',

  // Disallow unnecessary parentheses
  // https://eslint.style/rules/default/no-extra-parens
  // decision: disabled because this is a formatter concern
  '@stylistic/no-extra-parens': 'off',

  // Disallow unnecessary semicolons
  // https://eslint.style/rules/default/no-extra-semi
  // decision: disabled because this is a formatter concern
  '@stylistic/no-extra-semi': 'off',

  // Disallow the use of leading or trailing decimal points in numeric literals
  // https://eslint.style/rules/default/no-floating-decimal
  // decision: disabled because this is a formatter concern
  '@stylistic/no-floating-decimal': 'off',

  // Disallow un-paren'd mixes of different operators
  // https://eslint.style/rules/default/no-mixed-operators
  // decision: disabled because this is a formatter concern
  '@stylistic/no-mixed-operators': 'off',

  // Disallow mixed spaces and tabs for indentation
  // https://eslint.style/rules/default/no-mixed-spaces-and-tabs
  // decision: disabled because this is a formatter concern
  '@stylistic/no-mixed-spaces-and-tabs': 'off',

  // Disallow use of multiple spaces
  // https://eslint.style/rules/default/no-multi-spaces
  // decision: disabled because this is a formatter concern
  '@stylistic/no-multi-spaces': 'off',

  // Disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
  // https://eslint.style/rules/default/no-multiple-empty-lines
  // decision: disabled because this is a formatter concern
  '@stylistic/no-multiple-empty-lines': 'off',

  // Disallow tab characters entirely
  // https://eslint.style/rules/default/no-tabs
  // decision: disabled because this is a formatter concern
  '@stylistic/no-tabs': 'off',

  // Disallow trailing whitespace at the end of lines
  // https://eslint.style/rules/default/no-trailing-spaces
  // decision: disabled because this is a formatter concern
  '@stylistic/no-trailing-spaces': 'off',

  // Disallow whitespace before properties
  // https://eslint.style/rules/default/no-whitespace-before-property
  // decision: disabled because this is a formatter concern
  '@stylistic/no-whitespace-before-property': 'off',

  // Enforce the location of single-line statements
  // https://eslint.style/rules/default/nonblock-statement-body-position
  // decision: disabled because this is a formatter concern
  '@stylistic/nonblock-statement-body-position': 'off',

  // Enforce line breaks between braces
  // https://eslint.style/rules/default/object-curly-newline
  // decision: disabled because this is a formatter concern
  '@stylistic/object-curly-newline': 'off',

  // Require padding inside curly braces
  // https://eslint.style/rules/default/object-curly-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/object-curly-spacing': 'off',

  // Enforce "same line" or "multiple line" on object properties
  // https://eslint.style/rules/default/object-property-newline
  // decision: disabled because this is a formatter concern
  '@stylistic/object-property-newline': 'off',

  // Require a newline around variable declaration
  // https://eslint.style/rules/default/one-var-declaration-per-line
  // decision: disabled because this is a formatter concern
  '@stylistic/one-var-declaration-per-line': 'off',

  // Requires operator at the beginning of the line in multiline statements
  // https://eslint.style/rules/default/operator-linebreak
  // decision: disabled because this is a formatter concern
  '@stylistic/operator-linebreak': 'off',

  // Disallow padding within blocks
  // https://eslint.style/rules/default/padded-blocks
  // decision: disabled because this is a formatter concern
  '@stylistic/padded-blocks': 'off',

  // Require or disallow padding lines between statements
  // https://eslint.style/rules/default/padding-line-between-statements
  // decision: disabled because this is a formatter concern
  '@stylistic/padding-line-between-statements': 'off',

  // Require quotes around object literal property names
  // https://eslint.style/rules/default/quote-props
  // decision: disabled because this is a formatter concern
  '@stylistic/quote-props': 'off',

  // Specify whether double or single quotes should be used
  // https://eslint.style/rules/default/quotes
  // decision: disabled because this is a formatter concern
  '@stylistic/quotes': 'off',

  // Enforce spacing between object rest-spread
  // https://eslint.style/rules/default/rest-spread-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/rest-spread-spacing': 'off',

  // Require or disallow use of semicolons instead of ASI
  // https://eslint.style/rules/default/semi
  // decision: disabled because this is a formatter concern
  '@stylistic/semi': 'off',

  // Enforce spacing before and after semicolons
  // https://eslint.style/rules/default/semi-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/semi-spacing': 'off',

  // Enforce location of semicolons
  // https://eslint.style/rules/default/semi-style
  // decision: disabled because this is a formatter concern
  '@stylistic/semi-style': 'off',

  // Require or disallow space before blocks
  // https://eslint.style/rules/default/space-before-blocks
  // decision: disabled because this is a formatter concern
  '@stylistic/space-before-blocks': 'off',

  // Require or disallow space before function opening parenthesis
  // https://eslint.style/rules/default/space-before-function-paren
  // decision: disabled because this is a formatter concern
  '@stylistic/space-before-function-paren': 'off',

  // Require or disallow spaces inside parentheses
  // https://eslint.style/rules/default/space-in-parens
  // decision: disabled because this is a formatter concern
  '@stylistic/space-in-parens': 'off',

  // Require spaces around operators
  // https://eslint.style/rules/default/space-infix-ops
  // decision: disabled because this is a formatter concern
  '@stylistic/space-infix-ops': 'off',

  // Require or disallow spaces before/after unary operators
  // https://eslint.style/rules/default/space-unary-ops
  // decision: disabled because this is a formatter concern
  '@stylistic/space-unary-ops': 'off',

  // Require or disallow a space immediately following the // or /* in a comment
  // https://eslint.style/rules/default/spaced-comment
  '@stylistic/spaced-comment': [
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
  // decision: disabled because this is a formatter concern
  '@stylistic/switch-colon-spacing': 'off',

  // Enforce usage of spacing in template strings
  // https://eslint.style/rules/default/template-curly-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/template-curly-spacing': 'off',

  // Require or disallow spacing between template tags and their literals
  // https://eslint.style/rules/default/template-tag-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/template-tag-spacing': 'off',

  // Require immediate function invocation to be wrapped in parentheses
  // https://eslint.style/rules/default/wrap-iife
  // decision: disabled because this is a formatter concern
  '@stylistic/wrap-iife': 'off',

  // Require regex literals to be wrapped in parentheses
  // https://eslint.style/rules/default/wrap-regex
  // decision: disabled because this is a formatter concern
  '@stylistic/wrap-regex': 'off',

  // Enforce spacing around the * in yield* expressions
  // https://eslint.style/rules/default/yield-star-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/yield-star-spacing': 'off',

  // Enforce consistent line breaks after opening and before closing braces
  // https://eslint.style/rules/default/curly-newline
  // decision: disabled because this is a formatter concern
  '@stylistic/curly-newline': 'off',

  // Indentation for binary operators
  // https://eslint.style/rules/default/indent-binary-ops
  // decision: disabled because this is a formatter concern
  '@stylistic/indent-binary-ops': 'off',

  // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  // https://eslint.style/rules/default/jsx-child-element-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-child-element-spacing': 'off',

  // Enforce closing bracket location in JSX
  // https://eslint.style/rules/default/jsx-closing-bracket-location
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-closing-bracket-location': 'off',

  // Enforce closing tag location for multiline JSX
  // https://eslint.style/rules/default/jsx-closing-tag-location
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-closing-tag-location': 'off',

  // Disallow unnecessary JSX expressions when literals alone are sufficient
  // https://eslint.style/rules/default/jsx-curly-brace-presence
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-curly-brace-presence': 'off',

  // Enforce consistent linebreaks in curly braces in JSX attributes and expressions
  // https://eslint.style/rules/default/jsx-curly-newline
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-curly-newline': 'off',

  // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  // https://eslint.style/rules/default/jsx-curly-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-curly-spacing': 'off',

  // Enforce or disallow spaces around equal signs in JSX attributes
  // https://eslint.style/rules/default/jsx-equals-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-equals-spacing': 'off',

  // Enforce proper position of the first property in JSX
  // https://eslint.style/rules/default/jsx-first-prop-new-line
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-first-prop-new-line': 'off',

  // Enforce line breaks before and after JSX elements when they are used as arguments
  // https://eslint.style/rules/default/jsx-function-call-newline
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-function-call-newline': 'off',

  // Enforce JSX indentation
  // https://eslint.style/rules/default/jsx-indent
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-indent': 'off',

  // Enforce props indentation in JSX
  // https://eslint.style/rules/default/jsx-indent-props
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-indent-props': 'off',

  // Enforce maximum of props on a single line in JSX
  // https://eslint.style/rules/default/jsx-max-props-per-line
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-max-props-per-line': 'off',

  // Require or prevent a new line after jsx elements and expressions
  // https://eslint.style/rules/default/jsx-newline
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-newline': 'off',

  // Require one JSX element per line
  // https://eslint.style/rules/default/jsx-one-expression-per-line
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-one-expression-per-line': 'off',

  // Enforce PascalCase for user-defined JSX components
  // https://eslint.style/rules/default/jsx-pascal-case
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-pascal-case': 'off',

  // Disallow multiple spaces between inline JSX props
  // https://eslint.style/rules/default/jsx-props-no-multi-spaces
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-props-no-multi-spaces': 'off',

  // Disallow extra closing tags for components without children
  // https://eslint.style/rules/default/jsx-self-closing-comp
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-self-closing-comp': 'off',

  // Enforce props alphabetical sorting
  // https://eslint.style/rules/default/jsx-sort-props
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-sort-props': 'off',

  // Enforce whitespace in and around the JSX opening and closing brackets
  // https://eslint.style/rules/default/jsx-tag-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-tag-spacing': 'off',

  // Disallow missing parentheses around multiline JSX
  // https://eslint.style/rules/default/jsx-wrap-multilines
  // decision: disabled because this is a formatter concern
  '@stylistic/jsx-wrap-multilines': 'off',

  // Require a specific member delimiter style for interfaces and type literals
  // https://eslint.style/rules/default/member-delimiter-style
  // decision: disabled because this is a formatter concern
  '@stylistic/member-delimiter-style': 'off',

  // Require consistent spacing around type annotations
  // https://eslint.style/rules/default/type-annotation-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/type-annotation-spacing': 'off',

  // Enforce consistent spacing inside TypeScript type generics
  // https://eslint.style/rules/default/type-generic-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/type-generic-spacing': 'off',

  // Expect space before the type declaration in the named tuple
  // https://eslint.style/rules/default/type-named-tuple-spacing
  // decision: disabled because this is a formatter concern
  '@stylistic/type-named-tuple-spacing': 'off',
};
