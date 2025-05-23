"use client";
import {
  Box,
  Pagination,
  Heading,
  Flex,
  Link,
  Icon,
} from "@nypl/design-system-react-components";
import React, { useEffect, useRef, useState } from "react";
import { CARDS_PER_PAGE, SEARCH_SORT_LABELS } from "@/src/config/constants";
import { displayResults, totalNumPages } from "@/src/utils/utils";
import Filters from "../../search/filters/filters";
import { useSearchContext } from "@/src/context/SearchProvider";
import { usePathname, useRouter } from "next/navigation";
import SearchCardsGrid from "../../grids/searchCardsGrid";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import { MobileSearchBanner } from "../../mobileSearchBanner/mobileSearchBanner";
import SortMenu from "../../sortMenu/sortMenu";
import ActiveFilters from "../../search/filters/activeFilters";
import NoResultsFound from "../../results/noResultsFound";
import SearchCardGridLoading from "../../grids/searchCardGridLoading";
import BackToTopLink from "../../backToTopLink/backToTopLink";
import { SearchResultsType } from "@/src/types/SearchResultsType";
import { useSubcollectionRedirect } from "@/src/hooks/useSubcollectionRedirect";

const SearchPage = ({
  searchResults,
}: {
  searchResults: SearchResultsType;
}) => {
  const { searchManager } = useSearchContext();
  const totalPages = totalNumPages(
    searchResults.numResults.toString(),
    CARDS_PER_PAGE
  );
  const { push } = useRouter();
  const pathname = usePathname();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const refineHeadingRef = useRef<HTMLHeadingElement>(null);
  const isFirstLoad = useRef<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filtersExpanded, setFiltersExpanded] = useState(false);

  const updateURL = async (queryString: string) => {
    setIsLoaded(false);
    const newUrl = `${pathname}?${queryString}`;
    push(newUrl);
  };
  useEffect(() => {
    setIsLoaded(true);
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
  }, [searchResults]);

  useSubcollectionRedirect();

  return (
    <Box id="mainContent">
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
                  CARDS_PER_PAGE,
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
            [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]:
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
                CARDS_PER_PAGE,
                searchManager.page
              )} results`}</Heading>
              <SortMenu
                options={SEARCH_SORT_LABELS}
                sort={searchResults.sort}
                searchManager={searchManager}
                setFiltersExpanded={setFiltersExpanded}
                updateURL={updateURL}
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
              />
            ) : (
              [...Array(12)].map((_, index) => (
                <SearchCardGridLoading id={index} key={index} />
              ))
            )}

            <Flex
              paddingLeft="s"
              paddingRight="s"
              marginTop="xxl"
              marginBottom="xxl"
              sx={{
                "> a": {
                  marginTop: "xl",
                  justifyContent: "end",
                },
                paddingLeft: "s",
                paddingRight: "s",
                [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]:
                  {
                    "> a": {
                      marginTop: "0",
                    },
                    flexDir: "row",
                    paddingLeft: 0,
                    paddingRight: 0,
                  },
                flexDir: "column-reverse",
              }}
            >
              {searchResults.results?.length > 0 && <BackToTopLink />}{" "}
              <Pagination
                id="pagination-id"
                initialPage={searchManager.page}
                currentPage={searchManager.page}
                pageCount={totalPages}
                onPageChange={(newPage) => {
                  setFiltersExpanded(false);
                  searchManager.setLastFilter(null);
                  updateURL(searchManager.handlePageChange(newPage));
                }}
                sx={{
                  justifyContent: "center",
                  [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]:
                    {
                      justifyContent: "flex-end",
                    },
                }}
              />
            </Flex>
          </>
        )}
      </Box>
    </Box>
  );
};

export default SearchPage;
