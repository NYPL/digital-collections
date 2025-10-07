import { test, expect } from "@playwright/test";
import ItemPage from "../pages/item.page";

test("Capture uuid redirects to correct canvas", async ({ page, baseURL }) => {
  const itemPage = new ItemPage(page);
  await itemPage.loadPage(`/items/${ItemPage.captureUuid}`);
  await expect(itemPage.page).toHaveURL(
    `${baseURL}/items/${ItemPage.itemUuid}?canvasIndex=${ItemPage.captureIndex}`
  );
});

test("Hash url capture uuid redirects to correct canvas", async ({
  page,
  baseURL,
}) => {
  const itemPage = new ItemPage(page);
  await itemPage.loadPage(
    `/items/${ItemPage.itemUuid}#/?uuid=${ItemPage.captureUuid}`
  );
  await expect(itemPage.page).toHaveURL(
    `${baseURL}/items/${ItemPage.itemUuid}?canvasIndex=${ItemPage.captureIndex}`
  );
});
