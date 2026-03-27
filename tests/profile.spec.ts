import { test, expect } from '@playwright/test';

test('Should access profile page without logging in again', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/logged-in-successfully/');

  const logoutButton = page.locator('a:has-text("Log out")');
  await expect(logoutButton).toBeVisible();
  
  await expect(logoutButton).toHaveText("Hello");
});