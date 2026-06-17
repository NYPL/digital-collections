import { test, expect } from "../base";
import ItemMapOverlayPage from "../pages/item-map-overlay.page";
import { applyRouteFilters } from "../utils/routeFilters";
import { HEADLESS_OPTIMIZATION_FLAGS } from "../../playwright.config";

test.use({
  launchOptions: {
    args: HEADLESS_OPTIMIZATION_FLAGS,
  },
});

let itemMapOverlay: ItemMapOverlayPage;

test.describe.serial("Dynamic Maps Display", () => {
  // Runs ONCE to create the shared, filtered page context.

  /**
  JUSTIFICATION FOR .serial USAGE:
  
  These tests intentionally use .serial to maintain browser state across multiple test steps. This deviates from Playwright's recommendation for isolated tests for the following reasons:
  
  1. Performance: Avoids separate page loads for re-use of modal
  2. Resource efficiency: Uses single worker instead of parallel workers
  3. User journey testing: Simulates realistic workflow of opening modal once and applying multiple filters in sequence
  4. State accumulation: Each filter builds on previous selections
  */

  test.beforeAll(async ({ browser }) => {
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    await applyRouteFilters(page);
    itemMapOverlay = new ItemMapOverlayPage(page);
    await itemMapOverlay.loadPage(ItemMapOverlayPage.itemMapUrl);
  });

  test.describe("Sample Map 1", () => {
    test("Item should display a clickable map button", async () => {
      await itemMapOverlay.verifyMapIsClosedState();
    });

    test.describe("After button is clicked", () => {
      test("button text should say 'close map'", async () => {
        await itemMapOverlay.toggleMapView();
        await itemMapOverlay.verifyMapIsOpenState();
        // wait for map overlay to be stable to proceed
        await itemMapOverlay.waitForMapReady();
      });

      test("AllMaps overlay should now be displayed", async () => {
        await itemMapOverlay.verifyMapIsOpenState();
      });

      test.describe("Map interaction functions should be available", () => {
        test("Click Zoom In", async () => {
          await itemMapOverlay.verifyZoomIn();
        });

        test("Click Zoom Out", async () => {
          await itemMapOverlay.verifyZoomOut();
        });
      });
    });

    test.describe("After map is closed", () => {
      test("button text should say 'view map'", async () => {
        await itemMapOverlay.toggleMapView();
        await itemMapOverlay.verifyMapIsClosedState();
      });
    });
  });
});
