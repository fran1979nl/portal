import { test, expect } from '@playwright/test';

test('home responde', async ({ page }) => {
  await page.goto('https://example.com/', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle(/Example Domain/i);
});
