import { defineConfig, devices } from '@playwright/test'

const PORT = Number(process.env.STORYBOOK_E2E_PORT ?? 6007)

/**
 * Browser tests against the static Storybook build: `storybook build -o storybook-static`, then `npm run test:e2e`.
 * They need real layout, ResizeObserver and scroll events, so they run in a (headless) browser, not in jsdom.
 */
export default defineConfig({
  testDir: './e2e',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    trace: 'retain-on-failure'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ],
  webServer: {
    command: `npx http-server storybook-static -p ${PORT} -a 127.0.0.1 -s`,
    url: `http://127.0.0.1:${PORT}/iframe.html`,
    reuseExistingServer: !process.env.CI
  }
})
