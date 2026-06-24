import { Locator, Page, expect } from "@playwright/test";

export default class SearchPage {
  readonly page: Page;
  readonly searchKeyword: string;
  readonly searchBar: Locator;
  readonly searchButton: Locator;

  // search results
  static searchResultsUrl: string = "/search/index?q=map%20of%20scandinavia";
  static largeResultsUrl: string = "/search/index?q=bridge";
  readonly resultsHeading: Locator;
  readonly firstItemResult: Locator;
  readonly firstKeywordResult: Locator;

  // search result filters
  readonly refineHeading: Locator;
  readonly topicFilter: Locator;
  readonly topicOption: Locator;
  readonly topicSelected: Locator;
  readonly nameFilter: Locator;
  readonly nameOption: Locator;
  readonly nameSelected: Locator;
  readonly collectionFilter: Locator;
  readonly collectionOption: Locator;
  readonly collectionSelected: Locator;
  readonly placeFilter: Locator;
  readonly placeOption: Locator;
  readonly placeSelected: Locator;
  readonly genreFilter: Locator;
  readonly genreOption: Locator;
  readonly genreSelected: Locator;
  readonly publisherFilter: Locator;
  readonly publisherOption: Locator;
  readonly publisherSelected: Locator;
  readonly divisionFilter: Locator;
  readonly divisionOption: Locator;
  readonly divisionSelected: Locator;
  readonly typeFilter: Locator;
  readonly typeOption: Locator;
  readonly typeSelected: Locator;
  readonly startYear: Locator;
  readonly endYear: Locator;
  readonly applyDates: Locator;
  readonly availablePublicDomain: Locator;
  readonly availableOnline: Locator;
  readonly availableOnsite: Locator;
  readonly showFilters: Locator;
  readonly hideFilters: Locator;
  readonly applyFilterButton: Locator;
  readonly clearFilterButton: Locator;
  readonly clearNameFilterApplied: Locator;
  readonly clearTopicFilterApplied: Locator;
  readonly clearPublisherFilterApplied: Locator;
  readonly clearAllFilters: Locator;

  // sort search results
  readonly sortButton: Locator;
  readonly sortByRelevance: Locator;
  readonly sortByRelevanceSelected: Locator;
  readonly sortByNewest: Locator;
  readonly sortByNewestSelected: Locator;
  readonly sortByOldest: Locator;
  readonly sortByOldestSelected: Locator;
  readonly sortByAlpha: Locator;
  readonly sortByAlphaSelected: Locator;
  readonly sortByReverseAlpha: Locator;
  readonly sortByReverseAlphaSelected: Locator;
  readonly sortByCollections: Locator;
  readonly sortByCollectionsSelected: Locator;
  readonly sortByItems: Locator;
  readonly sortByItemsSelected: Locator;

  // toggle grid/list views
  readonly gridViewButton: Locator;
  readonly listViewButton: Locator;
  readonly allCards: Locator;

