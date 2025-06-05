import { test, expect } from "@playwright/test";
import { DCHomepage } from "../pages/dc_homepage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test("navigation menu is displayed (items, collections, divisions, about", async ({
  page,
}) => {
  const dchomepage = new DCHomepage(page);
  await expect(dchomepage.items).toBeVisible();
  await expect(dchomepage.collections).toBeVisible();
  await expect(dchomepage.divisions).toBeVisible();
  await expect(dchomepage.about).toBeVisible();
});

test("search box, search button are visible", async ({ page }) => {
  const dchomepage = new DCHomepage(page);
  await expect(dchomepage.searchbox).toBeVisible();
  await expect(dchomepage.searchbutton).toBeVisible();
});

test("public domain link is visible", async ({ page }) => {
  const dchomepage = new DCHomepage(page);
  await expect(dchomepage.whatispublicdomainlink).toBeVisible();
});
