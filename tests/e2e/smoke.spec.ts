import { test, expect } from '@playwright/test';

test('home responde', async ({ page }) => {
  await page.goto('/');                        // usa baseURL del config
  await expect(page.locator('body')).toBeVisible();
});
