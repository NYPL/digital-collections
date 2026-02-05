import { Locator, Page } from "@playwright/test";

export default class ItemMediaPage {
  readonly page: Page;

  static readonly IMAGE_UUID = "4387c9f0-c53c-012f-9924-58d385a7bc34";
  static readonly VIDEO_UUID = "09a14bf0-0382-0131-8ec7-3c075448cc4b";

  // Store the expected content-types
  readonly expectedContentType: "IMAGE" | "VIDEO";

  //Viewer locator
  readonly viewerHeading: Locator;
  readonly downloadButton: Locator;
  readonly downloadOverlay: Locator;
  readonly downloadOptionSmall: Locator;
  readonly closeOverlayButton: Locator;
  readonly shareButton: Locator;

  // Image control locators (unique to IMAGE viewer mode)
  readonly zoomInButton: Locator;
  readonly rotateRightButton: Locator;
  readonly fullScreenButton: Locator;

  // Video/Audio control locators (unique to VIDEO/AUDIO viewer mode)
  readonly playButton: Locator;

  static getItemURL(uuid: string): string {
    return `/items/${uuid}`;
  }

  constructor(page: Page, expectedType: "IMAGE" | "VIDEO") {
    this.page = page;
    this.expectedContentType = expectedType;

    this.viewerHeading = this.page.getByRole("heading", {
      name: "Media Viewer",
      level: 2,
    });

    this.zoomInButton = page.getByRole("button", { name: "Zoom In" });
    this.rotateRightButton = page.getByRole("button", { name: "Rotate Right" });
    this.fullScreenButton = page.getByRole("button", { name: "Full Screen" });
    this.playButton = page.locator("button").filter({ hasText: /^Play$/ });

    // Download options
    this.downloadButton = page.locator("#download-btn");
    this.downloadButton = page.locator("#download-btn");
    this.downloadOverlay = page.locator("div.overlay.download");
    this.downloadOptionSmall = this.downloadOverlay.getByRole("button", {
      name: /Small/i,
    });
    this.closeOverlayButton = this.downloadOverlay.getByRole("button", {
      name: "Close",
    });

    // Share options
    this.shareButton = page.getByRole("button", { name: "Share" });
  }

  async loadPage(uuid: string): Promise<void> {
    const gotoPage = `/items/${uuid}`;
    await this.page.goto(gotoPage);
  }

  // Waits for the correct viewer type (Image or Video) to stabilize in the DOM.
  async getViewerControls(): Promise<void> {
    // check for VIDEO content
    if (this.expectedContentType === "VIDEO") {
      await this.playButton.waitFor({ state: "visible" });
    }
    // check for IMAGE content
    else if (this.expectedContentType === "IMAGE") {
      await this.zoomInButton.waitFor({ state: "visible" });
    }
    // check for 3rd content-type fallback (currently AUDIO)
    else {
      await this.playButton.waitFor({ state: "visible" });
    }
  }

  // Click Download Icon
  async openDownloadMenu(): Promise<void> {
    await this.downloadButton.click();
    await expect(this.downloadOverlay).toBeVisible();
  }
}
