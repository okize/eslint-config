import { describe, it } from 'vitest';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const configsDir = join(__dirname, '../src/eslint/configs');
const snapshotsDir = join(__dirname, '__snapshots__');

const pathToSnapshot = (file) => join(snapshotsDir, `${basename(file)}.snap`);

describe('ESLint Configs', () => {
  it('javascript config matches snapshot', async () => {
    const file = 'javascript.mjs';
    const configPath = join(configsDir, file);
    const config = await import(configPath);
    const serializedConfig = JSON.stringify(config.default, null, 2);

    await expect(serializedConfig).toMatchFileSnapshot(pathToSnapshot(file));
  });
});
