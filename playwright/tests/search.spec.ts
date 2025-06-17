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

test("displays search results", async ({}) => {
  await expect(searchPage.resultsHeading).toBeVisible();
  await expect(searchPage.firstResult).toBeVisible();
  await expect(searchPage.firstResult).toContainText(searchPage.searchKeyword, {
    ignoreCase: true,
  });
});

test("displays search result filters", async ({}) => {
  await expect(searchPage.refineHeading).toBeVisible();

  // displays first row of filters
  await expect(searchPage.topicFilter).toBeVisible();
  await expect(searchPage.nameFilter).toBeVisible();
  await expect(searchPage.collectionFilter).toBeVisible();
  await expect(searchPage.placeFilter).toBeVisible();

  // does not yet display second row of filters
  await expect(searchPage.genreFilter).not.toBeVisible();
  await expect(searchPage.publisherFilter).not.toBeVisible();
  await expect(searchPage.divisionFilter).not.toBeVisible();
  await expect(searchPage.typeFilter).not.toBeVisible();

  // displays second row of filters
  await expect(searchPage.showFilters).toBeVisible();
  await searchPage.showFilters.click();
  await expect(searchPage.genreFilter).toBeVisible();
  await expect(searchPage.publisherFilter).toBeVisible();
  await expect(searchPage.divisionFilter).toBeVisible();
  await expect(searchPage.typeFilter).toBeVisible();

  // displays date range filters
  await expect(searchPage.startYear).toBeVisible();
  await expect(searchPage.endYear).toBeVisible();
  await expect(searchPage.applyDates).toBeVisible();

  // displays availability filters
  await expect(searchPage.availablePublicDomain).toBeVisible();
  await expect(searchPage.availableOnline).toBeVisible();
  await expect(searchPage.availableOnsite).toBeVisible();

  // hides second row of filters
  await expect(searchPage.hideFilters).toBeVisible();
  await searchPage.hideFilters.click();
  await expect(searchPage.genreFilter).not.toBeVisible();
  await expect(searchPage.publisherFilter).not.toBeVisible();
  await expect(searchPage.divisionFilter).not.toBeVisible();
  await expect(searchPage.typeFilter).not.toBeVisible();
});

test("filters search results", async ({}) => {
  await expect(searchPage.refineHeading).toBeVisible();

  // filters a drop-down in the first row
  await expect(searchPage.topicFilter).toBeVisible();
  await searchPage.topicFilter.click();
  await expect(searchPage.topicOption).toBeVisible();
  await searchPage.topicOption.click();
  await expect(searchPage.applyFilterButton).toBeVisible();
  await searchPage.applyFilterButton.click();
  await expect(searchPage.topicSelected).toBeVisible();

  // filters a drop-down in the second row
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

test.describe("clears search results filters", () => {
  test("clears all filters in Filters Applied", async ({}) => {
    await expect(searchPage.refineHeading).toBeVisible();

    await searchPage.filterSearchResults(); // reset filters to topic and publisher

    await expect(searchPage.clearAllFilters).toBeVisible();
    await searchPage.clearAllFilters.click();
    await expect(searchPage.topicSelected).not.toBeVisible();
    await expect(searchPage.publisherSelected).not.toBeVisible();
  });

  test("clears dropdown filter", async ({}) => {
    await expect(searchPage.refineHeading).toBeVisible();

    await searchPage.filterSearchResults(); // reset filters to topic and publisher

    await expect(searchPage.topicFilter).toBeVisible();
    await searchPage.topicFilter.click();
    await expect(searchPage.clearFilterButton).toBeVisible();
    await searchPage.clearFilterButton.click();
    await expect(searchPage.topicSelected).not.toBeVisible();
  });

  test("clears first filter in Filters Applied", async ({}) => {
    await expect(searchPage.refineHeading).toBeVisible();

    await searchPage.filterSearchResults(); // reset filters to topic and publisher

    await expect(searchPage.clearFilterApplied).toBeVisible();
    await searchPage.clearFilterApplied.click();
    await expect(searchPage.topicSelected).not.toBeVisible();
  });
});
