import { test as setup } from "@playwright/test";
import ItemMediaPage from "../pages/item-media.page";

setup("warmup: media assets", async ({ request }) => {
  const url = ItemMediaPage.getIIIFWarmupURL();

  request.get(url).catch(() => {});
  // give IIIF a running-start to warm before site kicks off
  await new Promise((resolve) => setTimeout(resolve, 10000));
});
