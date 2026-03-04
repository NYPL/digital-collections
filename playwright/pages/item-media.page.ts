import { Locator, Page, expect } from "@playwright/test";

export default class ItemMediaPage {
  readonly page: Page;

  // static readonly IMAGE_UUID = "4387c9f0-c53c-012f-9924-58d385a7bc34";
  // static readonly VIDEO_UUID = "09a14bf0-0382-0131-8ec7-3c075448cc4b";
  // static readonly PUBLICDOMAIN_UUID = "ddaef250-c54d-012f-2b56-58d385a7bc34";
  // static readonly IMAGE_IMAGEID = "821487";

  // static readonly IMAGE_UUID = "9ed6a200-c5fe-012f-51eb-58d385a7bc34";
  // static readonly IMAGE_IMAGEID = "404083";
  // static readonly VIDEO_UUID = "9d0b0200-e378-0130-c01b-3c075448cc4b";
  // static readonly PUBLICDOMAIN_UUID = "c4649390-c6df-012f-fcd9-58d385a7bc34";

  // static readonly IMAGE_UUID = "f2416750-5530-0135-9b00-1bd2ebeab8de";
  // static readonly IMAGE_IMAGEID = "57366147";
  // static readonly VIDEO_UUID = "27e5bd00-e378-0130-2025-3c075448cc4b";
  // static readonly PUBLICDOMAIN_UUID = "79149800-ea2a-0133-d30f-00505686d14e";

  // static readonly IMAGE_UUID = "1235c2d0-e8ff-0131-dd75-58d385a7b928";
  // static readonly IMAGE_IMAGEID = "5146225";
  // static readonly VIDEO_UUID = "93547140-f876-0130-3a9e-3c075448cc4b";
  // static readonly PUBLICDOMAIN_UUID = "100d2590-996a-0139-4432-0242ac11000";

  static readonly IMAGE_UUID = "d336d020-75dd-0133-612e-00505686d14e";
  static readonly IMAGE_IMAGEID = "57273250";
  static readonly VIDEO_UUID = "93547140-f876-0130-3a9e-3c075448cc4b";
  static readonly PUBLICDOMAIN_UUID = "d94c9eb0-c5fe-012f-36ea-58d385a7bc34";
  static readonly PUBLICDOMAIN_IMAGEID = "1811136";

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

  static get IIIF_BASE_URL(): string {
    const url = process.env.IIIF_URL || "https://iiif.nypl.org";
    if (!url) {
      throw new Error(
        "\n\n [ENV ERROR]: IIIF_URL is undefined. \n" +
          "Run export locally or check CI.\n"
      );
    }
    return url;
  }

  static getIIIFWarmupURL(imageId: string = this.IMAGE_IMAGEID): string {
    const baseUrl = this.IIIF_BASE_URL;
    const warmupUrl = `${this.IIIF_BASE_URL}/iiif/3/${imageId}/full/200,/0/default.jpg`;
    return warmupUrl;
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
  async openDownloadMenu(): Promise<void> {
    await this.downloadButton.click();

    // Wait for the popup to be visible
    await this.downloadOptionSmall.waitFor({ state: "visible" });

    await expect(this.downloadOptionSmall).toBeEnabled();
  }

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
