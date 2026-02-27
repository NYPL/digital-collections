import { test as setup } from "@playwright/test";
import ItemMediaPage from "../pages/item-media.page";

setup("warmup: media assets", async ({ request }) => {
  setup.setTimeout(90000);

  const urls = [
    ItemMediaPage.IMAGE_IMAGEID,
    ItemMediaPage.PUBLICDOMAIN_IMAGEID,
  ];

  for (const id of urls) {
    // Pass the to POM for url
    const url = ItemMediaPage.getIIIFWarmupURL(id);

    console.log(`[START-CONNECT]: ${id}`);

    await request
      .get(url)
      .then((res) => console.log(`[CONNECT] ${id} Status: ${res.status()}`))
      .catch((e) => console.log(`[ERROR] ${id}: ${e.message}`));
  }

  // give IIIF a running-start to warm before suite kicks off
  await new Promise((resolve) => setTimeout(resolve, 10000));
});
