import { test, expect } from '@playwright/test';

test('Example.com responde', async ({ page }) => {
  await page.goto('https://example.com', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('h1')).toContainText(/example domain/i);
});
