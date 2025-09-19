import { test, expect } from "@playwright/test";
import { GeorgeArentDivisionsLandingPage } from "../pages/george-arent-divisions-landing.page";
import { DivisionsPage } from "../pages/divisions.page";

test.beforeEach(async ({ page }) => {
  // Block analytics, tracking, and third-party domains
  await page.route(/.*adobedc\.net.*/, (route) => route.abort());
  await page.route(/.*adobedtm\.com.*/, (route) => route.abort());
  await page.route(/.*demdex\.net.*/, (route) => route.abort());
  await page.route(/.*everesttech\.net.*/, (route) => route.abort());
  await page.route(/.*google-analytics\.com.*/, (route) => route.abort());
  await page.route(/.*google\.com.*/, (route) => route.abort());
  await page.route(/.*googletagmanager\.com.*/, (route) => route.abort());
  await page.route(/.*ipify\.org.*/, (route) => route.abort());
  await page.route(/.*nr-data\.com.*/, (route) => route.abort());
  await page.route(/.*omappapi\.com.*/, (route) => route.abort());

  // Navigate to the page after setting up the routing rules.
  await page.goto(DivisionsPage.divisionsUrl);
  const divisionsPage = new DivisionsPage(page);
  await expect(divisionsPage.seeMoreLink.nth(4)).toBeVisible();
  await divisionsPage.seeMoreLink.nth(4).click();
});

test("verify George Arents division landing page", async ({ page }) => {
  const divisionsLandingPage = new GeorgeArentDivisionsLandingPage(page);

  await expect(divisionsLandingPage.itemsGeorgeDivisionHeading).toBeVisible();
  await expect(divisionsLandingPage.itemsGeorgeArentsSeemoreLink).toBeVisible();

  await expect(divisionsLandingPage.contactLink).toBeVisible();
  await expect(
    divisionsLandingPage.collectionsGeorgeArentsHeading
  ).toBeVisible();
  await expect(divisionsLandingPage.georgeArentsPagination).toBeVisible();
});
