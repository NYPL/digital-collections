import { test, expect } from "@playwright/test";
import { DivisionsLandingPage } from "../pages/divisions-landing";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/divisions");
});

test("verify divisions landing page and each slug URL", async ({ page }) => {
  const divisionsLandingPage = new DivisionsLandingPage(page);

  for (const slug of divisionsLandingPage.divisionsLandingPageSlugs) {
    const fullUrl = `http://localhost:3000/divisions/${slug}`;

    await page.goto(fullUrl);

    await expect(page).toHaveURL(`http://localhost:3000/divisions/${slug}`);
  }
});
