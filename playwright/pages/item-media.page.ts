import { Locator, Page, expect, TestInfo } from "@playwright/test";
import { waitForSlowResource } from "../utils/slowWaitHelpers";

export default class ItemMediaPage {
  // FIX 2: Standard Class Name Convention
  readonly page: Page;
  // Assuming 'mainHeroImage' is the locator for your Universal Viewer component.
  readonly mainHeroImage: Locator;

  // FIX 3: The constructor is required to initialize 'this.page'
  constructor(page: Page) {
    this.page = page;
    // Example initialization for the locator
    this.mainHeroImage = page.locator(".universal-viewer-canvas");
  }

  // Waits for the Universal Viewer image to load using a temporary 90s timeout.
  async verifyMainImageLoads(testInfo: TestInfo): Promise<void> {
    // CRITICAL: Call the utility, passing the locator, the page instance,
    // and the original timeout value from testInfo.
    await waitForSlowResource(
      this.mainHeroImage,
      this.page,
      testInfo.timeout // Get the original timeout (the overall test timeout)
    );

    // Final check that the image is now visible after the long wait
    await expect(this.mainHeroImage).toBeVisible();
  }
}
