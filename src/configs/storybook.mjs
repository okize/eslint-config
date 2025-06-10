import storybookPlugin from 'eslint-plugin-storybook';
import storybookRules from '../rules/storybook.mjs';

export default [
  {
    plugins: {
      storybook: storybookPlugin,
    },
    rules: {
      ...storybookRules,
    },
  },
];
