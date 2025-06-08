// only add node rules
// see: https://github.com/eslint-community/eslint-plugin-n#-rules

export default {
  // require error handling in callbacks
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md
  'n/handle-callback-err': 'error',

  // ensure Node.js-style error-first callback pattern is followed
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-callback-literal.md
  'n/no-callback-literal': 'error',

  // disallow the assignment to exports
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-exports-assign.md
  'n/no-exports-assign': 'error',

  // disallow import declarations which import extraneous modules
  // decision: disabled this rule because it's redundant to `import/no-extraneous-dependencies` rule
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-import.md
  'n/no-extraneous-import': 'off',

  // disallow require() expressions which import extraneous modules
  // decision: disabled this rule because it's redundant to `import/no-extraneous-dependencies` rule
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-require.md
  'n/no-extraneous-require': 'off',

  // disallow import declarations which import non-existence modules
  // decision: disabled this rule because it's redundant to `import/no-unresolved` rule
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-import.md
  'n/no-missing-import': 'off',

  // disallow require() expressions which import non-existence modules
  // decision: disabled this rule because it's redundant to `import/no-unresolved` rule
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-require.md
  'n/no-missing-require': 'off',

  // disallow new operators with calls to require
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
  'n/no-new-require': 'error',

  // disallow string concatenation with __dirname and __filename
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
  'n/no-path-concat': 'error',

  // disallow the use of process.exit()
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
  'n/no-process-exit': 'error',

  // disallow bin files that npm ignores
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-bin.md
  'n/no-unpublished-bin': 'error',

  // disallow import declarations which import private modules
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-import.md
  'n/no-unpublished-import': 'error',

  // disallow require() expressions which import private modules
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-require.md
  'n/no-unpublished-require': 'error',

  // disallow unsupported ECMAScript built-ins on the specified version
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-builtins.md
  'n/no-unsupported-features/es-builtins': 'error',

  // disallow unsupported ECMAScript syntax on the specified version
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-syntax.md
  'n/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],

  // disallow unsupported Node.js built-in APIs on the specified version
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/node-builtins.md
  'n/no-unsupported-features/node-builtins': 'error',

  // make process.exit() expressions the same code path as throw
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/process-exit-as-throw.md
  'n/process-exit-as-throw': 'error',

  // suggest correct usage of shebang
  // decision: turned this off because it expects files to be listed under `bin` in package.json
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/shebang.md
  'n/shebang': 'off',

  // disallow deprecated APIs
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
  'n/no-deprecated-api': 'error',

  // require return statements after callbacks
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/callback-return.md
  'n/callback-return': 'error',

  // enforce either module.exports or exports
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/exports-style.md
  'n/exports-style': 'error',

  // enforce the style of file extensions in import declarations
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/file-extension-in-import.md
  'n/file-extension-in-import': 'off',

  // require require() calls to be placed at top-level module scope
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
  'n/global-require': 'error',

  // disallow require calls to be mixed with regular variable declarations
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-mixed-requires.md
  'n/no-mixed-requires': 'error',

  // disallow the use of process.env
  // decision: process.env is used by dotenv
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-env.md
  'n/no-process-env': 'off',

  // disallow specified modules when loaded by import declarations
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-import.md
  'n/no-restricted-import': 'error',

  // disallow specified modules when loaded by require
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-require.md
  'n/no-restricted-require': 'error',

  // disallow synchronous methods
  // decision: it's ok to use synchronous methods occasionally
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-sync.md
  'n/no-sync': 'off',

  // enforce either Buffer or require("buffer").Buffer
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/buffer.md
  'n/prefer-global/buffer': 'error',

  // enforce either console or require("console")
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/console.md
  'n/prefer-global/console': 'error',

  // enforce either process or require("process")
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/process.md
  'n/prefer-global/process': 'error',

  // enforce either TextDecoder or require("util").TextDecoder
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/text-decoder.md
  'n/prefer-global/text-decoder': 'error',

  // enforce either TextEncoder or require("util").TextEncoder
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/text-encoder.md
  'n/prefer-global/text-encoder': 'error',

  // enforce either URLSearchParams or require("url").URLSearchParams
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url-search-params.md
  'n/prefer-global/url-search-params': 'error',

  // enforce either URL or require("url").URL
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url.md
  'n/prefer-global/url': 'error',

  // enforce require("dns").promises
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/dns.md
  'n/prefer-promises/dns': 'error',

  // enforce require("fs").promises
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/fs.md
  'n/prefer-promises/fs': 'error',

  // require correct usage of hashbang
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/hashbang.md
  'n/hashbang': 'error',

  // disallow third-party modules which are hiding core modules
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-hide-core-modules.md
  'n/no-hide-core-modules': 'error',

  // enforce using the node: protocol when importing Node.js builtin modules
  // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-node-protocol.md
  'n/prefer-node-protocol': 'error',
};
