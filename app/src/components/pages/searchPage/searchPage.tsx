"use client";
import {
  Box,
  Heading,
  Flex,
  Link,
  Icon,
} from "@nypl/design-system-react-components";
import React, { useEffect, useRef, useState } from "react";
import {
  SEARCH_SORT_LABELS,
  RESULTS_PER_PAGE_OPTIONS,
} from "@/src/config/constants";
import { displayResults, totalNumPages } from "@/src/utils/utils";
import Filters from "../../search/filters/filters";
import { useSearchContext } from "@/src/context/SearchProvider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SearchCardsGrid from "../../grids/searchCardsGrid";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import { MobileSearchBanner } from "../../mobileSearchBanner/mobileSearchBanner";
import ViewingOptionsMenu from "../../viewingOptionsMenu/viewingOptionsMenu";
import ActiveFilters from "../../search/filters/activeFilters";
import NoResultsFound from "../../results/noResultsFound";
import SearchCardGridLoading from "../../grids/searchCardGridLoading";
import { SearchResultsType } from "@/src/types/SearchResultsType";
import { useSubcollectionRedirect } from "@/src/hooks/useSubcollectionRedirect";
import useBreakpoints from "@/src/hooks/useBreakpoints";
import useSearchAnalytics from "@/src/hooks/useSearchAnalytics";
import BottomPaginationSection from "../../bottomPaginationSection/bottomPaginationSection";
import { resolveGridColumns } from "@/src/utils/gridColumns";

