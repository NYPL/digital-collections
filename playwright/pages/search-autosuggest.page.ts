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
  static readonly BOUNDARY_QUERY = "far";
  static readonly SHORT_QUERY = "fa";

  constructor(page: Page) {
    super(page);

    const searchContainer = this.page.getByRole("search", {
      name: /search digital collections/i,
    });

    this.searchBar = searchContainer.getByRole("combobox");
    this.searchButton = this.page.getByRole("button", {
      name: "Search",
      exact: true,
    });

    // Unscoped page-level listbox locator handles dynamic scrolldown rendering outside the search div
    this.suggestionsListbox = this.page.getByRole("listbox");
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

    // Make sure the first suggestion is selected and committed to the DOM before pressing Enter
    await expect(this.allOptions.first()).toHaveAttribute(
      "aria-selected",
      "true"
    );
    const title = (await this.firstOption.innerText()).trim();

    // Downshift combobox interaction: 1st Enter commits option
    await this.pressEnter();

    // 2nd Enter submits form, this is required by Chakra UX
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
    await expect(this.page).toHaveURL(/\/search\/index\?q=/);

    await expect(
      this.page
        .getByRole("heading", { name: /Displaying \d+-\d+ of \d+/ })
        .filter({ hasText: `results for "${expectedQuery}"` })
    ).toBeVisible();
  }
}
