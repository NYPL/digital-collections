import { Locator, Page } from "@playwright/test";

export class DCHomepage {
  private readonly page: Page;
  //navigation menu
  readonly items: Locator;
  readonly collections: Locator;
  readonly divisions: Locator;
  readonly about: Locator;

  // search box
  readonly searchbox: Locator;
  readonly searchbutton: Locator;
  readonly publicdomaincheckbox: Locator;
  readonly whatispublicdomainlink: Locator;

  // hero component
  readonly learnmore: Locator;

  //swimlane
  readonly recently_digitized_see_more_link: Locator;
  readonly maps_see_more_link: Locator;
  readonly photographs_see_more_link: Locator;
  readonly prints_and_drawings_see_more_link: Locator;
  readonly manuscripts_correspondence_see_more_link: Locator;
  readonly books_and_periodicals_see_more_link: Locator;
  readonly fliers_and_ephemera_see_more_link: Locator;

  constructor(page: Page) {
    //navigation menu
    this.page = page;
    this.items = this.page.getByRole("link", { name: "Items" });
    this.collections = this.page.getByRole("link", {
      name: "Collections",
      exact: true,
    });
    this.divisions = this.page.getByRole("link", { name: "Divisions" });
    this.about = this.page.getByRole("link", { name: "About", exact: true });

    //search box and button
    this.searchbox = this.page.getByPlaceholder("Search keyword(s)");
    this.searchbutton = this.page.getByRole("button", { name: "Search" });

    // public domain

    this.whatispublicdomainlink = this.page.getByText("What is public domain?");
  }
}
