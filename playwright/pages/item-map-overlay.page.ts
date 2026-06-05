import { expect, Locator, Page } from "@playwright/test";

export class ItemMapOverlayPage {
  readonly page: Page;

  static readonly MAP1_UUID = "8b2b3160-c5d5-012f-d95c-58d385a7bc34";
  static readonly MAP2_UUID = "25a47180-c55f-012f-3759-58d385a7bc34";

  readonly mapToggleButton: Locator;
  readonly mapViewerContainer: Locator;
  readonly zoomInButton: Locator;
  readonly zoomOutButton: Locator;

  static getItemURL(uuid: string): string {
    return `/items/${uuid}`;
  }

  constructor(page: Page) {
    this.page = page;

    const dataSourceHeading = this.page.getByRole("heading", {
      name: /data source/i,
    });
    // find button in parent (data source) that contains "map"
    this.mapToggleButton = dataSourceHeading
      .locator("..")
      .getByRole("button", { name: /map/i });

    // this.mapViewerContainer = this.page.getByRole("region", { name: /map interactive/i });
    // this.zoomInButton = this.mapViewerContainer.getByRole("button", { name: /zoom in/i });
    // this.zoomOutButton = this.mapViewerContainer.getByRole("button", { name: /zoom out/i });
  }

  async visitItem(uuid: string): Promise<void> {
    await this.page.goto(ItemMapOverlayPage.getItemURL(uuid));
  }

  async toggleMapView(): Promise<void> {
    await this.mapToggleButton.waitFor({ state: "visible" });
    await this.mapToggleButton.click();
  }

  // New view-on-map button can be clicked
  async verifyMapIsClosedState(): Promise<void> {
    await expect(this.page).not.toHaveURL(/\?viewAs=map/);
    await expect(this.mapToggleButton).toBeVisible();
    await expect(this.mapToggleButton).toHaveText(/view on map/i);
    // await expect(this.mapViewerContainer).not.toBeVisible();
  }

  // Close map button appears when map is opened
  async verifyMapIsOpenState(): Promise<void> {
    await expect(this.page).toHaveURL(/\?viewAs=map/);
    await expect(this.mapToggleButton).toBeVisible();
    await expect(this.mapToggleButton).toHaveText(/close map/i);
    // await expect(this.mapViewerContainer).toBeVisible();
  }

  // verify map controls
  async verifyMapControlsAvailable(): Promise<void> {
    // await expect(this.zoomInButton).toBeVisible();
    // await expect(this.zoomOutButton).toBeVisible();
  }
}
