import { test, expect } from "@playwright/test";
import { DCHomepage } from "../pages/homepage.page";

test.beforeEach(async ({ page }) => {
  // Block analytics, tracking, and third-party domains
  await page.route(/.*googletagmanager\.com.*/, (route) => route.abort());
  await page.route(/.*demdex\.net.*/, (route) => route.abort());
  await page.route(/.*adobedtm\.com.*/, (route) => route.abort());
  await page.route(/.*everesttech\.net.*/, (route) => route.abort());
  await page.route(/.*ipify\.org.*/, (route) => route.abort());
  await page.route(/.*google\.com.*/, (route) => route.abort());
  await page.route(/.*omappapi\.com.*/, (route) => route.abort());
  await page.route(/.*google-analytics\.com.*/, (route) => route.abort());

  // If necessary, block the main-image overlay from iiif
  // When running the whole suite, feedback on the homepage will often
  // timeout when default img overlays are slow
  await page.route("**/default.jpg", (route) => route.abort());

  // Navigate to the page after setting up the routing rules.
  await page.goto("/", { waitUntil: "load" });
});

test("verify navigation menu is displayed (items, collections, divisions, about)", async ({
  page,
}) => {
  const dchomepage = new DCHomepage(page);
  await expect(dchomepage.items).toBeVisible();
  await expect(dchomepage.collections).toBeVisible();
  await expect(dchomepage.divisions).toBeVisible();
  await expect(dchomepage.about).toBeVisible();
});

test("verify search bar, search button are visible", async ({ page }) => {
  const dchomepage = new DCHomepage(page);
  await expect(dchomepage.searchBar).toBeVisible();
  await expect(dchomepage.searchButton).toBeVisible();
});

test("verify public domain link is visible", async ({ page }) => {
  const dchomepage = new DCHomepage(page);
  await expect(dchomepage.whatIsPublicDomainLink).toBeVisible();
});

test("verify collections and item count", async ({ page }) => {
  const dchomepage = new DCHomepage(page);
  await expect(dchomepage.posadaCollection).toBeVisible();
  await expect(dchomepage.posadaCollectionItems).not.toHaveText("0 items");
  await expect(
    dchomepage.farmSecurityAdministrationPhotographsCollection
  ).toBeVisible();
  await expect(
    dchomepage.farmSecurityAdministrationPhotographsCollectionItems
  ).not.toHaveText("0 items");
  await expect(dchomepage.posadaCollectionItems).not.toHaveText("NaN items");
  await expect(
    dchomepage.farmSecurityAdministrationPhotographsCollectionItems
  ).not.toHaveText("NaN items");
});

test("verify featured section is visible", async ({ page }) => {
  const dchomepage = new DCHomepage(page);

  if (await dchomepage.featuredSpotlightOnPublicDomain.isVisible()) {
    await expect(dchomepage.featuredSpotlightOnPublicDomain).toBeVisible();
    await expect(dchomepage.featuredLearnMore).toBeVisible();
  } else if (
    await dchomepage.featuredDigitalCollectionsPrintStore.isVisible()
  ) {
    await expect(dchomepage.featuredDigitalCollectionsPrintStore).toBeVisible();
    await expect(dchomepage.featuredVisitStore).toBeVisible();
  }
});
test("verify explore further section is visible", async ({ page }) => {
  const dchomepage = new DCHomepage(page);
  await expect(dchomepage.exploreFurtherHeading).toBeVisible();
  await expect(dchomepage.digitalCollectionPrintStore).toBeVisible();
  await expect(dchomepage.nyplArchivesAndManuscripts).toBeVisible();
  await expect(dchomepage.nyplResearchCatalog).toBeVisible();
  await expect(dchomepage.nyplDigitalCollectionsApi).toBeVisible();
  await expect(dchomepage.digitalPublicLibraryOfAmerica).toBeVisible();
});

test("verify footer links are visible", async ({ page }) => {
  page.setDefaultTimeout(30000); // 30 seconds
  const dchomepage = new DCHomepage(page);
  // the full footer content should be tested in the footer repo, not here in DC

  await expect(dchomepage.footerAccessibilityLink).toBeVisible();
});

test("verify feedback button is visible", async ({ page }) => {
  // With route-filtering on, extending timeouts might not be necessary
  // for feedback button tests.
  test.setTimeout(60000);

  const dchomepage = new DCHomepage(page);
  await expect(dchomepage.feedbackButton).toBeVisible();
  await dchomepage.feedbackButton.click();
  await expect(dchomepage.feedbackForm).toBeVisible();
  await expect(dchomepage.feedbackCommentRadioButton).toBeVisible();
  await expect(dchomepage.feedbackCorrectionRadioButton).toBeVisible();
  await expect(dchomepage.feedbackBugRadioButton).toBeVisible();
  await expect(dchomepage.feedbackTextArea).toBeVisible();
  await expect(dchomepage.feedbackSubmitButton).toBeVisible();
  await expect(dchomepage.feedbackCancelButton).toBeVisible();
  await expect(dchomepage.feedbackPrivacyPolicy).toBeVisible();
  await dchomepage.feedbackCancelButton.click();
  await expect(dchomepage.feedbackForm).not.toBeVisible();
});
