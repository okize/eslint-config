import { fixupPluginRules } from '@eslint/compat';
import storybookPlugin from 'eslint-plugin-storybook';
import filenamesPlugin from 'eslint-plugin-filenames';
import importPlugin from 'eslint-plugin-import';
import storybookRules from '../rules/storybook.mjs';

export default [
  {
    plugins: {
      storybook: storybookPlugin,
      filenames: fixupPluginRules(filenamesPlugin),
      import: importPlugin,
    },
    rules: {
      ...storybookRules,
    },
  },
];