  constructor(page: Page) {
    this.page = page;

    // replace with homepage locators
    this.searchKeyword = "map of scandinavia";
    this.searchBar = this.page.getByPlaceholder(/search/i);
    this.searchButton = this.page.locator("#searchbar-button-searchbar");

    // search results
    this.resultsHeading = this.page.getByRole("heading", {
      name: new RegExp(
        `^Displaying \\d+-\\d+ of \\d+ results for "${this.searchKeyword}"$`
      ),
    });
    this.firstItemResult = page.locator("a[href*='/items/']").first();
    this.firstKeywordResult = page
      .getByRole("link", { name: this.searchKeyword })
      .first();

    // search result filters
    this.refineHeading = this.page.getByRole("heading", {
      name: "Refine your search",
    });

    this.topicFilter = this.page.getByRole("button", { name: "Topic" });
    this.topicOption = this.page
      .getByLabel("topic filter options")
      .getByText("Maps in education", { exact: true });
    this.topicSelected = this.page
      .getByRole("button", { name: "Select topic" })
      .getByText("Topic: Maps in education");

    this.nameFilter = this.page.getByRole("button", { name: "Name" });
    this.nameOption = this.page
      .getByLabel("name filter options")
      .getByText("Sheldonian Theatre", { exact: true });
    this.nameSelected = this.page.getByText("Name: Sheldonian Theatre", {
      exact: true,
    });
    this.collectionFilter = this.page.getByRole("button", {
      name: "Collection",
    });
    this.collectionOption = this.page
      .getByLabel("collection filter options")
      .getByText("Portolan atlas");

    // The selected collection-filter check below currently uses a fuzzy match
    // because the collection UUID is appended to the
    // collectionSelected display text, which is visible to users when
    // collections have short titles. (DR-3838)

    this.collectionSelected = this.page.getByText("Collection: Portolan atlas");
    this.placeFilter = this.page.getByRole("button", { name: "Place" });
    this.placeOption = this.page
      .getByLabel("place filter options")
      .getByText("England", { exact: true });
    this.placeSelected = this.page.getByText("Place: England", { exact: true });
    this.genreFilter = this.page.getByRole("button", { name: "Genre" });
    this.genreOption = this.page
      .getByLabel("genre filter options")
      .getByText("Maps", { exact: true });
    this.genreSelected = this.page.getByText("Genre: Maps", { exact: true });
    this.publisherFilter = this.page.getByRole("button", { name: "Publisher" });
    this.publisherOption = this.page
      .getByLabel("publisher filter options")
      .getByText("Printed at the Theater,", { exact: true });
    this.publisherSelected = this.page.getByText(
      "Publisher: Printed at the Theater,",
      { exact: true }
    );
    this.divisionFilter = this.page.getByRole("button", { name: "Division" });
    this.divisionOption = this.page
      .getByLabel("division filter options")
      .getByText("Lionel Pincus and Princess Firyal Map Division", {
        exact: true,
      });
    this.divisionSelected = this.page.getByText(
      "Division: Lionel Pincus and Princess Firyal Map Division",
      { exact: true }
    );
    this.typeFilter = this.page.getByRole("button", { name: "Type" });
    this.typeOption = this.page
      .getByLabel("type filter options")
      .getByText("Cartographic", { exact: true });
    this.typeSelected = this.page.getByText("Type: Cartographic", {
      exact: true,
    });
    this.startYear = this.page.getByRole("textbox", { name: "Start year" });
    this.endYear = this.page.getByRole("textbox", { name: "End year" });
    this.applyDates = this.page.getByRole("button", { name: "Apply dates" });
    this.availablePublicDomain = this.page
      .locator("label")
      .filter({ hasText: "Public domain" });
    this.availableOnline = this.page
      .locator("label")
      .filter({ hasText: "Available online" });
    this.availableOnsite = this.page
      .locator("label")
      .filter({ hasText: "Contains on-site materials" });
    this.showFilters = this.page.getByRole("button", {
      name: "See all filter options",
    });
    this.hideFilters = this.page.getByRole("button", {
      name: "Fewer filter options",
    });
    this.applyFilterButton = this.page.getByRole("button", {
      name: "Apply",
      exact: true,
    });
    this.clearFilterButton = this.page.getByRole("button", {
      name: "Clear filter",
      exact: true,
    });
    this.clearNameFilterApplied = this.page.getByRole("button", {
      name: "Sheldonian Theatre, click to remove filter",
    });
    this.clearPublisherFilterApplied = this.page.getByRole("button", {
      name: "Printed at the Theater,, click to remove filter",
    });
    this.clearAllFilters = this.page
      .locator("#search-filter-tags")
      .getByRole("button", { name: "Clear filters" });

    // sort search results
    this.sortButton = this.page.getByRole("button", {
      name: /^Sort by:/,
    });
    this.sortByRelevance = this.page.getByText("Relevance", {
      exact: true,
    });
    this.sortByRelevanceSelected = this.page.getByRole("button", {
      name: "Sort by: Relevance",
    });
    this.sortByNewest = this.page.getByText("Newest to oldest", {
      exact: true,
    });
    this.sortByNewestSelected = this.page.getByRole("button", {
      name: "Sort by: Newest to oldest",
    });
    this.sortByOldest = this.page.getByText("Oldest to newest", {
      exact: true,
    });
    this.sortByOldestSelected = this.page.getByRole("button", {
      name: "Sort by: Oldest to newest",
    });
    this.sortByAlpha = this.page.getByText("Title A to Z", {
      exact: true,
    });
    this.sortByAlphaSelected = this.page.getByRole("button", {
      name: "Sort by: Title A to Z",
    });
    this.sortByReverseAlpha = this.page.getByText("Title Z to A", {
      exact: true,
    });
    this.sortByReverseAlphaSelected = this.page.getByRole("button", {
      name: "Sort by: Title Z to A",
    });
    this.sortByCollections = this.page.getByText("Collections first", {
      exact: true,
    });
    this.sortByCollectionsSelected = this.page.getByRole("button", {
      name: "Sort by: Collections first",
    });
    this.sortByItems = this.page.getByText("Items first", { exact: true });
    this.sortByItemsSelected = this.page.getByRole("button", {
      name: "Sort by: Items first",
    });

    // // just using locators
    // this.gridViewButton = this.page.locator('button:has(#grid-menu-icon)');
    // this.listViewButton = this.page.locator('button:has(#list-menu-icon)');
    // this.allCards = this.page.getByTestId("ds-card");

    // more playwright-y
    this.gridViewButton = this.page
      .getByRole("button", { name: /grid/i }) // Matches "Grid View", "Grid", "Grid images", etc.
      .filter({ has: this.page.locator("#grid-menu-icon") });
    this.listViewButton = this.page
      .getByRole("button", { name: /list/i })
      .filter({ has: this.page.locator("#list-menu-icon") });
    this.allCards = this.page.getByTestId("ds-card");
  }

