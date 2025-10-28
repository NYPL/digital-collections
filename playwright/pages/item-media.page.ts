import { Locator, Page } from "@playwright/test";

export default class ItemMediaPage {
  readonly page: Page;

  static readonly IMAGE_UUID = "4387c9f0-c53c-012f-9924-58d385a7bc34";
  static readonly VIDEO_UUID = "8820d790-e50c-0130-3a92-3c075448cc4b";

  // Store the expected content-types
  readonly expectedContentType: "IMAGE" | "VIDEO";

  //Viewer locator
  readonly viewerHeading: Locator;

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
    // this.playButton = page.getByRole("button", { name: "Play" });
    this.playButton = page.locator("button").filter({ hasText: /^Play$/ });
    // this.scrubBar = page.getByRole("slider", { name: "seek slider" });
  }

  async loadPage(uuid: string): Promise<void> {
    const gotoPage = `/items/${uuid}`;
    await this.page.goto(gotoPage);
  }

  // Waits for the correct viewer type (Image or Video) to stabilize in the DOM.
  async stabilizeViewer(): Promise<void> {
    // check for VIDEO content
    if (this.expectedContentType === "VIDEO") {
      await this.playButton.waitFor({ state: "visible", timeout: 90000 });
    }
    // check for IMAGE content
    else if (this.expectedContentType === "IMAGE") {
      await this.viewerHeading.waitFor({ state: "visible", timeout: 90000 });
    }
    // check for 3rd content-type fallback (currently AUDIO)
    else {
      await this.playButton.waitFor({ state: "visible", timeout: 90000 });
    }
  }

  async verifyViewerIsReady(): Promise<void> {
    // check the appropriate anchor based on the content type
    if (this.expectedContentType === "VIDEO") {
      await this.playButton.waitFor({ state: "visible" });
    } else if (this.expectedContentType === "IMAGE") {
      await this.viewerHeading.waitFor({ state: "visible" });
    }
    // If it's not an video or an image, it should be an audio file, which also uses the player
    else {
      await this.playButton.waitFor({ state: "visible" });
    }
  }
}
