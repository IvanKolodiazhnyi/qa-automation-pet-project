import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

test("User should be able to login with valid credentials", async ({
  page,
}) => {
  const productCard = page.locator('[data-test="inventory-item"]').first();
  const loginPage = new LoginPage(page);

  await page.goto("https://www.saucedemo.com/");
  await loginPage.performLogin("standard_user", "secret_sauce");
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  
  await expect(productCard).toBeVisible();
});
