import { Locator, Page } from "@playwright/test";

export class DivisionsLandingPage {
  readonly page: Page;

  divisionsLandingPageSlugs: string[];

  constructor(page: Page) {
    this.page = page;

    this.divisionsLandingPageSlugs = [
      "billy-rose-theatre-division",
      "carl-h-pforzheimer-collection-of-shelley-and-his-circle",
      "dorot-jewish-division",
      "general-research-division",
      "george-arents-collection",
      "henry-w-and-albert-a-berg-collection-of-english-and-american-literature",
      "irma-and-paul-milstein-division-of-united-states-history-local-history",
      "jerome-robbins-dance-division",
      "lionel-pincus-and-princess-firyal-map-division",
      "manuscripts-and-archives-division",
      "music-division",
      "new-york-public-library-archives",
      "rare-book-division",
      "rodgers-and-hammerstein-archives-of-recorded-sound",
      "schomburg-center-for-research-in-black-culture-art-and-artifacts-division",
      "schomburg-center-for-research-in-black-culture-jean-blackwell-hutson-research",
      "schomburg-center-for-research-in-black-culture-manuscripts-archives-and-rare",
      "schomburg-center-for-research-in-black-culture-moving-image-and-recorded-sound",
      "schomburg-center-for-research-in-black-culture-photographs-and-prints-division",
      "spencer-collection",
      "the-miriam-and-ira-d-wallach-division-of-art-prints-and-photographs-art",
      "the-miriam-and-ira-d-wallach-division-of-art-prints-and-photographs-photography",
      "the-miriam-and-ira-d-wallach-division-of-art-prints-and-photographs-picture",
      "the-miriam-and-ira-d-wallach-division-of-art-prints-and-photographs-print",
    ];
  }
}
