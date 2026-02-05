import { test, expect } from "../base";
import ItemMediaPage from "../pages/item-media.page";

let itemMediaPage: ItemMediaPage;

test.describe("Verify Image Viewer Controls", () => {
  test.beforeEach(async ({ page }) => {
    itemMediaPage = new ItemMediaPage(page, "IMAGE");

    await itemMediaPage.loadPage(ItemMediaPage.IMAGE_UUID);
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

test.describe("Verify Image Viewer Download Actions", () => {
  test.beforeEach(async ({ page }) => {
    itemMediaPage = new ItemMediaPage(page, "IMAGE");
    await itemMediaPage.loadPage(ItemMediaPage.IMAGE_UUID);
  });

  test("Clicking the download icon", async () => {
    await itemMediaPage.getViewerControls();

    await test.step("should display an options menu", async () => {
      await itemMediaPage.openDownloadMenu();
    });

    await test.step("should dislay Small option", async () => {
      await expect(itemMediaPage.downloadOptionSmall).toBeVisible();
    });

    await test.step("should dislay Standard option", async () => {
      await expect(itemMediaPage.downloadOptionStandard).toBeVisible();
    });

    await test.step("should allow closing download Menu", async () => {
      await itemMediaPage.closeDownloadMenu();
    });
  });
});

test.describe("Verify Purchase Print Option", () => {
  test.beforeEach(async ({ page }) => {
    itemMediaPage = new ItemMediaPage(page, "IMAGE");
    await itemMediaPage.loadPage(ItemMediaPage.PUBLICDOMAIN_UUID);
  });

  // verifyOrderPrintAvailable
});
