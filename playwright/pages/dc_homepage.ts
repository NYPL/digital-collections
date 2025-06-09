import { Locator, Page } from "@playwright/test";

export class DCHomepage {
  private readonly page: Page;
  //navigation menu
  readonly items: Locator;
  readonly collections: Locator;
  readonly divisions: Locator;
  readonly about: Locator;

  // search box
  readonly searchBar: Locator;
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

  //explore further
  readonly exporeFurtherHeading: Locator;
  readonly digitalCollectionPrintStore: Locator;
  readonly nyplArchivesAndManuscripts: Locator;
  readonly nyplResearchCatalog: Locator;
  readonly nyplDigitalCollectionsApi: Locator;
  readonly digitalPublicLibraryOfAmerica: Locator;

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
    this.searchBar = this.page.getByPlaceholder("Search keyword(s)");
    this.searchButton = this.page.getByRole("button", { name: "Search" });

    // public domain

    this.whatIsPublicDomainLink = this.page.getByRole("link", {
      name: "What is public domain?",
    });

    // explore further
    this.exporeFurtherHeading = this.page.getByRole("heading", {
      name: "Explore further",
    });
    this.digitalCollectionPrintStore = this.page.getByRole("link", {
      name: "Digital Collections Print Store",
      exact: true,
    });
    this.nyplArchivesAndManuscripts = this.page.getByRole("link", {
      name: "NYPL Archives and Manuscripts",
    });
    this.nyplResearchCatalog = this.page.getByRole("link", {
      name: "NYPL Research Catalog",
    });
    this.nyplDigitalCollectionsApi = this.page.getByRole("link", {
      name: "NYPL Digital Collections API",
    });
    this.digitalPublicLibraryOfAmerica = this.page.getByRole("link", {
      name: "Digital Public Library of America",
    });
  }
}
