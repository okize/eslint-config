// only add rules related to managing filenames
// see: https://github.com/selaux/eslint-plugin-filenames#rules
// note: this project looks abandoned, we should try to find an alternative to this rule

export default {
  // Match Exported Values
  // https://github.com/selaux/eslint-plugin-filenames#matching-exported-values-match-exported
  'filenames/match-exported': 'error',

  // Consistent Filenames via regex
  // https://github.com/selaux/eslint-plugin-filenames#consistent-filenames-via-regex-match-regex
  'filenames/match-regex': 'off',

  // Don't allow index files
  // https://github.com/selaux/eslint-plugin-filenames#consistent-filenames-via-regex-match-regex
  'filenames/no-index': 'off',
};
