"use client";
import React, { createContext, useContext, useMemo } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
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

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchManager = useMemo(() => {
    const params = Object.fromEntries(searchParams.entries());

    return new SearchManager({
      initialPage: Number(params.page) || DEFAULT_PAGE_NUM,
      initialSort: params.sort || DEFAULT_SORT,
      initialFilters: params.filters
        ? (JSON.parse(params.filters) as Filter[])
        : DEFAULT_FILTERS,
      initialKeywords: params.keywords || DEFAULT_SEARCH_TERM,
      updateURL: async (queryString: string) => {
        push(`${pathname}?${queryString}`);
      },
      isCollectionSearch: params.isCollectionSearch === "true",
    });
  }, [pathname, searchParams, push]);

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
