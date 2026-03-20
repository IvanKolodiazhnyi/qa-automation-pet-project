import { test, expect } from "@playwright/test";

test("Should mock fruits API and display custom fruit on UI", async ({
  page,
}) => {
  const mockedFruits = [
    { name: "QA Automation Berry", id: 1 },
    { name: "Playwright Melon", id: 2 },
  ];

  await page.route("*/**/api/v1/fruits", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(mockedFruits),
    });
  });

  await page.goto("https://demo.playwright.dev/api-mocking/");

  const fruitItems = page.locator("ul > li");

  await expect(fruitItems.first()).toBeVisible();

  await expect(fruitItems.first()).toHaveText("QA Automation Berry");
});

test("Should mock fruits API and display empty list of fruits on UI", async ({
  page,
}) => {
  await page.route("*/**/api/v1/fruits", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([]),
    });
  });

  await page.goto("https://demo.playwright.dev/api-mocking/");

  const fruitItems = page.locator("ul > li");

  await expect(fruitItems).toHaveCount(0);
});

test("Should mock fruits API and display an error message on UI", async ({
  page,
}) => {
  await page.route("*/**/api/v1/fruits", async (route) => {
    await route.fulfill({
      status: 500,
    });
  });

  await page.goto("https://demo.playwright.dev/api-mocking/");

  await expect(page.locator("ul > li")).toHaveCount(0);
});
