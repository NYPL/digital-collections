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
  isCollectionSearch: boolean;

  constructor({
    initialPage,
    initialSort,
    initialKeywords,
    updateURL,
    isCollectionSearch = false,
  }: {
    initialPage: number;
    initialSort: string;
    initialKeywords: string;
    updateURL: (queryString: string) => Promise<void>;
    isCollectionSearch?: boolean;
  }) {
    this.currentPage = initialPage;
    this.currentSort = initialSort;
    this.currentKeywords = initialKeywords;
    this.updateURL = updateURL;
    this.isCollectionSearch = isCollectionSearch;
  }

  async handleSearchSubmit() {
    this.currentPage = DEFAULT_PAGE_NUM;

    if (this.isCollectionSearch) {
      this.currentSort = DEFAULT_COLLECTION_SORT;
      const queryString = createCollectionsQueryStringFromObject({
        collection_keywords: this.currentKeywords,
        sort: this.currentSort,
        page: this.currentPage,
      });
      await this.updateURL(queryString);
    } else {
      const queryString = createQueryStringFromObject({
        keywords: this.currentKeywords,
        page: this.currentPage,
      });
      await this.updateURL(queryString);
    }
  }

  handleSearchChange(value: string) {
    this.currentKeywords = value;
  }

  async handlePageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    console.log("this is current keywords", this.currentKeywords);

    const queryString = this.isCollectionSearch
      ? createCollectionsQueryStringFromObject({
          collection_keywords: this.currentKeywords,
          sort: this.currentSort,
          page: pageNumber,
        })
      : createQueryStringFromObject({
          keywords: this.currentKeywords,
          page: pageNumber,
        });

    await this.updateURL(
      this.isCollectionSearch ? `${queryString}#collections` : queryString
    );
  }

  async handleSortChange(id: string) {
    this.currentSort = id;

    if (this.isCollectionSearch) {
      const queryString = createCollectionsQueryStringFromObject({
        collection_keywords: this.currentKeywords,
        sort: id,
        page: this.currentPage,
      });
      await this.updateURL(`${queryString}#collections`);
    } else {
      const queryString = createQueryStringFromObject({
        keywords: this.currentKeywords,
        sort: id,
        page: this.currentPage,
      });
      await this.updateURL(queryString);
    }
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
