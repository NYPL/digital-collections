import {
  DEFAULT_SORT,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_TERM,
  DEFAULT_FILTERS,
} from "../config/constants";
import { filterToString } from "../context/SearchContext";

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
  isCollectionSearch: boolean;

  constructor(config: {
    initialPage: number;
    initialSort: string;
    initialFilters: Filter[];
    initialKeywords: string;
    isCollectionSearch: boolean;
  }) {
    this.currentPage = config.initialPage;
    this.currentSort = config.initialSort;
    this.currentFilters = config.initialFilters;
    this.currentKeywords = config.initialKeywords;
    this.isCollectionSearch = config.isCollectionSearch;
  }

  update(config: {
    page?: number;
    sort?: string;
    filters?: Filter[];
    keywords?: string;
    isCollectionSearch?: boolean;
  }) {
    if (config.page !== undefined) this.currentPage = config.page;
    if (config.sort !== undefined) this.currentSort = config.sort;
    if (config.filters !== undefined) this.currentFilters = config.filters;
    if (config.keywords !== undefined) this.currentKeywords = config.keywords;
    if (config.isCollectionSearch !== undefined)
      this.isCollectionSearch = config.isCollectionSearch;
  }

  // export class SearchManager {
  //   currentPage: number;
  //   currentSort: string;
  //   currentKeywords: string;
  //   currentFilters: Filter[];
  //   isCollectionSearch: boolean;

  //   constructor({
  //     initialPage,
  //     initialSort,
  //     initialFilters,
  //     initialKeywords,
  //     isCollectionSearch = false,
  //   }: {
  //     initialPage: number;
  //     initialSort: string;
  //     initialFilters: Filter[];
  //     initialKeywords: string;
  //     isCollectionSearch?: boolean;
  //   }) {
  //     this.currentPage = initialPage;
  //     this.currentSort = initialSort;
  //     this.currentFilters = initialFilters;
  //     this.currentKeywords = initialKeywords;
  //     this.isCollectionSearch = isCollectionSearch;
  //   }

  // handleSearchSubmit() {
  //   this.currentPage = DEFAULT_PAGE_NUM;
  //   let queryString;

  //   if (this.isCollectionSearch) {
  //     this.currentSort = DEFAULT_COLLECTION_SORT;
  //     queryString = filterCollectionsQueryStringFromObject({
  //       collection_keywords: this.currentKeywords,
  //       sort: this.currentSort,
  //       page: this.currentPage,
  //     });
  //   } else {
  //     if (this.currentKeywords && this.currentKeywords.length > 0) {
  //       queryString = filterQueryStringFromObject({
  //         keywords: this.currentKeywords,
  //         sort: this.currentSort,
  //         page: this.currentPage,
  //         filters: this.currentFilters,
  //       });
  //     } else {
  //       queryString = "";
  //     }
  //   }
  //   return queryString;
  // }

  handleSearchSubmit() {
    // Reset to default values for a new search
    this.currentPage = DEFAULT_PAGE_NUM;
    this.currentFilters = [];
    this.currentSort = this.isCollectionSearch
      ? DEFAULT_COLLECTION_SORT
      : DEFAULT_SORT;

    let queryString;

    if (this.isCollectionSearch) {
      queryString = filterCollectionsQueryStringFromObject({
        collection_keywords: this.currentKeywords,
        sort: this.currentSort,
        page: this.currentPage,
      });
    } else {
      if (this.currentKeywords && this.currentKeywords.length > 0) {
        queryString = filterQueryStringFromObject({
          keywords: this.currentKeywords,
          sort: this.currentSort,
          page: this.currentPage,
          filters: filterToString(this.currentFilters),
        });
      } else {
        queryString = "";
      }
    }
    return queryString;
  }

  handleKeywordChange(value: string) {
    this.currentKeywords = value;
  }

  handlePageChange(pageNumber: number) {
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
          filters: filterToString(this.currentFilters),
        });

    return queryString;
  }

  handleSortChange(id: string) {
    this.currentSort = id;

    if (this.isCollectionSearch) {
      const queryString = filterCollectionsQueryStringFromObject({
        collection_keywords: this.currentKeywords,
        sort: id,
        page: this.currentPage,
      });
      return `${queryString}#collections`;
    } else {
      const queryString = filterQueryStringFromObject({
        keywords: this.currentKeywords,
        sort: id,
        page: this.currentPage,
        filters: filterToString(this.currentFilters),
      });
      return queryString;
    }
  }

  handleAddFilter(newFilter: Filter) {
    this.currentFilters = [...this.currentFilters, newFilter];

    const queryString = filterQueryStringFromObject({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      filters: filterToString(this.currentFilters),
    });
    return queryString;
  }

  handleRemoveFilter(filterToRemove: Filter) {
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
            filters: filterToString(this.currentFilters),
          })
        : filterQueryStringFromObject({
            keywords: this.currentKeywords,
            sort: this.currentSort,
            page: this.currentPage,
          });

    return queryString;
  }

  clearAllFilters() {
    this.currentFilters = [];
    this.currentPage = DEFAULT_PAGE_NUM;

    const queryString = filterQueryStringFromObject({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      filters: filterToString(this.currentFilters),
    });

    return queryString;
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
    if (!defaultValues.includes(value)) {
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
