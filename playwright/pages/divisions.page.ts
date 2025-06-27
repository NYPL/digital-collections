import { Locator, Page } from "@playwright/test";

export class DivisionsPage {
  private readonly page: Page;
  readonly seeMore: Locator;
  readonly seeMoreLink: Locator;
  readonly items: Locator;
  readonly collections: Locator;
  readonly divisions: Locator;
  readonly about: Locator;
  readonly headings: Locator;

  static divisionsUrl: string = "/divisions";

  readonly expectedDivisionNames: string[];

  constructor(page: Page) {
    this.page = page;

    // Expected division names
    this.expectedDivisionNames = [
      "Billy Rose Theatre Division",
      "Carl H. Pforzheimer Collection of Shelley and His Circle",
      "Dorot Jewish Division",
      "General Research Division",
      "George Arents Collection",
      "Henry W. and Albert A. Berg Collection of English and American Literature",
      "Irma and Paul Milstein Division of United States History, Local History and Genealogy",
      "Jerome Robbins Dance Division",
      "Lionel Pincus and Princess Firyal Map Division",
      "Manuscripts and Archives Division",
      "Music Division",
      "New York Public Library Archives",
      "Rare Book Division",
      "Rodgers and Hammerstein Archives of Recorded Sound",
      "Schomburg Center for Research in Black Culture, Art and Artifacts Division",
      "Schomburg Center for Research in Black Culture, Jean Blackwell Hutson Research and Reference Division",
      "Schomburg Center for Research in Black Culture, Manuscripts, Archives and Rare Books Division",
      "Schomburg Center for Research in Black Culture, Photographs and Prints Division",
      "Schomburg Center for Research in Black Culture, Moving Image and Recorded Sound Division",
      "Spencer Collection",
      "The Miriam and Ira D. Wallach Division of Art, Prints and Photographs: Art & Architecture Collection",
      "The Miriam and Ira D. Wallach Division of Art, Prints and Photographs: Photography Collection",
      "The Miriam and Ira D. Wallach Division of Art, Prints and Photographs: Picture Collection",
      "The Miriam and Ira D. Wallach Division of Art, Prints and Photographs: Print Collection",
    ];
    this.seeMoreLink = this.page.getByRole("link", { name: "See more" });

    this.items = this.page
      .getByRole("navigation", { name: "Header links" })
      .getByLabel("Items");
    this.collections = this.page
      .getByRole("navigation", { name: "Header links" })
      .getByLabel("Collections");
    this.divisions = this.page
      .getByRole("navigation", { name: "Header links" })
      .getByLabel("Divisions");
    this.about = page
      .getByRole("navigation", { name: "Header links" })
      .getByLabel("About");

    for (const divisionName of this.expectedDivisionNames) {
      this.headings = page.getByRole("heading", {
        name: divisionName,
        exact: true,
      });
      this.seeMore = page.getByRole("link", {
        name: `See more  ${divisionName}`,
        exact: true,
      });
    }
  }
}
