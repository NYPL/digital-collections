import { Locator, Page, expect } from "@playwright/test";

export default class ItemMediaPage {
  readonly page: Page;

  static readonly IMAGE_UUID = "4387c9f0-c53c-012f-9924-58d385a7bc34";
  static readonly VIDEO_UUID = "8820d790-e50c-0130-3a92-3c075448cc4b";

  // Set the appropriate content type
  static get CONTENT_MAP() {
    return {
      [ItemMediaPage.IMAGE_UUID]: "IMAGE",
      [ItemMediaPage.VIDEO_UUID]: "VIDEO",
    } as const;
  }

  // Store the expected content-type
  readonly expectedContentType: "IMAGE" | "VIDEO";

  //Viewer locator
  readonly viewerHeading: Locator;

  // Image control locators (unique to IMAGE viewer mode)
  readonly zoomInButton: Locator;
  readonly rotateRightButton: Locator;
  readonly fullScreenButton: Locator;

  // Video/Audio control locators (unique to VIDEO viewer mode)
  readonly playButton: Locator;
  readonly scrubBar: Locator;

  static get itemImageURL(): string {
    return `/items/${ItemMediaPage.IMAGE_UUID}`;
  }

  static get itemVideoURL(): string {
    return `/items/${ItemMediaPage.IMAGE_UUID}`;
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
    this.scrubBar = page.getByRole("slider", { name: "seek slider" });
  }

  async loadPage(gotoPage: string): Promise<void> {
    await this.page.goto(gotoPage);
    // remove this possibly redundant wait?
    // await this.viewerHeading.waitFor({ state: "visible" });
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
    // throw an error if an unknown type is passed
    else {
      // If it's neither a video or an image, it SHOULD be an audio, which defaults to the video player.
      // Later, we can test for audio and throw and error below if an unexpected type rears its head.
      // throw new Error(`Unknown content type: ${this.expectedContentType}. Cannot determine viewer stabilization locator.`);
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
      // Or, should we also specify audio, and throw an error if an unknown 4th content type slips in there?
      // throw new Error(`Unknown content type: ${this.expectedContentType}. Cannot determine viewer stabilization locator.`);
    }
  }
}
