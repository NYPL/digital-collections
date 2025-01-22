import {
  DEFAULT_SORT,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_TERM,
  DEFAULT_FILTERS,
} from "../config/constants";
import { filterToString } from "../context/SearchContext";

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

  handleSearchSubmit() {
    this.currentPage = DEFAULT_PAGE_NUM;
    this.currentFilters = [];
    this.currentSort = this.isCollectionSearch
      ? DEFAULT_COLLECTION_SORT
      : DEFAULT_SORT;

    let queryString = "";

    if (this.isCollectionSearch) {
      queryString = filterQueryStringFromObject(
        {
          collection_keywords: this.currentKeywords,
          sort: this.currentSort,
          page: this.currentPage,
        },
        this.isCollectionSearch
      );
    } else if (this.currentKeywords && this.currentKeywords.length > 0) {
      queryString = filterQueryStringFromObject({
        keywords: this.currentKeywords,
        sort: this.currentSort,
        page: this.currentPage,
        filters: filterToString(this.currentFilters),
      });
    }
    return queryString;
  }

  handleKeywordChange(value: string) {
    this.currentKeywords = value;
  }

  handlePageChange(pageNumber: number) {
    const queryString = this.isCollectionSearch
      ? filterQueryStringFromObject(
          {
            collection_keywords: this.currentKeywords,
            sort: this.currentSort,
            page: pageNumber,
          },
          this.isCollectionSearch
        )
      : filterQueryStringFromObject({
          keywords: this.currentKeywords,
          sort: this.currentSort,
          page: pageNumber,
          filters: filterToString(this.currentFilters),
        });

    return queryString;
  }

  handleSortChange(id: string) {
    if (this.isCollectionSearch) {
      const queryString = filterQueryStringFromObject(
        {
          collection_keywords: this.currentKeywords,
          sort: id,
          page: this.currentPage,
        },
        this.isCollectionSearch
      );
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
    const queryString = filterQueryStringFromObject({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      filters: filterToString([...this.currentFilters, newFilter]),
    });
    return queryString;
  }

  handleRemoveFilter(filterToRemove: Filter) {
    const queryString =
      this.currentFilters.length > 0
        ? filterQueryStringFromObject({
            keywords: this.currentKeywords,
            sort: this.currentSort,
            page: this.currentPage,
            filters: filterToString(
              this.currentFilters.filter(
                (filter) =>
                  !(
                    filter.filter === filterToRemove.filter &&
                    filter.value === filterToRemove.value
                  )
              )
            ),
          })
        : filterQueryStringFromObject({
            keywords: this.currentKeywords,
            sort: this.currentSort,
            page: this.currentPage,
          });

    return queryString;
  }

  clearAllFilters() {
    const queryString = filterQueryStringFromObject({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: DEFAULT_PAGE_NUM,
      filters: filterToString([]),
    });

    return queryString;
  }
}

const filterQueryStringFromObject = (
  paramsObject,
  isCollectionSearch = false
) => {
  const newParams = {};
  const defaultValues = isCollectionSearch
    ? [DEFAULT_SEARCH_TERM, DEFAULT_PAGE_NUM, DEFAULT_COLLECTION_SORT]
    : [DEFAULT_SEARCH_TERM, DEFAULT_FILTERS, DEFAULT_PAGE_NUM, DEFAULT_SORT];

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
