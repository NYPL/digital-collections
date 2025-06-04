import { test, expect } from "@playwright/test";
import { DCHomepage } from "../pageobjects/dc_homepage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://qa-digitalcollections.nypl.org/");
});

test("navigation menu", async ({ page }) => {
  const dchomepage = new DCHomepage(page);
  await dchomepage.navigationMenu();
});
