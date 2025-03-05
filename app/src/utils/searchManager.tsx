import qs from "qs";
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
  protected currentFilters: Set<string>;

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
    this.currentFilters = new Set(
      (config.initialFilters || []).map((filter) => JSON.stringify(filter))
    );
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

  get filters(): Filter[] {
    return Array.from(this.currentFilters).map((filterStr) =>
      JSON.parse(filterStr)
    );
  }

  handleKeywordChange(value: string) {
    this.currentKeywords = value;
  }

  handleAddFilter(newFilter: Filter) {
    const existingFilters = new Map(
      this.filters.map(({ filter, value }) => [filter, value])
    );

    existingFilters.set(newFilter.filter, newFilter.value);

    this.currentFilters = new Set(
      Array.from(existingFilters.entries()).map(([filter, value]) =>
        JSON.stringify({ filter, value })
      )
    );

    return this.getQueryString({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      filters: filterToString(this.filters),
    });
  }

  handleRemoveFilter(filterToRemove: Filter) {
    this.currentFilters.delete(JSON.stringify(filterToRemove));

    return this.getQueryString({
      keywords: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      filters: filterToString(this.filters),
    });
  }

  clearAllFilters() {
    this.currentFilters.clear();
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
    this.currentFilters.clear();
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
      filters: filterToString(this.filters),
    });
  }

  handleSortChange(sort: string) {
    this.currentSort = sort;
    return this.getQueryString({
      keywords: this.currentKeywords,
      sort: sort,
      page: this.currentPage,
      filters: filterToString(this.filters),
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
