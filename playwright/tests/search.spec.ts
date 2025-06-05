import { test, expect } from "@playwright/test";
import SearchPage from "../pages/search.page";

test("searches for a keyword from homepage", async ({ page }) => {
  const searchPage = await SearchPage.loadPage("/", page);

  await expect(searchPage.searchBox).toBeVisible();
  await searchPage.searchBox.fill(searchPage.searchKeyword);
  await page.waitForTimeout(1000); // webkit is clearing the search box after filling it
  await expect(searchPage.searchBox).toHaveValue(searchPage.searchKeyword);
  await expect(searchPage.searchButton).toBeVisible();
  await searchPage.searchButton.click();

  await page.waitForURL("**/search/**");
  await expect(page).toHaveTitle("Search results - NYPL Digital Collections");

  await expect(searchPage.refineHeading).toBeVisible();
  await expect(searchPage.resultsHeading).toBeVisible();
  await expect(searchPage.firstResult).toBeVisible();
});
