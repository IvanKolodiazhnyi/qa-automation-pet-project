import { test, expect } from "@playwright/test";
import { productSchema } from "../src/api-types";

test("Should fetch product details by ID", async ({ request }) => {
  const response = await request.get("https://dummyjson.com/products/1");
  expect(response.status()).toBe(200);

  const rawBody = await response.json();
  const validatedBody = productSchema.parse(rawBody);
  expect(validatedBody.id).toBe(1);
  expect(validatedBody.title).toBe("Essence Mascara Lash Princess");
});

test("Should create a new product via POST request", async ({ request }) => {
  const newProductPayload = {
    title: "My Custom QA Product",
    price: 250,
    description: "Testing POST request with Playwright and Zod",
  };

  const response = await request.post("https://dummyjson.com/products/add", {
    data: newProductPayload,
  });

  expect(response.ok()).toBeTruthy();
  const rawBody = await response.json();
  const validatedBody = productSchema.parse(rawBody);

  expect(validatedBody.title).toBe(newProductPayload.title);
  expect(validatedBody.price).toBe(newProductPayload.price);
  expect(validatedBody.id).toBeGreaterThan(0);
});
