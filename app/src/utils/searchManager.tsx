import {
  DEFAULT_SORT,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_TERM,
} from "../config/constants";
import { filterToString } from "../context/SearchProvider";
import { Filter } from "../types/FilterType";
export interface SearchManager {
  handleSearchSubmit(): string;
  handleKeywordChange(value: string): void;
  handlePageChange(pageNumber: number): string;
  handleSortChange(id: string): string;
  handleAddFilter(newFilter: Filter): string;
  handleRemoveFilter(filterToRemove: Filter): string;
  clearAllFilters(): string;
  get keywords(): string;
  get sort(): string;
  get page(): number;
  get filters(): Filter[];
}

abstract class BaseSearchManager implements SearchManager {
  protected currentPage: number;
  protected currentSort: string;
  protected currentKeywords: string;
  protected currentFilters: Filter[];

  abstract handlePageChange(pageNumber: number): string;
  abstract handleSortChange(id: string): string;
  abstract handleSearchSubmit(): string;

  constructor(config: {
    initialPage: number;
    initialSort: string;
    initialFilters?: Filter[];
    initialKeywords: string;
  }) {
    this.currentPage = config.initialPage;
    this.currentSort = config.initialSort;
    this.currentFilters = config.initialFilters || [];
    this.currentKeywords = config.initialKeywords;
  }

  get keywords() {
    return this.currentKeywords;
  }

  get sort() {
    return this.currentSort;
  }

  get page() {
    return this.currentPage;
  }

  get filters() {
    return this.currentFilters;
  }

  handleKeywordChange(value: string) {
    this.currentKeywords = value;
  }

  handleAddFilter(newFilter: Filter) {
    const updatedFilters = [...this.currentFilters, newFilter];
    this.currentFilters = updatedFilters;
    return this.createQueryString({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      filters: filterToString(updatedFilters),
    });
  }

  handleRemoveFilter(filterToRemove: Filter) {
    const updatedFilters = this.currentFilters.filter(
      (filter) =>
        !(
          filter.filter === filterToRemove.filter &&
          filter.value === filterToRemove.value
        )
    );
    return this.createQueryString({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      filters: filterToString(updatedFilters),
    });
  }

  clearAllFilters() {
    this.currentFilters = [];
    return this.createQueryString({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: DEFAULT_PAGE_NUM,
      filters: filterToString([]),
    });
  }

  protected createQueryString(params: Record<string, any>) {
    return getQueryStringFromObject(params);
  }
}

export class GeneralSearchManager extends BaseSearchManager {
  handleSearchSubmit() {
    this.currentPage = DEFAULT_PAGE_NUM;
    this.currentFilters = [];
    this.currentSort = DEFAULT_SORT;

    return this.createQueryString({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
    });
  }

  handlePageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    return this.createQueryString({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: pageNumber,
      filters: filterToString(this.currentFilters),
    });
  }

  handleSortChange(sort: string) {
    this.currentSort = sort;
    return this.createQueryString({
      keywords: this.currentKeywords,
      sort: sort,
      page: this.currentPage,
      filters: filterToString(this.currentFilters),
    });
  }
}

export class CollectionSearchManager extends BaseSearchManager {
  handleSearchSubmit() {
    this.currentPage = DEFAULT_PAGE_NUM;
    this.currentFilters = [];
    this.currentSort = DEFAULT_COLLECTION_SORT;

    return this.createQueryString({
      collection_keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
    });
  }

  handlePageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    return this.createQueryString({
      collection_keywords: this.currentKeywords,
      sort: this.currentSort,
      page: pageNumber,
    });
  }

  handleSortChange(sort: string) {
    this.currentSort = sort;
    return this.createQueryString({
      collection_keywords: this.currentKeywords,
      sort: sort,
      page: this.currentPage,
    });
  }
}

export class SearchManagerFactory {
  static createSearchManager(config: {
    initialPage: number;
    initialSort: string;
    initialFilters?: Filter[];
    initialKeywords: string;
    isCollectionSearch: boolean;
  }): SearchManager {
    const { isCollectionSearch, ...baseConfig } = config;
    return isCollectionSearch
      ? new CollectionSearchManager(baseConfig)
      : new GeneralSearchManager(baseConfig);
  }
}

const getQueryStringFromObject = (paramsObject: Record<string, any>) => {
  const newParams: Record<string, string> = {};
  const defaultValues = [DEFAULT_SEARCH_TERM, DEFAULT_PAGE_NUM, DEFAULT_SORT];

  Object.keys(paramsObject).forEach((key) => {
    const value = paramsObject[key];
    if (!defaultValues.includes(value)) {
      newParams[key] = value;
    }
  });
  return createQueryStringFromObject(newParams);
};

const createQueryStringFromObject = (object: Record<string, string>) => {
  const params = new URLSearchParams();

  Object.keys(object).forEach((key) => {
    params.set(key, object[key]);
  });
  return params.toString();
};
