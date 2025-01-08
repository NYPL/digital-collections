import { SearchParams } from "@/search/index/page";
import {
  DEFAULT_SORT,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_TERM,
  DEFAULT_FILTERS,
} from "../config/constants";

export interface CollectionSearchParams {
  collection_keywords: string;
  sort: string;
  page: number;
}

export type Filter = {
  filter: string;
  value: string;
};

export class SearchManager {
  currentPage: number;
  currentSort: string;
  currentKeywords: string;
  currentFilters: Filter[];
  updateURL: (queryString: string) => Promise<void>;
  isCollectionSearch: boolean;

  constructor({
    initialPage,
    initialSort,
    initialFilters,
    initialKeywords,
    updateURL,
    isCollectionSearch = false,
  }: {
    initialPage: number;
    initialSort: string;
    initialFilters: Filter[];
    initialKeywords: string;
    updateURL: (queryString: string) => Promise<void>;
    isCollectionSearch?: boolean;
  }) {
    this.currentPage = initialPage;
    this.currentSort = initialSort;
    this.currentFilters = initialFilters;
    this.currentKeywords = initialKeywords;
    this.updateURL = updateURL;
    this.isCollectionSearch = isCollectionSearch;
  }

  async handleSearchSubmit() {
    this.currentPage = DEFAULT_PAGE_NUM;

    if (this.isCollectionSearch) {
      this.currentSort = DEFAULT_COLLECTION_SORT;
      const queryString = filterCollectionsQueryStringFromObject({
        collection_keywords: this.currentKeywords,
        sort: this.currentSort,
        page: this.currentPage,
      });
      await this.updateURL(queryString);
    } else {
      let queryString = "";
      if (this.currentKeywords && this.currentKeywords.length > 0) {
        queryString = filterQueryStringFromObject({
          keywords: this.currentKeywords,
          sort: this.currentSort,
          page: this.currentPage,
          filters: this.currentFilters,
        });
      }
      await this.updateURL(queryString);
    }
  }

  handleSearchChange(value: string) {
    this.currentKeywords = value;
  }

  async handlePageChange(pageNumber: number) {
    this.currentPage = pageNumber;

    const queryString = this.isCollectionSearch
      ? filterCollectionsQueryStringFromObject({
          collection_keywords: this.currentKeywords,
          sort: this.currentSort,
          page: pageNumber,
        })
      : filterQueryStringFromObject({
          keywords: this.currentKeywords,
          sort: this.currentSort,
          page: pageNumber,
          filters: this.currentFilters,
        });

    await this.updateURL(
      this.isCollectionSearch ? `${queryString}#collections` : queryString
    );
  }

  async handleSortChange(id: string) {
    this.currentSort = id;

    if (this.isCollectionSearch) {
      const queryString = filterCollectionsQueryStringFromObject({
        collection_keywords: this.currentKeywords,
        sort: id,
        page: this.currentPage,
      });
      await this.updateURL(`${queryString}#collections`);
    } else {
      const queryString = filterQueryStringFromObject({
        keywords: this.currentKeywords,
        sort: id,
        page: this.currentPage,
        filters: this.currentFilters,
      });
      await this.updateURL(queryString);
    }
  }

  async handleAddFilter(newFilter: Filter) {
    const filterExists = this.currentFilters.some(
      (filter) =>
        filter.filter === newFilter.filter && filter.value === newFilter.value
    );

    if (!filterExists) {
      console.log("adding a filter");
      this.currentFilters = [...this.currentFilters, newFilter];
    }

    const queryString = filterQueryStringFromObject({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      filters: this.currentFilters,
    });
    await this.updateURL(queryString);
  }

  async handleRemoveFilter(filterToRemove: Filter) {
    this.currentFilters = this.currentFilters.filter(
      (filter) =>
        !(
          filter.filter === filterToRemove.filter &&
          filter.value === filterToRemove.value
        )
    );

    const queryString =
      this.currentFilters.length > 0
        ? filterQueryStringFromObject({
            keywords: this.currentKeywords,
            sort: this.currentSort,
            page: this.currentPage,
            filters: this.currentFilters,
          })
        : filterQueryStringFromObject({
            keywords: this.currentKeywords,
            sort: this.currentSort,
            page: this.currentPage,
          });

    await this.updateURL(queryString);
  }

  async clearAllFilters() {
    this.currentFilters = [];
    this.currentPage = DEFAULT_PAGE_NUM;

    const queryString = filterQueryStringFromObject({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      filters: [],
    });

    await this.updateURL(queryString);
  }
}

const filterCollectionsQueryStringFromObject = (
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

const filterQueryStringFromObject = (paramsObject) => {
  const newParams: Record<string, any> = {};
  const defaultValues = [
    DEFAULT_SEARCH_TERM,
    DEFAULT_FILTERS,
    DEFAULT_PAGE_NUM,
    DEFAULT_SORT,
  ];

  Object.keys(paramsObject).forEach((key) => {
    const value = paramsObject[key];

    if (key === "filters" && Array.isArray(value) && value.length > 0) {
      value.forEach(({ filter, value }) => {
        newParams[`filters[${filter}]`] = value;
      });
    } else if (!defaultValues.includes(value)) {
      newParams[key] = value;
    }
  });

  return createQueryStringFromObject(newParams);
};

const createQueryStringFromObject = (object) => {
  const params = new URLSearchParams();

  Object.keys(object).forEach((key) => {
    params.set(key, object[key]);
  });

  return params.toString();
};
