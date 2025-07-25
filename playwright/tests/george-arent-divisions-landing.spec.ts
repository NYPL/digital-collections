import { test, expect } from "@playwright/test";
import { GeorgeArentDivisionsLandingPage } from "../pages/george-arent-divisions-landing-page";
import { DivisionsPage } from "../pages/divisions.page";

test.beforeEach(async ({ page }) => {
  await page.goto(DivisionsPage.divisionsUrl);
  const divisionsPage = new DivisionsPage(page);
  await expect(divisionsPage.seeMoreLink.nth(4)).toBeVisible();
  await divisionsPage.seeMoreLink.nth(4).click();
});

test("verify George Arents division's landing page", async ({ page }) => {
  const divisionsPage = new DivisionsPage(page);
  const divisionsLandingPage = new GeorgeArentDivisionsLandingPage(page);

  await expect(divisionsLandingPage.itemsGeorgeDivisionHeading).toBeVisible();
  await expect(divisionsLandingPage.itemsGeorgeArentsSeemoreLink).toBeVisible();

  await expect(divisionsLandingPage.contactLink).toBeVisible();
  await expect(
    divisionsLandingPage.collectionsGeorgeArentsHeading
  ).toBeVisible();
  await expect(divisionsLandingPage.georgeArentsPagination).toBeVisible();
});
