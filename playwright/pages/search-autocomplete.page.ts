import SearchPage from "./search.page";
import { expect, Locator, Page } from "@playwright/test";

export class SearchAutosuggestPage extends SearchPage {
  readonly searchBar: Locator;
  readonly searchButton: Locator;
  readonly suggestionsListbox: Locator;
  readonly firstOption: Locator;
  readonly allOptions: Locator;
  readonly pageBody: Locator;

  static readonly SUGGEST_QUERY = "farm";
  static readonly SHORT_QUERY = "fa";

  constructor(page: Page) {
    super(page);

    const searchContainer = this.page.getByRole("search", {
      name: /search digital collections/i,
    });

    this.searchBar = searchContainer.getByRole("combobox");
    this.searchButton = searchContainer.getByRole("button", {
      name: /search/i,
    });

    this.suggestionsListbox = searchContainer.getByRole("listbox");
    this.firstOption = this.suggestionsListbox.getByRole("option").first();
    this.allOptions = this.suggestionsListbox.getByRole("option");
    this.pageBody = this.page.locator("body");
  }

  // UI Actions

  async typeQuery(query: string) {
    await this.searchBar.fill(query);
  }

  async typeAndWaitForSuggestions(query: string) {
    await this.typeQuery(query);
    await this.verifyDropdownVisible();
  }

  async pressArrowDown() {
    await this.searchBar.press("ArrowDown");
  }

  async pressArrowUp() {
    await this.searchBar.press("ArrowUp");
  }

  async pressEnter() {
    await this.searchBar.press("Enter");
  }

  async pressEscape() {
    await this.searchBar.press("Escape");
  }

  async submitSearch() {
    await this.searchButton.click();
  }

  async selectFirstSuggestion(): Promise<string> {
    const title = (await this.firstOption.innerText()).trim();
    await this.firstOption.click();
    return title;
  }

  async selectFirstSuggestionViaKeyboard(): Promise<string> {
    await this.pressArrowDown();
    const title = (await this.firstOption.innerText()).trim();
    await this.pressEnter();
    return title;
  }

  async dismissByClickingOutside() {
    await this.pageBody.click({ position: { x: 0, y: 0 } });
  }

  // Verifications
  async verifySearchBarVisible() {
    await expect(this.searchBar).toBeVisible();
  }

  async verifyDropdownVisible() {
    await expect(this.suggestionsListbox).toBeVisible();
  }

  async verifyDropdownNotVisible() {
    await expect(this.suggestionsListbox).not.toBeVisible();
  }

  async verifyFirstOptionVisible() {
    await expect(this.firstOption).toBeVisible();
  }

  async verifyOptionSelectedAtIndex(index: number) {
    await expect(this.allOptions.nth(index)).toHaveAttribute(
      "aria-selected",
      "true"
    );
  }

  async verifyNavigatedToSearchResults(expectedQuery: string) {
    await this.page.waitForURL(/\/search\/index\?q=/);
    const actualQuery = new URL(this.page.url()).searchParams.get("q");
    expect(actualQuery).toBe(expectedQuery);
  }
}
