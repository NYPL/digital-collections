import { test, expect } from "../base";
import ItemMediaPage from "../pages/item-media.page";

let itemMediaPage: ItemMediaPage;

// configure  suite's timeout settings before the describe block.
test.describe.configure({ timeout: 90000 });

test.describe("Verify Image Viewer Controls", () => {
  test.beforeEach(async ({ page }) => {
    itemMediaPage = new ItemMediaPage(page);

    await itemMediaPage.loadPage(ItemMediaPage.itemMediaURL);
  });

  test("all image-specific controls are visible", async () => {
    await itemMediaPage.verifyViewerIsReady();

    // check if IMAGE Controls are visible
    await expect(itemMediaPage.zoomInButton).toBeVisible();
    await expect(itemMediaPage.rotateRightButton).toBeVisible();
    await expect(itemMediaPage.fullScreenButton).toBeVisible();
  });

  test("video controls are NOT visible", async () => {
    // check that no AUDIO/VIDEO controls are appearing (verifying correct UV mode)
    await expect(itemMediaPage.playButton).toBeHidden();
  });
});