const SearchPage = ({
  searchResults,
}: {
  searchResults: SearchResultsType;
}) => {
  const { searchManager } = useSearchContext();
  const currentPerPage = searchResults.perPage || searchManager.perPage;
  const totalPages = totalNumPages(
    searchResults.numResults.toString(),
    currentPerPage
  );
  const { push } = useRouter();
  const pathname = usePathname();
  const urlSearchParams = useSearchParams();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const refineHeadingRef = useRef<HTMLHeadingElement>(null);
  const isFirstLoad = useRef<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [pendingViewMode, setPendingViewMode] = useState<
    "grid" | "list" | null
  >(null);
  const [pendingNumColumns, setPendingNumColumns] = useState<number | null>(
    null
  );
  const {
    isLargerThanSmallTablet,
    isLargerThanLargeMobile,
    isLargerThanLargeTablet,
  } = useBreakpoints();
  const baseGridColumns = 4;
  const largeMobileGridColumns = 2;
  const [isBreakpointsHydrated, setIsBreakpointsHydrated] = useState(false);

  useEffect(() => {
    setIsBreakpointsHydrated(true);
  }, []);

  const effectiveViewMode =
    isBreakpointsHydrated && !isLargerThanLargeMobile
      ? "list"
      : pendingViewMode || searchManager.viewMode;

  const effectiveNumColumns =
    pendingNumColumns ??
    resolveGridColumns({
      viewMode: effectiveViewMode,
      baseColumns: baseGridColumns,
      largeMobileColumns: largeMobileGridColumns,
      isLargerThanLargeMobile,
      isLargerThanSmallTablet,
      isLargerThanLargeTablet,
    });

  const updateURL = async (queryString: string) => {
    const currentQueryString = window.location.search;
    const newUrl = `${pathname}?${queryString}`;

    if (
      currentQueryString === queryString ||
      currentQueryString === `?${queryString}`
    ) {
      headingRef.current?.focus();
      return;
    } else {
      setIsLoaded(false);
      push(newUrl);
    }
  };

  useEffect(() => {
    if (urlSearchParams.has("perPage")) {
      return;
    }

    if (searchManager.perPage !== searchResults.perPage) {
      const query = searchManager.handlePageChange(searchResults.page);
      setIsLoaded(false);
      push(`${pathname}?${query}`);
    }
  }, [
    pathname,
    push,
    searchManager,
    searchResults.page,
    searchResults.perPage,
    urlSearchParams,
  ]);

  useEffect(() => {
    setIsLoaded(true);
    setPendingViewMode(null);
    setPendingNumColumns(null);
    let didFocusElement = false;
    if (
      (searchManager.lastFilterRef?.current &&
        searchManager.filters.length > 0) ||
      searchManager.sort
    ) {
      // Search for the button, input, or text element associated with the last used filter/sort
      const selectors = ["button", "input", "p", "h2"];

      for (const selector of selectors) {
        const el = document.querySelector(
          `${selector}[id="${searchManager.lastFilterRef.current}"]`
        );
        if (el) {
          (el as HTMLElement).focus();
          didFocusElement = true;
          break;
        }
      }
    }
    if (!didFocusElement && isFirstLoad.current) {
      setFiltersExpanded(false);
      headingRef.current?.focus();
    }

    isFirstLoad.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults, searchManager.viewMode]);

  useSearchAnalytics(searchManager, searchResults.numResults);
  useSubcollectionRedirect();

  return (
    <Box id="searchPageContent">
      <MobileSearchBanner />
      <Box
        sx={{
          background: "ui.bg.default",
          padding: "l",
          marginBottom: "m",
        }}
      >
        <Box
          maxWidth="1280px"
          mx="auto"
          sx={{
            paddingLeft: 0,
            [`@media screen and (min-width: ${headerBreakpoints.desktop}px)`]: {
              paddingLeft: "s",
            },
          }}
        >
          {searchResults.results?.length > 0 ? (
            <>
              <Heading
                size="heading2"
                sx={{
                  maxWidth: "1250px",
                  marginBottom: "m",
                }}
              >
                {`Displaying ${displayResults(
                  searchResults.numResults,
                  currentPerPage,
                  searchResults.page
                )}
            results ${
              searchManager.keywords?.length > 0
                ? `for "${searchManager.keywords}"`
                : ``
            }
            `}
              </Heading>
            </>
          ) : (
            <Heading
              size="heading2"
              sx={{
                maxWidth: "1250px",
                marginBottom: "l",
              }}
            >
              {`No results ${
                searchManager.keywords?.length > 0
                  ? `for "${searchManager.keywords}"`
                  : ``
              }
              `}
            </Heading>
          )}
          <Filters
            searchManager={searchManager}
            headingText="Refine your search"
            refineHeadingRef={refineHeadingRef}
            filtersExpanded={filtersExpanded}
            setFiltersExpanded={setFiltersExpanded}
          />
        </Box>
      </Box>
      <Box
        maxWidth="1280px"
        mx="auto"
        sx={{
          paddingLeft: "m",
          paddingRight: "m",
          [`@media screen and (min-width: ${headerBreakpoints.desktop}px)`]: {
            paddingLeft: "s",
            paddingRight: "s",
          },
          marginTop: searchResults.results?.length > 0 ? "0" : "m",
        }}
      >
        <ActiveFilters
          searchManager={searchManager}
          allFilters={searchResults.availableFilters}
        />
        <Flex
          sx={{
            [`@media screen and (min-width: ${headerBreakpoints.lgTablet}px)`]:
              {
                flexDir: "row",
                marginBottom: "s",
                alignItems: "center",
              },
            justifyContent: "space-between",
            flexDir: "column",
            marginBottom: "l",
            marginTop: "l",
            gap: "m",
            alignItems: "flex-start",
          }}
        >
          {searchResults.results?.length > 0 ? (
            <>
              <Heading
                size="heading5"
                aria-live="polite"
                ref={headingRef}
                aria-atomic="true"
                // @ts-ignore
                tabIndex="-1"
                margin="0"
              >{`Displaying ${displayResults(
                searchResults.numResults,
                currentPerPage,
                searchManager.page
              )} results`}</Heading>
              <ViewingOptionsMenu
                options={SEARCH_SORT_LABELS}
                sort={searchResults.sort}
                searchManager={searchManager}
                perPageOptions={
                  isLargerThanSmallTablet ? RESULTS_PER_PAGE_OPTIONS : []
                }
                setFiltersExpanded={setFiltersExpanded}
                updateURL={updateURL}
                showViewModeButtons={isLargerThanSmallTablet}
                onViewModeChangeStart={(viewMode) => {
                  setPendingViewMode(viewMode);
                  const nextColumns = resolveGridColumns({
                    viewMode,
                    baseColumns: baseGridColumns,
                    largeMobileColumns: largeMobileGridColumns,
                    isLargerThanLargeMobile,
                    isLargerThanSmallTablet,
                    isLargerThanLargeTablet,
                  });
                  setPendingNumColumns(nextColumns);
                }}
              />{" "}
            </>
          ) : (
            <NoResultsFound
              searchTerm={searchResults.keyword}
              page={searchResults.page}
            />
          )}
        </Flex>
        {searchResults.numResults > 0 && (
          <>
            {isLoaded ? (
              <SearchCardsGrid
                keywords={searchResults.keyword}
                results={searchResults.results}
                viewMode={effectiveViewMode}
                numColumns={baseGridColumns}
                largeMobileColumns={largeMobileGridColumns}
                resolvedColumns={effectiveNumColumns}
              />
            ) : (
              [...Array(12)].map((_, index) => (
                <SearchCardGridLoading
                  id={index}
                  key={index}
                  viewMode={effectiveViewMode}
                  numColumns={effectiveNumColumns}
                />
              ))
            )}

            <BottomPaginationSection
              currentPage={searchManager.page}
              initialPage={searchManager.page}
              pageCount={totalPages}
              onPageChange={(newPage) => {
                setFiltersExpanded(false);
                searchManager.setLastFilter(null);
                updateURL(searchManager.handlePageChange(newPage));
              }}
              rightContent={
                isLargerThanSmallTablet ? (
                  <ViewingOptionsMenu
                    options={SEARCH_SORT_LABELS}
                    sort={searchResults.sort}
                    searchManager={searchManager}
                    perPageOptions={RESULTS_PER_PAGE_OPTIONS}
                    setFiltersExpanded={setFiltersExpanded}
                    updateURL={updateURL}
                    showSortMenu={false}
                    showViewModeButtons={false}
                    perPageMenuId="results-per-page-menu-bottom"
                  />
                ) : null
              }
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default SearchPage;
