import { Locator, Page } from "@playwright/test";

export default class ItemPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  static async loadPage(gotoPage: string, page: Page): Promise<ItemPage> {
    await page.goto(gotoPage, { waitUntil: "load" });
    return new ItemPage(page);
  }
}
