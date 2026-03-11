import { test, expect } from "@playwright/test";
import { ProductResponse } from "../src/api-types";

test("Should fetch product details by ID", async ({ request }) => {
  const response = await request.get("https://dummyjson.com/products/1");
  expect(response.status()).toBe(200);

  const responseBody = (await response.json()) as ProductResponse;
  expect(responseBody.id).toBe(1);
  expect(responseBody.title).toBe("Essence Mascara Lash Princess");
});
