// "use client";
// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useMemo,
//   useRef,
// } from "react";
// import { usePathname, useSearchParams } from "next/navigation";
// import {
//   DEFAULT_PAGE_NUM,
//   DEFAULT_SORT,
//   DEFAULT_SEARCH_TERM,
// } from "../config/constants";
// import { Filter, SearchManager } from "../utils/searchManager";

// interface SearchContextType {
//   searchManager: SearchManager;
// }

// export const stringToFilter = (filtersString: string | null): Filter[] => {
//   if (!filtersString) return [];

//   const res = filtersString
//     .split(",")
//     .map((filterPair) => {
//       //??
//       const match = filterPair.match(/^\[(\w+)=(.+)\]$/);
//       if (match) {
//         const [, filter, value] = match;
//         return { filter, value };
//       }
//       return null;
//     })
//     .filter((filter): filter is Filter => filter !== null);
//   return res;
// };

// export const filterToString = (filters: Filter[]): string => {
//   if (!filters || filters.length === 0) return "";

//   return filters.map(({ filter, value }) => `[${filter}=${value}]`).join(",");
// };

// const SearchContext = createContext<SearchContextType | undefined>(undefined);

// export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   // const searchManager = useMemo(() => {
//   //   const params = Object.fromEntries(searchParams.entries());

//   //   return new SearchManager({
//   //     initialPage: Number(params.page) || DEFAULT_PAGE_NUM,
//   //     initialSort: params.sort || DEFAULT_SORT,
//   //     initialFilters: stringToFilter(params.filters),
//   //     initialKeywords: params.keywords || DEFAULT_SEARCH_TERM,
//   //     isCollectionSearch: params.isCollectionSearch === "true",
//   //   });
//   // }, [pathname, searchParams]);

//   const searchManagerRef = useRef<SearchManager>(
//     new SearchManager({
//       initialPage: DEFAULT_PAGE_NUM,
//       initialSort: DEFAULT_SORT,
//       initialFilters: [],
//       initialKeywords: DEFAULT_SEARCH_TERM,
//       isCollectionSearch: false,
//     })
//   );

//   useEffect(() => {
//     const params = Object.fromEntries(searchParams.entries());
//     searchManagerRef.current.update({
//       page: Number(params.page) || DEFAULT_PAGE_NUM,
//       sort: params.sort || DEFAULT_SORT,
//       filters: stringToFilter(params.filters),
//       keywords: params.keywords || DEFAULT_SEARCH_TERM,
//       isCollectionSearch: params.isCollectionSearch === "true",
//     });
//   }, [pathname, searchParams]);

//   return (
//     <SearchContext.Provider value={{ searchManager: searchManagerRef.current }}>
//       {children}
//     </SearchContext.Provider>
//   );
// };

// export const useSearchContext = (): SearchContextType => {
//   const context = useContext(SearchContext);
//   if (!context) {
//     throw new Error("useSearchContext must be inside SearchProvider");
//   }
//   return context;
// };

"use client";
import React, { createContext, useContext } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  DEFAULT_PAGE_NUM,
  DEFAULT_SORT,
  DEFAULT_SEARCH_TERM,
} from "../config/constants";
import { Filter, SearchManager } from "../utils/searchManager";

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
  return filters.map(({ filter, value }) => `[${filter}=${value}]`).join(",");
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  //const pathname = usePathname();
  const searchParams = useSearchParams(); // Forces re-render

  const params = Object.fromEntries(searchParams.entries());

  const searchManager = new SearchManager({
    initialPage: Number(params.page) || DEFAULT_PAGE_NUM,
    initialSort: params.sort || DEFAULT_SORT,
    initialFilters: stringToFilter(params.filters),
    initialKeywords: params.keywords || DEFAULT_SEARCH_TERM,
    isCollectionSearch: params.isCollectionSearch === "true",
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
