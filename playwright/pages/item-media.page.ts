import { Locator, Page, expect } from "@playwright/test";
import { IMAGE_UUID } from "../utils/mediaData";

export default class ItemMediaPage {
  readonly page: Page;

  // Structural locators
  readonly viewerHeading: Locator;

  // Image Control Locators (Unique to IMAGE viewer mode)
  readonly zoomInButton: Locator;
  readonly rotateRightButton: Locator;
  readonly fullScreenButton: Locator;

  // Video/Audio Control Locators (Unique to VIDEO viewer mode)
  readonly playButton: Locator;

  static get itemMediaURL(): string {
    return `/items/${IMAGE_UUID}`;
  }

  constructor(page: Page) {
    this.page = page;

    // ANCHOR: The most stable, accessible element that appears when the UV is ready.
    this.viewerHeading = this.page.getByRole("heading", {
      name: "Media Viewer",
      level: 2,
    });

    // CONTROLS: Standard accessible locators for image-specific controls
    this.zoomInButton = page.getByRole("button", { name: "Zoom In" });
    this.rotateRightButton = page.getByRole("button", { name: "Rotate Right" });
    this.fullScreenButton = page.getByRole("button", { name: "Full Screen" });

    //  VIDEO CONTROL (we want to confirm is NOT visible on image pages)
    this.playButton = page.getByRole("button", { name: "Play" });
  }

  async loadPage(gotoPage: string): Promise<void> {
    await this.page.goto(gotoPage);
    await this.viewerHeading.waitFor({ state: "visible" });
  }

  async verifyViewerIsReady(): Promise<void> {
    // this will be called in spec to confirm the stability step succeeded.
    await expect(this.viewerHeading).toBeVisible();
  }
}
