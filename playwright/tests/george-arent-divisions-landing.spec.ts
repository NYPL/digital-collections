import { test, expect } from "../base";
import { GeorgeArentDivisionsLandingPage } from "../pages/george-arent-divisions-landing.page";
import { DivisionsPage } from "../pages/divisions.page";

test.beforeEach(async ({ page }) => {
  // Navigate to the page after setting up the routing rules.
  await page.goto(DivisionsPage.divisionsUrl);
  const divisionsPage = new DivisionsPage(page);
  await expect(divisionsPage.seeMoreLink.nth(4)).toBeVisible();
  await divisionsPage.seeMoreLink.nth(4).click();
});

// account for generally slow loading of this page
test.setTimeout(60000);

test("verify George Arents division landing page", async ({ page }) => {
  const divisionsLandingPage = new GeorgeArentDivisionsLandingPage(page);

  await expect(divisionsLandingPage.itemsGeorgeDivisionHeading).toBeVisible();
  await expect(divisionsLandingPage.itemsGeorgeArentsSeemoreLink).toBeVisible();
  await expect(divisionsLandingPage.contactLink).toBeVisible();
  await expect(
    divisionsLandingPage.collectionsGeorgeArentsHeading
  ).toBeVisible();
});

test(
  "verify pagination is present and visible",
  { tag: "@flaky" },
  async ({ page }) => {
    test.skip();
    // Flakey: this test will pass/fail based on whether qa-api or prod-api is called from test-dc.
    const divisionsLandingPage = new GeorgeArentDivisionsLandingPage(page);

    await divisionsLandingPage.georgeArentsPagination.scrollIntoViewIfNeeded();
    await expect(divisionsLandingPage.georgeArentsPagination).toBeVisible();
  }
);
