import { test as setup, expect } from "@playwright/test";

const authFile = ".auth/user.json";

setup("Authenticate and save state", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  const usernameInput = page.locator("#username");
  const passwordInput = page.locator("#password");
  const submitButton = page.locator("#submit");

  await usernameInput.fill(process.env.TEST_USERNAME!);
  await passwordInput.fill(process.env.TEST_PASSWORD!);

  await submitButton.click();

  const successMessage = page.locator(".post-title");
  await expect(successMessage).toHaveText("Logged In Successfully");

  await page.context().storageState({ path: authFile });
});
