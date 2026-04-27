import SearchPage from "./search.page";
import { expect, Locator } from "@playwright/test";

export class FilterValueExpandedPage extends SearchPage {
  readonly viewAllNamesButton: Locator;
  readonly valueExpandedModal: Locator;
  static nameResultsUrl: string = "/search/index?q=print";

  constructor(page: any) {
    super(page);

    this.viewAllNamesButton = this.page.getByRole("button", {
      name: /view all names/i,
    });
    this.valueExpandedModal = this.page.getByRole("dialog", { name: "Names" });
  }

  async openAllNames() {
    // nameFilter inherited from the parent SearchPage
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
}
