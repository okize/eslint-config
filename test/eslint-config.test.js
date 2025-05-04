import { describe, test, expect } from 'vitest';
import { readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const configsDir = join(__dirname, '../src/eslint/configs');
const snapshotsDir = join(__dirname, '__snapshots__');
const configs = readdirSync(configsDir).map((file) => [basename(file, '.mjs'), file]);

describe('ESLint Configs', () => {
  test.each(configs)('%s config matches snapshot', async (_configName, file) => {
    const configPath = join(configsDir, file);
    const config = await import(configPath);
    const serializedConfig = JSON.stringify(config.default, null, 2);
    const snapshotPath = join(snapshotsDir, `${basename(file)}.snap`);

    await expect(serializedConfig).toMatchFileSnapshot(snapshotPath);
  });
});
