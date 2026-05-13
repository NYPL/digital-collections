import SearchPage from "./search.page";
import { expect, Locator } from "@playwright/test";

export class FilterValueExpandedPage extends SearchPage {
  readonly viewAllNamesButton: Locator;
  readonly valueExpandedModal: Locator;
  readonly modalSearchInput: Locator;

  static nameResultsUrl: string = "/search/index?q=print";
  static SEARCH_STEM: string = "POS";
  static TARGET_NAME: string = "Posada, José Guadalupe, 1852-1913";

  constructor(page: any) {
    super(page);

    this.viewAllNamesButton = this.page.getByRole("button", {
      name: /view all names/i,
    });
    this.valueExpandedModal = this.page.getByRole("dialog", { name: "Names" });
    this.modalSearchInput =
      this.valueExpandedModal.getByPlaceholder(/search names/i);
  }

  async openAllNames() {
    // Open initial dropdown
    await expect(this.nameFilter).toBeVisible();
    await this.nameFilter.click();

    // click 'View all names' link that displays in the dropdown
    await expect(this.viewAllNamesButton).toBeVisible();
    await this.viewAllNamesButton.click();

    // confirm the new modal is now the active layer
    await expect(this.valueExpandedModal).toBeVisible();
  }

  async verifyPaginationPastPage10() {
    const paginationNav = this.valueExpandedModal.getByRole("navigation", {
      name: "Pagination",
    });
    const radios = this.valueExpandedModal.getByRole("radio");

    let lastRadioOldValue = await radios.last().getAttribute("value");

    // Iterate through pages 5 to 10
    for (let i = 5; i <= 10; i++) {
      const pageBtn = paginationNav.getByRole("link", {
        name: `Page ${i}`,
        exact: true,
      });
      await pageBtn.click();

      // 1. Verify pagination navigation's active state
      await expect(pageBtn).toHaveAttribute("aria-current", "page");

      // 2. Verify name refresh (concurrently with navigation)
      await expect(radios.last()).not.toHaveAttribute(lastRadioOldValue || "");
      lastRadioOldValue = await radios.last().getAttribute("value");

      // 3. Verify gap structure shifts correctly at specific pages
      if (i === 5) {
        await expect(
          paginationNav.getByRole("link", { name: "Page 2", exact: true })
        ).not.toBeVisible();
        await expect(
          paginationNav.getByRole("link", { name: "Page 4", exact: true })
        ).toBeVisible();
        await expect(
          paginationNav.getByRole("link", { name: "Page 6", exact: true })
        ).toBeVisible();
      } else if (i === 6) {
        await expect(
          paginationNav.getByRole("link", { name: "Page 4", exact: true })
        ).not.toBeVisible();
        await expect(
          paginationNav.getByRole("link", { name: "Page 5", exact: true })
        ).toBeVisible();
        await expect(
          paginationNav.getByRole("link", { name: "Page 7", exact: true })
        ).toBeVisible();
        await expect(
          paginationNav.getByRole("link", { name: "Page 8", exact: true })
        ).not.toBeVisible();
      }
    }

    // Verify page 11 appears and is that it is clickable
    const page11Btn = paginationNav.getByRole("link", {
      name: "Page 11",
      exact: true,
    });
    await expect(page11Btn).toBeVisible();
    await expect(page11Btn).toBeEnabled();
  }

  // Search inside modal
  async clearSearch() {
    await this.modalSearchInput.fill("");
  }

  async verifyAutocompleteFlow() {
    await this.clearSearch();
    const paginationNav = this.valueExpandedModal.getByRole("navigation", {
      name: "Pagination",
    });

    // Get the starting "Last Page" number (e.g., 1167)
    const getLastPageNumber = async () => {
      const lastPageLink = paginationNav
        .getByRole("link", { name: /Page \d+/ })
        .last();
      const label = await lastPageLink.innerText(); // e.g., "Page 1167"
      return parseInt(label.replace("Page ", ""), 10);
    };

    const initialLastPage = await getLastPageNumber();
    let previousLastPage = initialLastPage;

    // Loop through each character in the stem (P, O, S)
    for (const char of FilterValueExpandedPage.SEARCH_STEM) {
      await this.modalSearchInput.press(char);
      await this.page.waitForTimeout(400); // Give the pagination a moment to rebuild

      const currentLastPage = await getLastPageNumber();

      // Total number of pages (ie "Last Page" number) should drop
      if (char === FilterValueExpandedPage.SEARCH_STEM[0]) {
        expect(currentLastPage).toBeLessThan(initialLastPage);
      }
      expect(currentLastPage).toBeLessThanOrEqual(previousLastPage);

      previousLastPage = currentLastPage;
    }

    // Full "pos" stem should return a single name in this case "Posada"
    const target = this.valueExpandedModal.getByText(
      FilterValueExpandedPage.TARGET_NAME,
      { exact: true }
    );
    await expect(target).toBeVisible();
  }

  // async verifyAutocompleteFlow() {
  //   await this.clearSearch();
  //   const radios = this.valueExpandedModal.getByRole("radio");

  //   // start with 10 names (default page size)
  //   let previousCount = 10;

  //   // Loop through each character in the stem (P, O, S)
  //   for (const char of FilterValueExpandedPage.SEARCH_STEM) {
  //     await this.modalSearchInput.press(char);
  //     await this.page.waitForTimeout(200);

  //     const currentCount = await radios.count();

  //     // list should be smaller than the previous one
  //     expect(currentCount).toBeLessThanOrEqual(previousCount);
  //     previousCount = currentCount;
  //   }

  //   // NOTE: shoudn't this be comparing to the previous, not just checking for less than 10?
  //   expect(previousCount).toBeLessThan(10);

  //   const target = this.valueExpandedModal.getByText(
  //     FilterValueExpandedPage.TARGET_NAME,
  //     { exact: true }
  //   );
  //   await expect(target).toBeVisible();
  // }
}
