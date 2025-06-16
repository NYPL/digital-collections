import { Locator, Page } from "@playwright/test";

export class Divisions {
  private readonly page: Page;

  readonly divisionsHeading: Locator;
  readonly divisionsHeadingList: Locator;
  readonly divisionsListItems: Locator;
  readonly divisionName: Locator;
  readonly divisionDescription: Locator;

  constructor(page: Page) {
    this.page = page;
    this.divisionsHeading = this.page.getByRole("heading", {
      name: "Divisions",
    });
    this.divisionsHeadingList = this.page.locator(".chakra-heading.css-8aiqvu");
  }
}
