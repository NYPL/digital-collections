import { test, expect } from "../base";
import SearchPage from "../pages/search.page";

let searchPage: SearchPage;

test.describe("choose specific sort options", () => {
  test.beforeEach(async ({ page }) => {
    searchPage = new SearchPage(page);
    await searchPage.loadPage(SearchPage.searchResultsUrl);

    // force test-runner on CI to wait until cards actually 'paint,' whatever that means.
    await expect(searchPage.allCards.first()).toBeVisible();

    // page is fully loaded, so sort is safe to click now
    await searchPage.sortButton.click();

    // moving this to test-blocks to isolate dependencies
    // await searchPage.sortButton.click();

    // static text is not a good indicator that page is fully loaded
    // await expect(searchPage.refineHeading).toBeVisible();
  });

  test("sorts search results by relevance", async ({ page }) => {
    //await expect(searchPage.sortByRelevance).toBeVisible();
    // await searchPage.sortButton.click();

    await expect(async () => {
      await searchPage.sortByRelevance.click({ force: true });
      await expect(searchPage.sortByRelevanceSelected).toBeVisible();
    }).toPass({
      timeout: 10000,
      intervals: [200, 500, 10000],
    });
  });

  test.skip("sorts search results by age", async ({ page }) => {
    await expect(searchPage.sortByNewest).toBeVisible();
    await expect(searchPage.sortByOldest).toBeVisible();
    await searchPage.sortByNewest.click({ force: true });
    await expect(searchPage.sortByNewestSelected).toBeVisible({
      timeout: 20000,
    });
  });

  test.skip("sorts search results alphabetically", async ({ page }) => {
    await expect(searchPage.sortByAlpha).toBeVisible();
    await expect(searchPage.sortByReverseAlpha).toBeVisible();
    await searchPage.sortByAlpha.click({ force: true });
    await expect(searchPage.sortByAlphaSelected).toBeVisible({
      timeout: 20000,
    });
  });

  test.skip("sorts search results by type", async ({ page }) => {
    await expect(searchPage.sortByCollections).toBeVisible();
    await expect(searchPage.sortByItems).toBeVisible();
    await searchPage.sortByCollections.click({ force: true });
    await expect(searchPage.sortByCollectionsSelected).toBeVisible({
      timeout: 20000,
    });
  });
});