  async loadPage(gotoPage: string): Promise<void> {
    await this.page.goto(gotoPage);
  }

  async filterSearchResults(): Promise<void> {
    // filters a drop-down (Name) in the first row
    await expect(this.nameFilter).toBeVisible();
    await this.nameFilter.click();
    await expect(this.nameOption).toBeVisible();
    await this.nameOption.click();
    await expect(this.applyFilterButton).toBeVisible();
    await this.applyFilterButton.click();
    await expect(this.nameSelected).toBeVisible();

    // filters a drop-down (Publisher) in the second row
    if (await this.showFilters.isVisible()) {
      await expect(this.showFilters).toBeVisible();
      await this.showFilters.click();
    }

    await expect(this.publisherFilter).toBeVisible();
    await this.publisherFilter.click();
    await expect(this.publisherOption).toBeVisible();
    await this.publisherOption.click();
    await expect(this.applyFilterButton).toBeVisible();
    await this.applyFilterButton.click();
    await expect(this.publisherSelected).toBeVisible();
  }

  async toggleView(viewType: "grid" | "list"): Promise<void> {
    const targetBtn =
      viewType === "list" ? this.listViewButton : this.gridViewButton;
    const otherBtn =
      viewType === "list" ? this.gridViewButton : this.listViewButton;

    await expect(targetBtn).toBeVisible();
    await targetBtn.click({ force: true });

    // Verify the button is highlighted
    await expect(targetBtn).toHaveAttribute("aria-pressed", "true");
    await expect(otherBtn).toHaveAttribute("aria-pressed", "false");
  }

  async verifyLayout(viewType: "grid" | "list"): Promise<void> {
    const card1 = this.allCards.first();
    const card2 = this.allCards.nth(1);

    // Wait for at least one card to be visible before measuring
    await expect(card1).toBeVisible();

    const box1 = await card1.boundingBox();
    const box2 = await card2.boundingBox();

    if (box1 && box2) {
      if (viewType === "grid") {
        // Grid: Cards share the same 'y' (top) coordinate
        expect(box1.y).toBeCloseTo(box2.y, 1);
        expect(box1.x).toBeLessThan(box2.x);
      } else {
        // List: Card 2 is displayed below Card 1
        expect(box2.y).toBeGreaterThan(box1.y + box1.height);
        // Cards align on the left 'x' coordinate
        expect(box1.x).toBeCloseTo(box2.x, 1);
      }
    }
  }

  async verifyMultiRowLayout(viewType: "grid" | "list"): Promise<void> {
    const card1 = this.allCards.nth(0); // Box 1
    const card4 = this.allCards.nth(3); // The Row/Column Indicator
    const card5 = this.allCards.nth(4); // The Wrap Indicator

    const box1 = await card1.boundingBox();
    const box4 = await card4.boundingBox();
    const box5 = await card5.boundingBox();

    if (box1 && box4 && box5) {
      if (viewType === "grid") {
        // Card 4 shares same row as Card 1
        expect(box4.y).toBeCloseTo(box1.y, 5);
        // Card 5 must wrap back to same column as Card 1
        expect(box5.x).toBeCloseTo(box1.x, 5);
        // Card 5 is in row below Card 4
        expect(box5.y).toBeGreaterThan(box4.y);
      } else {
        // Card 4 shares same column as Card 1
        expect(box4.x).toBeCloseTo(box1.x, 5);
        // Card 5 shares same column as Card 4
        expect(box5.x).toBeCloseTo(box1.x, 5);
        // Cards 1, 4 and 5 are sequentially below each other
        expect(box4.y).toBeGreaterThan(box1.y);
        expect(box5.y).toBeGreaterThan(box4.y);
      }
    }
  }

  async verifyLayoutSearch(expectedView: "grid" | "list") {
    await this.searchBar.clear();
    await this.searchBar.fill("forest");
    await this.searchButton.click();

    await this.allCards.first().waitFor({ state: "visible" });
    await this.verifyLayout(expectedView);
  }

  async verifyLayoutReloadState(expectedView: "grid" | "list") {
    await this.page.reload();
    await this.page.waitForLoadState("domcontentloaded");

    await this.verifyLayout(expectedView);
  }
}
