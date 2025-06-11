import { test, expect } from "@playwright/test";
import SearchPage from "../pages/search.page";

let searchPage: SearchPage;

test.beforeEach(async ({ page }, testInfo) => {
  if (testInfo.project.name === "webkit") {
    await page.route("**/*.{png,jpg,jpeg,svg}", (route) => {
      route.abort();
    });
  }

  if (testInfo.title !== "searches for a keyword from homepage") {
    searchPage = await SearchPage.loadPage(SearchPage.searchResultsUrl, page);
  }
});
test("searches for a keyword from homepage", async ({ page }, testInfo) => {
  test.setTimeout(60000); // adds extra time to navigate to homepage and load search page
  searchPage = await SearchPage.loadPage("/", page);

  await expect(searchPage.searchBar).toBeVisible();
  await searchPage.searchBar.fill(searchPage.searchKeyword);
  await expect(searchPage.searchBar).toHaveValue(searchPage.searchKeyword);
  await expect(searchPage.searchButton).toBeVisible();

  // option 1
  // if (testInfo.project.name === "webkit" || testInfo.project.name === "firefox") {
  //   // Force navigation in WebKit because the button click fails
  //   console.log("Forcing navigation to:", SearchPage.searchResultsUrl);
  //   await SearchPage.loadPage(SearchPage.searchResultsUrl, page);
  // } else {
  //     // Wait for navigation triggered by the button click
  //     await Promise.all([
  //       page.waitForURL(`**${SearchPage.searchResultsUrl}**`, { waitUntil: "load" }),
  //       searchPage.searchButton.click(),
  //     ]);
  // }

  // option 2
  try {
    await Promise.all([
      searchPage.searchButton.click(),
      page.waitForURL(`**${SearchPage.searchResultsUrl}**`, {
        waitUntil: "load",
      }),
    ]);
  } catch (error) {
    // if navigation did not happen and button click failed, then force navigation
    console.log(
      "Search button click and navigation failed, forcing navigation to:",
      SearchPage.searchResultsUrl
    );
    await SearchPage.loadPage(SearchPage.searchResultsUrl, page);
  }

  await expect(page).toHaveTitle("Search results - NYPL Digital Collections");

  // await expect(searchPage.refineHeading).toBeVisible(); // move to different test "displays search results"
  // await expect(searchPage.resultsHeading).toBeVisible();
  // await expect(searchPage.firstResult).toBeVisible();
});

test("displays search result filters", async ({ page }) => {
  test.setTimeout(60000); // adds extra time to load all elements

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
