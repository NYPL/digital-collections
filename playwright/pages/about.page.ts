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

  // links
  readonly searchLink: Locator;
  readonly itemLink: Locator;
  readonly collectionLink: Locator;
  readonly divisionLink: Locator;
  readonly nyplDigitalCollectionsPlatformLink: Locator;
  readonly aboutLink: Locator;
  readonly browseItemsLink: Locator;
  readonly publicDomainItemsLink: Locator;
  readonly freeForAllLink: Locator;
  readonly permissionsAndReproductionsLink: Locator;
  readonly investigateCopywrightLink: Locator;
  readonly publicDomainDeterminationChartLink: Locator;
  readonly wikipediaLink: Locator;
  readonly fairUseBasicsLink: Locator;
  readonly fairUseChecklistLink: Locator;
  readonly audioAndMovingImageLink: Locator;
  readonly nyplCatalogLink: Locator;
  readonly nyplArchivesPortalLink: Locator;
  readonly digitalPublicLibraryOfAmericaLink: Locator;
  readonly creativeCommonsLink: Locator;
  readonly nyplDigitalCollectionsAPILink: Locator;
  readonly publicDomainDigitalCollectionsGithubLink: Locator;
  readonly dplaLink: Locator;
  readonly modsLink: Locator;
  readonly internetArchiveBookReaderLink: Locator;
  readonly iiifComplianceLink: Locator;
  readonly webAndMobileAccessibilityPolicyLink: Locator;
  readonly emailLink: Locator;

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

    // links
    this.searchLink = page.getByRole("link", { name: "search", exact: true });
    this.itemLink = page.getByRole("link", { name: "item", exact: true });
    this.collectionLink = page.getByRole("link", {
      name: "collection",
      exact: true,
    });
    this.divisionLink = page.getByRole("link", {
      name: "division",
      exact: true,
    });
    this.aboutLink = page.getByRole("link", { name: "about", exact: true });

    this.nyplDigitalCollectionsPlatformLink = page.getByRole("link", {
      name: '"NYPL Digital Collections Platform: An Introduction"',
    });
    this.browseItemsLink = page.getByRole("link", {
      name: "browse just the items that have no known U.S. copyright restrictions",
    });
    this.publicDomainItemsLink = page.getByRole("link", {
      name: "296,687 public domain items",
    });
    this.freeForAllLink = page.getByRole("link", {
      name: "Free for All: NYPL Enhances Public Domain Collections for Sharing and Reuse.",
    });

    this.permissionsAndReproductionsLink = page.getByRole("link", {
      name: "Permissions and Reproductions",
    });
    this.investigateCopywrightLink = page.getByRole("link", {
      name: "How to Investigate the Copyright Status of a Work [PDF]",
    });
    this.publicDomainDeterminationChartLink = page.getByRole("link", {
      name: "public domain determination chart",
    });
    this.wikipediaLink = page.getByRole("link", {
      name: "Wikipedia",
    });
    this.fairUseBasicsLink = page.getByRole("link", {
      name: "fair use basics",
    });
    this.fairUseChecklistLink = page.getByRole("link", {
      name: "fair use checklist",
    });
    this.audioAndMovingImageLink = page.getByRole("link", {
      name: "Audio and Moving Image Preservation and Access Initiative.",
    });
    this.nyplCatalogLink = page.getByRole("link", {
      name: "NYPL Catalog",
    });
    this.nyplArchivesPortalLink = page.getByRole("link", {
      name: "NYPL Archives Portal",
    });

    this.digitalPublicLibraryOfAmericaLink = page.getByRole("link", {
      name: "Digital Public Library of America",
    });
    this.creativeCommonsLink = page.getByRole("link", {
      name: "Creative Commons CC0 1.0 Universal Public Domain Dedication",
    });
    this.nyplDigitalCollectionsAPILink = page.getByRole("link", {
      name: "The New York Public Library Digital Collections API",
    });

    this.publicDomainDigitalCollectionsGithubLink = page.getByRole("link", {
      name: "Public Domain Digital Collections GitHub",
    });
    this.dplaLink = page.getByRole("link", {
      name: "Digital Public Library of America (DPLA)",
    });
    this.modsLink = page.getByRole("link", {
      name: "Metadata Object Description Schema (MODS)",
    });
    this.internetArchiveBookReaderLink = page.getByRole("link", {
      name: "Internet Archive BookReader",
    });
    this.iiifComplianceLink = page.getByRole("link", {
      name: "IIIF Compliance",
    });
    this.webAndMobileAccessibilityPolicyLink = page.getByRole("link", {
      name: "Web and Mobile Accessibility Policy",
    });
    this.emailLink = page.getByRole("link", { name: "Email" });
  }
}
