import { Locator, Page, expect } from "@playwright/test";

class FieldLocatorService {
  // Method returns an object containing both the Locator and the content/text Pattern
  public getNameLocatorAndPattern(
    allEntryContainers: Locator,
    expectedData: { name: string; role: string }
  ): { locator: Locator; pattern: RegExp } {
    // Define escaped delimiters for the front-end pattern
    const prefix = "\\(";
    const suffix = "\\)";

    // Pattern: [Name] + [one or more whitespace (\s+)] + [(Literal Paren)] + [Role] + [Literal Paren]
    const fullExpectedPattern = new RegExp(
      expectedData.name + "\\s+" + prefix + expectedData.role + suffix,
      "i"
    );

    // Filter the general locator to find the specific container
    const locator = allEntryContainers.filter({
      hasText: fullExpectedPattern,
    });

    // return locator values and full-text for assertions
    return { locator: locator, pattern: fullExpectedPattern };
  }

  public getTopicLocator(
    allEntryContainers: Locator,
    expectedText: string
  ): { locator: Locator; pattern: RegExp } {
    // Escape special characters so parentheses like "(N.Y.)" can match)
    const escapedText = expectedText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // Pattern: the text must be contained (no start/end anchors)
    const locatorPattern = new RegExp(escapedText, "i");

    // Match entire string we will use start/end anchors for strict matching
    const fullExpectedPattern = new RegExp(`^${escapedText}$`, "i");

    // Filter the general locator to find the specific container
    const locator = allEntryContainers.filter({
      hasText: locatorPattern,
    });

    return { locator: locator, pattern: fullExpectedPattern };
  }

  public getBasicLocator(
    allEntryContainers: Locator,
    expectedText: string
  ): { locator: Locator; pattern: RegExp } {
    // Pattern:  define pattern here
    const basicExpectedPattern = new RegExp(`^${expectedText}$`, "i");

    // Filter the general locator to find the specific container
    const locator = allEntryContainers.filter({
      hasText: basicExpectedPattern,
    });

    // return locator values and full-text for assertions
    return { locator: locator, pattern: basicExpectedPattern };
  }
}

export default class ItemMetadataPage {
  readonly page: Page;
  private locatorService = new FieldLocatorService();

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
  static readonly EXPECTED_NAMES = [
    { name: "Ratzer, Bernard", role: "Cartographer" },
    { name: "Kitchin, Thomas, 1718-1784", role: "Engraver" },
  ];
  static readonly EXPECTED_SUBJECTS = [
    "New York (N.Y.) -- Maps -- Early works to 1800",
    "New York (N.Y.) -- Administrative and political divisions -- Maps -- Early works to 1800",
  ];

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

    // Subjects
    this.topicHeading = this.page.getByText("Subjects", { exact: true });
    this.topicText = this.topicHeading.locator("+ p");

    // Name (Creator/Author)
    this.nameHeading = this.page.getByText("Names", { exact: true });
    this.nameText = this.nameHeading.locator("+ p");

    // Place/Geographic
    this.placeHeading = this.page.getByText("Places", { exact: true });
    this.placeText = this.placeHeading.locator("+ p");

    // Genre
    this.genreHeading = this.page.getByText("Genres", { exact: true });
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

  async verifyNameCount(): Promise<void> {
    const allNameEntryContainers = this.nameText.locator("span");
    await expect(allNameEntryContainers).toHaveCount(
      ItemMetadataPage.EXPECTED_NAMES.length
    );
  }

  // Checks if Name is a clickable link and Role is text.
  async verifyNameLinks(): Promise<void> {
    const allNameEntryContainers = this.nameText.locator("span");

    for (const expectedName of ItemMetadataPage.EXPECTED_NAMES) {
      const { locator: nameContainer } =
        this.locatorService.getNameLocatorAndPattern(
          allNameEntryContainers,
          expectedName
        );

      const nameLink = nameContainer.getByRole("link");

      await expect(nameLink).toBeVisible();
      await expect(nameLink).toHaveText(expectedName.name);
    }
  }

  // Check if Name and Role matches expected value
  async verifyNameDataValues(): Promise<void> {
    const allNameEntryContainers = this.nameText.locator("span");

    for (const expectedName of ItemMetadataPage.EXPECTED_NAMES) {
      const { locator: nameContainer, pattern: fullExpectedPattern } =
        this.locatorService.getNameLocatorAndPattern(
          allNameEntryContainers,
          expectedName
        );

      // Verify the full text (including the non-clickable role) is present.
      await expect(nameContainer).toHaveText(fullExpectedPattern);
    }
  }

  async verifyTopicCount(): Promise<void> {
    const allTopicEntryContainers = this.topicText.locator("span");
    await expect(allTopicEntryContainers).toHaveCount(
      ItemMetadataPage.EXPECTED_SUBJECTS.length
    );
  }

  // Checks for clickable Subjects links.
  async verifyTopicLinks(): Promise<void> {
    const allTopicEntryContainers = this.topicText.locator("span");

    for (const expectedTopic of ItemMetadataPage.EXPECTED_SUBJECTS) {
      const { locator: topicContainer } = this.locatorService.getTopicLocator(
        allTopicEntryContainers,
        expectedTopic
      );

      const topicLink = topicContainer.getByRole("link");

      await expect(topicLink).toBeVisible();
      // Verify that the link itself contains the full expected text
      await expect(topicLink).toHaveText(expectedTopic);
    }
  }

  // Checks subject values
  async verifyTopicDataValues(): Promise<void> {
    const allTopicEntryContainers = this.topicText.locator("span");

    for (const expectedTopic of ItemMetadataPage.EXPECTED_SUBJECTS) {
      const { locator: topicContainer, pattern: fullExpectedPattern } =
        this.locatorService.getTopicLocator(
          allTopicEntryContainers,
          expectedTopic
        );

      // Verify the container's full visible text matches the expected value.
      // Since there is only one link inside the span, this confirms structure and value.
      await expect(topicContainer).toHaveText(fullExpectedPattern);
    }
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
