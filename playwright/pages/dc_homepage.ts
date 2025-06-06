import { Locator, Page } from "@playwright/test";

export class DCHomepage {
  private readonly page: Page;
  //navigation menu
  readonly items: Locator;
  readonly collections: Locator;
  readonly divisions: Locator;
  readonly about: Locator;

  // search box
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly publicDomaincheckbox: Locator;
  readonly whatIsPublicDomainLink: Locator;

  // hero component
  readonly learnmore: Locator;

  //swimlane
  readonly recentlyDigitizedSeeMoreLink: Locator;
  readonly mapsSeeMoreLink: Locator;
  readonly photographsSeeMoreLink: Locator;
  readonly printsAndDrawingsSeeMoreLink: Locator;
  readonly manuscriptsCorrespondenceSeeMoreLink: Locator;
  readonly booksAndPeriodicalsSeeMoreLink: Locator;
  readonly fliersAndEphemeraSeeMoreLink: Locator;

  constructor(page: Page) {
    //navigation menu
    this.page = page;
    this.items = this.page.getByRole("link", { name: "Items" });
    this.collections = this.page.getByRole("link", {
      name: "Collections",
      exact: true,
    });
    this.divisions = this.page.getByRole("link", { name: "Divisions" });
    this.about = this.page.getByRole("link", { name: "About", exact: true });

    //search box and button
    this.searchBox = this.page.getByPlaceholder("Search keyword(s)");
    this.searchButton = this.page.getByRole("button", { name: "Search" });

    // public domain

    this.whatIsPublicDomainLink = this.page.getByRole("link", {
      name: "What is public domain?",
    });
  }
}
