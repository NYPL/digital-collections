import { test, expect } from "../base";
import SearchPage from "../pages/search.page";
import { applyRouteFilters } from "../utils/routeFilters";

let searchPage: SearchPage;

test.describe.serial("Verify Grid/List Layouts", () => {
  test.beforeAll(async ({ browser }) => {
    // Manually create context/page to force serialization to remain in block
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    // Assign to global variable and load the page object
    searchPage = new SearchPage(page);
    await searchPage.loadPage(SearchPage.largeResultsUrl);
  });

  // TEARDOWN: close the entire context.
  test.afterAll(async () => {
    // Closes the BrowserContext, freeing up resources.
    await searchPage.page.context().close();
  });

  test.describe.serial("Toggle default results to list view", async () => {
    await test.step("When clicking the list view icon", async () => {
      await searchPage.listViewButton.click({ force: true });
    });

    await test.step("list button is highlighted", async () => {
      await expect(searchPage.listViewButton).toHaveAttribute(
        "aria-pressed",
        "true"
      );
      await expect(searchPage.gridViewButton).toHaveAttribute(
        "aria-pressed",
        "false"
      );
    });

    await test.step("results are displayed in a list view", async () => {
      await searchPage.verifyLayout("list");
    });
  });

  test("Toggle search results back to grid view", async () => {
    await test.step("When clicking the grid view icon", async () => {
      await searchPage.gridViewButton.click({ force: true });
    });

    await test.step("grid button is highlighted", async () => {
      await expect(searchPage.gridViewButton).toHaveAttribute(
        "aria-pressed",
        "true"
      );
      await expect(searchPage.listViewButton).toHaveAttribute(
        "aria-pressed",
        "false"
      );
    });

    await test.step("results are displayed in a grid", async () => {
      await searchPage.verifyLayout("grid");
    });
  });
});

test.describe.serial("toggle results visualization", () => {
  test.beforeEach(async ({ page }) => {
    searchPage = new SearchPage(page);
    await searchPage.loadPage(SearchPage.largeResultsUrl);
  });

  test("toggles search results to list view", async () => {
    await test.step("Click the list view icon", async () => {
      await searchPage.listViewButton.click({ force: true });
    });

    await test.step("Verify list button shows 'pressed'", async () => {
      await expect(searchPage.listViewButton).toHaveAttribute(
        "aria-pressed",
        "true"
      );
      await expect(searchPage.gridViewButton).toHaveAttribute(
        "aria-pressed",
        "false"
      );
    });

    await test.step("Verify results are displayed in a vertical stack", async () => {
      // Logic defined in POM: checks that box2.y > box1.y
      await searchPage.verifyLayout("list");
    });
  });

  test("toggles search results back to grid view", async () => {
    // Because of .serial, we are already in List view from the previous test

    await test.step("Click the grid view icon", async () => {
      await searchPage.gridViewButton.click({ force: true });
    });

    await test.step("Verify grid button shows 'pressed'", async () => {
      await expect(searchPage.gridViewButton).toHaveAttribute(
        "aria-pressed",
        "true"
      );
      await expect(searchPage.listViewButton).toHaveAttribute(
        "aria-pressed",
        "false"
      );
    });

    await test.step("Verify results are displayed in a grid", async () => {
      // Logic defined in POM: checks that box1.y is close to box2.y
      await searchPage.verifyLayout("grid");
    });
  });
});
