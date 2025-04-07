"use client";
import {
  Box,
  Pagination,
  Heading,
  Flex,
  Link,
  Icon,
} from "@nypl/design-system-react-components";
import React, { useEffect, useRef } from "react";
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

const SearchPage = ({ searchResults }) => {
  const { searchManager } = useSearchContext();
  const totalPages = totalNumPages(searchResults.numResults, CARDS_PER_PAGE);
  const { push } = useRouter();
  const pathname = usePathname();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isFirstLoad = useRef<boolean>(false);

  const updateURL = async (queryString: string) => {
    const newUrl = `${pathname}?${queryString}`;
    push(newUrl);
  };

  useEffect(() => {
    if (isFirstLoad.current) {
      headingRef.current?.focus();
    }
    isFirstLoad.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults]);

  return (
    <Box id="mainContent">
      <MobileSearchBanner />
      <Box
        sx={{
          background: "ui.bg.default",
          padding: "l",
          marginBottom: "m",
          display: searchResults.results?.length > 0 ? "block" : "none",
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

              <Filters
                searchManager={searchManager}
                headingText="Refine your search"
              />
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
        <ActiveFilters searchManager={searchManager} />
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
                ref={headingRef}
                tabIndex={-1}
                margin="0"
              >{`Displaying ${displayResults(
                searchResults.numResults,
                CARDS_PER_PAGE,
                searchManager.page
              )} results`}</Heading>
              <SortMenu
                options={SEARCH_SORT_LABELS}
                searchManager={searchManager}
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
            <SearchCardsGrid
              keywords={searchResults.keyword}
              results={searchResults}
            />
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
                [`@media screen and (min-width: ${headerBreakpoints.lgMobile}px)`]:
                  {
                    "> a": {
                      marginTop: "0",
                    },
                    flexDir: "row",
                  },
                flexDir: "column-reverse",
              }}
            >
              <Link
                minWidth="100px"
                isUnderlined={false}
                hasVisitedState={false}
                gap="xxs"
                type="action"
                href="#"
                sx={{
                  display: searchResults.results?.length > 0 ? "block" : "none",
                }}
              >
                Back to top{"  "}
                <Icon name="arrow" iconRotation="rotate180" size="xsmall" />
              </Link>{" "}
              <Pagination
                id="pagination-id"
                initialPage={searchManager.page}
                currentPage={searchManager.page}
                pageCount={totalPages}
                onPageChange={(newPage) => {
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
