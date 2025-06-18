import { test, expect } from "@playwright/test";
import { Divisions } from "../pages/divisions.page";

test.beforeEach(async ({ page }) => {
  await page.goto("/divisions");
});

test("verify divisions headings on division's page", async ({ page }) => {
  const divisionsPage = new Divisions(page);

  for (const divisionName of divisionsPage.expectedDivisionNames) {
    await expect(
      page.getByRole("heading", { name: divisionName, exact: true })
    ).toBeVisible();
  }
});
