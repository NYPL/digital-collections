import { test as base, expect, Page, TestInfo } from "@playwright/test";
import { applyRouteFilters } from "./utils/routeFilters";

// export function that applies filters conditionally
export async function applyGlobalFilters(page: Page, testInfo: TestInfo) {
  const shouldSkipRouting = testInfo.tags.includes("@no-global-filter");

  if (!shouldSkipRouting) {
    await applyRouteFilters(page);
  }
}

// apply route filters
base.beforeEach(async ({ page }, testInfo) => {
  // This maintains the auto-filtering for simple tests
  await applyGlobalFilters(page, testInfo);
});

export const test = base.extend({}); // Keep the base extend for custom test object
export { expect };
