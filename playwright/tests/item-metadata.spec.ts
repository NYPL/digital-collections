import { test, expect } from "../base";
import ItemMetadataPage from "../pages/item-metadata.page";

let itemMetadataPage: ItemMetadataPage; // Global variable declared here

test.beforeEach(async ({ page }) => {
  // 1. Instantiate the Page Object using the provided fixture
  itemMetadataPage = new ItemMetadataPage(page);
  // 2. Call the instance method to load the page
  await itemMetadataPage.loadPage(ItemMetadataPage.itemResultURL);
});

test.describe("Item Metadata Page Visibility and Content Checks", () => {
  // ThIS mighe be called at top, so don't need here to reload?
  // test.beforeEach(async ({ page }) => {
  //   // 1. Instantiate the Page Object
  //   itemMetadataPage = new ItemMetadataPage(page);

  //   // 2. Load the page using the instance method
  //   await itemMetadataPage.loadPage(ItemMetadataPage.itemResultURL);
  // });

  // --- Tests for Required Fields ---

  test.skip('should display the main "Item Data" header', async () => {
    // Verifies the main required heading is present.
    await expect(itemMetadataPage.itemDataHeader).toBeVisible();
  });

  test("should verify the Title heading and corresponding text are visible", async () => {
    // Checks the required Title heading and its text content.
    await expect(itemMetadataPage.titleHeading).toBeVisible();
    await expect(itemMetadataPage.titleText).not.toBeEmpty();
  });

  // test('should verify the Library location and Dates headings are present', async () => {
  //   // Checks for other critical required headings.
  //   await expect(itemMetadataPage.libraryHeading).toBeVisible();
  //   await expect(itemMetadataPage.datesHeading).toBeVisible();
  // });

  // test('should verify Identifiers and Rights statement are present', async () => {
  //   // Checks for critical identification and legal fields.
  //   await expect(itemMetadataPage.identifiersHeading).toBeVisible();
  //   await expect(itemMetadataPage.identifiersText).not.toBeEmpty();
  //   await expect(itemMetadataPage.rightsHeading).toBeVisible();
  //   await expect(itemMetadataPage.rightsText).not.toBeEmpty();
  // });

  // --- Tests for Optional/Complex Fields ---

  // test('should verify the Collection link is present and valid', async () => {
  //   // Checks for the existence and validity of the link.
  //   await expect(itemMetadataPage.collectionLink).toBeVisible();
  //   await expect(itemMetadataPage.collectionLink).toHaveAttribute('href', /collections/);
  // });

  // test('should display the Description and Physical metadata sections', async () => {
  //   // Checks visibility of secondary metadata fields.
  //   await expect(itemMetadataPage.descriptionHeading).toBeVisible();
  //   await expect(itemMetadataPage.physicalHeading).toBeVisible();
  // });
});
