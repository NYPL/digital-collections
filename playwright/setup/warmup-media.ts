import { test as setup } from "@playwright/test";
import ItemMediaPage from "../pages/item-media.page";
import { applyRouteFilters } from "../utils/routeFilters";

setup("warmup: media assets", async ({ request }) => {
  setup.setTimeout(90000);
  // since we are using a test-type framework in this utility,
  // the 90 sec should ensure that there is a long enough timeout
  // for one of the CI's limited wokers to first poke IIIF, then
  // still have enough time to land on the item-media test before
  // playwright calls finish line.  The default timeout of
  // 30 sec wasn't allowing this sometimes on slower cold starts.

  const urls = [
    ItemMediaPage.IMAGE_IMAGEID,
    ItemMediaPage.PUBLICDOMAIN_IMAGEID,
  ];

  for (const id of urls) {
    const url = ItemMediaPage.getIIIFWarmupURL(id);

    // Your original log line, now with the truth revealed
    console.log(`[START-DOMAIN]: ${url}`);

    console.log(`[START-CONNECT]: ${id}`);

    await request
      .get(url)
      .then((res) => console.log(`[CONNECT] ${id} Status: ${res.status()}`))
      .catch((e) => console.log(`[ERROR] ${id}: ${e.message}`));
  }

  // give IIIF a running-start to warm before suite kicks off
  await new Promise((resolve) => setTimeout(resolve, 10000));
});
