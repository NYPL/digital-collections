import { test, expect } from "../base";
import ItemMetadataPage from "../pages/item-metadata.page";

let itemMetadataPage: ItemMetadataPage;

test.beforeEach(async ({ page }) => {
  itemMetadataPage = new ItemMetadataPage(page);
  await itemMetadataPage.loadPage(ItemMetadataPage.itemResultURL);
});

test.describe("Metadata Fields", () => {
  test.skip('should display main "Item Data" header', async () => {
    // Verifies the main required heading is present.
    await expect(itemMetadataPage.itemDataHeader).toBeVisible();
  });

  test("should display Title heading and corresponding text", async () => {
    await expect(itemMetadataPage.titleHeading).toBeVisible();
    await itemMetadataPage.verifyTitleTextContent();
  });

  test.describe("Identifiers", () => {
    test.beforeEach(async () => {
      // Verify heading and containers before checking content
      await expect(itemMetadataPage.identifiersHeading).toBeVisible();
      await expect(itemMetadataPage.identifiersText).toBeVisible();
    });

    test("should include UUID", async () => {
      await itemMetadataPage.verifyUUIDIdentifierIsPresent();
    });

    test("should include RLIN/OCLC identifier if present", async () => {
      await itemMetadataPage.verifyOclcIdentifierIsPresent();
    });

    test("should include the NYPL Catalog Link if present", async () => {
      await itemMetadataPage.verifyCatalogLinkIsPresent();
    });
  });
});

test.describe("Other Identifiers", () => {
  test("should include Shelf Locator if present", async () => {
    await itemMetadataPage.verifyShelfLocatorIsPresent();
  });
});
