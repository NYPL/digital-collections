import { test, expect } from "../base";
import ItemMetadataPage from "../pages/item-metadata.page";

let itemMetadataPage: ItemMetadataPage; // Global variable declared here

test.beforeEach(async ({ page }) => {
  // 1. Instantiate the Page Object using the provided fixture
  itemMetadataPage = new ItemMetadataPage(page);
  // 2. Call the instance method to load the page
  await itemMetadataPage.loadPage(ItemMetadataPage.itemResultURL);
});

test.describe("Check a bunch of fields", () => {
  test("display first heading", async () => {
    // assertion here
  });
  // more tests....
});

// test('Inspect_Item_Page', async ({ page }) => {
//   // Load the page you need to inspect
//   await page.goto('http://localhost:3000/items/8b2b3160-c5d5-012f-d95c-58d385a7bc34');

//   // The test will hang here until timeout, allowing for manual inspection
//   // NOTE: No assertion is needed yet.
// });
