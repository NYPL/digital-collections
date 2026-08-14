import { test } from "../base";
import { SearchAutosuggestPage } from "../pages/search-autocomplete.page";

test.describe("Search autosuggest dropdown", () => {
  let autosuggestPage: SearchAutosuggestPage;

  test.beforeEach(async ({ page }) => {
    autosuggestPage = new SearchAutosuggestPage(page);
    await autosuggestPage.loadPage("/about");
    await autosuggestPage.verifySearchBarVisible();
  });

  test("does not show dropdown for fewer than 3 characters", async () => {
    await autosuggestPage.typeQuery(SearchAutosuggestPage.SHORT_QUERY);
    await autosuggestPage.verifyDropdownNotVisible();
  });

  test("shows dropdown after typing exactly 3 characters", async () => {
    await autosuggestPage.typeQuery(SearchAutosuggestPage.BOUNDARY_QUERY);
    await autosuggestPage.verifyDropdownVisible();
  });

  test("shows dropdown after typing 3+ characters", async () => {
    await autosuggestPage.typeAndWaitForSuggestions(
      SearchAutosuggestPage.SUGGEST_QUERY
    );
    await autosuggestPage.verifyFirstOptionVisible();
  });

  test("clicking a suggestion navigates to search results", async () => {
    await autosuggestPage.typeAndWaitForSuggestions(
      SearchAutosuggestPage.SUGGEST_QUERY
    );
    const expectedTitle = await autosuggestPage.selectFirstSuggestion();
    await autosuggestPage.verifyNavigatedToSearchResults(expectedTitle);
  });

  test("ArrowDown and ArrowUp navigate through suggestions", async () => {
    await autosuggestPage.typeAndWaitForSuggestions(
      SearchAutosuggestPage.SUGGEST_QUERY
    );

    await autosuggestPage.pressArrowDown();
    await autosuggestPage.verifyOptionSelectedAtIndex(0);

    await autosuggestPage.pressArrowDown();
    await autosuggestPage.verifyOptionSelectedAtIndex(1);

    await autosuggestPage.pressArrowUp();
    await autosuggestPage.verifyOptionSelectedAtIndex(0);
  });

  test("Enter selects the keyboard-highlighted suggestion", async () => {
    await autosuggestPage.typeAndWaitForSuggestions(
      SearchAutosuggestPage.SUGGEST_QUERY
    );
    const expectedTitle =
      await autosuggestPage.selectFirstSuggestionViaKeyboard();
    await autosuggestPage.verifyNavigatedToSearchResults(expectedTitle);
  });

  test("Escape closes the dropdown", async () => {
    await autosuggestPage.typeAndWaitForSuggestions(
      SearchAutosuggestPage.SUGGEST_QUERY
    );
    await autosuggestPage.pressEscape();
    await autosuggestPage.verifyDropdownNotVisible();
  });

  test("clicking the search button submits the typed query", async () => {
    await autosuggestPage.typeAndWaitForSuggestions(
      SearchAutosuggestPage.SUGGEST_QUERY
    );
    await autosuggestPage.submitSearch();
    await autosuggestPage.verifyNavigatedToSearchResults(
      SearchAutosuggestPage.SUGGEST_QUERY
    );
  });

  test("Enter with no suggestion highlighted submits the typed query", async () => {
    await autosuggestPage.typeAndWaitForSuggestions(
      SearchAutosuggestPage.SUGGEST_QUERY
    );
    await autosuggestPage.pressEnter();
    await autosuggestPage.verifyNavigatedToSearchResults(
      SearchAutosuggestPage.SUGGEST_QUERY
    );
  });

  test("clicking outside the search component closes the dropdown", async () => {
    await autosuggestPage.typeAndWaitForSuggestions(
      SearchAutosuggestPage.SUGGEST_QUERY
    );
    await autosuggestPage.dismissByClickingOutside();
    await autosuggestPage.verifyDropdownNotVisible();
  });
});
