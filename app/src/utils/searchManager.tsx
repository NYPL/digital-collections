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
  handleSearchSubmit(): string;
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
  protected currentKeywords: string;
  protected currentFilters: Map<string, Filter>;
  protected currentAvailableFilters: AvailableFilter[];
  public lastFilterRef: MutableRefObject<string | null>;

  abstract handlePageChange(pageNumber: number): string;
  abstract handleSortChange(id: string): string;
  abstract handleSearchSubmit(): string;
  abstract getQueryString(paramsObject: Record<string, any>): string;

  constructor(config: {
    initialPage: number;
    initialSort: string;
    initialFilters?: Filter[];
    initialKeywords: string;
    initialAvailableFilters?: Record<string, AvailableFilterOption[]>;
    lastFilterRef?: MutableRefObject<string | null>;
  }) {
    this.currentPage = config.initialPage;
    this.currentSort = config.initialSort;
    this.currentFilters = new Map(
      (config.initialFilters || []).map((filter) => [filter.filter, filter])
    );
    this.currentKeywords = config.initialKeywords;
    this.currentAvailableFilters = transformToAvailableFilters(
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
    return Array.from(this.currentFilters.values());
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
    const filtersToAdd = Array.isArray(newFilters) ? newFilters : [newFilters];
    filtersToAdd.forEach(({ filter, value }) => {
      this.currentFilters.set(filter, { filter, value });
    });

    return this.getQueryString({
      q: this.currentKeywords,
      sort: this.currentSort,
      page: DEFAULT_PAGE_NUM,
      filters: filterToString(this.filters),
    });
  }

  handleRemoveFilter(filtersToRemove: Filter | Filter[]) {
    const filtersArray = Array.isArray(filtersToRemove)
      ? filtersToRemove
      : [filtersToRemove];

    filtersArray.forEach(({ filter }) => {
      this.currentFilters.delete(filter);
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

// export const stringToFilter = (filtersString: string | null): Filter[] => {
//   if (!filtersString) return [];
//   const matches = Array.from(filtersString.matchAll(/\[([^\]=]+)=([^\]]+)\]/g));
//   return matches
//     .map(([_, filter, value]) => ({
//       filter: decodeURIComponent(filter),
//       value: decodeURIComponent(value),
//     }))
//     .filter(({ filter }) => isValidFilter(filter));
// };

export const stringToFilter = (filtersString: string | null): Filter[] => {
  if (!filtersString) return [];

  const matches = Array.from(filtersString.matchAll(/\[([^\]=]+)=([^\]]+)\]/g));

  return matches
    .map(([_, filter, value]) => ({
      filter: decodeURIComponent(filter),
      value: decodeURIComponent(value)
        .replace("%5B", "[")
        .replace("%5D", "]")
        .replace("%7C%7C", "||"),
    }))
    .filter(({ filter }) => isValidFilter(filter));
};

export const filterToString = (filters: Filter[]): string => {
  if (!filters || filters.length === 0) return "";
  const validFilters = filters.filter(({ filter }) => isValidFilter(filter));
  return validFilters
    .map(
      ({ filter, value }) =>
        `[${encodeURIComponent(filter)}=${encodeURIComponent(value)}]`
    )
    .join("");
};

export const transformToAvailableFilters = (
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

export const availableFilterDisplayName = (
  name: string,
  filterName: string
) => {
  return filterName === "collection" || filterName === "subcollection"
    ? name.split("||")[0]
    : capitalize(name);
};

export const isValidFilter = (param: string) => {
  return ALLOWED_FILTERS.includes(param);
};
