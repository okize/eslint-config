const commitlintConfig = {
  extends: ['@commitlint/config-conventional'],
  // Dependabot commit messages body line lengths do not conform with commitlint's defaults
  // https://github.com/dependabot/dependabot-core/issues/2445
  ignores: [(message) => message.includes('Signed-off-by: dependabot[bot]')],
};

export default commitlintConfig;
