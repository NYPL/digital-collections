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

  //featured section
  readonly featuredSectionHeading: Locator;
  readonly featuredDigitialCollectionsPrintStore: Locator;
  readonly featuredVisitStore: Locator;
  readonly featuredSpotlightOnPublicDomain: Locator;
  readonly featuredLearnMore: Locator;

  //explore further
  readonly exporeFurtherHeading: Locator;
  readonly digitalCollectionPrintStore: Locator;
  readonly nyplArchivesAndManuscripts: Locator;
  readonly nyplResearchCatalog: Locator;
  readonly nyplDigitalCollectionsApi: Locator;
  readonly digitalPublicLibraryOfAmerica: Locator;

  //footer

  readonly footerAccessibilityLink: Locator;
  readonly footerPressLink: Locator;
  readonly footerCareersLink: Locator;
  readonly footerAboutNyplLink: Locator;
  readonly footerSpaceRentalLink: Locator;
  readonly footerPrivacyPolicyLink: Locator;
  readonly footerOtherPoliciesLink: Locator;
  readonly footerTermsAndConditionsLink: Locator;
  readonly footerGovernanceLink: Locator;
  readonly footerRulesAndRegulationsLink: Locator;
  readonly footerLanguage: Locator;
  readonly footerSocialFacebook: Locator;
  readonly footerSocialTwitter: Locator;
  readonly footerSocialInstagram: Locator;
  readonly footerSocialYouTube: Locator;

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

    //featured section

    this.featuredSectionHeading = this.page.getByRole("link", {
      name: "Featured",
    });

    this.featuredDigitialCollectionsPrintStore = this.page.getByRole(
      "heading",
      { name: "Digital Collections print store", exact: true }
    );
    this.featuredVisitStore = this.page.getByLabel(
      "Visit Store, Digital Collections print store",
      { exact: true }
    );

    this.featuredSpotlightOnPublicDomain = this.page.getByRole("heading", {
      name: "Spotlight on the public domain",
    });

    this.featuredLearnMore = this.page.getByLabel(
      "Learn more, Spotlight on the public domain",
      { exact: true }
    );

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

    //footer

    this.footerAccessibilityLink = this.page.getByRole("link", {
      name: "Accessibility",
    });
    this.footerPressLink = this.page.getByRole("link", { name: "Press" });
    this.footerCareersLink = this.page.getByRole("link", { name: "Careers" });
    this.footerAboutNyplLink = this.page.getByRole("link", {
      name: "About NYPL",
    });
    this.footerSpaceRentalLink = this.page.getByRole("link", {
      name: "Space Rental",
    });
    this.footerPrivacyPolicyLink = this.page.getByRole("link", {
      name: "Privacy Policy",
    });
    this.footerOtherPoliciesLink = this.page.getByRole("link", {
      name: "Other Policies",
    });
    this.footerTermsAndConditionsLink = this.page.getByRole("link", {
      name: "Terms & Conditions",
    });
    this.footerGovernanceLink = this.page.getByRole("link", {
      name: "Governance",
    });
    this.footerRulesAndRegulationsLink = this.page.getByRole("link", {
      name: "Rules & Regulations",
    });
    this.footerLanguage = this.page.getByRole("link", { name: "Language" });
    this.footerSocialFacebook = this.page.getByRole("link", {
      name: "Facebook",
    });
    this.footerSocialTwitter = this.page.getByRole("link", { name: "Twitter" });
    this.footerSocialInstagram = this.page.getByRole("link", {
      name: "Instagram",
    });
    this.footerSocialYouTube = this.page.getByRole("link", { name: "YouTube" });
  }
}
