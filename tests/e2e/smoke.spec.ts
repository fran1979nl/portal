import { test, expect } from '@playwright/test';

test('home responde', async ({ page }) => {
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('body')).toBeVisible();
});
