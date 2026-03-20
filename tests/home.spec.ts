import { expect, test } from '@playwright/test'

test('home page renders and has a heading', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/./)
  await expect(page.getByRole('heading').first()).toBeVisible()
})
