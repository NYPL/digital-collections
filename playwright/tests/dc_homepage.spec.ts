import { test, expect } from "@playwright/test";
import { DCHomepage } from "../pages/dc_homepage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test("verify navigation menu is displayed (items, collections, divisions, about", async ({
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

test("verify featured section is visible", async ({ page }) => {
  const dchomepage = new DCHomepage(page);

  if (await dchomepage.featuredSpotlightOnPublicDomain.isVisible()) {
    // Assert for the "Spotlight on Public Domain" section
    await expect(dchomepage.featuredSpotlightOnPublicDomain).toBeVisible();
    await expect(dchomepage.featuredLearnMore).toBeVisible();
  } else if (
    await dchomepage.featuredDigitalCollectionsPrintStore.isVisible()
  ) {
    // Assert for the "Digital Collections Print Store" section

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
  const dchomepage = new DCHomepage(page);
  await expect(dchomepage.footerAccessibilityLink).toBeVisible();
  await expect(dchomepage.footerPressLink).toBeVisible();
  await expect(dchomepage.footerCareersLink).toBeVisible();
  await expect(dchomepage.footerAboutNyplLink).toBeVisible();
  await expect(dchomepage.footerSpaceRentalLink).toBeVisible();
  await expect(dchomepage.footerPrivacyPolicyLink).toBeVisible();
  await expect(dchomepage.footerOtherPoliciesLink).toBeVisible();
  await expect(dchomepage.footerTermsAndConditionsLink).toBeVisible();
  await expect(dchomepage.footerGovernanceLink).toBeVisible();
  await expect(dchomepage.footerRulesAndRegulationsLink).toBeVisible();
  await expect(dchomepage.footerLanguage).toBeVisible();
  await expect(dchomepage.footerSocialFacebook).toBeVisible();
  await expect(dchomepage.footerSocialTwitter).toBeVisible();
  await expect(dchomepage.footerSocialInstagram).toBeVisible();
  await expect(dchomepage.footerSocialYouTube).toBeVisible();
});
