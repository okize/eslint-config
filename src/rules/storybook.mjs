// only add storybook rules
// see: https://github.com/storybookjs/eslint-plugin-storybook#supported-rules-and-configurations

export default {
  // storybook >7 requires default exports in stories
  'import/no-anonymous-default-export': 'off',
  'import/no-default-export': 'off',
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  'import/prefer-default-export': 'error',

  // ...and the default export is always called `meta` so the filenames
  // will never match the exported name
  'filenames/match-exported': 'off',

  // Interactions should be awaited
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/await-interactions.md
  'storybook/await-interactions': 'error',

  // Pass a context when invoking play function of another story
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/context-in-play-function.md
  'storybook/context-in-play-function': 'error',

  // The component property should be set
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/csf-component.md
  'storybook/csf-component': 'error',

  // Story files should have a default export
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/default-exports.md
  'storybook/default-exports': 'error',

  // Deprecated hierarchy separator in title property
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/hierarchy-separator.md
  'storybook/hierarchy-separator': 'error',

  // Meta should only have inline properties
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/meta-inline-properties.md
  'storybook/meta-inline-properties': 'error',

  // Meta should use `satisfies Meta`
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/meta-satisfies-type.md
  'storybook/meta-satisfies-type': 'error',

  // A story should not have a redundant name property
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-redundant-story-name.md
  'storybook/no-redundant-story-name': 'error',

  // storiesOf is deprecated and should not be used
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-stories-of.md
  'storybook/no-stories-of': 'error',

  // Do not define a title in meta
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-title-property-in-meta.md
  // decision: we use the title property to group stories in the sidepanel
  'storybook/no-title-property-in-meta': 'off',

  // This rule identifies storybook addons that are invalid because they are either not installed or contain a typo in their name
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-uninstalled-addons.md
  'storybook/no-uninstalled-addons': 'error',

  // Stories should use PascalCase
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/prefer-pascal-case.md
  'storybook/prefer-pascal-case': 'error',

  // A story file must contain at least one story export
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/story-exports.md
  'storybook/story-exports': 'error',

  // Use expect from @storybook/jest
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/use-storybook-expect.md
  'storybook/use-storybook-expect': 'error',

  // Do not use testing-library directly on stories
  // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/use-storybook-testing-library.md
  'storybook/use-storybook-testing-library': 'error',
};
