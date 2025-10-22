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

  test("primary image-specific controls are visible", async () => {
    await itemMediaPage.verifyViewerIsReady();

    // check if IMAGE Controls are visible
    await expect(itemMediaPage.zoomInButton).toBeVisible();
    await expect(itemMediaPage.rotateRightButton).toBeVisible();
    await expect(itemMediaPage.fullScreenButton).toBeVisible();
  });

  // flakey test because it checks before ANY controls are visible, so will always pass
  test.skip("video controls are NOT visible", async () => {
    // check that no AUDIO/VIDEO controls are appearing (verifying correct UV mode)
    await expect(itemMediaPage.playButton).toBeHidden();
  });
});

test.describe("Verify Video Viewer Controls", () => {
  test.beforeEach(async ({ page }) => {
    itemMediaPage = new ItemMediaPage(page, "VIDEO");

    await itemMediaPage.loadPage(ItemMediaPage.itemVideoURL);
  });

  test("primary video-specific controls are visible", async () => {
    await itemMediaPage.verifyViewerIsReady();

    // check if VIDEO Controls are visible

    await expect(itemMediaPage.playButton).toBeVisible();
  });

  // unnecessary assertions, which also will get false-positives in async mode
  test.skip("image controls are NOT visible", async () => {
    // This will get a false positive in the DOM for the same reasons as
    // the negative-assertion about video-controls will similarly fail in
    // the main image-controls test.
    // We could serially wait for the answer to the previous
    // assertion (is media-play-button visible?) here, first.  But we
    // can probably leave these negative assertions below out, because if
    // you are on a video player, it's all or nothing:  you're not going to see
    // ANY of the image controls we are checking
    // for below on the video-player UV.  And the reverse holds true
    // for the image-viewer UV.
    await expect(itemMediaPage.zoomInButton).toBeHidden();
    await expect(itemMediaPage.rotateRightButton).toBeHidden();
    await expect(itemMediaPage.fullScreenButton).toBeHidden();
  });
});
