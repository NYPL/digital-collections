import { test as base } from "@playwright/test";
import { applyRouteFilters } from "./utils/routeFilters";

// Create custom fixture
type RouteFilterFixtures = {
  routeFilterFixture: void;
};

// Extend base test object with custom fixture
export const test = base.extend<RouteFilterFixtures>({
  routeFilterFixture: [
    async ({ page }, use, testInfo) => {
      // Check if test has a '@no-global-filter' tag
      const shouldSkipRouting = testInfo.tags.includes("@no-global-filter");

      if (!shouldSkipRouting) {
        // If tag is not present, apply global route filters to the test
        await applyRouteFilters(page);
      }
      await use();
    },
    { auto: true },
  ],
});

// Teardown with global afterEach cleanup hook
test.afterEach(async ({ page }) => {
  // 1. Clear session and cookies with explicit calls
  await page.context().clearCookies();
  await page.evaluate(() => window.localStorage.clear());
  await page.evaluate(() => window.sessionStorage.clear());

  // 2. Remove all network interception rules
  await page.unrouteAll();
});

export { expect } from "@playwright/test";
