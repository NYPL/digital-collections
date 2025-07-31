import { Locator, Page } from "@playwright/test";
import { DivisionsPage } from "./divisions.page";

export class GeorgeArentDivisionsLandingPage extends DivisionsPage {
  readonly seeMoreLinkGeorgeArents: Locator;
  readonly heading: Locator;
  readonly contactLink: Locator;
  readonly itemsGeorgeDivisionHeading: Locator;
  readonly itemsGeorgeArentsSeemoreLink: Locator;
  readonly collectionsGeorgeArentsHeading: Locator;
  readonly georgeArentsPagination: Locator;

  constructor(page: Page) {
    super(page);
    this.seeMoreLinkGeorgeArents = page.getByRole("link", {
      name: "See more George Arents Collection",
      exact: true,
    });

    this.heading = page.getByRole("heading", {
      name: "George Arents Collection",
    });

    this.itemsGeorgeDivisionHeading = page.getByRole("heading", {
      name: "Items in the George Arents Collection",
    });
    this.itemsGeorgeArentsSeemoreLink = page.locator(
      "#row-see-more-items-George\\ Arents\\ Collection"
    );

    this.contactLink = page.getByRole("link", {
      name: "Contact info and more ",
    });

    this.collectionsGeorgeArentsHeading = page.getByRole("heading", {
      name: "Collections in the George Arents Collection",
    });

    this.georgeArentsPagination = page.getByLabel("1");
  }
}
