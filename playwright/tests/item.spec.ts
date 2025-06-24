import { test, expect } from "@playwright/test";
import ItemPage from "../pages/item.page";

let itemPage: ItemPage;

test.beforeEach(async ({ page }) => {
  itemPage = await ItemPage.loadPage(ItemPage.itemUrl, page);
});

test.describe("confirms search results were filtered correctly", () => {
  test("displays filter selections", async () => {
    await expect(itemPage.itemHeading).toBeVisible();
    await expect(itemPage.itemTopic).toBeVisible();
    await expect(itemPage.itemPublisher).toBeVisible();
  });
});

test.describe("displays item page", () => {
  test("displays item summary", async () => {
    await expect(itemPage.itemHeading).toBeVisible();
    await expect(itemPage.itemDate).toBeVisible();
    await expect(itemPage.itemRights).toBeVisible();
  });

  test("displays item division and collections", async () => {
    await expect(itemPage.itemDivision).toBeVisible();
    await expect(itemPage.itemCollection).toBeVisible();
  });

  test("displays item data", async () => {
    await expect(itemPage.itemTopic).toBeVisible();
  });
});
