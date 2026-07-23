import { test as base } from "@playwright/test";
import { applyRouteFilters } from "./utils/routeFilters";

type CustomFixtures = {
  routeFilterFixture: void;
  testFailureFixture: void; //
};

// Extend base test object with custom fixtures
export const test = base.extend<CustomFixtures>({
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

  // Breadcrumb URLs for error outputs
  testFailureFixture: [
    async ({ page }, use, testInfo) => {
      // Let the test run first
      await use();

      if (testInfo.status !== testInfo.expectedStatus) {
        const url = page.url();

        testInfo.annotations.push({
          type: "Page Error",
          description: `URL: ${url}`,
        });

        // Print to the Terminal immediately
        console.log(`\n[FAILURE] ${testInfo.title}\n Target URL: ${url}\n`);
      }
    },
    { auto: true },
  ],
});

export { expect } from "@playwright/test";
