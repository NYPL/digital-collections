import { Locator, Page, expect } from "@playwright/test";

export default class SearchPage {
  readonly page: Page;
  readonly searchKeyword: string;
  readonly searchBar: Locator;
  readonly searchButton: Locator;

  // search results
  static searchResultsUrl: string = "/search/index?q=map%20of%20scandinavia";
  readonly resultsHeading: Locator;
  readonly firstResult: Locator;

  // search result filters
  readonly refineHeading: Locator;
  readonly topicFilter: Locator;
  readonly topicOption: Locator;
  readonly topicSelected: Locator;
  readonly nameFilter: Locator;
  readonly collectionFilter: Locator;
  readonly placeFilter: Locator;
  readonly genreFilter: Locator;
  readonly publisherFilter: Locator;
  readonly publisherOption: Locator;
  readonly publisherSelected: Locator;
  readonly divisionFilter: Locator;
  readonly typeFilter: Locator;
  readonly startYear: Locator;
  readonly endYear: Locator;
  readonly applyDates: Locator;
  readonly availablePublicDomain: Locator;
  readonly availableOnline: Locator;
  readonly availableOnsite: Locator;
  readonly showFilters: Locator;
  readonly hideFilters: Locator;
  readonly applyFilterButton: Locator;
  readonly clearFilterButton: Locator;
  readonly clearTopicFilterApplied: Locator;
  readonly clearAllFilters: Locator;

  // sort search results
  readonly sortButton: Locator;
  readonly sortByRelevance: Locator;
  readonly sortByRelevanceSelected: Locator;
  readonly sortByNewest: Locator;
  readonly sortByNewestSelected: Locator;
  readonly sortByOldest: Locator;
  readonly sortByOldestSelected: Locator;
  readonly sortByAlpha: Locator;
  readonly sortByAlphaSelected: Locator;
  readonly sortByReverseAlpha: Locator;
  readonly sortByReverseAlphaSelected: Locator;
  readonly sortByCollections: Locator;
  readonly sortByCollectionsSelected: Locator;
  readonly sortByItems: Locator;
  readonly sortByItemsSelected: Locator;

