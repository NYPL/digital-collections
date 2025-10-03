//search-filters.spec.ts
import { test, expect } from "../base";
import SearchPage from "../pages/search.page";

let searchPage: SearchPage; // Global variable declared here

test.beforeEach(async ({ page }) => {
  // 1. Instantiate the Page Object using the provided fixture
  searchPage = new SearchPage(page);
  // 2. Call the instance method to load the page
  await searchPage.loadPage(SearchPage.searchResultsUrl);

  // The route filters are applied automatically by the global beforeEach hook in base.ts
});

test.describe("display and hide filter options", () => {
  test("display default first row of drop-down filters", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.topicFilter).toBeVisible();
    await expect(searchPage.nameFilter).toBeVisible();
    await expect(searchPage.collectionFilter).toBeVisible();
    await expect(searchPage.placeFilter).toBeVisible();
  });

  test("do not yet display second row of drop-down filters", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.genreFilter).not.toBeVisible();
    await expect(searchPage.publisherFilter).not.toBeVisible();
    await expect(searchPage.divisionFilter).not.toBeVisible();
    await expect(searchPage.typeFilter).not.toBeVisible();
  });

  test("display second row of drop-down filters", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.showFilters).toBeVisible();
    await searchPage.showFilters.click();
    await expect(searchPage.genreFilter).toBeVisible();
    await expect(searchPage.publisherFilter).toBeVisible();
    await expect(searchPage.divisionFilter).toBeVisible();
    await expect(searchPage.typeFilter).toBeVisible();
  });

  test("display date range filters", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.showFilters).toBeVisible();
    await searchPage.showFilters.click();
    await expect(searchPage.startYear).toBeVisible();
    await expect(searchPage.endYear).toBeVisible();
    await expect(searchPage.applyDates).toBeVisible();
  });

  test("display availability filters", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.showFilters).toBeVisible();
    await searchPage.showFilters.click();
    await expect(searchPage.availablePublicDomain).toBeVisible();
    await expect(searchPage.availableOnline).toBeVisible();
    await expect(searchPage.availableOnsite).toBeVisible();
  });

  test("hide second row of drop-down filters", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.showFilters).toBeVisible();
    await searchPage.showFilters.click();
    await expect(searchPage.hideFilters).toBeVisible();
    await searchPage.hideFilters.click();
    await expect(searchPage.genreFilter).not.toBeVisible();
    await expect(searchPage.publisherFilter).not.toBeVisible();
    await expect(searchPage.divisionFilter).not.toBeVisible();
    await expect(searchPage.typeFilter).not.toBeVisible();
  });
});

test.describe("choose default filter options", () => {
  test("choose topic", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.topicFilter).toBeVisible();
    await searchPage.topicFilter.click();
    await expect(searchPage.topicOption).toBeVisible();
    await searchPage.topicOption.check();
    await expect(searchPage.applyFilterButton).toBeVisible();
    await searchPage.applyFilterButton.click();

    await expect(searchPage.topicSelected).toBeVisible();
  });
  test("choose name", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.nameFilter).toBeVisible();
    await searchPage.nameFilter.click();
    await expect(searchPage.nameOption).toBeVisible();
    await searchPage.nameOption.check();
    await expect(searchPage.applyFilterButton).toBeVisible();
    await searchPage.applyFilterButton.click();
    await expect(searchPage.nameSelected).toBeVisible();
  });

  test("choose collection", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.collectionFilter).toBeVisible();
    await searchPage.collectionFilter.click();
    await expect(searchPage.collectionOption).toBeVisible();
    await searchPage.collectionOption.check();
    await expect(searchPage.collectionOption).toBeChecked();
    await expect(searchPage.applyFilterButton).toBeVisible();
    await searchPage.applyFilterButton.click();
    await expect(searchPage.collectionSelected).toBeVisible();
  });

  test("choose place", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.placeFilter).toBeVisible();
    await searchPage.placeFilter.click();
    await expect(searchPage.placeOption).toBeVisible();
    await searchPage.placeOption.check();
    await expect(searchPage.applyFilterButton).toBeVisible();
    await searchPage.applyFilterButton.click();
    await expect(searchPage.placeSelected).toBeVisible();
  });
});

