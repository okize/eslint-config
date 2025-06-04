// only add vitest rules
// see: https://github.com/veritem/eslint-plugin-vitest?tab=readme-ov-file#rules

export default {
  // Require .test test file pattern
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md
  'vitest/consistent-test-filename': 'error',

  // Prefer test or it but not both
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md
  'vitest/consistent-test-it': 'error',

  // Enforce having expectation in test body
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md
  'vitest/expect-expect': 'error',

  // Enforce a maximum number of expect per test
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md
  'vitest/max-expects': [
    'error',
    {
      max: 15,
    },
  ],

  // Nested describe block should be less than set max value or default value
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md
  'vitest/max-nested-describe': 'error',

  // Disallow alias methods
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md
  'vitest/no-alias-methods': 'error',

  // Disallow commented out tests
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md
  'vitest/no-commented-out-tests': 'error',

  // Disallow conditional expects
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md
  'vitest/no-conditional-expect': 'error',

  // Disallow conditional tests
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md
  'vitest/no-conditional-in-test': 'error',

  // Disallow conditional tests
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md
  'vitest/no-conditional-tests': 'error',

  // Disallow disabled tests
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md
  // decision: it is often useful to be allowed to add a .skip
  'vitest/no-disabled-tests': 'off',

  // Disallow using a callback in asynchronous tests and hooks
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md
  'vitest/no-done-callback': 'error',

  // Disallow duplicate hooks and teardown hooks
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md
  'vitest/no-duplicate-hooks': 'error',

  // Disallow focused tests
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md
  'vitest/no-focused-tests': 'error',

  // Disallow setup and teardown hooks
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md
  'vitest/no-hooks': 'off',

  // Disallow identical titles
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md
  'vitest/no-identical-title': 'error',

  // Disallow importing node:test
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md
  'vitest/no-import-node-test': 'error',

  // Disallow string interpolation in snapshots
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md
  'vitest/no-interpolation-in-snapshots': 'error',

  // Disallow large snapshots
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md
  'vitest/no-large-snapshots': ['error', { maxSize: 500 }],

  // Disallow importing from mocks directory
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md
  'vitest/no-mocks-import': 'error',

  // Disallow the use of certain matchers
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md
  'vitest/no-restricted-matchers': 'error',

  // Disallow specific vi. methods
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md
  'vitest/no-restricted-vi-methods': 'error',

  // Disallow using expect outside of it or test blocks
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md
  'vitest/no-standalone-expect': 'error',

  // Disallow using test as a prefix
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md
  'vitest/no-test-prefixes': 'error',

  // Disallow return statements in tests
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md
  'vitest/no-test-return-statement': 'error',

  // Suggest using toBeCalledWith() or toHaveBeenCalledWith()
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md
  'vitest/prefer-called-with': 'error',

  // Suggest using the built-in comparison matchers
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md
  'vitest/prefer-comparison-matcher': 'error',

  // Prefer each rather than manual loops
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md
  'vitest/prefer-each': 'error',

  // Suggest using the built-in quality matchers
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md
  'vitest/prefer-equality-matcher': 'error',

  // Suggest using expect assertions instead of callbacks
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md
  'vitest/prefer-expect-assertions': 'off',

  // Suggest using expect().resolves over expect(await ...) syntax
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md
  'vitest/prefer-expect-resolves': 'error',

  // Prefer having hooks in consistent order
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md
  'vitest/prefer-hooks-in-order': 'error',

  // Suggest having hooks before any test cases
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md
  'vitest/prefer-hooks-on-top': 'error',

  // Enforce lowercase titles
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
  'vitest/prefer-lowercase-title': 'off',

  // Prefer mock resolved/rejected shorthands for promises
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
  'vitest/prefer-mock-promise-shorthand': 'error',

  // Prefer including a hint with external snapshots
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md
  'vitest/prefer-snapshot-hint': 'error',

  // Suggest using vi.spyOn
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md
  'vitest/prefer-spy-on': 'error',

  // Prefer strict equal over equal
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md
  'vitest/prefer-strict-equal': 'error',

  // Suggest using toBe()
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md
  'vitest/prefer-to-be': 'error',

  // Suggest using toBeFalsy()
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md
  // decision: not necessary to br prescriptive here
  'vitest/prefer-to-be-falsy': 'off',

  // Prefer toBeObject()
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md
  'vitest/prefer-to-be-object': 'error',

  // Suggest using toBeTruthy
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md
  // decision: not necessary to br prescriptive here
  'vitest/prefer-to-be-truthy': 'off',

  // Prefer using toContain()
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md
  'vitest/prefer-to-contain': 'error',

  // Suggest using toHaveLength()
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md
  'vitest/prefer-to-have-length': 'error',

  // Suggest using test.todo
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md
  'vitest/prefer-todo': 'error',

  // Require setup and teardown to be within a hook
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md
  'vitest/require-hook': 'error',

  // Require local Test Context for concurrent snapshot tests
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md
  'vitest/require-local-test-context-for-concurrent-snapshots': 'error',

  // Require toThrow() to be called with an error message
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md
  'vitest/require-to-throw-message': 'error',

  // Enforce that all tests are in a top-level describe
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md
  'vitest/require-top-level-describe': 'error',

  // Enforce valid describe callback
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md
  'vitest/valid-describe-callback': 'error',

  // Enforce valid expect() usage
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md
  'vitest/valid-expect': 'error',

  // Enforce valid titles
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md
  'vitest/valid-title': 'error',
};
