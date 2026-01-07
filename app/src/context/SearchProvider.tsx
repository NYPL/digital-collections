"use client";
import React, { createContext, useContext, useRef, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  DEFAULT_FILTERS,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_SORT,
  DEFAULT_SEARCH_TERM,
} from "../config/constants";
import {
  GeneralSearchManager,
  SearchManager,
  stringToFilter,
} from "../utils/searchManager/searchManager";

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
  const urlSearchParams = useSearchParams();
  const viewModeFromUrl = urlSearchParams.get("viewMode") as
    | "grid"
    | "list"
    | null;

  const lastFilterRef = useRef<string | null>(null);

  const searchManager = useMemo(() => {
    const manager = new GeneralSearchManager({
      initialPage: Number(searchParams?.page) || DEFAULT_PAGE_NUM,
      initialSort: searchParams?.sort || DEFAULT_SEARCH_SORT,
      initialFilters: stringToFilter(searchParams?.filters),
      defaultSort: DEFAULT_SEARCH_SORT,
      initialKeywords: searchParams?.q || DEFAULT_SEARCH_TERM,
      initialAvailableFilters:
        searchParams?.availableFilters || DEFAULT_FILTERS,
      lastFilterRef: lastFilterRef,
      initialViewMode: viewModeFromUrl || searchParams?.viewMode,
    });
    return manager;
  }, [
    searchParams?.page,
    searchParams?.sort,
    searchParams?.filters,
    searchParams?.q,
    searchParams?.availableFilters,
    searchParams?.viewMode,
    viewModeFromUrl,
  ]);

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
