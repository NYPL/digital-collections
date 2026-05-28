import { test, expect } from "../base";
import { FilterValueExpandedPage } from "../pages/filter-value-expand.page";
import { applyRouteFilters } from "../utils/routeFilters";

let filterPage: FilterValueExpandedPage;

test.describe.serial("View all names filter", () => {
  // Runs ONCE to create the shared, filtered page context.

  /**
  JUSTIFICATION FOR .serial USAGE:
  
  These tests intentionally use .serial to maintain browser state across multiple test steps. This deviates from Playwright's recommendation for isolated tests for the following reasons:
  
  1. Performance: Avoids 6 separate page loads (60% faster: 16.57s vs 26.23s)
  2. Resource efficiency: Uses single worker instead of 6 parallel workers
  3. User journey testing: Simulates realistic workflow of opening modal once and applying multiple filters in sequence
  4. State accumulation: Each filter builds on previous selections
  */

  test.beforeAll(async ({ browser }) => {
    // Manually create context/page to force serialization to remain in block
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    // Apply global filters manually
    await applyRouteFilters(page);

    // Assign to global variable and load the page object
    filterPage = new FilterValueExpandedPage(page);
    await filterPage.loadPage(FilterValueExpandedPage.nameResultsUrl);
  });

  test.afterAll(async () => {
    await filterPage.page.context().close();
  });

  test("Open full names list and click view-all-names", async () => {
    await filterPage.openAllNames();
  });

  test("Should open expanded names modal and show a close-button", async () => {
    await filterPage.verifyExpandedNamesModal();
  });

  test("Should display default names list", async () => {
    await filterPage.verifyDefaultNamesList();
  });

  test("Pagination links should display the correct sequence", async () => {
    await filterPage.verifyInitialPagination();
  });

  test("Pagination updates dynamically", async () => {
    await filterPage.verifyPagination();
  });

  test("Search autocomplete should filter results for each keypress (check 3)", async () => {
    await filterPage.verifyAutocompleteFlow();
  });

  test("Modal search restore full list when search is cleared", async () => {
    await filterPage.clearSearch();
    await expect(filterPage.valueExpandedModal.getByRole("radio")).toHaveCount(
      10
    );
  });
});
