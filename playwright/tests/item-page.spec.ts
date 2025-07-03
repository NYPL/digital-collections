import { test, expect } from "@playwright/test";
import ItemPage from "../pages/item.page";

let itemPage: ItemPage;

test("Capture uuid redirects to correct canvas", async ({ page, baseURL }) => {
  itemPage = await ItemPage.loadPage(`/items/${ItemPage.captureUuid}`, page);
  await expect(itemPage.page).toHaveURL(
    `${baseURL}/items/${ItemPage.itemUuid}?canvasIndex=${ItemPage.captureIndex}`
  );
});

test("Hash url capture uuid redirects to correct canvas", async ({
  page,
  baseURL,
}) => {
  itemPage = await ItemPage.loadPage(
    `/items/${ItemPage.itemUuid}#/?uuid=${ItemPage.captureUuid}`,
    page
  );
  await expect(itemPage.page).toHaveURL(
    `${baseURL}/items/${ItemPage.itemUuid}?canvasIndex=${ItemPage.captureIndex}`
  );
});
