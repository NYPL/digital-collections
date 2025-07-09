import { Locator, Page } from "@playwright/test";

export default class ItemPage {
  readonly page: Page;

  static captureIndex: number = 2;
  static captureUuid: string = "e36b2b90-740d-0136-0517-476ebf952da4";
  static itemUuid: string = "7cd3acc0-5d7f-0134-12ab-00505686a51c";

  constructor(page: Page) {
    this.page = page;
  }

  static async loadPage(gotoPage: string, page: Page): Promise<ItemPage> {
    await page.goto(gotoPage, { waitUntil: "load" });
    return new ItemPage(page);
  }
}
