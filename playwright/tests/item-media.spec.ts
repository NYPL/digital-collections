import { test, expect } from "@playwright/test";
import ItemMediaPage from "../pages/item-media.page";
import { applyRouteFilters } from "../utils/routeFilters"; // Assuming filter utility exists

let itemMediaPage: ItemMediaPage;

// CRITICAL: Configure the suite's timeout settings before the describe block.
// Assumes 90s is the required timeout for the slow UV module.
test.describe.configure({ timeout: 90000 });

test.describe("Image Viewer Control Verification", () => {
  test.beforeEach(async ({ page }) => {
    // Register the route filters BEFORE navigation.
    await applyRouteFilters(page);

    // Instantiate the Page Object
    itemMediaPage = new ItemMediaPage(page);

    // Load the specific Image item URL
    await itemMediaPage.loadPage(ItemMediaPage.itemMediaURL);

    // Wait for the stable UV heading to confirm the module is fully initialized
    await itemMediaPage.viewerHeading.waitFor({ state: "visible" });
  });

  test("should verify all IMAGE-specific controls are visible", async () => {
    // Assert on the mandatory structural anchor
    await expect(itemMediaPage.viewerHeading).toBeVisible();

    // Assert IMAGE Controls are visible
    await expect(itemMediaPage.zoomInButton).toBeVisible();
    await expect(itemMediaPage.rotateRightButton).toBeVisible();
    await expect(itemMediaPage.fullScreenButton).toBeVisible();
  });

  test("should verify VIDEO controls are NOT visible", async () => {
    // Assert VIDEO Controls are hidden (crucial for verifying correct UV mode)
    await expect(itemMediaPage.playButton).toBeHidden();
  });
});
