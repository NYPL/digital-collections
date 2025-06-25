import { test, expect } from "@playwright/test";
import SearchPage from "../pages/search.page";

let searchPage: SearchPage;

test.beforeEach(async ({ page }, testInfo) => {
  if (testInfo.title !== "searches for a keyword from homepage") {
    searchPage = await SearchPage.loadPage(SearchPage.searchResultsUrl, page);
  }
});

test("searches for a keyword from homepage", async ({ page }) => {
  searchPage = await SearchPage.loadPage("/", page);

  await expect(searchPage.searchBar).toBeVisible();
  await searchPage.searchBar.fill(searchPage.searchKeyword);
  await expect(searchPage.searchBar).toHaveValue(searchPage.searchKeyword);
  await expect(searchPage.searchButton).toBeVisible();

  await searchPage.searchButton.click();
  await page.waitForURL("/search/**", {
    waitUntil: "load",
  });

  await expect(page).toHaveTitle("Search results - NYPL Digital Collections");
});

test("displays search results", async () => {
  await expect(searchPage.resultsHeading).toBeVisible();
  await expect(searchPage.firstResult).toBeVisible();
  await expect(searchPage.firstResult).toContainText(searchPage.searchKeyword, {
    ignoreCase: true,
  });
});

test.describe("displays search results filters", () => {
  test("displays first row of drop-down filters", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.topicFilter).toBeVisible();
    await expect(searchPage.nameFilter).toBeVisible();
    await expect(searchPage.collectionFilter).toBeVisible();
    await expect(searchPage.placeFilter).toBeVisible();
  });

  test("does not yet display second row of drop-down filters", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.genreFilter).not.toBeVisible();
    await expect(searchPage.publisherFilter).not.toBeVisible();
    await expect(searchPage.divisionFilter).not.toBeVisible();
    await expect(searchPage.typeFilter).not.toBeVisible();
  });

  test("displays second row of drop-down filters", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.showFilters).toBeVisible();
    await searchPage.showFilters.click();
    await expect(searchPage.genreFilter).toBeVisible();
    await expect(searchPage.publisherFilter).toBeVisible();
    await expect(searchPage.divisionFilter).toBeVisible();
    await expect(searchPage.typeFilter).toBeVisible();
  });

  test("displays date range filters", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.startYear).toBeVisible();
    await expect(searchPage.endYear).toBeVisible();
    await expect(searchPage.applyDates).toBeVisible();
  });

  test("displays availability filters", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.availablePublicDomain).toBeVisible();
    await expect(searchPage.availableOnline).toBeVisible();
    await expect(searchPage.availableOnsite).toBeVisible();
  });

  test("hides second row of drop-down filters", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.hideFilters).toBeVisible();
    await searchPage.hideFilters.click();
    await expect(searchPage.genreFilter).not.toBeVisible();
    await expect(searchPage.publisherFilter).not.toBeVisible();
    await expect(searchPage.divisionFilter).not.toBeVisible();
    await expect(searchPage.typeFilter).not.toBeVisible();
  });
});

