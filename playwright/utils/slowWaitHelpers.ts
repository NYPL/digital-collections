import { Page, Locator } from "@playwright/test";

const SLOW_RESOURCE_TIMEOUT = 90000;

export async function waitForSlowResource(
  locator: Locator,
  page: Page,
  originalTimeout: number
) {
  // Set temporary long timeout for this action
  page.setDefaultTimeout(SLOW_RESOURCE_TIMEOUT);

  // Perform the critical wait action
  await locator.waitFor({ state: "visible" });

  // Restore original timeout
  page.setDefaultTimeout(originalTimeout);
}
