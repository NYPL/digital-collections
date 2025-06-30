import { Locator, Page } from "@playwright/test";

export default class ItemsLandingPage {
  readonly page: Page;
  static itemsLandingUrl: string = "/search/index";

  readonly items: Locator;
  readonly resultsHeading: Locator;
  readonly firstResult: Locator;
  readonly searchBar: Locator;
  readonly searchButton: Locator;
  readonly refineHeading: Locator;
  readonly topicFilter: Locator;
  readonly sortButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.items = this.page.getByRole("link", { name: "Items" });
    this.resultsHeading = this.page
      .getByRole("heading", {
        name: new RegExp(`^Displaying \\d+-\\d+ of \\d+ results$`),
      })
      .first();
    this.firstResult = this.page
      .locator("a[href*='/items/'], a[href*='/collections/']")
      .first();
    this.searchBar = this.page.getByPlaceholder("Search keyword(s)");
    this.searchButton = this.page.getByRole("button", { name: "Search" });
    this.refineHeading = this.page.getByRole("heading", {
      name: "Refine your search",
    });
    this.topicFilter = this.page.getByRole("button", { name: "Topic" });
    this.sortButton = this.page.locator("#menu-button-sort-menu");
  }

  static async loadPage(
    gotoPage: string,
    page: Page
  ): Promise<ItemsLandingPage> {
    await page.goto(gotoPage, { waitUntil: "load" });
    return new ItemsLandingPage(page);
  }
}
