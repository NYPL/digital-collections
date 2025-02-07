"use client";
import React, { createContext, useContext } from "react";
import {
  DEFAULT_PAGE_NUM,
  DEFAULT_SORT,
  DEFAULT_SEARCH_TERM,
} from "../config/constants";
import { GeneralSearchManager, SearchManager } from "../utils/searchManager";
import { Filter } from "../types/FilterType";

interface SearchContextType {
  searchManager: SearchManager;
}

export const stringToFilter = (filtersString: string | null): Filter[] => {
  if (!filtersString) return [];

  return filtersString
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
};

export const filterToString = (filters: Filter[]): string => {
  if (!filters || filters.length === 0) return "";
  return filters.map(({ filter, value }) => `[${filter}=${value}]`).join("");
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({
  searchParams,
  children,
}: {
  searchParams?;
  children: React.ReactNode;
}) => {
  const searchManager = new GeneralSearchManager({
    initialPage: Number(searchParams?.page) || DEFAULT_PAGE_NUM,
    initialSort: searchParams?.sort || DEFAULT_SORT,
    initialFilters: stringToFilter(searchParams?.filters),
    initialKeywords: searchParams?.keywords || DEFAULT_SEARCH_TERM,
  });

  return (
    <SearchContext.Provider value={{ searchManager }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be inside SearchProvider");
  }
  return context;
};
