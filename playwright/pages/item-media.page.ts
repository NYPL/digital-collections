import { Locator, Page, expect } from "@playwright/test";

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

  static itemMediaURL: string = "/items/4387c9f0-c53c-012f-9924-58d385a7bc34";

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
  }

  //  Verify the media viewer loads using the most stable locator (the Heading).
  async verifyMainImageLoads(): Promise<void> {
    // 1. Wait for the stable, accessible heading (The definitive structural check)
    // This uses the long timeout set in the spec file.
    await this.viewerHeading.waitFor({ state: "visible" });

    // 2. Final check on the actual rendering canvas.
    // await expect(this.mainCanvas).toBeVisible();
  }
}
