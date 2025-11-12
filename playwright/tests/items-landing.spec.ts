import { test, expect } from "../base";
import ItemsLandingPage from "../pages/items-landing.page";

let itemsLandingPage: ItemsLandingPage;

test.beforeEach(async ({ page }) => {
  itemsLandingPage = await ItemsLandingPage.loadPage(
    ItemsLandingPage.itemsLandingUrl,
    page
  );
});

test("displays elements on page", async () => {
  await expect(itemsLandingPage.resultsHeading).toBeVisible();
  await expect(itemsLandingPage.firstResult).toBeVisible();
  await expect(itemsLandingPage.searchBar).toBeVisible();
  await expect(itemsLandingPage.searchButton).toBeVisible();
  await expect(itemsLandingPage.refineHeading).toBeVisible();
  await expect(itemsLandingPage.topicFilter).toBeVisible();
  await expect(itemsLandingPage.sortButton).toBeVisible();
});
