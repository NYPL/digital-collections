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

test("verify explore further section is visible", async ({ page }) => {
  const dchomepage = new DCHomepage(page);
  await expect(dchomepage.exporeFurtherHeading).toBeVisible();
  await expect(dchomepage.digitalCollectionPrintStore).toBeVisible();
  await expect(dchomepage.nyplArchivesAndManuscripts).toBeVisible();
  await expect(dchomepage.nyplResearchCatalog).toBeVisible();
  await expect(dchomepage.nyplDigitalCollectionsApi).toBeVisible();
  await expect(dchomepage.digitalPublicLibraryOfAmerica).toBeVisible();
});
