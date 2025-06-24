import { Locator, Page } from "@playwright/test";

export default class ItemPage {
  readonly page: Page;
  static itemUrl: string = "/items/d5542750-c5d3-012f-377b-58d385a7bc34";

  readonly itemHeading: Locator;
  readonly itemDataHeading: Locator;
  readonly itemDivision: Locator;
  readonly itemCollection: Locator;
  readonly itemTopic: Locator;
  readonly itemRights: Locator;
  readonly itemDate: Locator;
  readonly itemPublisher: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemHeading = this.page.getByRole("heading", {
      name: "A new map of ancient Scandinavia, together with as much more of ye northern part of ancient Europe as answers to present Denmark & Moscovia.",
    });
    this.itemDataHeading = this.page.getByRole("heading", {
      name: "Item data",
    });
    this.itemDivision = this.page.getByRole("link", {
      name: "Lionel Pincus and Princess Firyal Map Division",
    });
    this.itemCollection = this.page.getByRole("link", {
      name: "Lawrence H. Slaughter Collection of English maps, charts, globes, books and atlases",
    });
    this.itemTopic = this.page.getByRole("link", { name: "Maps in education" });
    this.itemRights = this.page
      .getByRole("paragraph")
      .filter({
        hasText:
          "The New York Public Library believes that this item is in the public domain",
      }); // rename availability filters to rights filters
    this.itemDate = this.page.getByRole("link", { name: "1700" }).first();
    this.itemPublisher = this.page
      .getByRole("link", {
        name: "Printed at the Theater,",
      })
      .first();
  }

  static async loadPage(gotoPage: string, page: Page): Promise<ItemPage> {
    await page.goto(gotoPage, { waitUntil: "load" });
    return new ItemPage(page);
  }
}
