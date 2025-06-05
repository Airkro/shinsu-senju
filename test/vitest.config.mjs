import { basename, join } from 'node:path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['html'],
    },
    include: ['test/*.test.mts'],
    reporters: process.env.CI ? ['html', 'junit', 'default'] : ['default'],
    snapshotSerializers: [new URL('./helper/serializer.ts', import.meta.url)],
    resolveSnapshotPath: (testPath) => {
      return `${join('.snapshots', basename(testPath))}.md`;
    },
    outputFile: {
      html: '.temp/index.html',
      junit: '.temp/index.xml',
    },
  },
});
