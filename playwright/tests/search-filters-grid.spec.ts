import { test, expect } from "../base";
import SearchPage from "../pages/search.page";
import { applyRouteFilters } from "../utils/routeFilters";

let searchPage: SearchPage;

test.describe("Verify Grid and List Layouts", () => {
  test.beforeAll(async ({ browser }) => {
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    searchPage = new SearchPage(page);
    await searchPage.loadPage(SearchPage.largeResultsUrl);
  });

  test.afterAll(async () => {
    await searchPage.page.context().close();
  });

  test.describe.serial("List view", () => {
    test("list button is highlighted", async () => {
      await searchPage.listViewButton.click({ force: true });
      await expect(searchPage.listViewButton).toHaveAttribute(
        "aria-pressed",
        "true"
      );
      await expect(searchPage.gridViewButton).toHaveAttribute(
        "aria-pressed",
        "false"
      );
    });

    test("results are displayed in a list view", async () => {
      await searchPage.verifyLayout("list");
    });

    test("multi-row results retain their list view", async () => {
      await searchPage.verifyMultiRowLayout("list");
    });

    test("remains a list after reload", async () => {
      await searchPage.verifyLayoutReloadState("list");
    });

    test("remains a list after a new search", async () => {
      await searchPage.verifyLayoutSearch("list");
    });
  });

  test.describe.serial("Grid view", () => {
    test.beforeAll(async () => {
      // set up list view first, since grid is default
      await searchPage.listViewButton.click({ force: true });
    });

    test("grid button is highlighted", async () => {
      await searchPage.gridViewButton.click({ force: true });
      await expect(searchPage.gridViewButton).toHaveAttribute(
        "aria-pressed",
        "true"
      );
      await expect(searchPage.listViewButton).toHaveAttribute(
        "aria-pressed",
        "false"
      );
    });

    test("results are displayed in a grid", async () => {
      await searchPage.verifyLayout("grid");
    });

    test("multi-row results retain their grid view", async () => {
      await searchPage.verifyMultiRowLayout("grid");
    });

    test("remains a grid after reload", async () => {
      await searchPage.verifyLayoutReloadState("grid");
    });

    test("remains a grid after a new search", async () => {
      await searchPage.verifyLayoutSearch("grid");
    });
  });
});
