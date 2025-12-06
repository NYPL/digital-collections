import { test, expect } from "../base";
import ItemMetadataPage from "../pages/item-metadata.page";
import { applyRouteFilters } from "../utils/routeFilters";

let itemMetadataPage: ItemMetadataPage;

// Do a new basic-search from the results-page
test.describe.serial("Metadata Checks", () => {
  // Runs ONCE to create the shared, filtered page context.

  test.beforeAll(async ({ browser }) => {
    // Manually create context/page to force serialization to remain in block
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    // Apply global filters manually
    await applyRouteFilters(page);

    // Assign to global variable and load the page object
    itemMetadataPage = new ItemMetadataPage(page);
    await itemMetadataPage.loadPage(ItemMetadataPage.itemResultURL);
  });

  // TEARDOWN: close the entire context.
  test.afterAll(async () => {
    // Closes the BrowserContext, freeing up resources.
    await searchPage.page.context().close();
  });

  test.describe.serial("Verify Metadata Fields", () => {
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

      test("should include sub-collection link", async () => {
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

      test("should include RLIN/OCLC identifier", async () => {
        await itemMetadataPage.verifyOclcIdentifierIsPresent();
      });

      test("should include the NYPL Catalog Link", async () => {
        await itemMetadataPage.verifyCatalogLinkIsPresent();
      });
    });

    test.describe("Other Identifiers", () => {
      test("should include Shelf Locator", async () => {
        await itemMetadataPage.verifyShelfLocatorIsPresent();
      });
    });

    test.describe("Names", () => {
      test.beforeEach(async () => {
        // Verify collection heading and containers before checking content
        await expect(itemMetadataPage.nameHeading).toBeVisible();
        await expect(itemMetadataPage.nameText).toBeVisible();
      });

      test("should contain all available names", async () => {
        await itemMetadataPage.verifyNameFieldList();
      });

      test("should include name one link", async () => {
        await itemMetadataPage.verifyNameOneValue();
      });

      test("should include name one's role", async () => {
        await itemMetadataPage.verifyNameOneRole();
      });

      test("should include name two link", async () => {
        await itemMetadataPage.verifyNameTwoValue();
      });

      test("should include name two's role", async () => {
        await itemMetadataPage.verifyNameTwoRole();
      });
    });
  });
});
