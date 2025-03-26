import {
  DEFAULT_SEARCH_SORT,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_TERM,
  DEFAULT_FILTERS,
} from "../config/constants";
import { Filter } from "../types/FilterType";
import {
  AvailableFilter,
  AvailableFilterOption,
} from "../types/AvailableFilterType";

export interface SearchManager {
  handleSearchSubmit(): string;
  handleKeywordChange(value: string): void;
  handlePageChange(pageNumber: number): string;
  handleSortChange(id: string): string;
  handleAddFilter(newFilters: Filter[]): string;
  handleRemoveFilter(filtersToRemove: Filter[]): string;
  clearAllFilters(): string;
  get keywords(): string;
  get sort(): string;
  get page(): number;
  get filters(): Filter[];
  get availableFilters(): AvailableFilter[];
}

abstract class BaseSearchManager implements SearchManager {
  protected currentPage: number;
  protected currentSort: string;
  protected currentKeywords: string;
  protected currentFilters: Set<string>;
  protected currentAvailableFilters: AvailableFilter[];

  abstract handlePageChange(pageNumber: number): string;
  abstract handleSortChange(id: string): string;
  abstract handleSearchSubmit(): string;
  abstract getQueryString(paramsObject: Record<string, any>): string;

  constructor(config: {
    initialPage: number;
    initialSort: string;
    initialFilters?: Filter[];
    initialKeywords: string;
    initialAvailableFilters?: AvailableFilter[];
  }) {
    this.currentPage = config.initialPage;
    this.currentSort = config.initialSort;
    this.currentFilters = new Set(
      (config.initialFilters || []).map((filter) => JSON.stringify(filter))
    );
    this.currentKeywords = config.initialKeywords;
    this.currentAvailableFilters = config.initialAvailableFilters || [];
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

  get availableFilters(): AvailableFilter[] {
    // TODO: Formatting
    return this.currentAvailableFilters;
  }

  handleKeywordChange(value: string) {
    this.currentKeywords = value;
  }

  handleAddFilter(newFilters: Filter | Filter[]) {
    const existingFilters = new Map(
      this.filters.map(({ filter, value }) => [filter, value])
    );
    const filtersToAdd = Array.isArray(newFilters) ? newFilters : [newFilters];
    filtersToAdd.forEach(({ filter, value }) => {
      existingFilters.set(filter, value);
    });
    this.currentFilters = new Set(
      Array.from(existingFilters.entries()).map(([filter, value]) =>
        JSON.stringify({ filter, value })
      )
    );
    return this.getQueryString({
      q: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      filters: filterToString(this.filters),
    });
  }

  handleRemoveFilter(filtersToRemove: Filter | Filter[]) {
    const filtersToRemoveArray = Array.isArray(filtersToRemove)
      ? filtersToRemove
      : [filtersToRemove];

    filtersToRemoveArray.forEach(({ filter }) => {
      this.currentFilters.forEach((existingFilter) => {
        const parsedFilter = JSON.parse(existingFilter);
        if (parsedFilter.filter === filter) {
          this.currentFilters.delete(existingFilter);
        }
      });
    });

    return this.getQueryString({
      q: this.currentKeywords,
      sort: this.currentSort,
      page: DEFAULT_PAGE_NUM,
      filters: filterToString(this.filters),
    });
  }

  clearAllFilters() {
    this.currentFilters.clear();
    return this.getQueryString({
      q: this.currentKeywords,
      sort: this.currentSort,
      page: DEFAULT_PAGE_NUM,
      filters: filterToString(DEFAULT_FILTERS),
    });
  }
}

export class GeneralSearchManager extends BaseSearchManager {
  handleSearchSubmit() {
    this.currentPage = DEFAULT_PAGE_NUM;
    this.currentFilters.clear();
    this.currentSort = DEFAULT_SEARCH_SORT;
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
      filters: filterToString(this.filters),
    });
  }

  handleSortChange(sort: string) {
    this.currentSort = sort;
    return this.getQueryString({
      q: this.currentKeywords,
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
      DEFAULT_FILTERS,
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
  // return filters.map(({ filter, value }) => `${filter}=${value}`).join("");
  return filters.map(({ filter, value }) => `[${filter}=${value}]`).join("");
};

export const transformToAvailableFilters = (
  availableFilters: Record<string, AvailableFilterOption[]>
): AvailableFilter[] => {
  return Object.entries(availableFilters).map(([key, options]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    options,
  }));
};
