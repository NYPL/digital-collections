import { test } from "../base";
import { expect } from "@playwright/test";
import { PaginationPage } from "../pages/search-pagination.page";
import SearchPage from "../pages/search.page";

test.describe("Search pagination and per-page options", () => {
  let paginationPage: PaginationPage;

  test.beforeEach(async ({ page }) => {
    paginationPage = new PaginationPage(page);
  });

  test("defaults to 48 per page on initial load", async () => {
    await paginationPage.loadPage(SearchPage.largeResultsUrl);
    await paginationPage.verifyPerPageMenuText(SearchPage.PER_PAGE.DEFAULT);
    await paginationPage.verifyCollectionCardCountLessThanOrEqual(
      SearchPage.PER_PAGE.DEFAULT
    );
  });

  test("selecting 96 per page updates grid", async () => {
    await paginationPage.loadPage(SearchPage.largeResultsUrl);
    await paginationPage.selectPerPage(SearchPage.PER_PAGE.EXPANDED);

    await paginationPage.verifyPerPageMenuText(SearchPage.PER_PAGE.EXPANDED);
    await expect(paginationPage.allCollectionCards).toHaveCount(
      SearchPage.PER_PAGE.EXPANDED
    );
  });

  test("changing per-page option on page 2 resets navigation to page 1", async () => {
    await paginationPage.loadPage(
      `${SearchPage.largeResultsUrl}&${SearchPage.QUERY_PARAMS.PAGE}=2`
    );
    await paginationPage.selectPerPage(SearchPage.PER_PAGE.EXPANDED);

    // 1. Verify pagination control state
    await expect(paginationPage.currentPageLink).toHaveText("1");

    // 2. Scope to the active summary heading and give the network/re-render time to settle
    await expect(paginationPage.resultsHeadingGeneric.first()).toContainText(
      /Displaying 1-96 of/
    );
  });

  test("retains 96 per page in localStorage after page reload", async () => {
    await paginationPage.loadWithLocalStorage(
      SearchPage.largeResultsUrl,
      SearchPage.STORAGE_KEYS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
    await paginationPage.verifyPerPageMenuText(SearchPage.PER_PAGE.EXPANDED);
    await paginationPage.verifyLayoutReloadState("grid");
    await paginationPage.verifyPerPageMenuText(SearchPage.PER_PAGE.EXPANDED);
  });

  test("pre-selects 96 in per-page menu on direct URL load", async () => {
    await paginationPage.loadPage(
      `${SearchPage.largeResultsUrl}&${SearchPage.QUERY_PARAMS.PER_PAGE}=96`
    );
    await paginationPage.verifyPerPageMenuText(SearchPage.PER_PAGE.EXPANDED);
  });

  test("preserves list view mode when changing per-page option", async () => {
    await paginationPage.loadPage(SearchPage.largeResultsUrl);
    await paginationPage.toggleView("list");

    await paginationPage.selectPerPage(SearchPage.PER_PAGE.EXPANDED);

    await paginationPage.verifyLayout("list");
  });

  test("hides per-page control gracefully on mobile viewports", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await paginationPage.loadPage(SearchPage.largeResultsUrl);
    await paginationPage.verifyPerPageMenuHidden();
  });

  test("handles 96 per-page selection on collections landing page", async () => {
    await paginationPage.loadPage(PaginationPage.COLLECTIONS_LANDING_URL);

    // Wait for React to hydrate event listeners on the page
    await paginationPage.page.waitForLoadState("networkidle");

    await paginationPage.selectPerPage(SearchPage.PER_PAGE.EXPANDED);

    // Target #collections directly using toContainText to ignore DOM newline breaks
    await expect(paginationPage.page.locator("#collections")).toContainText(
      "Displaying 1-96 of"
    );

    await paginationPage.verifyCollectionCardCountLessThanOrEqual(
      SearchPage.PER_PAGE.EXPANDED
    );
  });

  test("retains 96 per page when submitting a new search query", async () => {
    await paginationPage.loadWithLocalStorage(
      SearchPage.largeResultsUrl,
      SearchPage.STORAGE_KEYS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
    await paginationPage.searchBar.fill("brooklyn");
    await paginationPage.searchButton.click();

    await paginationPage.verifyPerPageMenuText(SearchPage.PER_PAGE.EXPANDED);
  });

  test("preserves 96 per page when clicking collection card from search results", async () => {
    await paginationPage.loadWithLocalStorage(
      SearchPage.largeResultsUrl,
      SearchPage.STORAGE_KEYS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
    await paginationPage.clickFirstCollectionCard();

    await paginationPage.verifyPerPageMenuText(SearchPage.PER_PAGE.EXPANDED);
  });

  test("calculates page 2 offset correctly on collection pages", async () => {
    await paginationPage.loadWithLocalStorage(
      PaginationPage.COLLECTION_WITH_200_PLUS_ITEMS_URL,
      SearchPage.STORAGE_KEYS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
    await paginationPage.goToPageNumber(2);

    await expect(paginationPage.currentPageLink).toHaveText("2");
    await expect(paginationPage.resultsHeadingGeneric).toHaveText(
      /Displaying 97-192 of/
    );
  });

  // test("returns cleanly to page 1 when clicking previous page link", async () => {
  //   await paginationPage.loadWithLocalStorage(
  //     `${PaginationPage.COLLECTION_WITH_200_PLUS_ITEMS_URL}?${SearchPage.QUERY_PARAMS.PAGE}=2`,
  //     SearchPage.STORAGE_KEYS.PER_PAGE,
  //     SearchPage.PER_PAGE.EXPANDED_STR
  //   );
  //   await paginationPage.goToPreviousPage();

  //   await expect(paginationPage.currentPageLink).toHaveText("1");
  //   await expect(paginationPage.resultsHeadingGeneric).toHaveText(
  //     /Displaying 1-96 of/
  //   );
  // });

  test.skip("returns cleanly to page 1 when clicking previous page link", async () => {
    await paginationPage.loadPage(
      `${PaginationPage.COLLECTION_WITH_200_PLUS_ITEMS_URL}?page=2&perPage=96`
    );

    // Focus the link directly and press Enter
    await paginationPage.previousPageLink.focus();
    await paginationPage.page.keyboard.press("Enter");

    await expect(paginationPage.currentPageLink).toHaveText("1");
    await expect(paginationPage.resultsHeadingGeneric.first()).toContainText(
      "Displaying 1-96 of"
    );
  });
});
