// only add jest-dom rules
// see: https://github.com/testing-library/eslint-plugin-jest-dom#supported-rules

export default {
  // Prefer toBeChecked over checking attributes
  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-checked.md
  'jest-dom/prefer-checked': 'error',

  // Prefer toBeEmpty over checking innerHTML
  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-empty.md
  'jest-dom/prefer-empty': 'error',

  // Prefer toBeDisabled or toBeEnabled over checking attributes
  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-enabled-disabled.md
  'jest-dom/prefer-enabled-disabled': 'error',

  // Prefer toHaveFocus over checking document.activeElement
  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-focus.md
  'jest-dom/prefer-focus': 'error',

  // Prefer .toBeInTheDocument() for asserting the existence of a DOM node
  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-in-document.md
  'jest-dom/prefer-in-document': 'error',

  // Prefer toBeRequired over checking properties
  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-required.md
  'jest-dom/prefer-required': 'error',

  // Prefer toHaveAttribute over checking getAttribute/hasAttribute
  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-attribute.md
  'jest-dom/prefer-to-have-attribute': 'error',

  // Prefer toHaveClass over checking element className
  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-class.md
  'jest-dom/prefer-to-have-class': 'error',

  // Prefer toHaveStyle over checking element style
  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-style.md
  'jest-dom/prefer-to-have-style': 'error',

  // Prefer toHaveTextContent over checking element.textContent
  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-text-content.md
  'jest-dom/prefer-to-have-text-content': 'error',

  // Prefer toHaveValue over checking element.value
  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-value.md
  'jest-dom/prefer-to-have-value': 'error',
};
