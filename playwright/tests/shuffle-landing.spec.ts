import { test, expect } from "../base";
import ShuffleLandingPage from "../pages/shuffle-landing.page";

test.describe("Shuffle landing page", () => {
  test("should load a valid item or collection detail page", async ({
    page,
  }) => {
    let shufflePage;

    await test.step("Load shuffle landing page", async () => {
      shufflePage = await ShuffleLandingPage.loadPage(page);
    });

    // 1. Assert URL is correct
    await test.step("URL should match expected item/collection pattern", async () => {
      await shufflePage.waitForEndpointUrl();
    });

    // 2. Assert item/collection type page
    await test.step("Should see valid Item or Collection breadcrumb", async () => {
      await shufflePage.verifyBreadcrumbs();
    });
  });
});
