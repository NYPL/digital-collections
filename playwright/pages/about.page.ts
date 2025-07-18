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

  //video sources
  readonly videoPublicDomain: Locator;
  readonly videoDownloadItems: Locator;

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
      exact: true,
    });
    this.browseItemsLink = page.getByRole("link", {
      name: "browse just the items that have no known U.S. copyright restrictions",
      exact: true,
    });
    this.publicDomainItemsLink = page.getByRole("link", {
      name: "296,687 public domain items",
      exact: true,
    });
    this.freeForAllLink = page.getByRole("link", {
      name: "Free for All: NYPL Enhances Public Domain Collections for Sharing and Reuse.",
      exact: true,
    });

    this.permissionsAndReproductionsLink = page.getByRole("link", {
      name: "Permissions and Reproductions",
    });
    this.investigateCopywrightLink = page.getByRole("link", {
      name: "How to Investigate the Copyright Status of a Work [PDF]",
      exact: true,
    });
    this.publicDomainDeterminationChartLink = page.getByRole("link", {
      name: "public domain determination chart",
      exact: true,
    });
    this.wikipediaLink = page.getByRole("link", {
      name: "Wikipedia",
      exact: true,
    });
    this.fairUseBasicsLink = page.getByRole("link", {
      name: "fair use basics",
      exact: true,
    });
    this.fairUseChecklistLink = page.getByRole("link", {
      name: "fair use checklist",
      exact: true,
    });
    this.audioAndMovingImageLink = page.getByRole("link", {
      name: "Audio and Moving Image Preservation and Access Initiative.",
      exact: true,
    });
    this.nyplCatalogLink = page.getByRole("link", {
      name: "NYPL Catalog",
      exact: true,
    });
    this.nyplArchivesPortalLink = page.getByRole("link", {
      name: "NYPL Archives Portal",
      exact: true,
    });

    this.digitalPublicLibraryOfAmericaLink = page.getByRole("link", {
      name: "Digital Public Library of America",
      exact: true,
    });
    this.creativeCommonsLink = page.getByRole("link", {
      name: "Creative Commons CC0 1.0 Universal Public Domain Dedication",
      exact: true,
    });
    this.nyplDigitalCollectionsAPILink = page.getByRole("link", {
      name: "The New York Public Library Digital Collections API",
      exact: true,
    });

    this.publicDomainDigitalCollectionsGithubLink = page.getByRole("link", {
      name: "public domain portion of Digital Collections on GitHub",
      exact: true,
    });
    this.dplaLink = page.getByRole("link", {
      name: "Digital Public Library of America (DPLA)",
      exact: true,
    });
    this.modsLink = page.getByRole("link", {
      name: "MODS",
      exact: true,
    });
    this.internetArchiveBookReaderLink = page.getByRole("link", {
      name: "Internet Archive's BookReader.",
      exact: true,
    });
    this.iiifComplianceLink = page.getByRole("link", {
      name: "IIIF compliance",
      exact: true,
    });
    this.webAndMobileAccessibilityPolicyLink = page.getByRole("link", {
      name: "Web & Mobile Accessibility Policy.",
      exact: true,
    });
    this.emailLink = page.getByRole("link", {
      name: "digitalcollections@nypl.org",
      exact: true,
    });

    this.videoPublicDomain = this.page.locator("video").nth(0);
    this.videoDownloadItems = this.page.locator("video").nth(1);
  }
}
