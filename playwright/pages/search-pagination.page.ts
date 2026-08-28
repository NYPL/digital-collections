import SearchPage from "./search.page";
import { expect, Locator, Page, Response } from "@playwright/test";

export class PaginationPage extends SearchPage {
  static readonly COLLECTION_WITH_200_PLUS_ITEMS_URL: string =
    "/collections/80fa1460-c52f-012f-be77-58d385a7bc34";
  static readonly COLLECTIONS_LANDING_URL: string = "/collections";

  // --- LOCATORS ---
  readonly perPageMenuButton: Locator;
  readonly paginationNav: Locator;
  readonly previousPageLink: Locator;
  readonly nextPageLink: Locator;
  readonly currentPageLink: Locator;
  readonly allCollectionCards: Locator;
  readonly collectionStructureHeading: Locator;

  constructor(page: Page) {
    super(page);

    this.perPageMenuButton = this.page
      .locator("#results-per-page-menu")
      .first()
      .getByRole("button");
    this.paginationNav = this.page.getByTestId("ds-pagination");
    this.previousPageLink = this.page.getByRole("link", {
      name: "Previous page",
    });
    this.nextPageLink = this.page.getByRole("link", { name: "Next page" });
    this.currentPageLink = this.paginationNav.locator('a[aria-current="page"]');
    this.allCollectionCards = this.page.getByTestId("ds-card");
    this.collectionStructureHeading = this.page.getByRole("heading", {
      name: "Collection structure",
    });
  }

  // --- ACTIONS ---

  async loadPage(gotoPage: string): Promise<void> {
    await this.page.goto(gotoPage);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async loadWithLocalStorage(
    gotoPage: string,
    key: string,
    value: string
  ): Promise<void> {
    await this.page.addInitScript(
      ([k, v]) => localStorage.setItem(k, v),
      [key, value]
    );
    await this.loadPage(gotoPage);
  }

  async selectPerPage(count: number | string): Promise<void> {
    await this.perPageMenuButton.click();
    await this.page
      .getByRole("menuitem", { name: count.toString(), exact: true })
      .first()
      .click();
  }

  pageLink(pageNumber: number): Locator {
    return this.page.getByRole("link", { name: `Page ${pageNumber}` });
  }

  async goToPageNumber(pageNumber: number): Promise<void> {
    await this.pageLink(pageNumber).click({ force: true });
  }

  async goToPreviousPage(): Promise<void> {
    await this.previousPageLink.click({ force: true });
  }

  async clickFirstCollectionCard(): Promise<void> {
    const firstCard = this.allCollectionCards.first();
    await expect(firstCard).toBeVisible();
    await firstCard.getByTestId("ds-cardLinkOverlay").click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  // --- ASSERTIONS & STATE CHECKS ---

  async verifyFirstCardVisible(): Promise<void> {
    await expect(this.allCollectionCards.first()).toBeVisible();
  }

  async verifyCollectionCardCountLessThanOrEqual(
    maxCount: number
  ): Promise<void> {
    const count = await this.allCollectionCards.count();
    expect(count).toBeLessThanOrEqual(maxCount);
  }

  async verifyPerPageMenuText(value: number): Promise<void> {
    await expect(this.perPageMenuButton).toHaveAccessibleName(
      `Results per page: ${value}`
    );
  }

  async verifyPerPageMenuHidden(): Promise<void> {
    await expect(this.perPageMenuButton).toBeHidden();
  }

  /**
   * Checks for route-transition offset bugs using soft assertions.
   * If Page 1 fails (e.g. falls back to 48), execution continues onto Page 2
   * so both failures (e.g. page 2 starts at 96, thus dropping 49-95) can be
   * registered in a single test run.
   */

  async verifyCollectionPaginationSync(
    collectionUrl: string,
    perPage: number = SearchPage.PER_PAGE.EXPANDED
  ): Promise<void> {
    const secondPageStart = perPage + 1;
    const secondPageEnd = perPage * 2;

    await this.loadPage(collectionUrl);

    // Page 1 Check
    await expect
      .soft(this.resultsHeadingGeneric)
      .toHaveText(new RegExp(`Displaying 1-${perPage} of`));
    await expect.soft(this.allCollectionCards).toHaveCount(perPage);

    // Page 2 Check
    await this.goToPageNumber(2);
    await expect
      .soft(this.resultsHeadingGeneric)
      .toHaveText(
        new RegExp(`Displaying ${secondPageStart}-${secondPageEnd} of`)
      );
    await expect.soft(this.allCollectionCards).toHaveCount(perPage);
  }
}
