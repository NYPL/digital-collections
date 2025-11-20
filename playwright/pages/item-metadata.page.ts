import { Locator, Page, expect } from "@playwright/test";

export default class ItemMetadataPage {
  readonly page: Page;

  static itemResultURL: string = "/items/8b2b3160-c5d5-012f-d95c-58d385a7bc34";

  // item-metadata
  readonly itemDataHeader: Locator;
  readonly titleHeading: Locator;
  readonly titleText: Locator;
  readonly collectionHeading: Locator;
  readonly collectionText: Locator;
  readonly collectionLink: Locator;
  // there are multiple links on collection that we'll need to test
  readonly datesHeading: Locator;
  readonly datesText: Locator;
  readonly datesLink: Locator;
  readonly libraryHeading: Locator;
  readonly libraryLink: Locator;
  readonly shelfLocatorText: Locator;
  readonly topicHeading: Locator;
  readonly topicText: Locator;
  readonly nameHeading: Locator;
  readonly nameText: Locator;
  readonly placeHeading: Locator;
  readonly placeText: Locator;
  readonly genreHeading: Locator;
  readonly genreText: Locator;
  readonly notesHeading: Locator;
  readonly notesText: Locator;
  // there can be 'abstract notes' too, separate field?
  readonly physicalHeading: Locator;
  readonly physicalText: Locator;
  readonly descriptionHeading: Locator;
  readonly descriptionText: Locator;
  readonly typeHeading: Locator;
  readonly typeText: Locator;
  readonly identifiersHeading: Locator;
  readonly identifiersText: Locator;
  static readonly EXPECTED_UUID_VALUE = "8b2b3160-c5d5-012f-d95c-58d385a7bc34";
  static readonly EXPECTED_OCLC_VALUE = "24501668";
  static readonly EXPECTED_BNUMBER_VALUE = "b14924644";
  static readonly EXPECTED_SHELF_LOCATOR_VALUE = "Map Div. 97-6199 [LHS 839]";
  readonly rightsHeading: Locator;
  readonly rightsText: Locator;
  readonly dataSourceHeading: Locator;
  readonly dataSourceLink: Locator;

  // METADATA:
  // Data Source link to catalog (optional)
  // Item Data heading (req)

  // Title (req)
  // Collection (req)???
  // Dates/Origin heading
  // Library location’s heading and text (req)
  // Library shelf locator (optional, under location heading)
  // Topics and links
  // Genre and link
  // Notes and text
  // Physical Description and text
  // Description and text
  // Type of Resource (req)?
  // Identifiers and text (req - at minimum there will be an item uuid)
  // Rights Statement heading and text (req)
  // Name heading and text
  // Place/Geographic heading and text

  constructor(page: Page) {
    this.page = page;

    // Title
    // This finds the specific <p> element containing 'Title'
    this.titleHeading = this.page.getByText("Title", { exact: true });

    // Defines the TARGET (the content right after the header)
    // This is the relative locator that enforces the structural relationship.
    this.titleText = this.titleHeading.locator("+ p");

    // Collection
    this.collectionHeading = this.page.getByText("Collection", { exact: true });
    this.collectionText = this.collectionHeading.locator("+ p");
    this.collectionLink = this.collectionText.locator("a").first(); // Target the link within the following paragraph

    // Dates/Origin  (this can be Dates or Date?)
    this.datesHeading = this.page.getByText("Dates/Origin", { exact: true });
    this.datesText = this.datesHeading.locator("+ p");
    this.datesLink = this.datesText.locator("a").first();

    // Library Location
    this.libraryHeading = this.page.getByText("Library location", {
      exact: true,
    }); // Assuming full heading text
    this.libraryLink = this.libraryHeading.locator("+ p > a"); // Assumes link is inside the next paragraph

    // Library shelf locator
    this.shelfLocatorText = this.libraryHeading
      .page()
      .locator(
        'div:has-text("Library location")' // Find the heading container
      )
      .getByText(/Shelf locator:/i);

    // Topics
    this.topicHeading = this.page.getByText("Topic", { exact: true });
    this.topicText = this.topicHeading.locator("+ p");

    // Name (Creator/Author)
    this.nameHeading = this.page.getByText("Name", { exact: true });
    this.nameText = this.nameHeading.locator("+ p");

    // Place/Geographic
    this.placeHeading = this.page.getByText("Place", { exact: true });
    this.placeText = this.placeHeading.locator("+ p");

    // Genre
    this.genreHeading = this.page.getByText("Genre", { exact: true });
    this.genreText = this.genreHeading.locator("+ p");

    // Notes
    this.notesHeading = this.page.getByText("Notes", { exact: true });
    this.notesText = this.notesHeading.locator("+ p");

    // --- 2. COMPLEX/LOWER METADATA FIELDS ---

    // Physical Description
    this.physicalHeading = this.page.getByText("Physical Description", {
      exact: true,
    });
    this.physicalText = this.physicalHeading.locator("+ p");

    // Description
    this.descriptionHeading = this.page.getByText("Description", {
      exact: true,
    });
    this.descriptionText = this.descriptionHeading.locator("+ p");

    // Type of Resource
    this.typeHeading = this.page.getByText("Type of Resource", { exact: true });
    this.typeText = this.typeHeading.locator("+ p");

    // Identifiers
    this.identifiersHeading = this.page.getByText("Identifiers", {
      exact: true,
    });
    this.identifiersText = this.identifiersHeading.locator("+ p");

    // Rights Statement
    this.rightsHeading = this.page.getByText("Rights Statement", {
      exact: true,
    });
    this.rightsText = this.rightsHeading.locator("+ p");
  }

