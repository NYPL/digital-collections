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
    await paginationPage.loadPage(SearchPage.searchResultsUrl);
    await paginationPage.verifyPerPageMenuText(SearchPage.PER_PAGE.DEFAULT);
    await paginationPage.verifyCollectionCardCountLessThanOrEqual(
      SearchPage.PER_PAGE.DEFAULT
    );
  });

  test("selecting 96 per page updates grid, URL, and fires RSC request", async () => {
    await paginationPage.loadPage(SearchPage.searchResultsUrl);
    const rscPromise = paginationPage.waitForRscNav(
      SearchPage.QUERY_PARAMS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );

    await paginationPage.perPageMenuButton.click();
    await paginationPage.page.getByRole("option", { name: "96" }).click();

    const response = await rscPromise;
    expect(response.ok()).toBeTruthy();
    await paginationPage.verifyUrlContainsParam(
      SearchPage.QUERY_PARAMS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
    await paginationPage.verifyPerPageMenuText(SearchPage.PER_PAGE.EXPANDED);
  });

  test("changing per-page option on page 2 resets navigation to page 1", async () => {
    await paginationPage.loadPage(
      `${SearchPage.searchResultsUrl}&${SearchPage.QUERY_PARAMS.PAGE}=2`
    );
    await paginationPage.perPageMenuButton.click();
    await paginationPage.page.getByRole("option", { name: "96" }).click();

    await paginationPage.verifyUrlContainsParam(
      SearchPage.QUERY_PARAMS.PAGE,
      "1"
    );
    await paginationPage.verifyUrlContainsParam(
      SearchPage.QUERY_PARAMS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
  });

  test("retains 96 per page in localStorage after page reload", async () => {
    await paginationPage.loadWithLocalStorage(
      SearchPage.searchResultsUrl,
      SearchPage.STORAGE_KEYS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
    await paginationPage.verifyPerPageMenuText(SearchPage.PER_PAGE.EXPANDED);
    await paginationPage.verifyLayoutReloadState("grid");
    await paginationPage.verifyPerPageMenuText(SearchPage.PER_PAGE.EXPANDED);
  });

  test("pre-selects 96 in per-page menu on direct URL load", async () => {
    await paginationPage.loadPage(
      `${SearchPage.searchResultsUrl}&${SearchPage.QUERY_PARAMS.PER_PAGE}=96`
    );
    await paginationPage.verifyPerPageMenuText(SearchPage.PER_PAGE.EXPANDED);
  });

  test("preserves list view mode when changing per-page option", async () => {
    await paginationPage.loadPage(SearchPage.searchResultsUrl);
    await paginationPage.toggleView("list");

    await paginationPage.perPageMenuButton.click();
    await paginationPage.page.getByRole("option", { name: "96" }).click();

    await paginationPage.verifyLayout("list");
  });

  test("hides per-page control gracefully on mobile viewports", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await paginationPage.loadPage(SearchPage.searchResultsUrl);
    await expect(paginationPage.perPageMenuButton).toBeHidden();
  });

  test("handles 96 per-page selection on collections landing page", async () => {
    await paginationPage.loadPage(PaginationPage.COLLECTIONS_LANDING_URL);
    await paginationPage.perPageMenuButton.click();
    await paginationPage.page.getByRole("option", { name: "96" }).click();

    await paginationPage.verifyUrlContainsParam(
      SearchPage.QUERY_PARAMS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
  });

  test("retains 96 per page when submitting a new search query", async () => {
    await paginationPage.loadWithLocalStorage(
      SearchPage.searchResultsUrl,
      SearchPage.STORAGE_KEYS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
    await paginationPage.searchBar.fill("brooklyn");
    await paginationPage.searchButton.click();

    await paginationPage.verifyUrlContainsParam(
      SearchPage.QUERY_PARAMS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
  });

  test("preserves 96 per page when clicking collection card from search results", async () => {
    await paginationPage.loadWithLocalStorage(
      SearchPage.searchResultsUrl,
      SearchPage.STORAGE_KEYS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
    await paginationPage.clickFirstCollectionCard();

    await paginationPage.verifyUrlContainsParam(
      SearchPage.QUERY_PARAMS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
  });

  test("calculates page 2 offset correctly on collection pages", async () => {
    await paginationPage.loadWithLocalStorage(
      PaginationPage.COLLECTION_WITH_200_PLUS_ITEMS_URL,
      SearchPage.STORAGE_KEYS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
    await paginationPage.goToPageNumber(2, SearchPage.PER_PAGE.EXPANDED_STR);

    await paginationPage.verifyUrlContainsParam(
      SearchPage.QUERY_PARAMS.PAGE,
      "2"
    );
    await paginationPage.verifyUrlContainsParam(
      SearchPage.QUERY_PARAMS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
  });

  test("returns cleanly to page 1 when clicking previous page link", async () => {
    await paginationPage.loadWithLocalStorage(
      `${PaginationPage.COLLECTION_WITH_200_PLUS_ITEMS_URL}?${SearchPage.QUERY_PARAMS.PAGE}=2`,
      SearchPage.STORAGE_KEYS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
    await paginationPage.goToPreviousPage(SearchPage.PER_PAGE.EXPANDED_STR);

    await paginationPage.verifyUrlContainsParam(
      SearchPage.QUERY_PARAMS.PAGE,
      "1"
    );
  });

  test("syncs per-page preference when navigating from search to collections", async () => {
    await paginationPage.loadWithLocalStorage(
      SearchPage.searchResultsUrl,
      SearchPage.STORAGE_KEYS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
    await paginationPage.loadPage(PaginationPage.COLLECTIONS_LANDING_URL);

    await paginationPage.verifyPerPageMenuText(SearchPage.PER_PAGE.EXPANDED);
  });

  test("retains 96 per page during sub-collection node drill-down", async () => {
    await paginationPage.loadWithLocalStorage(
      PaginationPage.COLLECTION_WITH_200_PLUS_ITEMS_URL,
      SearchPage.STORAGE_KEYS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
    await paginationPage.selectSubcollectionNode(
      "subcollection-node-id",
      SearchPage.PER_PAGE.EXPANDED_STR
    );

    await paginationPage.verifyUrlContainsParam(
      SearchPage.QUERY_PARAMS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
  });

  test("retains 96 per page when navigating from browse index to collection detail", async () => {
    await paginationPage.loadWithLocalStorage(
      PaginationPage.COLLECTIONS_LANDING_URL,
      SearchPage.STORAGE_KEYS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
    await paginationPage.clickFirstCollectionCard();

    await paginationPage.verifyUrlContainsParam(
      SearchPage.QUERY_PARAMS.PER_PAGE,
      SearchPage.PER_PAGE.EXPANDED_STR
    );
  });
});
