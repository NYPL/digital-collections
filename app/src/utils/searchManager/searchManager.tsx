import {
  CARDS_PER_PAGE,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_TERM,
  DEFAULT_FILTERS,
  ALLOWED_FILTERS,
  DEFAULT_VIEW_MODE,
} from "../../config/constants";
import { Filter } from "../../types/FilterType";
import {
  AvailableFilter,
  AvailableFilterOption,
} from "../../types/AvailableFilterType";
import { capitalize } from "../utils";
import { MutableRefObject } from "react";

const VIEW_MODE_STORAGE_KEY = "viewMode";
const PER_PAGE_STORAGE_KEY = "perPage";

const getStorageItem = (key: string): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(key);
};

const setStorageItem = (key: string, value: string): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, value);
};

const getPerPageFromStorage = (): number | undefined => {
  const storedPerPage = getStorageItem(PER_PAGE_STORAGE_KEY);
  const parsedPerPage = Number(storedPerPage);

  return Number.isFinite(parsedPerPage) && parsedPerPage > 0
    ? parsedPerPage
    : undefined;
};

const setPerPageInStorage = (perPage: number): void => {
  setStorageItem(PER_PAGE_STORAGE_KEY, perPage.toString());
};

export interface SearchManager {
  handleSearchSubmit(enforceSort?: string): string;
  handleKeywordChange(value: string): void;
  handlePageChange(pageNumber: number): string;
  handlePerPageChange(perPage: number): string;
  handleSortChange(id: string): string;
  handleViewModeChange(mode: "grid" | "list"): string;
  handleAddFilter(newFilters: Filter[] | Filter): string;
  handleRemoveFilter(filtersToRemove: Filter[] | Filter): string;
  clearAllFilters(): string;
  get keywords(): string;
  get sort(): string;
  get page(): number;
  get perPage(): number;
  get viewMode(): "grid" | "list";
  get filters(): Filter[];
  get availableFilters(): AvailableFilter[];
  get lastFilterRef(): MutableRefObject<string | null>;
  setLastFilter(value: string | null): void;
}

abstract class BaseSearchManager implements SearchManager {
  protected currentPage: number;
  protected currentPerPage: number;
  protected currentSort: string;
  protected defaultSort: string;
  protected currentKeywords: string;
  protected currentFilters: Set<string>;
  protected currentViewMode: "grid" | "list" | undefined;
  protected currentAvailableFilters: AvailableFilter[];
  public lastFilterRef: MutableRefObject<string | null>;

  abstract handlePageChange(pageNumber: number): string;
  abstract handleSortChange(id: string): string;
  abstract handleSearchSubmit(enforceSort?: string): string;
  abstract getQueryString(paramsObject: Record<string, any>): string;

