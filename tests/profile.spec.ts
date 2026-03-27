import { test, expect } from '@playwright/test';

test('Should access profile page without logging in again', async ({ page }) => {
  await page.goto(`${process.env.UI_BASE_URL!}/logged-in-successfully/`);

  const logoutButton = page.locator('a:has-text("Log out")');
  await expect(logoutButton).toBeVisible();
});