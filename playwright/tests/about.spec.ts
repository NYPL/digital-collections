import { test, expect } from "@playwright/test";
import { AboutPage } from "../pages/about.page";

test.beforeEach(async ({ page }) => {
  await page.goto(AboutPage.aboutUrl);
});

test("verify navigation menu on about page", async ({ page }) => {
  const aboutPage = new AboutPage(page);
  await expect(aboutPage.items).toBeVisible();
  await expect(aboutPage.collections).toBeVisible();
  await expect(aboutPage.divisions).toBeVisible();
  await expect(aboutPage.about).toBeVisible();
});

test("verify search bar, search button, public domain checkbox on about page", async ({
  page,
}) => {
  const aboutPage = new AboutPage(page);
  await expect(aboutPage.searchBar).toBeVisible();
  await expect(aboutPage.searchButton).toBeVisible();
  await expect(aboutPage.publicDomaincheckbox).toBeVisible();
});

test("verify links on about page", async ({ page }) => {
  const aboutPage = new AboutPage(page);
  await expect(aboutPage.searchLink).toBeVisible();
  await expect(aboutPage.itemLink).toBeVisible();
  await expect(aboutPage.collectionLink).toBeVisible();
  await expect(aboutPage.divisionLink).toBeVisible();
  await expect(aboutPage.aboutLink).toBeVisible();
  await expect(aboutPage.browseItemsLink).toBeVisible();
  await expect(aboutPage.publicDomainItemsLink).toBeVisible();
  await expect(aboutPage.freeForAllLink).toBeVisible();
  await expect(aboutPage.permissionsAndReproductionsLink).toBeVisible();
  await expect(aboutPage.investigateCopywrightLink).toBeVisible();
  await expect(aboutPage.publicDomainDeterminationChartLink).toBeVisible();
  await expect(aboutPage.wikipediaLink).toBeVisible();
  await expect(aboutPage.fairUseBasicsLink).toBeVisible();
  await expect(aboutPage.fairUseChecklistLink).toBeVisible();
  await expect(aboutPage.audioAndMovingImageLink).toBeVisible();
  await expect(aboutPage.nyplCatalogLink).toBeVisible();
  await expect(aboutPage.nyplArchivesPortalLink).toBeVisible();
  await expect(aboutPage.digitalPublicLibraryOfAmericaLink).toBeVisible();
  await expect(aboutPage.creativeCommonsLink).toBeVisible();
  await expect(aboutPage.nyplDigitalCollectionsAPILink).toBeVisible();
  await expect(
    aboutPage.publicDomainDigitalCollectionsGithubLink
  ).toBeVisible();
  await expect(aboutPage.dplaLink).toBeVisible();
  await expect(aboutPage.modsLink).toBeVisible();
  await expect(aboutPage.internetArchiveBookReaderLink).toBeVisible();
  await expect(aboutPage.iiifComplianceLink).toBeVisible();
  await expect(aboutPage.webAndMobileAccessibilityPolicyLink).toBeVisible();
  await expect(aboutPage.emailLink).toBeVisible();
});
