import { DEFAULT_COLLECTION_SORT, DEFAULT_PAGE_NUM } from "../config/constants";

export class SearchManager {
  currentPage: number;
  currentSort: string;
  currentKeywords: string;
  updateURL: (queryString: string) => Promise<void>;

  constructor({
    initialPage,
    initialSort,
    initialKeywords,
    updateURL,
  }: {
    initialPage: number;
    initialSort: string;
    initialKeywords: string;
    updateURL: (queryString: string) => Promise<void>;
  }) {
    this.currentPage = initialPage;
    this.currentSort = initialSort;
    this.currentKeywords = initialKeywords;
    this.updateURL = updateURL;
  }

  async handleSearchSubmit() {
    this.currentPage = DEFAULT_PAGE_NUM;
    this.currentSort = DEFAULT_COLLECTION_SORT;
    const queryString = this.createQueryString({
      collection_keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
    });
    await this.updateURL(queryString);
  }

  handleSearchChange(value: string) {
    this.currentKeywords = value;
  }

  async handlePageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    const queryString = this.createQueryString({
      collection_keywords: this.currentKeywords,
      sort: this.currentSort,
      page: pageNumber,
    });
    await this.updateURL(`${queryString}#collections`);
  }

  async handleSortChange(id: string) {
    this.currentSort = id;
    const queryString = this.createQueryString({
      collection_keywords: this.currentKeywords,
      id,
      page: this.currentPage,
    });
    await this.updateURL(`${queryString}#collections`);
  }

  createQueryString(params: Record<string, string | number>) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, String(value));
    });
    return searchParams.toString();
  }
}
