import { Locator, Page, expect } from "@playwright/test";

// sets which UUID is to be used for sample record navigation
export type MetadataScenario = "DEFAULT" | "SAMPLE1" | "SAMPLE2";

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

  // Sample URL-Record Mapping
  private static readonly SCENARIOS: Record<MetadataScenario, string> = {
    DEFAULT: "8b2b3160-c5d5-012f-d95c-58d385a7bc34",
    SAMPLE1: "25a47180-c55f-012f-3759-58d385a7bc34", // Topics
    SAMPLE2: "4649be20-9890-0138-2359-2360945aaf51", // Genres
  };

  async loadScenario(scenario: MetadataScenario): Promise<void> {
    const uuid = ItemMetadataPage.SCENARIOS[scenario];
    await this.page.goto(`/items/${uuid}`);
  }

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
  readonly languageHeading: Locator;
  readonly languageText: Locator;
  readonly identifiersHeading: Locator;
  readonly identifiersText: Locator;
  readonly rightsHeading: Locator;
  readonly rightsText: Locator;
  readonly dataSourceHeading: Locator;
  readonly dataSourceLink: Locator;
  static readonly EXPECTED_TITLE_VALUE =
    "To His Excellency Sr. Henry Moore, Bart";
  static readonly EXPECTED_UUID_VALUE = "8b2b3160-c5d5-012f-d95c-58d385a7bc34";
  static readonly EXPECTED_TOPIC_UUID_VALUE =
    "27373b60-c55f-012f-b3cd-58d385a7bc34";
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
  static readonly EXPECTED_GENRES = [
    "Posters",
    "Placards (Information Artifacts)",
  ];
  static readonly EXPECTED_PHYSICAL_DESCRIPTION_VALUE =
    "Extent: 1 map ; 59 x 89 cm.";

  static readonly EXPECTED_NOTES = [
    'Content: Black/white, 20" x 30"',
    "Content: 1577340, 1577402",
  ];
  static readonly EXPECTED_LANGUAGE_VALUE = "English";
  static readonly EXPECTED_TOPIC_LINK_MAP = [
    {
      fullText: "New York (N.Y.)",
      linkCount: 1,
    },
    // Compound Structure (Multiple Links, separated by --)
    {
      fullText: "Parades & processions -- New York (State) -- New York",
      linkCount: 3,
    },
    // Another Simple line
    {
      fullText: "Memorial Day",
      linkCount: 1,
    },
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

    // Languages
    this.languageHeading = this.page.getByText("Languages", { exact: true });
    this.languageText = this.languageHeading.locator("+ p");

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

  private async getNormalizedLinesFromLocator(
    locator: Locator
  ): Promise<string[]> {
    // Playwright's innerText() converts the <br> tags into newlines (\n)
    const rawText = await locator.innerText();
    return rawText
      .split("\n")
      .map((val) => val.trim().replace(/\s+/g, " "))
      .filter((val) => val.length > 0);
  }

  async verifyGenreCount(): Promise<void> {
    const genreLinks = this.genreText.getByRole("link");
    await expect(genreLinks).toHaveCount(
      ItemMetadataPage.EXPECTED_GENRES.length
    );
  }

  async verifyGenreValues(): Promise<void> {
    const actualGenres = await this.getNormalizedLinesFromLocator(
      this.genreText
    );

    // Check expected content
    expect(actualGenres).toEqual(ItemMetadataPage.EXPECTED_GENRES);
  }

  async verifyGenreLinks(): Promise<void> {
    // Get all genre links
    const genreLinks = this.genreText.getByRole("link");

    for (let i = 0; i < ItemMetadataPage.EXPECTED_GENRES.length; i++) {
      const expectedText = ItemMetadataPage.EXPECTED_GENRES[i];
      const currentLink = genreLinks.nth(i);
      await expect(currentLink).toHaveText(expectedText);
      await expect(currentLink).toBeVisible();
    }
  }

  async verifyPhysicalDescriptionContent(): Promise<void> {
    await expect(this.physicalHeading).toBeVisible();
    await expect(this.physicalText).toContainText(
      ItemMetadataPage.EXPECTED_PHYSICAL_DESCRIPTION_VALUE
    );
  }

  async verifyNotesText(): Promise<void> {
    // Normalize whitespace and split by newline to verify each distinct note
    const actualNotes = await this.getNormalizedLinesFromLocator(
      this.notesText
    );
    expect(actualNotes).toEqual(ItemMetadataPage.EXPECTED_NOTES);
  }

  async verifyNotesCount(): Promise<void> {
    const actualNotes = await this.getNormalizedLinesFromLocator(
      this.notesText
    );
    expect(actualNotes.length).toEqual(ItemMetadataPage.EXPECTED_NOTES.length);
  }

  async verifyLanguageValues(): Promise<void> {
    await expect(this.languageHeading).toBeVisible();

    const languageLink = this.languageText.getByRole("link");
    await expect(languageLink).toBeVisible();
    await expect(languageLink).toHaveText(
      ItemMetadataPage.EXPECTED_LANGUAGE_VALUE
    );
  }

  async verifyLanguageText(): Promise<void> {
    await expect(this.languageHeading).toBeVisible();
    await expect(this.languageText).toContainText(
      ItemMetadataPage.EXPECTED_LANGUAGE_VALUE
    );
  }

  async verifyLanguageLinks(): Promise<void> {
    const languageLink = this.languageText.getByRole("link");

    // If it's visible and has the right text, Playwright has already
    // confirmed it's a functional link role.
    await expect(languageLink).toBeVisible();
    await expect(languageLink).toHaveText(
      ItemMetadataPage.EXPECTED_LANGUAGE_VALUE
    );
  }

  public async getTopicLocatorAndDelimiter(): Promise<string[]> {
    const parentContainer = this.topicText; // The <p> element
    const allLinks = parentContainer.locator("a");
    const totalLinks = await allLinks.count();

    const constructedLines: string[] = [];
    let currentLinkIndex = 0;
    let constructedLineText = "";

    while (currentLinkIndex < totalLinks) {
      const currentLink = allLinks.nth(currentLinkIndex);
      const linkText = await currentLink.textContent();

      if (linkText) {
        constructedLineText += linkText.trim();
      }

      // Check the DOM for delimiters and subject-line terminators
      const { isCompound, isFinished } = await currentLink.evaluate(
        (linkElement) => {
          const spanElement = linkElement.closest("span");
          if (!spanElement) return { isCompound: false, isFinished: true };

          let nextSibling = spanElement.nextSibling;

          // Check for Compound Subject Links Delimiter
          let isCompound = false;
          if (
            nextSibling &&
            nextSibling.nodeType === Node.TEXT_NODE &&
            nextSibling.textContent?.includes(" -- ")
          ) {
            isCompound = true;
            nextSibling = nextSibling.nextSibling;
          }

          // Check for Subject Line Ending (<br>)
          let isFinished = false;
          // Skip non-significant whitespace/text nodes
          while (nextSibling && nextSibling.nodeType !== Node.ELEMENT_NODE) {
            if (nextSibling.textContent?.trim() !== "") {
              break;
            }
            nextSibling = nextSibling.nextSibling;
          }

          // Checks for existence, ensures it's an element, and then explicitly checks the tag name for BR.
          if (
            nextSibling &&
            nextSibling.nodeType === Node.ELEMENT_NODE &&
            (nextSibling as Element).tagName === "BR"
          ) {
            isFinished = true;
          }

          return { isCompound, isFinished };
        }
      );

      if (isCompound) {
        // Line continues, append the delimiter text.
        constructedLineText += " -- ";
      }

      // Subject line is finished if the DOM has a <br> or if this is the very last link in the list.
      if (isFinished || currentLinkIndex === totalLinks - 1) {
        constructedLines.push(constructedLineText.trim());
        constructedLineText = "";
      }

      currentLinkIndex++;
    }

    return constructedLines;
  }

  async verifyTopicTotalCount(): Promise<void> {
    // Count of separate subject lines based on DOM-constructed array.
    const actualLineCount = (await this.getTopicLocatorAndDelimiter()).length;

    //  Get the expected count from the static data array.
    const expectedLineCount = ItemMetadataPage.EXPECTED_TOPIC_LINK_MAP.length;

    // Compare the reconstructed line count against the expected line count.
    // This also confirms the logic correctly identified the start/end points of each compound subject.
    expect(actualLineCount).toEqual(expectedLineCount);
  }

  async verifyTopicText(): Promise<void> {
    // This calls the internal method that runs the complex DOM traversal logic.
    const actualConstructedLines = await this.getTopicLocatorAndDelimiter();

    // Map the expected values array to just the full string values.
    const expectedData = ItemMetadataPage.EXPECTED_TOPIC_LINK_MAP.map((line) =>
      // Normalize whitespace
      line.fullText.replace(/\s+/g, " ").trim()
    );

    // Verify that the fullText values expected are showing up
    // (in their correct structure and sequence) in the DOM.
    expect(actualConstructedLines).toEqual(expectedData);
  }

  async verifyTopicLinksAreClickable(): Promise<void> {
    const allLinks = this.topicText.locator("a");
    let currentLinkIndex = 0;

    // Total count (needed for the post-loop assertion)
    let expectedTotalLinkCount = 0;

    // Loop over the clean, expected subject line data
    for (const expectedLine of ItemMetadataPage.EXPECTED_TOPIC_LINK_MAP) {
      // calculate the expected count
      expectedTotalLinkCount += expectedLine.linkCount;

      // Check each link within this single subject line
      for (let i = 0; i < expectedLine.linkCount; i++) {
        const linkLocator = allLinks.nth(currentLinkIndex);

        await expect(linkLocator).toBeVisible();
        await expect(linkLocator).toHaveAttribute("href", /https?:\/\//);

        currentLinkIndex++;
      }
    }

    // Final check for total link integrity
    const actualTotalLinksFound = await allLinks.count();
    expect(actualTotalLinksFound).toEqual(expectedTotalLinkCount);
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
