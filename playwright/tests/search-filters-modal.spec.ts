import { test, expect } from "../base";
import SearchPage from "../pages/search.page";
import { applyRouteFilters } from "../utils/routeFilters";

let searchPage: SearchPage;

test.describe.serial("apply filters in open modal", () => {
  // Runs ONCE to create the shared, filtered page context.
  test.beforeAll(async ({ browser }) => {
    // Manually create context/page to force serialization to remain in block
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

  test.describe.serial("choose specific filter options", () => {
    // Go to search page once, open 2nd row, and check filters, date range and availability

    test.beforeEach(async () => {
      if (await searchPage.showFilters.isVisible()) {
        await searchPage.showFilters.click();
      }
      // The state is now guaranteed to be 'open' for the test.
      await expect(searchPage.refineHeading).toBeVisible();
    });

    // Test assertions use the globally available 'searchPage'
    test("choose genre", async () => {
      await expect(searchPage.genreFilter).toBeVisible();
      await searchPage.genreFilter.click();
      await expect(searchPage.genreOption).toBeVisible();
      await searchPage.genreOption.check();
      await expect(searchPage.applyFilterButton).toBeVisible();
      await searchPage.applyFilterButton.click();
      await expect(searchPage.genreSelected).toBeVisible();
    });

    test("choose publisher", async () => {
      await expect(searchPage.publisherFilter).toBeVisible();
      await searchPage.publisherFilter.click();
      await expect(searchPage.publisherOption).toBeVisible();
      await searchPage.publisherOption.check();
      await expect(searchPage.applyFilterButton).toBeVisible();
      await searchPage.applyFilterButton.click();
      await expect(searchPage.publisherSelected).toBeVisible();
    });

    test("choose division", async () => {
      await expect(searchPage.divisionFilter).toBeVisible();
      await searchPage.divisionFilter.click();
      await expect(searchPage.divisionOption).toBeVisible();
      await searchPage.divisionOption.check();
      await expect(searchPage.applyFilterButton).toBeVisible();
      await searchPage.applyFilterButton.click();
      await expect(searchPage.divisionSelected).toBeVisible();
    });

    test("choose type", async () => {
      await expect(searchPage.typeFilter).toBeVisible();
      await searchPage.typeFilter.click();
      await expect(searchPage.typeOption).toBeVisible();
      await searchPage.typeOption.check();
      await expect(searchPage.applyFilterButton).toBeVisible();
      await searchPage.applyFilterButton.click();
      await expect(searchPage.typeSelected).toBeVisible();
    });

    test("choose filter results by date", async () => {
      await expect(searchPage.startYear).toBeVisible();
      await expect(searchPage.endYear).toBeVisible();
      await searchPage.startYear.fill("1700");
      await searchPage.endYear.fill("1800");
      await expect(searchPage.applyDates).toBeVisible();
      await searchPage.applyDates.click();
      await expect(searchPage.startYear).toHaveValue("1700");
      await expect(searchPage.endYear).toHaveValue("1800");
    });

    test("choose filter results by availability", async () => {
      await expect(searchPage.refineHeading).toBeVisible();
      await expect(searchPage.availablePublicDomain).toBeVisible();
      await searchPage.availablePublicDomain.click();
      await expect(searchPage.availablePublicDomain).toBeChecked();
    });
  });
});
