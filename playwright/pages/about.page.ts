import { Locator, Page } from "@playwright/test";

export class AboutPage {
  private readonly page: Page;
  static aboutUrl: string = "/about";

  // navigation menu
  readonly items: Locator;
  readonly collections: Locator;
  readonly divisions: Locator;
  readonly about: Locator;

  // search box
  readonly searchBar: Locator;
  readonly searchButton: Locator;
  readonly publicDomaincheckbox: Locator;
  readonly whatIsPublicDomainLink: Locator;

  // headings and text
  readonly aboutPageText: Locator;
  readonly aboutLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    // navigation menu
    this.items = page.getByRole("link", {
      name: "Items",
      exact: true,
    });

    this.collections = page.getByRole("link", {
      name: "Collections",
      exact: true,
    });
    this.divisions = page.getByRole("link", { name: "Divisions", exact: true });
    this.about = page.getByRole("link", { name: "About", exact: true });

    // search box
    this.searchBar = page.getByPlaceholder("Search keyword(s)");
    this.searchButton = page.getByRole("button", { name: "Search" });
    this.publicDomaincheckbox = page.getByLabel("Public domain");

    // public domain
    this.whatIsPublicDomainLink = page.getByRole("link", {
      name: "What is public domain?",
    });

    // headings and text
    this.aboutPageText = page.locator("body");
    this.aboutLinks = page.locator("a");
  }
}
