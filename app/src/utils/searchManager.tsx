import {
  DEFAULT_COLLECTION_SORT,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_TERM,
} from "../config/constants";

export interface CollectionSearchParams {
  collection_keywords: string;
  sort: string;
  page: number;
}

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
    const queryString = createCollectionsQueryStringFromObject({
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
    const queryString = createCollectionsQueryStringFromObject({
      collection_keywords: this.currentKeywords,
      sort: this.currentSort,
      page: pageNumber,
    });
    await this.updateURL(`${queryString}#collections`);
  }

  async handleSortChange(id: string) {
    this.currentSort = id;
    const queryString = createCollectionsQueryStringFromObject({
      collection_keywords: this.currentKeywords,
      sort: id,
      page: this.currentPage,
    });
    await this.updateURL(`${queryString}#collections`);
  }
}

const createQueryStringFromObject = (object) => {
  const params = new URLSearchParams();
  Object.keys(object).forEach((name) => {
    params.set(name.toString(), object[name]);
  });
  return params.toString();
};

const createCollectionsQueryStringFromObject = (
  paramsObject: CollectionSearchParams
) => {
  const newParams = {};
  const defaultValues = [
    DEFAULT_SEARCH_TERM,
    DEFAULT_PAGE_NUM,
    DEFAULT_COLLECTION_SORT,
  ];

  Object.keys(paramsObject).forEach((key) => {
    if (!defaultValues.includes(paramsObject[key])) {
      newParams[key] = paramsObject[key];
    }
  });

  return createQueryStringFromObject(newParams);
};
