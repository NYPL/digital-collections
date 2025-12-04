import { test, expect } from "../base";
import ItemMetadataPage from "../pages/item-metadata.page";

let itemMetadataPage: ItemMetadataPage;

test.beforeEach(async ({ page }) => {
  itemMetadataPage = new ItemMetadataPage(page);
  await itemMetadataPage.loadPage(ItemMetadataPage.itemResultURL);
});

test.describe("Verify Metadata Fields", () => {
  test("should display Title heading and corresponding text", async () => {
    await expect(itemMetadataPage.titleHeading).toBeVisible();
    await itemMetadataPage.verifyTitleTextContent();
  });

  test.describe("Collection", () => {
    test.beforeEach(async () => {
      // Verify collection heading and containers before checking content
      await expect(itemMetadataPage.collectionHeading).toBeVisible();
      await expect(itemMetadataPage.collectionText).toBeVisible();
    });

    test("should include main/root collection link", async () => {
      await itemMetadataPage.verifyCollectionRootLink();
    });

    test("should include sub-collection link, if present", async () => {
      await itemMetadataPage.verifyCollectionLevelOneLink();
    });
  });

  test.describe("Identifiers", () => {
    test.beforeEach(async () => {
      // Verify identifiers heading and containers before checking content
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
