import { Locator, Page } from "@playwright/test";

export default class ItemPage {
  readonly page: Page;
  static itemUrl: string = "/items/d5542750-c5d3-012f-377b-58d385a7bc34";

  readonly itemHeading: Locator;
  readonly itemDivision: Locator;
  readonly itemCollection: Locator;
  readonly itemTopic: Locator;
  readonly itemRights: Locator;
  readonly itemDate: Locator;
  readonly itemPublisher: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemHeading = this.page.locator("#item-summary").getByRole("heading", {
      name: "A new map of ancient Scandinavia, together with as much more of ye northern part of ancient Europe as answers to present Denmark & Moscovia.",
    });
    this.itemDivision = this.page
      .locator(".item-collections")
      .getByRole("link", {
        name: "Lionel Pincus and Princess Firyal Map Division",
      }); // division is displayed in a few places but chose accordion
    this.itemCollection = this.page
      .locator(".item-collections")
      .getByRole("link", {
        name: "Lawrence H. Slaughter Collection of English maps, charts, globes, books and atlases",
      });
    this.itemTopic = this.page
      .locator("#item-content-data")
      .getByRole("link", { name: "Maps in education" });
    this.itemRights = this.page
      .locator(".rights-message-container")
      .getByRole("link", { name: "Free to use without restriction" }); // rename availability filters to rights filters
    this.itemDate = this.page
      .locator("#item-summary")
      .getByRole("link", { name: "1700" });
    this.itemPublisher = this.page
      .locator("#item-content-data")
      .getByRole("link", {
        name: "Printed at the Theater,",
      });
  }

  static async loadPage(gotoPage: string, page: Page): Promise<ItemPage> {
    await page.goto(gotoPage, { waitUntil: "load" });
    return new ItemPage(page);
  }
}
