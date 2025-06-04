import { Page } from "@playwright/test";

export class DCHomepage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigationMenu() {
    await this.page.getByLabel("Items");
    await this.page.getByLabel("Collections");
    await this.page.getByLabel("Divisions");
    await this.page.getByLabel("About");
  }
}
