import testingLibraryPlugin from 'eslint-plugin-testing-library';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import testingLibraryRules from '../rules/testing-library.mjs';
import jestDomRules from '../rules/jest-dom.mjs';

export default [
  {
    plugins: {
      'testing-library': testingLibraryPlugin,
      'jest-dom': jestDomPlugin,
    },
    rules: {
      ...testingLibraryRules,
      ...jestDomRules,
    },
  },
];
