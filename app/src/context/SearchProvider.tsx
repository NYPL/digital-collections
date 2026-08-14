"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { useSearchParams } from "next/navigation";
import {
  DEFAULT_FILTERS,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_SORT,
  DEFAULT_SEARCH_TERM,
  DEFAULT_VIEW_MODE,
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
  const viewModeFromUrl = urlSearchParams.get("viewMode");
  const validViewMode = (
    mode: string | null | undefined
  ): mode is "grid" | "list" => {
    return mode === "grid" || mode === "list";
  };

  let initialViewMode: "grid" | "list" | undefined;
  if (validViewMode(viewModeFromUrl)) {
    initialViewMode = viewModeFromUrl;
  } else if (validViewMode(searchParams?.viewMode)) {
    initialViewMode = searchParams.viewMode;
  } else {
    initialViewMode = undefined;
  }

  const lastFilterRef = useRef<string | null>(null);

  const searchManager = useMemo(() => {
    const manager = new GeneralSearchManager({
      initialPage: Number(searchParams?.page) || DEFAULT_PAGE_NUM,
      initialPerPage: Number(searchParams?.perPage) || undefined,
      initialSort: searchParams?.sort || DEFAULT_SEARCH_SORT,
      initialFilters: stringToFilter(searchParams?.filters),
      defaultSort: DEFAULT_SEARCH_SORT,
      initialKeywords: searchParams?.q || DEFAULT_SEARCH_TERM,
      initialAvailableFilters:
        searchParams?.availableFilters || DEFAULT_FILTERS,
      lastFilterRef: lastFilterRef,
      initialViewMode: initialViewMode,
    });
    return manager;
  }, [
    searchParams?.page,
    searchParams?.perPage,
    searchParams?.sort,
    searchParams?.filters,
    searchParams?.q,
    searchParams?.availableFilters,
    initialViewMode,
  ]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cachedViewMode = localStorage.getItem("viewMode") as "grid" | "list";

    if (viewModeFromUrl) {
      if (cachedViewMode !== viewModeFromUrl) {
        localStorage.setItem("viewMode", viewModeFromUrl);
      }
    } else if (cachedViewMode && ["grid", "list"].includes(cachedViewMode)) {
      if (searchManager.viewMode !== cachedViewMode) {
        searchManager.handleViewModeChange(cachedViewMode);
      }
    } else {
      searchManager.handleViewModeChange(initialViewMode || DEFAULT_VIEW_MODE);
    }
  }, [viewModeFromUrl, searchManager.viewMode, searchManager, initialViewMode]);

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
