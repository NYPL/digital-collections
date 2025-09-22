import { test, expect } from "@playwright/test";
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
  // await expect(divisionsLandingPage.georgeArentsPagination).toBeHidden();

  const pagination = divisionsLandingPage.georgeArentsPagination;
  // Scroll the pagination element into the viewport
  await pagination.scrollIntoViewIfNeeded();
  await expect(pagination).toBeVisible();
});
