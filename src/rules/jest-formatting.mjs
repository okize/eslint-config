// only add jest-formatting rules (plugin works for vitest as well as jest)
// see: https://github.com/dangreenisrael/eslint-plugin-jest-formatting#rule-documentation

export default {
  // This rule enforces a line of padding before and after 1 or more `afterAll` statements.
  // https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-after-all-blocks.md
  'jest-formatting/padding-around-after-all-blocks': 'error',

  // This rule enforces a line of padding before and after 1 or more `afterEach` statements.
  // https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-after-each-blocks.md
  'jest-formatting/padding-around-after-each-blocks': 'error',

  // This rule enforces a line of padding before and after `beforeAll` statements.
  // https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-before-all-blocks.md
  'jest-formatting/padding-around-before-all-blocks': 'error',

  // This rule enforces a line of padding before and after 1 or more `beforeEach` statements
  // https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-before-each-blocks.md
  'jest-formatting/padding-around-before-each-blocks': 'error',

  // This rule enforces a line of padding before and after 1 or more `expect` statements
  // https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-expect-groups.md
  'jest-formatting/padding-around-expect-groups': 'error',

  // This rule enforces a line of padding before and after 1 or more `describe` statements
  // https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-describe-blocks.md
  'jest-formatting/padding-around-describe-blocks': 'error',

  // This rule enforces a line of padding before and after 1 or more `test`/`it` statements
  // https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-test-blocks.md
  'jest-formatting/padding-around-test-blocks': 'error',

  // This is a meta rule that simply enables all of the previous rules
  // https://github.com/dangreenisrael/eslint-plugin-jest-formatting/blob/master/docs/rules/padding-around-all.md
  'jest-formatting/padding-around-all': 'off',
};
