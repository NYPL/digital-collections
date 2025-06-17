import { Locator, Page } from "@playwright/test";

export class Divisions {
  private readonly page: Page;

  readonly divisionsHeading: Locator;
  readonly divisionsHeadingList: Locator;
  readonly divisionSeeMore: Locator;

  constructor(page: Page) {
    this.page = page;
    this.divisionsHeading = this.page.getByRole("heading", {
      name: "Divisions",
    });
    this.divisionsHeadingList = this.page.locator(".chakra-heading.css-8aiqvu");
    this.divisionSeeMore = this.page.getByRole("link", { name: "See more" });
  }
}
