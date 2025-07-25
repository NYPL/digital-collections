import { test, expect } from "@playwright/test";
import { DivisionsPage } from "../pages/divisions.page";

test.beforeEach(async ({ page }) => {
  {
    await page.goto(DivisionsPage.divisionsUrl);
  }
});

test("verify navigation menu on division page", async ({ page }) => {
  const divisionsPage = new DivisionsPage(page);
  await expect(divisionsPage.items).toBeVisible();
  await expect(divisionsPage.collections).toBeVisible();
  await expect(divisionsPage.divisions).toBeVisible();
  await expect(divisionsPage.about).toBeVisible();
});
test("verify divisions headings on division's page", async ({ page }) => {
  const divisionsPage = new DivisionsPage(page);

  // Verify that the page contains the expected division's heading
  for (const divisionName of divisionsPage.expectedDivisionNames) {
    await expect(divisionsPage.headings).toBeVisible();
    await expect(divisionsPage.seeMore).toBeVisible();
  }
});

test("verify collections on division's page", async ({ page }) => {
  const divisionsPage = new DivisionsPage(page);

  await expect(divisionsPage.marthaSwopePhotographicCollection).toBeVisible();
  await expect(divisionsPage.marthaSwopeCard).toContainText(
    "Contains on-site materials"
  );
  await expect(divisionsPage.wallaceDivisionPictureCollection).toBeVisible();
  await expect(divisionsPage.marthaSwopePhotographicCollectionItems).not.toBe(
    "0 items"
  );
  await expect(divisionsPage.wallaceDivisionPictureCollectionItems).not.toBe(
    "0 items"
  );
});
