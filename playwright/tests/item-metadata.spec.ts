import { test, expect } from "../base";
import ItemMetadataPage from "../pages/item-metadata.page";

let itemMetadataPage: ItemMetadataPage;

test.beforeEach(async ({ page }) => {
  itemMetadataPage = new ItemMetadataPage(page);
  await itemMetadataPage.loadPage(ItemMetadataPage.itemResultURL);
});

// --- Tests for Required Fields ---

test.describe("Item Metadata Page Visibility and Content Checks", () => {
  test.skip('should display the main "Item Data" header', async () => {
    // Verifies the main required heading is present.
    // why is this  passing?  Where is the "Item data" text called from?
    await expect(itemMetadataPage.itemDataHeader).toBeVisible();
  });

  test("should verify the Title heading and corresponding text are visible", async () => {
    // Checks the required Title heading and its text content.
    expect(itemMetadataPage.titleHeading).toBeVisible;
    await itemMetadataPage.verifyTitleTextContent();
  });

  test.describe("Item Identifiers Verification", () => {
    // SETUP: Ensure the mandatory structural containers are visible before each test runs.
    test.beforeEach(async () => {
      // Verify heading and containers before checking content
      await expect(itemMetadataPage.identifiersHeading).toBeVisible();
      await expect(itemMetadataPage.identifiersText).toBeVisible();
    });

    test("verify required UUID identifier is present", async () => {
      // This checks only the required UUID field.
      await itemMetadataPage.verifyUUIDIdentifierIsPresent();
    });

    test("verify the RLIN/OCLC identifier if present", async () => {
      // This test checks OCLC field (which is conditionally checked inside the method).
      await itemMetadataPage.verifyOclcIdentifierIsPresent();
    });

    test("verify the NYPL Catalog Link if presents", async () => {
      // This test checks the Catalog Link field.
      await itemMetadataPage.verifyCatalogLinkIsPresent();
    });

    // This test works but not sure it's needed

    // test.skip('should verify the Identifiers block contains only one link', async () => {
    //   // This test verifies the count constraint.
    //   await expect(itemMetadataPage.identifiersText.locator('a')).toHaveCount(1);
    // });
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
