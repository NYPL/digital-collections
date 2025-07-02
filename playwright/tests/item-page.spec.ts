import { test, expect } from "@playwright/test";
import ItemPage from "../pages/item-page";

let itemPage: ItemPage;

// Probably a nicer way to do this than hardcoding but :shrug?
const CAPTURE_UUID = "e36b2b90-740d-0136-0517-476ebf952da4";
const ITEM_UUID = "7cd3acc0-5d7f-0134-12ab-00505686a51c";

test("Capture uuid redirects to correct canvas", async ({ page, baseURL }) => {
  itemPage = await ItemPage.loadPage(`/items/${CAPTURE_UUID}`, page);
  await expect(itemPage.page).toHaveURL(
    `${baseURL}/items/${ITEM_UUID}?canvasIndex=2`
  );
});

test("Hash url capture uuid redirects to correct canvas", async ({
  page,
  baseURL,
}) => {
  itemPage = await ItemPage.loadPage(
    `/items/${ITEM_UUID}#/?uuid=${CAPTURE_UUID}`,
    page
  );
  await expect(itemPage.page).toHaveURL(
    `${baseURL}/items/${ITEM_UUID}?canvasIndex=2`
  );
});
