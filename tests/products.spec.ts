import { expect, test } from "@playwright/test";

test("products page renders listing content", async ({ page }) => {
  await page.goto("/products");

  await expect(page.getByRole("heading", { name: "Coffee Listings" })).toBeVisible();
  await expect(page.getByPlaceholder("Search beans, roast profile, origin...")).toBeVisible();
  await expect(page.getByRole("article")).toHaveCount(8);
  await expect(page.getByText("Ethiopia Yirgacheffe")).toBeVisible();
  await expect(page.getByRole("button", { name: "Sort: Best Sellers" })).toBeVisible();
});
