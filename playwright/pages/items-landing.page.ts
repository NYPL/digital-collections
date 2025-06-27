import { Locator, Page } from "@playwright/test";

export default class ItemsLandingPage {
  readonly page: Page;
  static itemsLandingUrl: string = "/search/index";

  readonly items: Locator;
  readonly resultsHeading: Locator;
  readonly firstResult: Locator;

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
  }

  static async loadPage(
    gotoPage: string,
    page: Page
  ): Promise<ItemsLandingPage> {
    await page.goto(gotoPage, { waitUntil: "load" });
    return new ItemsLandingPage(page);
  }
}
