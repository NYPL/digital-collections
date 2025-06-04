import { test, expect } from "@playwright/test";
import SearchPage from "../pages/search.page";

test("searches for a keyword from homepage", async ({ page }) => {
  // from homepage
  const searchPage = await SearchPage.loadPage("/", page); // rename when homepage class is created

  await expect(searchPage.searchBox).toBeVisible(); // create function to search
  await searchPage.searchBox.fill(searchPage.searchKeyword);
  await expect(searchPage.searchButton).toBeVisible();
  await searchPage.searchButton.click();

  await page.waitForURL("**/search/**"); // gets flaky at this point waiting for search results
  await expect(page).toHaveTitle("Search results - NYPL Digital Collections");

  await expect(searchPage.refineHeading).toBeVisible(); // split into new test - displays search results
  await expect(searchPage.resultsHeading).toBeVisible();
  await expect(searchPage.firstResult).toBeVisible();
});
