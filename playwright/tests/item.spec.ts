import { test, expect } from "@playwright/test";
import ItemPage from "../pages/item.page";

let itemPage: ItemPage;

test.beforeEach(async ({ page }, testInfo) => {
  if (testInfo.title !== "searches for a keyword from homepage") {
    itemPage = await ItemPage.loadPage(ItemPage.itemUrl, page);
  }
});

test.describe("displays item page", () => {
  // potential tests:
  // displays image, video, or audio
  // displays item summary
  // displays download options
  // displays item division, collection, and subcollections
  // displays item data
  // displays cite this item
  test("displays item summary", async () => {
    await expect(itemPage.itemHeading).toBeVisible();
  });
});
