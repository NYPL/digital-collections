import { test, expect } from "@playwright/test";

const searchKeyword = "maps";
test("searches for a keyword", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("load");

  const searchBox = page.getByLabel("Search keyword(s)");
  await expect(searchBox).toBeVisible();
  await searchBox.fill(searchKeyword);
  const searchButton = page.getByRole("button", { name: "Search" });
  await expect(searchButton).toBeVisible();
  await searchButton.click();

  await page.waitForURL("**/search/**");
  await expect(page).toHaveTitle("Search results - NYPL Digital Collections");

  const refineHeading = page.getByRole("heading", {
    name: "Refine your search",
  });
  await expect(refineHeading).toBeVisible();
  const resultsHeading = page.getByRole("heading", {
    name: new RegExp(
      `^Displaying \\d+-\\d+ of \\d+ results for "${searchKeyword}"$`
    ),
  });
  await expect(resultsHeading).toBeVisible();
  const firstResult = page.getByRole("link", { name: searchKeyword }).first();
  await expect(firstResult).toBeVisible();
});
