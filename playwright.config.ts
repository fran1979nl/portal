import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run start',      // usa el build
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000               // dale tiempo al server en CI
  },
});
