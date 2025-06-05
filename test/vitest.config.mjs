import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['html'],
    },
    include: ['test/*.test.mts'],
    reporters: process.env.CI ? ['html', 'junit', 'default'] : ['default'],
    outputFile: {
      html: '.temp/index.html',
      junit: '.temp/index.xml',
    },
  },
});
