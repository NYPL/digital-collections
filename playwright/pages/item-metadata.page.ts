import { Locator, Page, expect } from "@playwright/test";
import { getExactByRole } from "../utils/locatorHelpers";

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
  readonly collectionSelected: Locator;
  readonly placeFilter: Locator;
  readonly dataSourceHeading: Locator;
  readonly dataSourceLink: Locator;

  // METADATA:
  // Data Source link to catalog (optional)
  // Item Data heading (req)

  // Title (req)
  // Collection (req)???
  // Dates/Origin heading
  // Library location’s heading and text (req)
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

    // replace with item page locators
    // check item breadcrumb

    //data-source:
    this.dataSourceHeading = getExactByRole(
      this.page,
      "heading",
      "Data source:"
    );
    this.dataSourceLink = getExactByRole(this.page, "link", "view in catalog");

    // ARIA: (check text and link in spec?)
    // - link "view in catalog":
    //   - /url: link://https://www.nypl.org/research/research-catalog/bib/b14924644
    //   - text: Research Catalog

    // replace with item metadata

    // this.itemDataHeader = this.page.getByRole('heading', { name: 'Item data', exact: true });
    this.itemDataHeader = getExactByRole(this.page, "heading", "Item data");
  }
  async loadPage(gotoPage: string): Promise<void> {
    await this.page.goto(gotoPage);
  }
}
