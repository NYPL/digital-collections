import { test, expect } from "../base";
import SearchPage from "../pages/search.page";
import { applyRouteFilters } from "../utils/routeFilters";
import { Browser, Page } from "@playwright/test"; // <-- Import is only for types

let searchPage: SearchPage;

// Do a new basic-search from the results-page
test.describe.serial("find item with a basic keyword search", () => {
  // Runs ONCE to create the shared, filtered page context.
  test.beforeAll(async ({ browser }) => {
    // Manually create context/page
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    // Apply global filters manually
    await applyRouteFilters(page);

    // Assign to global variable and load the page object
    searchPage = new SearchPage(page);
    await searchPage.loadPage(SearchPage.searchResultsUrl);
  });

  // TEARDOWN: close the entire context.
  test.afterAll(async () => {
    // Closes the BrowserContext, freeing up resources.
    await searchPage.page.context().close();
  });

  test.describe
    .serial("verify that item in results goes to a valid page", () => {
    test("enter keyword and submit", async () => {
      // Test assertions use the globally available 'searchPage'
      await expect(searchPage.searchBar).toBeVisible();
      await searchPage.searchBar.fill(searchPage.searchKeyword);
      await expect(searchPage.searchBar).toHaveValue(searchPage.searchKeyword);
      await expect(searchPage.searchButton).toBeVisible();

      await searchPage.searchButton.click();

      // Page actions use searchPage.page
      await searchPage.page.waitForURL("/search/**", {
        waitUntil: "load",
      });

      await expect(searchPage.page).toHaveTitle(
        "Search results - NYPL Digital Collections"
      );
    });

    test("display search results with a clickable item", async () => {
      await expect(searchPage.resultsHeading).toBeVisible();
      await expect(searchPage.firstItemResult).toBeVisible();
      await expect(searchPage.firstKeywordResult).toContainText(
        searchPage.searchKeyword,
        {
          ignoreCase: true,
        }
      );
      await searchPage.firstItemResult.click();
      await expect(searchPage.page).toHaveURL(/\/(items)\//);
      await expect(searchPage.refineHeading).not.toBeVisible();
    });
  });
});
