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

test("verify text on about page", async ({ page }) => {
  const aboutPage = new AboutPage(page);
  const text = await aboutPage.aboutPageText.textContent();
  await expect(aboutPage.aboutPageText).toBeVisible();
  await expect(text).toContain("About NYPL Digital Collections");
  await expect(text).toContain("Find items");
  await expect(text).toContain("Download items");
  await expect(text).toContain(
    "Public Domain / no known U.S. copyright restrictions"
  );
  await expect(text).toContain(
    "Is there a difference between 'Public Domain' & 'no known U.S. copyright restrictions'?"
  );
  await expect(text).toContain(
    "Copyright held or managed by The New York Public Library"
  );
  await expect(text).toContain("Copyright status undefined");
  await expect(text).toContain("Audio and Moving Image Materials");
  await expect(text).toContain("Data");
  await expect(text).toContain("Linked projects");
  await expect(text).toContain("Available metadata");
  await expect(text).toContain("Platform");
  await expect(text).toContain("Accessibility");
  await expect(text).toContain(
    "NYPL's statement on potentially harmful content"
  );
  await expect(text).toContain("Frequently asked questions");
  await expect(text).toContain(
    "What harmful or difficult content may be found in NYPL's Digital Collections?"
  );
  await expect(text).toContain(
    "Why does NYPL make potentially harmful content available?"
  );
  await expect(text).toContain(
    "How is this material described, and why are some of the terms used in the descriptions harmful?"
  );
  await expect(text).toContain(
    "How are librarians, cataloguers, and archivists working to address this problem and help users better understand such content?"
  );
  await expect(text).toContain("How can I report harmful content?");
  await expect(text).toContain("Contact");
  await expect(text).toContain("Acknowledgements");
});

test("verify links on about page", async ({ page }) => {
  const aboutPage = new AboutPage(page);
  const links = await aboutPage.aboutLinks.allTextContents();

  await expect(links).toContain("search");
  await expect(links).toContain("item");
  await expect(links).toContain("collection");
  await expect(links).toContain("division");
  await expect(links).toContain(
    '"NYPL Digital Collections Platform: An Introduction"'
  );
  await expect(links).toContain(
    "Free for All: NYPL Enhances Public Domain Collections for Sharing and Reuse."
  );
  await expect(links).toContain("Permissions and Reproductions");
  await expect(links).toContain(
    "How to Investigate the Copyright Status of a Work [PDF]"
  );
  await expect(links).toContain("public domain determination chart");
  await expect(links).toContain("Wikipedia");
  await expect(links).toContain("fair use basics");
  await expect(links).toContain("fair use checklist");
  await expect(links).toContain("Permissions and Reproductions");
  await expect(links).toContain(
    "Audio and Moving Image Preservation and Access Initiative."
  );
  await expect(links).toContain("NYPL Catalog");
  await expect(links).toContain("NYPL Archives Portal");
  await expect(links).toContain("Digital Public Library of America");
  await expect(links).toContain(
    "Creative Commons CC0 1.0 Universal Public Domain Dedication"
  );
  await expect(links).toContain(
    "The New York Public Library Digital Collections API"
  );
  await expect(links).toContain(
    "public domain portion of Digital Collections on GitHub"
  );
  await expect(links).toContain("Digital Public Library of America (DPLA)");
  await expect(links).toContain("MODS");
  await expect(links).toContain("Internet Archive's BookReader.");
  await expect(links).toContain("IIIF compliance");
  await expect(links).toContain("Web & Mobile Accessibility Policy.");
  await expect(links).toContain("digitalcollections@nypl.org");
});