// 2nd row's open modal filters will checked in a separate test file

test.describe("clear search filters", () => {
  test("clear all filters in Filters Applied", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await searchPage.filterSearchResults(); // reset filters to topic and publisher

    await expect(searchPage.clearAllFilters).toBeVisible();
    await searchPage.clearAllFilters.click();
    await expect(searchPage.nameSelected).not.toBeVisible();
    await expect(searchPage.publisherSelected).not.toBeVisible();
  });

  test("clear drop-down filter", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await searchPage.filterSearchResults(); // reset filters to topic and publisher

    await expect(searchPage.nameFilter).toBeVisible();
    await searchPage.nameFilter.click();
    await expect(searchPage.clearFilterButton).toBeVisible();
    await searchPage.clearFilterButton.click();
    await expect(searchPage.nameSelected).not.toBeVisible();
  });

  test("clear one filter in Filters Applied", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await searchPage.filterSearchResults(); // reset filters to topic and publisher

    await expect(searchPage.clearNameFilterApplied).toBeVisible();
    await searchPage.clearNameFilterApplied.click();
    await expect(searchPage.nameSelected).not.toBeVisible();
  });
});

test.describe("sort search results", () => {
  test("sort by date indexed", async () => {
    await expect(searchPage.resultsHeading).toBeVisible();
    await expect(searchPage.sortButton).toBeVisible();
    await searchPage.sortButton.click();
    await expect(searchPage.sortByNewest).toBeVisible();
    await expect(searchPage.sortByOldest).toBeVisible();
    await searchPage.sortByNewest.click();
    await expect(searchPage.sortByNewestSelected).toBeVisible();
  });

  test("sort alphabetically", async () => {
    await expect(searchPage.resultsHeading).toBeVisible();
    await expect(searchPage.sortButton).toBeVisible();
    await searchPage.sortButton.click();
    await expect(searchPage.sortByAlpha).toBeVisible();
    await expect(searchPage.sortByReverseAlpha).toBeVisible();
    await searchPage.sortByAlpha.click();
    await expect(searchPage.sortByAlphaSelected).toBeVisible();
  });

  test("sort by type", async () => {
    await expect(searchPage.resultsHeading).toBeVisible();
    await expect(searchPage.sortButton).toBeVisible();
    await searchPage.sortButton.click();
    await expect(searchPage.sortByCollections).toBeVisible();
    await expect(searchPage.sortByItems).toBeVisible();
    await searchPage.sortByCollections.click();
    await expect(searchPage.sortByCollectionsSelected).toBeVisible();
  });

  test("sort by relevance", async () => {
    await expect(searchPage.resultsHeading).toBeVisible();
    await expect(searchPage.sortButton).toBeVisible();
    await searchPage.sortButton.click();
    await expect(searchPage.sortByRelevance).toBeVisible();
    await searchPage.sortByRelevance.click();
    await expect(searchPage.sortByRelevanceSelected).toBeVisible();
  });
});

test.describe("verify filtered/unfiltered search results", () => {
  test("click on an item in filtered search results", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await searchPage.filterSearchResults();

    await expect(searchPage.firstItemResult).toBeVisible();
    await searchPage.firstItemResult.click();
    await expect(searchPage.page).toHaveURL(/\/(items)\//);
    await expect(searchPage.refineHeading).not.toBeVisible();
  });

  test("click on an item in unfiltered search results", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.firstItemResult).toBeVisible();
    await searchPage.firstItemResult.click();
    await expect(searchPage.page).toHaveURL(/\/(items)\//);
    await expect(searchPage.refineHeading).not.toBeVisible();
  });
});
