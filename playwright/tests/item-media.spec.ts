import { test, expect } from "../base";
import ItemMediaPage from "../pages/item-media.page";

let itemMediaPage: ItemMediaPage;
let actualCluster = "No IIIF traffic detected";

test.describe("Verify Image Viewer Controls", () => {
  test.beforeEach(async ({ page }) => {
    itemMediaPage = new ItemMediaPage(page, "IMAGE");

    // Attach passive listener to confirm image media source
    page.on("request", (request) => {
      const url = request.url();
      if (url.includes("/iiif/")) {
        try {
          actualCluster = new URL(url).hostname;
        } catch (e) {
          // Fallback if URL can't be parsed
          actualCluster = url;
        }
      }
    });
    await itemMediaPage.loadPage(ItemMediaPage.IMAGE_UUID);
  });

  test.afterAll(async () => {
    console.log(`\n IIIF-URL: [ ${actualCluster} ]\n`);
  });

  test("primary image-specific controls are visible", async () => {
    await itemMediaPage.getViewerControls();

    // check if IMAGE Controls are visible and that the main video control doesn't appear
    await expect(itemMediaPage.zoomInButton).toBeVisible();
    await expect(itemMediaPage.rotateRightButton).toBeVisible();
    await expect(itemMediaPage.fullScreenButton).toBeVisible();
    // check that no AUDIO/VIDEO controls are appearing (verifying correct UV mode)
    await expect(itemMediaPage.playButton).toBeHidden();
  });
});

test.describe("Verify Video Viewer Controls", () => {
  test.beforeEach(async ({ page }) => {
    itemMediaPage = new ItemMediaPage(page, "VIDEO");

    await itemMediaPage.loadPage(ItemMediaPage.VIDEO_UUID);
  });

  test("primary video-specific controls are visible", async () => {
    await itemMediaPage.getViewerControls();

    // check if VIDEO Controls are visible, and no image controls appear
    await expect(itemMediaPage.playButton).toBeVisible();
    await expect(itemMediaPage.zoomInButton).toBeHidden();
    await expect(itemMediaPage.rotateRightButton).toBeHidden();
    await expect(itemMediaPage.fullScreenButton).toBeHidden();
  });
});

test.describe("Verify Download Actions", () => {
  test.beforeEach(async ({ page }) => {
    itemMediaPage = new ItemMediaPage(page, "IMAGE");
    await itemMediaPage.loadPage(ItemMediaPage.IMAGE_UUID);
  });

  test("should display all available download options", async () => {
    // test.slow();
    await itemMediaPage.getViewerControls();
    await itemMediaPage.openDownloadMenu();

    await test.step("verify small image size", async () => {
      await expect(itemMediaPage.downloadOptionSmall).toBeVisible();
    });

    await test.step("verify standard image", async () => {
      await expect(itemMediaPage.downloadOptionStandard).toBeVisible();
    });

    await test.step("verify closed successfully", async () => {
      await itemMediaPage.closeDownloadMenu();
    });
  });
});

test.describe("Verify Purchase Option", () => {
  test.beforeEach(async ({ page }) => {
    itemMediaPage = new ItemMediaPage(page, "IMAGE");
    await itemMediaPage.loadPage(ItemMediaPage.PUBLICDOMAIN_UUID);
  });

  test("should display order text and correct link", async () => {
    await itemMediaPage.getViewerControls();

    await test.step("display 'Order Print' button with correct text", async () => {
      await itemMediaPage.verifyOrderPrintButton();
    });

    await test.step("button should link to external vendor", async () => {
      await itemMediaPage.verifyOrderPrintLink();
    });
  });
});
