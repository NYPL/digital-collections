import { Locator, Page } from "@playwright/test";

export default class SearchPage {
  readonly page: Page;
  static searchResultsUrl: string = "/search/index?q=map%20of%20scandinavia";
  readonly searchKeyword: string;
  readonly searchBar: Locator;
  readonly searchButton: Locator;
  readonly refineHeading: Locator;
  readonly resultsHeading: Locator;
  readonly firstResult: Locator;

  // search result filters
  readonly topicFilter: Locator;
  readonly topicOption: Locator;
  readonly nameFilter: Locator;
  readonly collectionFilter: Locator;
  readonly placeFilter: Locator;
  readonly genreFilter: Locator;
  readonly publisherFilter: Locator;
  readonly divisionFilter: Locator;
  readonly divisionOption: Locator;
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
  readonly clearFilter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchKeyword = "map of scandinavia";
    this.searchBar = this.page.getByLabel("Search keyword(s)");
    this.searchButton = this.page.getByRole("button", { name: "Search" });
    this.refineHeading = this.page.getByRole("heading", {
      name: "Refine your search",
    });
    this.resultsHeading = this.page.getByRole("heading", {
      name: new RegExp(
        `^Displaying \\d+-\\d+ of \\d+ results for "${this.searchKeyword}"$`
      ),
    });
    this.firstResult = page
      .getByRole("link", { name: this.searchKeyword })
      .first();

    // search result filters
    this.topicFilter = this.page.getByRole("button", { name: "Topic" });
    this.topicOption = this.page
      .locator("#select-topic")
      .getByText("Maps in education");
    this.nameFilter = this.page.getByRole("button", { name: "Name" });
    this.collectionFilter = this.page.getByRole("button", {
      name: "Collection",
    });
    this.placeFilter = this.page.getByRole("button", { name: "Place" });
    this.genreFilter = this.page.getByRole("button", { name: "Genre" });
    this.publisherFilter = this.page.getByRole("button", { name: "Publisher" });
    this.divisionFilter = this.page.getByRole("button", { name: "Division" });
    this.divisionOption = this.page
      .locator("#select-division")
      .getByText("Spencer Collection");
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
    this.clearFilter = this.page.getByTestId("filter-close-icon");
  }

  static async loadPage(gotoPage: string, page: Page): Promise<SearchPage> {
    await page.goto(gotoPage, { waitUntil: "load" });
    return new SearchPage(page);
  }
}
