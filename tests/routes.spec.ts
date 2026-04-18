import { expect, test } from "@playwright/test";

const routes = [
  { path: "/sell", heading: "Bring your roastery to a serious coffee audience" },
  { path: "/sign-in", heading: "Welcome back" },
  { path: "/sign-up", heading: "Join BrewMarket" },
  { path: "/cart", heading: "Your Cart" },
  { path: "/Contact", heading: "Let us help you brew better." },
  { path: "/Pricing", heading: "Plans for every stage of coffee growth" },
];

test.describe("core routes", () => {
  for (const route of routes) {
    test(`${route.path} loads`, async ({ page }) => {
      await page.goto(route.path);
      await expect(page.getByRole("heading", { name: route.heading })).toBeVisible();
    });
  }
});
