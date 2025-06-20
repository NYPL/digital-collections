import { test, expect } from "@playwright/test";
import { Divisions } from "../pages/divisions.page";

test.beforeEach(async ({ page }, testInfo) => {
  if (testInfo.title !== "user clicks Divisions from home page") {
    await page.goto(Divisions.divisionsUrl);
  }
});

test("from the home page, the user selects Divisions in the navigation menu", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Divisions" }).click();
});

test("verify navigation menu on division page", async ({ page }) => {
  await expect(
    page.getByRole("navigation", { name: "Header links" }).getByLabel("Items")
  ).toBeVisible();
  await expect(
    page
      .getByRole("navigation", { name: "Header links" })
      .getByLabel("Collections")
  ).toBeVisible();
  await expect(
    page
      .getByRole("navigation", { name: "Header links" })
      .getByLabel("Divisions")
  ).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Header links" }).getByLabel("About")
  ).toBeVisible();
});
test("verify divisions headings on division's page", async ({ page }) => {
  const divisionsPage = new Divisions(page);

  // Verify that the page contains the expected division's heading
  for (const divisionName of divisionsPage.expectedDivisionNames) {
    console.log(`Checking for divisions' name headings: ${divisionName}`);
    await expect(
      page.getByRole("heading", { name: divisionName, exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: `See more  ${divisionName}`, exact: true })
    ).toBeVisible();
  }
});
