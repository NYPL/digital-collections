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
});

test.describe("Other Identifiers", () => {
  test("should include Shelf Locator", async () => {
    await itemMetadataPage.verifyShelfLocatorIsPresent();
  });
});

// test.describe("Name", () => {
//   test.beforeEach(async () => {
//     // Verify collection heading and containers before checking content
//     await expect(itemMetadataPage.nameHeading).toBeVisible();
//     await expect(itemMetadataPage.nameText).toBeVisible();
//   });

//   test.describe("should include first name and role", async () => {
//     //test goes here
//   });

//   test.describe("should include second name and role", async () => {
//     //test goes here
//   });
// });

// Inside item-metadata.spec.ts

test.describe("Names", () => {
  test.beforeEach(async () => {
    // Verify collection heading and containers before checking content
    await itemMetadataPage.nameHeading.focus();

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
