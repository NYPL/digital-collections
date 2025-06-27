import { test, expect } from "@playwright/test";
import ItemsLandingPage from "../pages/items-landing.page";

let itemsLandingPage: ItemsLandingPage;

test.beforeEach(async ({ page }, testInfo) => {
  if (testInfo.title !== "navigates to Items landing page from homepage") {
    itemsLandingPage = await ItemsLandingPage.loadPage(
      ItemsLandingPage.itemsLandingUrl,
      page
    );
  }
});

test("navigates to Items landing page from homepage", async ({ page }) => {
  itemsLandingPage = await ItemsLandingPage.loadPage("/", page);

  await expect(itemsLandingPage.items).toBeVisible();
  await itemsLandingPage.items.click();
  await expect(itemsLandingPage.page).toHaveURL(/\/(search)\//);
});

test("displays all items", async () => {
  await expect(itemsLandingPage.resultsHeading).toBeVisible();
  await expect(itemsLandingPage.firstResult).toBeVisible();
});
