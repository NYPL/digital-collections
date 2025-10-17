import { test, expect } from "../base";
import ItemMediaPage from "../pages/item-media.page";

let itemMediaPage: ItemMediaPage;

// configure  suite's timeout settings before the describe block.
test.describe.configure({ timeout: 90000 });

test.describe("Verify Image Viewer Controls", () => {
  test.beforeEach(async ({ page }) => {
    itemMediaPage = new ItemMediaPage(page, "IMAGE");

    await itemMediaPage.loadPage(ItemMediaPage.itemImageURL);
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

test.describe("Verify Video Viewer Controls", () => {
  test.beforeEach(async ({ page }) => {
    itemMediaPage = new ItemMediaPage(page, "VIDEO");

    await itemMediaPage.loadPage(ItemMediaPage.itemVideoURL);
  });

  test("all video-specific controls are visible", async () => {
    await itemMediaPage.verifyViewerIsReady();

    // check if VIDEO Controls are visible

    await expect(itemMediaPage.playButton).toBeVisible();
  });

  test("image controls are NOT visible", async () => {
    // check that no IMAGE controls are appearing (verifying correct UV mode)
    await expect(itemMediaPage.zoomInButton).toBeHidden();
    await expect(itemMediaPage.rotateRightButton).toBeHidden();
    await expect(itemMediaPage.fullScreenButton).toBeHidden();
  });
});
