import { expect, Locator, Page } from "@playwright/test";

export default class ItemMapOverlayPage {
  readonly page: Page;

  readonly mapToggleButton: Locator;
  readonly mapViewerContainer: Locator;
  readonly mapCanvas: Locator;
  readonly zoomInButton: Locator;
  readonly zoomOutButton: Locator;
  readonly compassButton: Locator;
  readonly compassIcon: Locator;
  static readonly MAP1_UUID = "417fe160-c603-012f-4183-58d385a7bc34";

  static itemMapUrl: string = "/items/" + this.MAP1_UUID;

  constructor(page: Page) {
    this.page = page;

    const dataSourceHeading = this.page.getByRole("heading", {
      name: /data source/i,
    });

    // find button in parent (data source block) that contains "map"
    this.mapToggleButton = dataSourceHeading
      .locator("..")
      .getByRole("button", { name: /map/i });

    // map overlay UX locators
    this.mapViewerContainer = this.page.locator(".maplibregl-map");
    this.mapCanvas = this.page.locator(".maplibregl-canvas");
    this.zoomInButton = this.mapViewerContainer.getByRole("button", {
      name: "Zoom in",
    });
    this.zoomOutButton = this.mapViewerContainer.getByRole("button", {
      name: "Zoom out",
    });
    this.compassButton = this.mapViewerContainer.getByRole("button", {
      name: /drag to rotate map/i,
    });
    this.compassIcon = this.compassButton.locator(".maplibregl-ctrl-icon");
  }

  async loadPage(gotoPage: string): Promise<void> {
    // await this.page.setViewportSize({ width: 1280, height: 4000 });
    await this.page.goto(gotoPage);
  }

  async toggleMapView(): Promise<void> {
    await this.mapToggleButton.waitFor({ state: "visible" });
    await this.mapToggleButton.click();
  }

  // View-on-map button can be clicked
  async verifyMapIsClosedState(): Promise<void> {
    await expect(this.mapToggleButton).toBeVisible();
    await expect(this.mapToggleButton).toHaveText(/view on map/i);
  }

  // Close-map button appears when map is in open state
  async verifyMapIsOpenState(): Promise<void> {
    await expect(this.mapToggleButton).toBeVisible();
    await expect(this.mapToggleButton).toHaveText(/close map/i);
  }

  async waitForMapReady(): Promise<void> {
    const canvasContainer = this.page.locator(".maplibregl-canvas-container");

    await expect(
      canvasContainer,
      "Map failed to reach 'interactive' state"
    ).toHaveClass(/maplibregl-interactive/, {
      timeout: 10_000,
    });
  }

  // Zoom in functions
  async verifyZoomIn(): Promise<void> {
    await this.mapViewerContainer.scrollIntoViewIfNeeded();
    await expect(this.zoomInButton).toBeVisible();

    // Keep clicking zoom-in until MapLibre reports max zoom (aria-disabled="true").
    // expect.poll re-runs the callback until it passes or the timeout elapses,
    // so there's no fixed sleep or manual attempt counter needed
    await expect
      .poll(
        async () => {
          const disabled =
            (await this.zoomInButton.getAttribute("aria-disabled")) === "true";
          if (!disabled) {
            await this.zoomInButton.click({ force: true });
          }
          return disabled;
        },
        {
          message: "zoom-in button never reached max zoom (aria-disabled=true)",
          timeout: 20_000,
          intervals: [500, 1000, 1500], // backoff between polls
        }
      )
      .toBe(true);
  }

  // Zoom out functions
  async verifyZoomOut(): Promise<void> {
    // Since test is running serially, we only need to confirm that while the maps layer
    // is fully zoomed in, a single "zoom out" click will change the "zoom-in" button back to active again

    await expect(this.zoomOutButton).toBeVisible();

    await expect(this.zoomInButton).toHaveAttribute("aria-disabled", "true");
    await this.zoomOutButton.click({ force: true });
    // the zoom-in button should now be active
    await expect(this.zoomInButton).toHaveAttribute("aria-disabled", "false");
  }
}