  async verifyTitleTextContent(): Promise<void> {
    // Since 'this.titleText' was defined using the adjacent selector '+ p',
    // this assertion inherently validates the structure AND the content.

    // Structural check: Ensure the element exists and is visible
    await expect(this.titleText).toBeVisible();

    // Content check: Assert the specific expected text
    await expect(this.titleText).toContainText(
      "To His Excellency Sr. Henry Moore, Bart"
    );
  }

  async verifyUUIDIdentifierIsPresent(): Promise<void> {
    // 1. Locate the element using the scoped locator
    const uuidLocator = this.identifiersText.locator(
      'span:has-text("Universal Unique Identifier (UUID):")'
    );

    // 2. Assert the element is visible and contains the exact required content
    await expect(uuidLocator).toBeVisible();
    await expect(uuidLocator).toHaveText(
      `Universal Unique Identifier (UUID): ${ItemMetadataPage.EXPECTED_UUID_VALUE}`
    );
  }

  async verifyOclcIdentifierIsPresent(): Promise<void> {
    // Check existence first (Conditional Check)
    const oclcLocator = this.identifiersText.locator(
      'span:has-text("RLIN/OCLC:")'
    );

    await expect(oclcLocator).toBeVisible();
    await expect(oclcLocator).toHaveText(
      `RLIN/OCLC: ${ItemMetadataPage.EXPECTED_OCLC_VALUE}`
    );
  }

  async verifyCatalogLinkIsPresent(): Promise<void> {
    // Check existence first (Conditional Check)
    const catalogLinkLocator = this.identifiersText
      .locator('span:has-text("NYPL Catalog ID")')
      .locator("a");

    await expect(catalogLinkLocator).toBeVisible();
    await expect(catalogLinkLocator).toHaveText(
      ItemMetadataPage.EXPECTED_BNUMBER_VALUE
    );

    //  // Get URL the link points to before clicking it
    // const expectedUrl = (await catalogLinkLocator.getAttribute('href'))!;

    // await catalogLinkLocator.click();
    // // Check for correct catalog page
    // const verificationText = "The New York Public Library"; // Example verification text
    // await expect(this.page.locator('body')).toContainText(verificationText, { timeout: 15000 });
  }

  async verifyShelfLocatorIsPresent(): Promise<void> {
    await expect(this.shelfLocatorText).toBeVisible();

    // confirms the text value includes the Call Number.
    await expect(this.shelfLocatorText).toContainText(
      ItemMetadataPage.EXPECTED_SHELF_LOCATOR_VALUE
    );
  }

  async verifyRightsContent(): Promise<void> {
    // Structural check: Ensure the element exists and is visible
    await expect(this.rightsHeading).toBeVisible();

    // Content check: Assert the specific expected text
    await expect(this.rightsText).toHaveText(
      "SOME RIGHTS TEXT WILL GO HERE, AND IT VARIES"
    );
  }

  async loadPage(gotoPage: string): Promise<void> {
    await this.page.goto(gotoPage);
  }
}
