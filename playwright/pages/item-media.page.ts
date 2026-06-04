import { Locator, Page, expect } from "@playwright/test";

export default class ItemMediaPage {
  readonly page: Page;

  static readonly IMAGE_UUID = "4387c9f0-c53c-012f-9924-58d385a7bc34";
  static readonly VIDEO_UUID = "09a14bf0-0382-0131-8ec7-3c075448cc4b";
  static readonly PUBLICDOMAIN_UUID = "ddaef250-c54d-012f-2b56-58d385a7bc34";
  // Store the expected content-types
  readonly expectedContentType: "IMAGE" | "VIDEO";

  //Viewer locator
  readonly viewerHeading: Locator;
  readonly downloadButton: Locator;
  readonly downloadOverlay: Locator;
  readonly downloadOptionSmall: Locator;
  readonly downloadOptionStandard: Locator;
  readonly closeOverlayButton: Locator;
  readonly orderPrintButton: Locator;
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

    this.downloadButton = page.getByRole("button", { name: /Download/i });
    this.downloadOverlay = page.locator("div.overlay.download");
    this.downloadOptionSmall = this.downloadOverlay.locator("button", {
      hasText: /Small/i,
    });
    this.downloadOptionStandard = this.downloadOverlay.locator("button", {
      hasText: /Standard/,
    });
    this.closeOverlayButton = this.downloadOverlay.getByRole("button", {
      name: /Close/i,
    });

    // Share options
    this.shareButton = page.getByRole("button", { name: "Share" });

    // Purchase option
    this.orderPrintButton = page.getByRole("link", { name: /Order Print/i });
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

  // Downloads

  // Opens and verifies download overlay modal

  // NEW Option 1.0
  async openDownloadMenu(): Promise<void> {
    await this.downloadButton.waitFor({ state: "visible" });

    // Retry click up to 3 times if the browser temporarily swallows the DOM click event
    for (let attempt = 1; attempt <= 5; attempt++) {
      await this.downloadButton.click({ force: true });

      try {
        // Leave a short 750ms pause per click.
        // If download options show up, the try block succeeds.
        await this.downloadOptionSmall.waitFor({
          state: "visible",
          timeout: 750,
        });
        await expect(this.downloadOptionSmall).toBeEnabled();
        return;
      } catch (error) {
        console.warn(`Retrying download menu trigger: attempt ${attempt}/5`);
      }
    }

    throw new Error("Failed to open the download menu after 5 attempts.");
  }

  // NEW Option 2.0
  //   async openDownloadMenu(): Promise<void> {
  //     await this.downloadButton.waitFor({ state: "visible" });

  //     await expect(async () => {
  //       await this.downloadButton.click({ force: true });
  //       await expect(this.downloadOptionSmall).toBeVisible();
  //     }).toPass({ timeout: 5000, intervals: [750] });

  //     await expect(this.downloadOptionSmall).toBeEnabled();
  // }

  // NEW Option 2.0 - with logging
  // async openDownloadMenu(): Promise<void> {
  //   await this.downloadButton.waitFor({ state: "visible" });

  //   const capturedErrors: Error[] = []; // Diagnostics bucket

  //   await expect(async () => {
  //     try {
  //       await this.downloadButton.click({ force: true });
  //       await expect(this.downloadOptionSmall).toBeVisible();
  //     } catch (error) {
  //       // 1. Capture the exact error (TypeError, Network crash, or Locator timeout)
  //       capturedErrors.push(error as Error);
  //       console.warn(`[DEBUG LOG] Attempt failed with: ${(error as Error).message}`);

  //       // 2. Crucial: Re-throw it so toPass() knows to keep retrying
  //       throw error;
  //     }
  //   }).toPass({ timeout: 20000, intervals: [750] });

  //   await expect(this.downloadOptionSmall).toBeEnabled();
  // }

  // Dismisses  download overlay and verifies it is removed from the view.
  async closeDownloadMenu(): Promise<void> {
    await this.closeOverlayButton.click();
    await expect(this.downloadOverlay).not.toBeVisible();
  }

  // Purchase Print

  // Check button
  async verifyOrderPrintButton(): Promise<void> {
    await expect(this.orderPrintButton).toBeVisible();
  }

  // Check vendor link
  async verifyOrderPrintLink(): Promise<void> {
    await expect(this.orderPrintButton).toHaveAttribute(
      "href",
      /archivea\.studio/
    );
  }
}
