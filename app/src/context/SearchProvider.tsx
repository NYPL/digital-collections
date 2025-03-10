"use client";
import React, { createContext, useContext } from "react";
import {
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_SORT,
  DEFAULT_SEARCH_TERM,
} from "../config/constants";
import {
  GeneralSearchManager,
  SearchManager,
  stringToFilter,
} from "../utils/searchManager";
import { mockFacetFilters } from "__tests__/__mocks__/data/mockFacetFilters";

interface SearchContextType {
  searchManager: SearchManager;
}

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
    initialSort: searchParams?.sort || DEFAULT_SEARCH_SORT,
    initialFilters: stringToFilter(searchParams?.filters),
    initialKeywords: searchParams?.keywords || DEFAULT_SEARCH_TERM,
    initialFacets: mockFacetFilters,
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
