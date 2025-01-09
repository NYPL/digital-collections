"use client";
import React, { createContext, useContext, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  DEFAULT_PAGE_NUM,
  DEFAULT_SORT,
  DEFAULT_SEARCH_TERM,
  DEFAULT_FILTERS,
} from "../config/constants";
import { Filter, SearchManager } from "../utils/searchManager";

interface SearchContextType {
  searchManager: SearchManager;
}

export const stringToFilter = (filtersString: string | null): Filter[] => {
  console.log("filtersString", filtersString);
  if (!filtersString) return [];

  const res = filtersString
    .split(",")
    .map((filterPair) => {
      const match = filterPair.match(/^\[(\w+)=(.+)\]$/);
      if (match) {
        const [, filter, value] = match;
        return { filter, value };
      }
      return null;
    })
    .filter((filter): filter is Filter => filter !== null);
  console.log("hello");
  console.log("parsed filters", res);
  return res;
};

export const filterToString = (filters: Filter[]): string => {
  if (!filters || filters.length === 0) return "";

  return filters.map(({ filter, value }) => `[${filter}=${value}]`).join(",");
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const searchParams = new URLSearchParams();

  const searchManager = useMemo(() => {
    const params = Object.fromEntries(searchParams.entries());

    return new SearchManager({
      initialPage: Number(params.page) || DEFAULT_PAGE_NUM,
      initialSort: params.sort || DEFAULT_SORT,
      initialFilters: stringToFilter(params.filters || "") || DEFAULT_FILTERS,
      initialKeywords: params.keywords || DEFAULT_SEARCH_TERM,
      isCollectionSearch: params.isCollectionSearch === "true",
    });
  }, [pathname, searchParams]);

  return (
    <SearchContext.Provider value={{ searchManager }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within the SearchProvider");
  }
  return context;
};
