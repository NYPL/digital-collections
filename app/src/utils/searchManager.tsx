import {
  DEFAULT_SEARCH_SORT,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_TERM,
  DEFAULT_FILTERS,
  ALLOWED_FILTERS,
} from "../config/constants";
import { Filter } from "../types/FilterType";
import {
  AvailableFilter,
  AvailableFilterOption,
} from "../types/AvailableFilterType";
import { capitalize } from "./utils";
import { MutableRefObject } from "react";

export interface SearchManager {
  handleSearchSubmit(enforceSort?: string): string;
  handleKeywordChange(value: string): void;
  handlePageChange(pageNumber: number): string;
  handleSortChange(id: string): string;
  handleAddFilter(newFilters: Filter[] | Filter): string;
  handleRemoveFilter(filtersToRemove: Filter[] | Filter): string;
  clearAllFilters(): string;
  get keywords(): string;
  get sort(): string;
  get page(): number;
  get filters(): Filter[];
  get availableFilters(): AvailableFilter[];
  get lastFilterRef(): MutableRefObject<string | null>;
  setLastFilter(value: string | null): void;
}

abstract class BaseSearchManager implements SearchManager {
  protected currentPage: number;
  protected currentSort: string;
  protected defaultSort: string;
  protected currentKeywords: string;
  protected currentFilters: Set<string>;
  protected currentAvailableFilters: AvailableFilter[];
  public lastFilterRef: MutableRefObject<string | null>;

  abstract handlePageChange(pageNumber: number): string;
  abstract handleSortChange(id: string): string;
  abstract handleSearchSubmit(enforceSort?: string): string;
  abstract getQueryString(paramsObject: Record<string, any>): string;

  constructor(config: {
    initialPage: number;
    initialSort: string;
    defaultSort: string;
    initialFilters?: Filter[];
    initialKeywords: string;
    initialAvailableFilters?: Record<string, AvailableFilterOption[]>;
    lastFilterRef?: MutableRefObject<string | null>;
  }) {
    this.currentPage = config.initialPage;
    this.currentSort = config.initialSort;
    this.defaultSort = config.defaultSort;
    this.currentFilters = new Set(
      (config.initialFilters || []).map((filter) => JSON.stringify(filter))
    );
    this.currentKeywords = config.initialKeywords;
    this.currentAvailableFilters = transformToDisplayAvailableFilters(
      config.initialAvailableFilters ?? {}
    );
    this.lastFilterRef = config.lastFilterRef!;
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

  setLastFilter(value: string | null): void {
    this.lastFilterRef.current = value;
  }

  get availableFilters(): AvailableFilter[] {
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
      page: DEFAULT_PAGE_NUM,
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
  handleSearchSubmit(enforceSort?: string) {
    this.currentPage = DEFAULT_PAGE_NUM;
    this.currentFilters.clear();
    this.currentSort = enforceSort ? enforceSort : this.defaultSort;
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
    this.currentPage = DEFAULT_PAGE_NUM;
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
      this.defaultSort,
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
  const matches = Array.from(filtersString.matchAll(/\[([^\]=]+)=([^\]]+)\]/g));
  return matches
    .map(([_, filter, value]) => ({ filter, value }))
    .filter(({ filter }) => isValidFilter(filter));
};

export const filterToString = (filters: Filter[]): string => {
  if (!filters || filters.length === 0) return "";
  const validFilters = filters.filter(({ filter }) => isValidFilter(filter));
  return validFilters
    .map(({ filter, value }) => `[${filter}=${value}]`)
    .join("");
};

/** Removing filters that search supports, but does not display as a `SelectFilter`.
 * Also formats the options into a displayable object. */
export const transformToDisplayAvailableFilters = (
  availableFilters: Record<string, AvailableFilterOption[]>
): AvailableFilter[] => {
  return Object.entries(availableFilters)
    .filter(
      ([key]) => key !== "subcollection" && key !== "language" && key !== "form"
    )
    .map(([key, options]) => ({
      name: key,
      options,
    }));
};

export const filterDisplayName = (filterValue: string, filterName: string) => {
  return filterName === "collection" || filterName === "subcollection"
    ? decodeURIComponent(filterValue.split("||")[0])
    : capitalize(filterValue);
};

export const isValidFilter = (param: string) => {
  return ALLOWED_FILTERS.includes(param);
};
