import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'glob';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const srcDir = join(__dirname, '..', 'src');

describe('export syntax', () => {
  it('should use ESM export syntax in all .mjs files', () => {
    const mjsFiles = globSync('**/*.mjs', { cwd: srcDir });

    mjsFiles.forEach((file) => {
      const content = readFileSync(join(srcDir, file), 'utf-8');

      // check for CommonJS module.exports, excluding comments
      const hasCommonJSExports = /^[^/]*\bmodule\.exports\b/m.test(content);

      // check for exports. assignments (another form of CommonJS), excluding comments
      const hasExportsDotAssignment = /^[^/]*\bexports\.\w+\s*=/m.test(content);

      expect(
        hasCommonJSExports || hasExportsDotAssignment,
        `File ${file} uses CommonJS exports instead of ESM export syntax`,
      ).toBe(false);

      // verify it has either named exports or default export
      const hasESMExports = /^[^/]*\b(export\s+|export\s+default\s+)/m.test(content);
      expect(hasESMExports, `File ${file} doesn't use ESM export syntax`).toBe(true);
    });
  });
});
