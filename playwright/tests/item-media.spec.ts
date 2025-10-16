//item-media.spec.ts

import { test, expect, TestInfo } from "@playwright/test"; // Note: TestInfo is required
import ItemMediaPage from "../pages/item-media.page"; // Your new Page Object
import { applyRouteFilters } from "../utils/routeFilters";

let itemMediaPage: ItemMediaPage; // Global variable

test.describe("Universal Viewer Stability and Timeout Test", () => {
  test.beforeEach(async ({ page }) => {
    // Register the route filters BEFORE navigation.
    await applyRouteFilters(page);
    // Instantiate the Page Object
    itemMediaPage = new ItemMediaPage(page);
    // await itemMediaPage.loadPage(ItemMediaPage.itemResultURL);
    await page.goto(
      "http://localhost:3000/items/4387c9f0-c53c-012f-9924-58d385a7bc34"
    );
  });

  // This test forces the 90-second wait logic to run and confirms the image is visible.
  test("should verify the slow-loading Universal Viewer image stabilizes", async ({
    page,
  }, testInfo: TestInfo) => {
    // The single line that executes the full, complex logic:
    // 1. Reads the original timeout (30s) from testInfo.
    // 2. Extends the page timeout to 90s.
    // 3. Waits for the locator to become visible.
    // 4. Restores the original 30s timeout.
    // 5. Asserts final visibility.
    await itemMediaPage.verifyMainImageLoads(testInfo);
  });

  // More tests here later...
});

// // This hook runs before the test and sets up the network blocking.
// test.beforeEach(async ({ page }) => {
//   // Block analytics, tracking, and third-party domains
//   await page.route(/.*adobedc\.net.*/, (route) => route.abort());
//   await page.route(/.*adobedtm\.com.*/, (route) => route.abort());
//   await page.route(/.*demdex\.net.*/, (route) => route.abort());
//   await page.route(/.*everesttech\.net.*/, (route) => route.abort());
//   await page.route(/.*google-analytics\.com.*/, (route) => route.abort());
//   await page.route(/.*google\.com.*/, (route) => route.abort());
//   await page.route(/.*googletagmanager\.com.*/, (route) => route.abort());
//   await page.route(/.*ipify\.org.*/, (route) => route.abort());
//   await page.route(/.*newrelic\.com.*/, (route) => route.abort());
//   await page.route(/.*nr-data\.net.*/, (route) => route.abort());
//   await page.route(/.*omappapi\.com.*/, (route) => route.abort());
// });

// test("check load", async ({ page }) => {
//   // CRITICAL: Replace '/your-target-page' with the actual URL path you need to inspect.
//   await page.goto(
//      "http://localhost:3000/items/4387c9f0-c53c-012f-9924-58d385a7bc34"
//       //  "https://digitalcollections.nypl.org/items/4387c9f0-c53c-012f-9924-58d385a7bc34"
//   );

//   // OPTIONAL WAIT: Give the UV module several seconds to load its resources
//   await page.waitForTimeout(7000); // Wait 7 seconds

//   // Freezes the session
//   await page.pause();

//   // The test will pause here until the default timeout (or until you interact with the UI).
//   // It provides an active browser session for inspection.
// });