  constructor(page: Page) {
    this.page = page;

    // replace with homepage locators
    this.searchKeyword = "map of scandinavia";
    this.searchBar = this.page.getByLabel("Search keyword(s)");
    this.searchButton = this.page.getByRole("button", { name: "Search" });

    // search results
    this.resultsHeading = this.page.getByRole("heading", {
      name: new RegExp(
        `^Displaying \\d+-\\d+ of \\d+ results for "${this.searchKeyword}"$`
      ),
    });
    this.firstResult = page
      .getByRole("link", { name: this.searchKeyword })
      .first();

    // search result filters
    this.refineHeading = this.page.getByRole("heading", {
      name: "Refine your search",
    });
    this.topicFilter = this.page.getByRole("button", { name: "Topic" });
    this.topicOption = this.page
      .locator("#select-topic")
      .getByText("Maps in education", { exact: true });
    this.topicSelected = this.page
      .locator("#select-topic")
      .getByText("Topic: Maps in education", { exact: true });
    this.nameFilter = this.page.getByRole("button", { name: "Name" });
    this.collectionFilter = this.page.getByRole("button", {
      name: "Collection",
    });
    this.placeFilter = this.page.getByRole("button", { name: "Place" });
    this.genreFilter = this.page.getByRole("button", { name: "Genre" });
    this.publisherFilter = this.page.getByRole("button", { name: "Publisher" });
    this.publisherOption = this.page
      .locator("#select-publisher")
      .getByText("Printed at the Theater,", { exact: true });
    this.publisherSelected = this.page
      .locator("#select-publisher")
      .getByText("Publisher: Printed at the Theater,", { exact: true });
    this.divisionFilter = this.page.getByRole("button", { name: "Division" });
    this.typeFilter = this.page.getByRole("button", { name: "Type" });
    this.startYear = this.page.getByRole("textbox", { name: "Start year" });
    this.endYear = this.page.getByRole("textbox", { name: "End year" });
    this.applyDates = this.page.getByRole("button", { name: "Apply dates" });
    this.availablePublicDomain = this.page.getByRole("radio", {
      name: "Public domain",
    });
    this.availableOnline = this.page.getByRole("radio", {
      name: "Available online",
    });
    this.availableOnsite = this.page.getByRole("radio", {
      name: "Contains on-site materials",
    });
    this.showFilters = this.page.getByRole("button", {
      name: "See all filter options",
    });
    this.hideFilters = this.page.getByRole("button", {
      name: "Less filter options",
    });
    this.applyFilterButton = this.page.getByRole("button", {
      name: "Apply",
      exact: true,
    });
    this.clearFilterButton = this.page.getByRole("button", {
      name: "Clear filter",
      exact: true,
    });
    this.clearTopicFilterApplied = this.page.getByRole("button", {
      name: "Maps in education, click to remove filter",
    });
    this.clearAllFilters = this.page
      .locator("#search-filter-tags")
      .getByRole("button", { name: "Clear filters" });

    // sort search results
    this.sortButton = this.page.locator("#menu-button-sort-menu");
    this.sortByRelevance = this.page.getByRole("menuitem", {
      name: "Relevance",
    });
    this.sortByRelevanceSelected = this.page.getByRole("button", {
      name: "Sort by: Relevance",
    });
    this.sortByNewest = this.page.getByRole("menuitem", {
      name: "Newest to oldest",
    });
    this.sortByNewestSelected = this.page.getByRole("button", {
      name: "Sort by: Newest to oldest",
    });
    this.sortByOldest = this.page.getByRole("menuitem", {
      name: "Oldest to newest",
    });
    this.sortByOldestSelected = this.page.getByRole("button", {
      name: "Sort by: Oldest to newest",
    });
    this.sortByAlpha = this.page.getByRole("menuitem", {
      name: "Title A to Z",
    });
    this.sortByAlphaSelected = this.page.getByRole("button", {
      name: "Sort by: Title A to Z",
    });
    this.sortByReverseAlpha = this.page.getByRole("menuitem", {
      name: "Title Z to A",
    });
    this.sortByReverseAlphaSelected = this.page.getByRole("button", {
      name: "Sort by: Title Z to A",
    });
    this.sortByCollections = this.page.getByRole("menuitem", {
      name: "Collections first",
    });
    this.sortByCollectionsSelected = this.page.getByRole("button", {
      name: "Sort by: Collections first",
    });
    this.sortByItems = this.page.getByRole("menuitem", { name: "Items first" });
    this.sortByItemsSelected = this.page.getByRole("button", {
      name: "Sort by: Items first",
    });
  }

  static async loadPage(gotoPage: string, page: Page): Promise<SearchPage> {
    await page.goto(gotoPage, { waitUntil: "load" });
    return new SearchPage(page);
  }

  async filterSearchResults(): Promise<void> {
    // filters a drop-down in the first row
    await expect(this.topicFilter).toBeVisible();
    await this.topicFilter.click();
    await expect(this.topicOption).toBeVisible();
    await this.topicOption.click();
    await expect(this.applyFilterButton).toBeVisible();
    await this.applyFilterButton.click();
    await expect(this.topicSelected).toBeVisible();

    // filters a drop-down in the second row
    if (await this.showFilters.isVisible()) {
      await expect(this.showFilters).toBeVisible();
      await this.showFilters.click();
    }

    await expect(this.publisherFilter).toBeVisible();
    await this.publisherFilter.click();
    await expect(this.publisherOption).toBeVisible();
    await this.publisherOption.click();
    await expect(this.applyFilterButton).toBeVisible();
    await this.applyFilterButton.click();
    await expect(this.publisherSelected).toBeVisible();
  }
}
