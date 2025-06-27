import { test, expect } from "@playwright/test";
import { DivisionsLandingPage } from "../pages/divisions-landing-page";
import { DivisionsPage } from "../pages/divisions.page";

test.describe("Divisions Page Navigation", () => {
  test.setTimeout(60000);

  test.beforeEach(async ({ page }) => {
    await page.goto(DivisionsPage.divisionsUrl);
  });

  test("verify divisions landing page and each slug URL", async ({ page }) => {
    const divisionsLandingPage = new DivisionsLandingPage(page);

    for (const slug of divisionsLandingPage.divisionsLandingPageSlugs) {
      const fullUrl = `${DivisionsPage.divisionsUrl}/${slug}`;
      await page.goto(fullUrl);
      await expect(page).toHaveURL(fullUrl);
    }
  });

  test("from divisions page click see more link and verify divisions landing page", async ({
    page,
  }) => {
    const divisionsPage = new DivisionsPage(page);
    const divisionsLandingPage = new DivisionsLandingPage(page);

    await expect(divisionsPage.seeMoreLink.nth(4)).toBeVisible();
    await divisionsPage.seeMoreLink.nth(4).click();
    const expectedUrl = `${DivisionsPage.divisionsUrl}/${divisionsLandingPage.divisionsLandingPageSlugs[4]}`;
    const expectedHeadingText = "George Arents Collection";

    await expect(page).toHaveURL(expectedUrl);
    await expect(divisionsLandingPage.pageHeadingGeneric).toBeVisible();
    await expect(divisionsLandingPage.pageHeadingGeneric).toHaveText(
      expectedHeadingText
    );
    await expect(divisionsLandingPage.pageDescriptionGeneric).toBeVisible();
    await expect(divisionsLandingPage.pageContactGeneric).toBeVisible();
  });
});
