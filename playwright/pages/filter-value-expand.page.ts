import SearchPage from "./search.page";
import { expect, Locator } from "@playwright/test";

export class FilterValueExpandedPage extends SearchPage {
  readonly viewAllNamesButton: Locator;
  readonly valueExpandedModal: Locator;

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
}
