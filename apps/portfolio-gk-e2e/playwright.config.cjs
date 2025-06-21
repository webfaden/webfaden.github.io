const path = require('path');
const { defineConfig, devices } = require('@playwright/test');
const { nxE2EPreset } = require('@nx/playwright/preset');
const { workspaceRoot } = require('@nx/devkit');

const baseURL = process.env.BASE_URL || 'http://localhost:4300';

module.exports = defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  use: { baseURL, trace: 'on-first-retry' },
  webServer: {
    command: 'npx nx run @webfaden-temp/portfolio-gk:preview',
    url: 'http://localhost:4300',
    reuseExistingServer: true,
    cwd: workspaceRoot,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
