import { test, expect } from "../base";
import { FilterValueExpandedPage } from "../pages/filter-value-expand.page";
import { applyRouteFilters } from "../utils/routeFilters";

let filterPage: FilterValueExpandedPage;

test.describe.serial("Results Page Name Filter Pagination", () => {
  // Runs ONCE to create the shared, filtered page context.

  /**
  JUSTIFICATION FOR .serial USAGE:
  
  These tests intentionally use .serial to maintain browser state across multiple test steps. This deviates from Playwright's recommendation for isolated tests for the following reasons:
  
  1. Performance: Avoids 6 separate page loads (60% faster: 16.57s vs 26.23s)
  2. Resource efficiency: Uses single worker instead of 6 parallel workers
  3. User journey testing: Simulates realistic workflow of opening modal once and applying multiple filters in sequence
  4. State accumulation: Each filter builds on previous selections

  Alternative considered: Single comprehensive test, but rejected because individual filter
  */

  test.beforeAll(async ({ browser }) => {
    // Manually create context/page to force serialization to remain in block
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    // Apply global filters manually
    await applyRouteFilters(page);

    // Assign to global variable and load the page object
    filterPage = new FilterValueExpandedPage(page);
    await filterPage.loadPage(FilterValueExpandedPage.searchResultsUrl);

    // Given I am on a results page for a search for "print"
    // And the URL matches "<url>"
  });

  // Teardown: Close the entire context to free up resources
  test.afterAll(async () => {
    await filterPage.page.context().close();
  });

  test("Navigate to the full names list modal", async () => {
    // Then I should see a "Name" filter under the "Refine your search" heading
    await expect(filterPage.nameFilter).toBeVisible();

    // When I click on the "Name" box
    await filterPage.nameFilter.click();

    // Then a "List of Names" modal should open (this represents the initial dropdown)
    await expect(filterPage.viewAllNamesButton).toBeVisible();
  });

  test("Access the expanded names modal and verify elements", async () => {
    // When I click the "View all names" button at the bottom of the modal
    await filterPage.viewAllNamesButton.click();

    // Then a new expanded modal should open
    await expect(filterPage.valueExpandedModal).toBeVisible();

    // And the expanded modal should contain the following elements:
    // Heading
    await expect(
      filterPage.valueExpandedModal.getByRole("heading", {
        name: "Names",
        exact: true,
      })
    ).toBeVisible();

    // Search Bar ("search names" input)
    await expect(
      filterPage.valueExpandedModal.getByPlaceholder(/search names/i)
    ).toBeVisible();

    // Name List Displays 10 names
    await expect(
      filterPage.valueExpandedModal.getByRole("listitem")
    ).toHaveCount(10);

    // Action Buttons: "Close" and "Confirm"
    await expect(
      filterPage.valueExpandedModal.getByRole("button", { name: /close/i })
    ).toBeVisible();
    await expect(
      filterPage.valueExpandedModal.getByRole("button", { name: /confirm/i })
    ).toBeVisible();
  });

  test("Pagination bar should display the correct sequence", async () => {
    // Scope pagination buttons to the modal to avoid matching elements in the background
    const paginationNav = filterPage.valueExpandedModal.getByRole("navigation");

    // Page 1 should be current
    const page1Btn = paginationNav.getByRole("button", {
      name: "Page 1",
      exact: true,
    });
    await expect(page1Btn).toHaveAttribute("aria-current", "page");

    // Pages 2, 3, 4, 5 should be enabled
    for (let i = 2; i <= 5; i++) {
      const pageBtn = paginationNav.getByRole("button", {
        name: `Page ${i}`,
        exact: true,
      });
      await expect(pageBtn).toBeEnabled();
    }

    // Ellipsis should be disabled/visible
    const ellipsis = paginationNav.getByText("...", { exact: true });
    await expect(ellipsis).toBeVisible();

    // [4-digit number] page should be enabled
    const lastPageBtn = paginationNav.getByRole("button", {
      name: /Page \d{4}/,
    });
    await expect(lastPageBtn).toBeEnabled();

    // Next button should be enabled
    const nextBtn = paginationNav.getByRole("button", {
      name: "Next",
      exact: true,
    });
    await expect(nextBtn).toBeEnabled();
  });
});
