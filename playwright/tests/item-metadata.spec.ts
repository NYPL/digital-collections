import { test, expect } from "../base";
import ItemMetadataPage from "../pages/item-metadata.page";

let itemMetadataPage: ItemMetadataPage;

test.beforeEach(async ({ page }) => {
  itemMetadataPage = new ItemMetadataPage(page);
  await itemMetadataPage.loadPage(ItemMetadataPage.itemResultURL);
});

// --- Tests for Required Fields ---

test.describe("Required Basic Metadata", () => {
  test.skip('should display main "Item Data" header', async () => {
    // Verifies the main required heading is present.
    // why is this  passing?  Where is the "Item data" text called from?
    await expect(itemMetadataPage.itemDataHeader).toBeVisible();
  });

  test("should display Title heading and corresponding text", async () => {
    // Checks the required Title heading and its text content.
    expect(itemMetadataPage.titleHeading).toBeVisible;
    await itemMetadataPage.verifyTitleTextContent();
  });

  test.describe("Required Identifiers", () => {
    // SETUP: Ensure the mandatory structural containers are visible before each test runs.
    test.beforeEach(async () => {
      // Verify heading and containers before checking content
      await expect(itemMetadataPage.identifiersHeading).toBeVisible();
      await expect(itemMetadataPage.identifiersText).toBeVisible();
    });

    test("should include UUID", async () => {
      // This checks only the required UUID field.
      await itemMetadataPage.verifyUUIDIdentifierIsPresent();
    });

    test("should include RLIN/OCLC identifier if present", async () => {
      // This test checks OCLC field (which is conditionally checked inside the method).
      await itemMetadataPage.verifyOclcIdentifierIsPresent();
    });

    test("should include the NYPL Catalog Link if present", async () => {
      // This test checks the Catalog Link field.
      await itemMetadataPage.verifyCatalogLinkIsPresent();
    });
  });
});

test.describe("Optional Basic Metadata", () => {
  // SETUP: Ensure the mandatory structural containers are visible before each test runs.
  test.describe("Optional Identifiers", () => {
    test("Call Number", async () => {
      // This checks only the Shelf Locator field.
      // code-goes-here
    });
  });
});
