import { Locator, Page } from "@playwright/test";

export default class SearchPage {
  readonly page: Page;
  readonly searchKeyword: string;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly refineHeading: Locator;
  readonly resultsHeading: Locator;
  readonly firstResult: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchKeyword = "maps";
    this.searchBox = this.page.getByLabel("Search keyword(s)");
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
  }

  static async loadPage(gotoPage: string, page: Page): Promise<SearchPage> {
    await page.goto(gotoPage, { waitUntil: "load" });
    return new SearchPage(page);
  }
}