  constructor(config: {
    initialPage: number;
    initialPerPage?: number;
    initialSort: string;
    defaultSort: string;
    initialFilters?: Filter[];
    initialKeywords: string;
    initialAvailableFilters?: Record<string, AvailableFilterOption[]>;
    lastFilterRef?: MutableRefObject<string | null>;
    initialViewMode?: "grid" | "list";
  }) {
    this.currentPage = config.initialPage;
    this.currentPerPage =
      config.initialPerPage || getPerPageFromStorage() || CARDS_PER_PAGE;
    setPerPageInStorage(this.currentPerPage);

    this.currentSort = config.initialSort;
    this.defaultSort = config.defaultSort;
    this.currentFilters = new Set(
      (config.initialFilters || []).map((filter) => JSON.stringify(filter))
    );
    this.currentKeywords = config.initialKeywords;
    this.currentViewMode = config.initialViewMode
      ? config.initialViewMode
      : undefined;
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

  get perPage() {
    return this.currentPerPage;
  }

  get filters(): Filter[] {
    return Array.from(this.currentFilters).map((filterStr) =>
      JSON.parse(filterStr)
    );
  }

  setLastFilter(value: string | null): void {
    this.lastFilterRef.current = value;
  }

  get viewMode() {
    const cachedViewMode = getStorageItem(VIEW_MODE_STORAGE_KEY) as
      | "grid"
      | "list"
      | null;
    if (!this.currentViewMode && cachedViewMode) {
      return cachedViewMode;
    }
    return this.currentViewMode || DEFAULT_VIEW_MODE;
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
      perPage: this.currentPerPage,
      filters: filterToString(this.filters),
      viewMode: this.currentViewMode,
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
      perPage: this.currentPerPage,
      filters: filterToString(this.filters),
      viewMode: this.currentViewMode,
    });
  }

  handleViewModeChange(mode: "grid" | "list") {
    setStorageItem(VIEW_MODE_STORAGE_KEY, mode);
    this.currentViewMode = mode;
    return this.getQueryString({
      q: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      perPage: this.currentPerPage,
      filters: filterToString(this.filters),
      viewMode: mode,
    });
  }

  handlePerPageChange(perPage: number) {
    this.currentPerPage = perPage;
    setPerPageInStorage(perPage);
    this.currentPage = DEFAULT_PAGE_NUM;
    return this.getQueryString({
      q: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      perPage,
      filters: filterToString(this.filters),
      viewMode: this.currentViewMode,
    });
  }

  clearAllFilters() {
    this.currentFilters.clear();
    return this.getQueryString({
      q: this.currentKeywords,
      sort: this.currentSort,
      page: DEFAULT_PAGE_NUM,
      perPage: this.currentPerPage,
      filters: filterToString(DEFAULT_FILTERS),
      viewMode: this.currentViewMode,
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
      perPage: this.currentPerPage,
    });
  }

  handlePageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    return this.getQueryString({
      q: this.currentKeywords,
      sort: this.currentSort,
      page: pageNumber,
      perPage: this.currentPerPage,
      filters: filterToString(this.filters),
      viewMode: this.currentViewMode,
    });
  }

  handleSortChange(sort: string) {
    this.currentSort = sort;
    this.currentPage = DEFAULT_PAGE_NUM;
    return this.getQueryString({
      q: this.currentKeywords,
      sort: sort,
      page: this.currentPage,
      perPage: this.currentPerPage,
      filters: filterToString(this.filters),
      viewMode: this.currentViewMode,
    });
  }

  getQueryString = (paramsObject: Record<string, any>) => {
    const newParams: Record<string, string> = {};

    Object.entries(paramsObject).forEach(([key, value]) => {
      if (value == null) return;

      let isDefault = false;

      switch (key) {
        case "q":
          isDefault = value === DEFAULT_SEARCH_TERM;
          break;
        case "page":
          isDefault = value === DEFAULT_PAGE_NUM;
          break;
        case "sort":
          isDefault = value === this.defaultSort;
          break;
        case "perPage":
          isDefault = false;
          break;
        case "filters":
          isDefault = value === "";
          break;
        case "viewMode":
          isDefault = false;
          break;
      }

      if (!isDefault) {
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
      perPage: this.currentPerPage,
    });
  }

  handlePageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    return this.getQueryString({
      q: this.currentKeywords,
      sort: this.currentSort,
      page: pageNumber,
      perPage: this.currentPerPage,
      viewMode: this.currentViewMode,
    });
  }

  handleSortChange(sort: string) {
    this.currentSort = sort;
    return this.getQueryString({
      q: this.currentKeywords,
      sort: sort,
      page: this.currentPage,
      perPage: this.currentPerPage,
      viewMode: this.currentViewMode,
    });
  }

  handleViewModeChange(mode: "grid" | "list") {
    this.currentViewMode = mode;
    return this.getQueryString({
      q: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      perPage: this.currentPerPage,
      viewMode: mode,
    });
  }

  handlePerPageChange(perPage: number) {
    this.currentPerPage = perPage;
    setPerPageInStorage(perPage);
    this.currentPage = DEFAULT_PAGE_NUM;
    return this.getQueryString({
      q: this.currentKeywords,
      sort: this.currentSort,
      page: this.currentPage,
      perPage,
      viewMode: this.currentViewMode,
    });
  }

  getQueryString = (paramsObject: Record<string, any>) => {
    const newParams: Record<string, string> = {};

    Object.entries(paramsObject).forEach(([key, value]) => {
      if (value == null) return;

      let isDefault = false;

      switch (key) {
        case "q":
          isDefault = value === DEFAULT_SEARCH_TERM;
          break;
        case "page":
          isDefault = value === DEFAULT_PAGE_NUM;
          break;
        case "sort":
          isDefault = value === this.defaultSort;
          break;
        case "perPage":
          isDefault = false;
          break;
        case "filters":
          isDefault = value === "";
          break;
        case "viewMode":
          isDefault = false;
          break;
      }

      if (!isDefault) {
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
  const nonSelectableFilters = [
    "form",
    "language",
    "note",
    "occupation",
    "subcollection",
    "temporal",
    "title",
  ];
  return Object.entries(availableFilters)
    .filter(([key]) => !nonSelectableFilters.includes(key))
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
