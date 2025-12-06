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
  // there are multiple links on collection that we'll need to test
  readonly collectionRootLink: Locator;
  readonly collectionLevelOneLink: Locator;
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
  readonly rightsHeading: Locator;
  readonly rightsText: Locator;
  readonly dataSourceHeading: Locator;
  readonly dataSourceLink: Locator;
  static readonly EXPECTED_TITLE_VALUE =
    "To His Excellency Sr. Henry Moore, Bart";
  static readonly EXPECTED_UUID_VALUE = "8b2b3160-c5d5-012f-d95c-58d385a7bc34";
  static readonly EXPECTED_OCLC_VALUE = "24501668";
  static readonly EXPECTED_BNUMBER_VALUE = "b14924644";
  static readonly EXPECTED_SHELF_LOCATOR_VALUE = "Map Div. 97-6199 [LHS 839]";
  static readonly EXPECTED_COLLECTION_ROOT_VALUE =
    "Lawrence H. Slaughter Collection of English maps, charts, globes, books and atlases";
  static readonly EXPECTED_COLLECTION_LEVEL_ONE_VALUE = "Charts and maps";
  static readonly EXPECTED_NAME_COUNT = 2;
  static readonly EXPECTED_NAME_ONE_VALUE = "Ratzer, Bernard";
  static readonly EXPECTED_NAME_ONE_ROLE_VALUE = "(Cartographer)";
  static readonly EXPECTED_NAME_TWO_VALUE = "Kitchin, Thomas, 1718-1784";
  static readonly EXPECTED_NAME_TWO_ROLE_VALUE = "(Engraver)";

  constructor(page: Page) {
    this.page = page;

    // Title
    // This finds the specific <p> element containing 'Title'
    this.titleHeading = this.page.getByText("Title", { exact: true });

    // This is the relative locator that enforces the structural relationship.
    this.titleText = this.titleHeading.locator("+ p");

    // Identifiers
    this.identifiersHeading = this.page.getByText("Identifiers", {
      exact: true,
    });
    this.identifiersText = this.identifiersHeading.locator("+ p");

    // Collection
    this.collectionHeading = this.page.getByText("Collection", { exact: true });
    this.collectionText = this.collectionHeading.locator("+ p");

    // Dates/Origin  (this can be Dates or Date?)
    this.datesHeading = this.page.getByText("Dates/Origin", { exact: true });
    this.datesText = this.datesHeading.locator("+ p");
    this.datesLink = this.datesText.getByRole("link").first();

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
      ItemMetadataPage.EXPECTED_TITLE_VALUE
    );
  }

  async verifyUUIDIdentifierIsPresent(): Promise<void> {
    // 1. Locate the element using the scoped locator
    const uuidLocator = this.identifiersText
      .locator("span")
      .filter({ hasText: /Universal Unique Identifier \(UUID\):/ });
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
      .getByRole("link");

    await expect(catalogLinkLocator).toBeVisible();
    await expect(catalogLinkLocator).toHaveText(
      ItemMetadataPage.EXPECTED_BNUMBER_VALUE
    );
  }

  async verifyShelfLocatorIsPresent(): Promise<void> {
    await expect(this.shelfLocatorText).toBeVisible();

    // confirms the text value includes the Call Number.
    await expect(this.shelfLocatorText).toContainText(
      ItemMetadataPage.EXPECTED_SHELF_LOCATOR_VALUE
    );
  }

  async verifyCollectionRootLink(): Promise<void> {
    // check for the main link
    const collectionRootLinkLocator = this.collectionText
      .getByRole("link")
      .nth(0);

    await expect(collectionRootLinkLocator).toBeVisible();
    await expect(collectionRootLinkLocator).toHaveText(
      ItemMetadataPage.EXPECTED_COLLECTION_ROOT_VALUE
    );
  }

  async verifyCollectionLevelOneLink(): Promise<void> {
    // check for the second link
    const collectionLevelOneLinkLocator = this.collectionText
      .getByRole("link")
      .nth(1);

    await expect(collectionLevelOneLinkLocator).toBeVisible();
    await expect(collectionLevelOneLinkLocator).toHaveText(
      ItemMetadataPage.EXPECTED_COLLECTION_LEVEL_ONE_VALUE
    );
  }

  /**
   * Enforces a patient wait for the Names section heading to be structurally attached
   * to the DOM, compensating for asynchronous loading delays.
   */

  // DIDN'T WORK:
  // async waitForNamesSection(): Promise<void> {
  //     // Use the explicit wait for attachment/visibility with a long timeout
  //     await this.nameHeading.waitFor({ state: 'attached', timeout: 45000 });
  // }

  async verifyNameFieldList(): Promise<void> {
    // Find all name entry containers
    const allNameEntryContainers = this.nameText.locator(":scope > *");

    // If the item returns less/more than the expected nodes, this line fails immediately.
    await expect(allNameEntryContainers).toHaveCount(
      ItemMetadataPage.EXPECTED_NAME_COUNT
    );
  }

  async verifyNameOneValue(): Promise<void> {
    // Locate the specific name link
    const nameOneLink = this.nameText.getByRole("link").nth(0);

    // Assert Link Content (Value Check)
    await expect(nameOneLink).toBeVisible();
    await expect(nameOneLink).toHaveText(
      ItemMetadataPage.EXPECTED_NAME_ONE_VALUE
    );
  }

  async verifyNameOneRole(): Promise<void> {
    // Locate the parent container using its structural selector
    const nameOneEntryContainer = this.nameText.locator(":scope > *").nth(0);

    // Check the full container text for the ROLE.
    const fullExpectedText = `${ItemMetadataPage.EXPECTED_NAME_ONE_VALUE} ${ItemMetadataPage.EXPECTED_NAME_ONE_ROLE_VALUE}`;

    // We use toContainText to ensure the role text follows the name correctly within the <span> container.
    await expect(nameOneEntryContainer).toContainText(fullExpectedText);
  }

  async verifyNameTwoValue(): Promise<void> {
    const nameTwoLink = this.nameText.getByRole("link").nth(1);

    await expect(nameTwoLink).toBeVisible();
    await expect(nameTwoLink).toHaveText(
      ItemMetadataPage.EXPECTED_NAME_TWO_VALUE
    );
  }

  async verifyNameTwoRole(): Promise<void> {
    const nameTwoEntryContainer = this.nameText.locator(":scope > *").nth(1);
    const fullExpectedText = `${ItemMetadataPage.EXPECTED_NAME_TWO_VALUE} ${ItemMetadataPage.EXPECTED_NAME_TWO_ROLE_VALUE}`;

    await expect(nameTwoEntryContainer).toContainText(fullExpectedText);
  }

  // async verifyNameTwoLinkAndRole(): Promise<void> {

  //   const nameTwoLink = this.nameText.getByRole("link").nth(1);
  //   const nameTwoEntryContainer = this.nameText.locator(':scope > *').nth(1);

  //   await expect(nameTwoLink).toBeVisible()
  //   await expect(nameTwoLink).toHaveText(
  //     ItemMetadataPage.EXPECTED_NAME_TWO_VALUE,
  //   );

  //   const fullExpectedText = `${ItemMetadataPage.EXPECTED_NAME_TWO_VALUE} ${ItemMetadataPage.EXPECTED_NAME_TWO_ROLE_VALUE}`;

  //   await expect(nameTwoEntryContainer).toContainText(
  //     fullExpectedText,
  //   );
  // }

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

  // async loadPage(gotoPage: string): Promise<void> {
  //   // Force Playwright to wait only for the core DOM and JS execution,
  //   // ignoring slow assets like the Universal Viewer.
  //   await this.page.goto(gotoPage, { waitUntil: 'domcontentloaded' });
  // }
}
