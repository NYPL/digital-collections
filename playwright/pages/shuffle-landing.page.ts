import { Locator, Page } from "@playwright/test";

export default class ShuffleLandingPage {
  readonly page: Page;
  static shuffleLandingUrl: string = "/shuffle";

  readonly navShuffleLink: Locator;

  constructor(page: Page) {
    this.page = page;
    // Scoped to the header
    this.navShuffleLink = this.page
      .getByRole("navigation", { name: "Header links" })
      .getByRole("link", { name: "Shuffle" });
  }

  static async loadPage(page: Page): Promise<ShuffleLandingPage> {
    await page.goto(this.shuffleLandingUrl);
    return new ShuffleLandingPage(page);
  }

  async waitForEndpointUrl() {
    // Wait for the URL to resolve from /shuffle to an item or collection
    await this.page.waitForURL(/\/(items|collections)\/[a-z0-9-]+/i, {
      timeout: 15000,
    });
  }

  async verifyBreadcrumbs() {
    const itemBreadcrumb = this.page.getByRole("navigation", { name: "item" });
    const collectionBreadcrumb = this.page.getByRole("navigation", {
      name: "collection",
    });

    await itemBreadcrumb.or(collectionBreadcrumb).waitFor({
      state: "visible",
    });
  }
}
