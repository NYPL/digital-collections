import SearchPage from "./search.page";
import { expect, Locator, Page } from "@playwright/test";

export default class PaginationPage {
  readonly page: Page;

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
    this.page = page;
    this.perPageMenuButton = this.page.locator("#results-per-page-menu");
    this.paginationNav = this.page.getByTestId("ds-pagination");
    this.previousPageLink = this.page.getByRole("link", {
      name: "Previous page",
    });
    this.nextPageLink = this.page.getByRole("link", { name: "Next page" });
    this.currentPageLink = this.page.getByRole("link", { current: "page" });
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
  ): Promise<Page> {
    const context = await this.page
      .context()
      .browser()!
      .newContext({
        viewport: { width: 1280, height: 800 },
      });
    const newPage = await context.newPage();
    await newPage.addInitScript(
      ({ k, v }) => {
        window.localStorage.setItem(k, v);
      },
      { k: key, v: value }
    );

    await newPage.goto(gotoPage);
    return newPage;
  }

  pageLink(pageNumber: number): Locator {
    return this.page.getByRole("link", { name: `Page ${pageNumber}` });
  }

  async waitForRscNav(paramName: string, value: string) {
    return this.page.waitForResponse(
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

  async selectSubcollectionNode(
    nodeUuid: string,
    expectedPerPage: string
  ): Promise<void> {
    await expect(this.collectionStructureHeading).toBeVisible();
    const node = this.page.locator(`#${nodeUuid}`);

    const [response] = await Promise.all([
      this.waitForRscNav("perPage", expectedPerPage),
      node.click(),
    ]);
    expect(response.ok()).toBeTruthy();
    expect(decodeURIComponent(response.url())).toContain("subcollection");
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

  verifyUrlContainsParam(param: string, value: string | number): void {
    expect(this.page.url()).toContain(`${param}=${value}`);
  }

  async verifyPerPageMenuText(value: number): Promise<void> {
    await expect(this.perPageMenuButton).toHaveAccessibleName(
      `Results per page: ${value}`
    );
  }
}