test.describe("filters search results", () => {
  test("filters drop-downs in first row", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.topicFilter).toBeVisible();
    await searchPage.topicFilter.click();
    await expect(searchPage.topicOption).toBeVisible();
    await searchPage.topicOption.click();
    await expect(searchPage.applyFilterButton).toBeVisible();
    await searchPage.applyFilterButton.click();
    await expect(searchPage.topicSelected).toBeVisible();
  });
  test("filters drop-downs in second row", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.showFilters).toBeVisible();
    await searchPage.showFilters.click();
    await expect(searchPage.publisherFilter).toBeVisible();
    await searchPage.publisherFilter.click();
    await expect(searchPage.publisherOption).toBeVisible();
    await searchPage.publisherOption.click();
    await expect(searchPage.applyFilterButton).toBeVisible();
    await searchPage.applyFilterButton.click();
    await expect(searchPage.publisherSelected).toBeVisible();
  });

  test("filters search results by dates", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.showFilters).toBeVisible();
    await searchPage.showFilters.click();
    await expect(searchPage.startYear).toBeVisible();
    await expect(searchPage.endYear).toBeVisible();
    await searchPage.startYear.fill("1700");
    await searchPage.endYear.fill("1800");
    await expect(searchPage.applyDates).toBeVisible();
    await searchPage.applyDates.click();
    await expect(searchPage.startYear).toHaveValue("1700");
    await expect(searchPage.endYear).toHaveValue("1800");
  });

  test("filters search results by availability", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await expect(searchPage.showFilters).toBeVisible();
    await searchPage.showFilters.click();
    await expect(searchPage.availablePublicDomain).toBeVisible();
    await searchPage.availablePublicDomain.click();
    await expect(searchPage.availablePublicDomain).toBeChecked();
  });
});

test.describe("clears search results filters", () => {
  test("clears all filters in Filters Applied", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await searchPage.filterSearchResults(); // reset filters to topic and publisher

    await expect(searchPage.clearAllFilters).toBeVisible();
    await searchPage.clearAllFilters.click();
    await expect(searchPage.topicSelected).not.toBeVisible();
    await expect(searchPage.publisherSelected).not.toBeVisible();
  });

  test("clears drop-down filter", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await searchPage.filterSearchResults(); // reset filters to topic and publisher

    await expect(searchPage.topicFilter).toBeVisible();
    await searchPage.topicFilter.click();
    await expect(searchPage.clearFilterButton).toBeVisible();
    await searchPage.clearFilterButton.click();
    await expect(searchPage.topicSelected).not.toBeVisible();
  });

  test("clears one filter in Filters Applied", async () => {
    await expect(searchPage.refineHeading).toBeVisible();

    await searchPage.filterSearchResults(); // reset filters to topic and publisher

    await expect(searchPage.clearTopicFilterApplied).toBeVisible();
    await searchPage.clearTopicFilterApplied.click();
    await expect(searchPage.topicSelected).not.toBeVisible();
  });
});

test.describe("sorts search results", () => {
  test("sorts search results by age", async () => {
    await expect(searchPage.resultsHeading).toBeVisible();
    await expect(searchPage.sortButton).toBeVisible();
    await searchPage.sortButton.click();
    await expect(searchPage.sortByNewest).toBeVisible();
    await expect(searchPage.sortByOldest).toBeVisible();
    await searchPage.sortByNewest.click();
    await expect(searchPage.sortByNewestSelected).toBeVisible();
  });

  test("sorts search results alphabetically", async () => {
    await expect(searchPage.resultsHeading).toBeVisible();
    await expect(searchPage.sortButton).toBeVisible();
    await searchPage.sortButton.click();
    await expect(searchPage.sortByAlpha).toBeVisible();
    await expect(searchPage.sortByReverseAlpha).toBeVisible();
    await searchPage.sortByAlpha.click();
    await expect(searchPage.sortByAlphaSelected).toBeVisible();
  });

  test("sorts search results by type", async () => {
    await expect(searchPage.resultsHeading).toBeVisible();
    await expect(searchPage.sortButton).toBeVisible();
    await searchPage.sortButton.click();
    await expect(searchPage.sortByCollections).toBeVisible();
    await expect(searchPage.sortByItems).toBeVisible();
    await searchPage.sortByCollections.click();
    await expect(searchPage.sortByCollectionsSelected).toBeVisible();
  });

  test("sorts search results by relevance", async () => {
    await expect(searchPage.resultsHeading).toBeVisible();
    await expect(searchPage.sortButton).toBeVisible();
    await searchPage.sortButton.click();
    await expect(searchPage.sortByRelevance).toBeVisible();
    await searchPage.sortByRelevance.click();
    await expect(searchPage.sortByRelevanceSelected).toBeVisible();
  });
});
