import { test, expect } from "@playwright/test";
import SearchPage from "../pages/search.page";
test("searches for a keyword from homepage", async ({ page }, testInfo) => {
  test.setTimeout(60000); // added extra time to navigate to homepage and load search page
  if (testInfo.project.name === "webkit") {
    await page.route("**/*.{png,jpg,jpeg,svg}", (route) => {
      route.abort();
    });
  }
  const searchPage = await SearchPage.loadPage("/", page);

  await expect(searchPage.searchBar).toBeVisible();
  await searchPage.searchBar.fill(searchPage.searchKeyword);
  await expect(searchPage.searchBar).toHaveValue(searchPage.searchKeyword, {
    timeout: 1000,
  }); // webkit is clearing the search box after filling it
  const value = await searchPage.searchBar.inputValue();
  console.log("Search box value before submit:", value);
  await expect(searchPage.searchButton).toBeVisible();
  await searchPage.searchButton.click();

  await page.waitForURL(`**${SearchPage.searchResultsUrl}**`, {
    waitUntil: "load",
  });
  await expect(page).toHaveTitle("Search results - NYPL Digital Collections");

  await expect(searchPage.refineHeading).toBeVisible();
  await expect(searchPage.resultsHeading).toBeVisible();
  await expect(searchPage.firstResult).toBeVisible();
});

test("displays search result filters", async ({ page }, testInfo) => {
  test.setTimeout(60000); // added extra time to load all elements
  const searchPage = await SearchPage.loadPage(
    SearchPage.searchResultsUrl,
    page
  );

  // displays first row of filters
  await expect(searchPage.refineHeading).toBeVisible();
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

test("filters search results", async ({ page }) => {
  const searchPage = await SearchPage.loadPage(
    SearchPage.searchResultsUrl,
    page
  );
  await expect(searchPage.refineHeading).toBeVisible();

  // filter a visible filter
  await expect(searchPage.topicFilter).toBeVisible();
  await searchPage.topicFilter.click();
  await expect(searchPage.topicOption).toBeVisible();
  await searchPage.topicOption.click();
  await expect(searchPage.applyFilterButton).toBeVisible();
  await searchPage.applyFilterButton.click();

  // clear filter
  await expect(searchPage.clearFilter).toBeVisible();
  await searchPage.clearFilter.click();
  await expect(searchPage.clearFilter).not.toBeVisible(); // ensure the filter was cleared

  // filter a not visible filter
  await expect(searchPage.showFilters).toBeVisible();
  await searchPage.showFilters.click();
  await expect(searchPage.divisionFilter).toBeVisible();
  await searchPage.divisionFilter.click();
  await expect(searchPage.divisionOption).toBeVisible();
  await searchPage.divisionOption.click();
  await expect(searchPage.applyFilterButton).toBeVisible();
  await searchPage.applyFilterButton.click();
  // expect division filter to be applied

  // clear filter
  await expect(searchPage.clearFilter).toBeVisible();
  await searchPage.clearFilter.click();
  await expect(searchPage.clearFilter).not.toBeVisible(); // ensure the filter was cleared
});
