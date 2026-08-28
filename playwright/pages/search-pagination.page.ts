import SearchPage from "./search.page";
import { expect, Locator, Page, Response } from "@playwright/test";

export class PaginationPage extends SearchPage {
  static readonly COLLECTION_WITH_200_PLUS_ITEMS_URL: string =
    "/collections/TODO-REPLACE-WITH-REAL-UUID";
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

  async waitForRscNav(paramName: string, value: string): Promise<Response> {
    return await this.page.waitForResponse(
      (resp) =>
        resp.request().headers()["rsc"] === "1" &&
        new URL(resp.url()).searchParams.get(paramName) === value
    );
  }

  async goToPageNumber(
    pageNumber: number,
    expectedPerPage: string
  ): Promise<void> {
    const [response] = await Promise.all([
      this.waitForRscNav("page", pageNumber.toString()),
      this.pageLink(pageNumber).click({ force: true }),
    ]);
    expect(response.ok()).toBeTruthy();
    expect(new URL(response.url()).searchParams.get("perPage")).toBe(
      expectedPerPage
    );
  }

  async goToPreviousPage(expectedPerPage: string): Promise<void> {
    const [response] = await Promise.all([
      this.page.waitForResponse(
        (resp) => resp.request().headers()["rsc"] === "1"
      ),
      this.previousPageLink.click({ force: true }),
    ]);
    expect(response.ok()).toBeTruthy();
    expect(new URL(response.url()).searchParams.get("perPage")).toBe(
      expectedPerPage
    );
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

  async verifyUrlContainsParam(
    param: string,
    value: string | number
  ): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${param}=${value}`));
  }

  async verifyPerPageMenuText(value: number): Promise<void> {
    await expect(this.perPageMenuButton).toHaveAccessibleName(
      `Results per page: ${value}`
    );
  }

  async verifyPerPageMenuHidden(): Promise<void> {
    await expect(this.perPageMenuButton).toBeHidden();
  }
}
