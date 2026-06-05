import { test, expect } from "../base";
import ItemMapOverlayPage from "../pages/item-map-overlay.page";

test.describe("Dynamic Maps Should Display Overlay", () => {
  let itemMapOverlay: ItemMapOverlayPage;

  test.beforeEach(async ({ page }) => {
    itemMapOverlay = new ItemMapOverlayPage(page);
    await itemMapOverlay.visitItem(ItemMapOverlayPage.MAP1_UUID);
  });

  test.describe("Sample Map 1", () => {
    test("Should display a view on map button", async () => {
      await itemMapOverlay.verifyMapIsClosedState();
    });

    test("When view on map is clicked, button should allow closing overlay", async () => {
      await itemMapOverlay.toggleMapView();
      await itemMapOverlay.verifyMapIsOpenState();
    });

    test("Overlay should be displayed", async () => {
      await itemMapOverlay.toggleMapView();
      await itemMapOverlay.verifyMapControlsAvailable();
    });
  });
});
