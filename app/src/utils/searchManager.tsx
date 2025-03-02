import {
  DEFAULT_SEARCH_SORT,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_TERM,
} from "../config/constants";
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
  abstract getQueryString(paramsObject: Record<string, any>): string;

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
    const updatedFilters = this.currentFilters.map((filter) =>
      filter.filter === newFilter.filter ? newFilter : filter
    );

    const filterExists = this.currentFilters.some(
      (filter) => filter.filter === newFilter.filter
    );

    if (!filterExists) {
      updatedFilters.push(newFilter);
    }
    this.currentFilters = updatedFilters;

    return this.getQueryString({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      filters: filterToString(this.currentFilters),
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
    return this.getQueryString({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      filters: filterToString(updatedFilters),
    });
  }

  clearAllFilters() {
    this.currentFilters = [];
    return this.getQueryString({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: DEFAULT_PAGE_NUM,
      filters: filterToString([]),
    });
  }
}

export class GeneralSearchManager extends BaseSearchManager {
  handleSearchSubmit() {
    this.currentPage = DEFAULT_PAGE_NUM;
    this.currentFilters = [];
    this.currentSort = DEFAULT_SEARCH_SORT;

    return this.getQueryString({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
    });
  }

  handlePageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    return this.getQueryString({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: pageNumber,
      filters: filterToString(this.currentFilters),
    });
  }

  handleSortChange(sort: string) {
    this.currentSort = sort;
    return this.getQueryString({
      keywords: this.currentKeywords,
      sort: sort,
      page: this.currentPage,
      filters: filterToString(this.currentFilters),
    });
  }

  getQueryString = (paramsObject: Record<string, any>) => {
    const newParams: Record<string, string> = {};
    const defaultValues = [
      DEFAULT_SEARCH_TERM,
      DEFAULT_PAGE_NUM,
      DEFAULT_SEARCH_SORT,
    ];

    Object.keys(paramsObject).forEach((key) => {
      const value = paramsObject[key];
      if (!defaultValues.includes(value)) {
        newParams[key] = value;
      }
    });
    return createQueryStringFromObject(newParams);
  };
}

export class CollectionSearchManager extends BaseSearchManager {
  handleSearchSubmit() {
    this.currentPage = DEFAULT_PAGE_NUM;
    this.currentSort = DEFAULT_COLLECTION_SORT;
    return this.getQueryString({
      q: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
    });
  }

  handlePageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    return this.getQueryString({
      q: this.currentKeywords,
      sort: this.currentSort,
      page: pageNumber,
    });
  }

  handleSortChange(sort: string) {
    this.currentSort = sort;
    return this.getQueryString({
      q: this.currentKeywords,
      sort: sort,
      page: this.currentPage,
    });
  }

  getQueryString = (paramsObject: Record<string, any>) => {
    const newParams: Record<string, string> = {};
    const defaultValues = [
      DEFAULT_SEARCH_TERM,
      DEFAULT_PAGE_NUM,
      DEFAULT_COLLECTION_SORT,
    ];

    Object.keys(paramsObject).forEach((key) => {
      const value = paramsObject[key];
      if (!defaultValues.includes(value)) {
        newParams[key] = value;
      }
    });
    return createQueryStringFromObject(newParams);
  };
}

const createQueryStringFromObject = (object: Record<string, string>) => {
  const params = new URLSearchParams();

  Object.keys(object).forEach((key) => {
    params.set(key, object[key]);
  });
  return params.toString();
};

export const stringToFilter = (filtersString: string | null): Filter[] => {
  if (!filtersString) return [];
  return Array.from(filtersString.matchAll(/\[([^\]=]+)=([^\]]+)\]/g)).map(
    ([, filter, value]) => ({ filter, value })
  );
};

export const filterToString = (filters: Filter[]): string => {
  if (!filters || filters.length === 0) return "";
  return filters.map(({ filter, value }) => `[${filter}=${value}]`).join("");
};
