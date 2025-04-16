"use client";
import {
  Box,
  Heading,
  Flex,
  Link,
  Icon,
  Pagination,
} from "@nypl/design-system-react-components";
import React, { useEffect, useRef, useState } from "react";
import Filters from "../../search/filters/filters";
import CollectionStructure from "../../collectionStructure/collectionStructure";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import { CollectionSearch } from "../../search/collectionSearch";
import { MobileSearchBanner } from "../../mobileSearchBanner/mobileSearchBanner";
import { displayResults, totalNumPages } from "@/src/utils/utils";
import {
  CARDS_PER_PAGE,
  DEFAULT_FILTERS,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_SORT,
  DEFAULT_SEARCH_TERM,
  SEARCH_SORT_LABELS,
} from "@/src/config/constants";
import SearchCardsGrid from "../../grids/searchCardsGrid";
import {
  GeneralSearchManager,
  stringToFilter,
} from "@/src/utils/searchManager";
import { usePathname, useRouter } from "next/navigation";
import SortMenu from "../../sortMenu/sortMenu";
import ActiveFilters from "../../search/filters/activeFilters";
import CollectionMetadata from "../../collectionMetadata/collectionMetadata";
import { SearchResultsType } from "../searchPage/searchPage";
import NoResultsFound from "../../results/noResultsFound";

type CollectionPageProps = {
  searchResults: SearchResultsType;
  searchParams;
  collectionData;
};

const CollectionPage = ({
  searchResults,
  searchParams,
  collectionData,
}: CollectionPageProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isFirstLoad = useRef<boolean>(false);
  const collectionSearchManager = new GeneralSearchManager({
    initialPage: Number(searchParams?.page) || DEFAULT_PAGE_NUM,
    initialSort: searchParams?.sort || DEFAULT_SEARCH_SORT,
    initialFilters: stringToFilter(searchParams?.filters),
    initialKeywords: searchParams?.q || DEFAULT_SEARCH_TERM,
    initialAvailableFilters: searchParams?.availableFilters || DEFAULT_FILTERS,
  });

  const totalPages = totalNumPages(
    searchResults.numResults.toString(),
    CARDS_PER_PAGE
  );
  const { push } = useRouter();
  const pathname = usePathname();

  const updateURL = async (queryString) => {
    push(`${pathname}?${queryString}`, { scroll: false });
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
        }}
      >
        <Box
          maxWidth="1280px"
          mx="auto"
          sx={{ paddingLeft: { base: 0, xl: "s" } }}
        >
          <Heading
            level="h1"
            size="heading2"
            sx={{
              maxWidth: "1250px",
              marginBottom: "m",
            }}
          >
            {collectionData.title}
          </Heading>
          <Filters
            headingText="Refine your results"
            searchManager={collectionSearchManager}
          />
        </Box>
      </Box>
      <Box
        maxWidth="1280px"
        mx="auto"
        sx={{
          paddingLeft: { base: "m", xl: "s" },
          paddingRight: { base: "m", xl: "s" },
        }}
      >
        <ActiveFilters searchManager={collectionSearchManager} />
        <CollectionMetadata data={collectionData} />
        <Flex
          gap="xxl"
          sx={{
            flexDir: { base: "column", md: "row" },
          }}
        >
          <CollectionStructure
            uuid={collectionData.uuid}
            searchManager={collectionSearchManager}
            updateURL={updateURL}
          />
          <Box width="100%">
            <CollectionSearch
              searchManager={collectionSearchManager}
              updateURL={updateURL}
              keyword={searchResults.keyword}
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
              {searchResults.results.length > 0 && (
                <>
                  <Heading
                    size="heading5"
                    ref={headingRef}
                    tabIndex={-1}
                    margin="0"
                    aria-live="polite"
                  >
                    {`Displaying
                    ${displayResults(
                      searchResults.numResults,
                      CARDS_PER_PAGE,
                      1
                    )}
                    results`}
                  </Heading>
                  <SortMenu
                    options={SEARCH_SORT_LABELS}
                    searchManager={collectionSearchManager}
                    updateURL={updateURL}
                  />
                </>
              )}
            </Flex>

            {searchResults.results.length > 0 ? (
              <>
                <SearchCardsGrid
                  keywords={searchResults.keyword}
                  results={searchResults.results}
                />
                <Flex marginTop="xxl" marginBottom="xxl" alignContent="center">
                  <Link
                    minWidth="100px"
                    isUnderlined={false}
                    hasVisitedState={false}
                    gap="xxs"
                    type="action"
                    href="#"
                  >
                    Back to top{"  "}
                    <Icon name="arrow" iconRotation="rotate180" size="xsmall" />
                  </Link>
                  <Pagination
                    id="pagination-id"
                    initialPage={1}
                    currentPage={1}
                    pageCount={totalPages}
                    onPageChange={(newPage) => {
                      updateURL(
                        collectionSearchManager.handlePageChange(newPage)
                      );
                    }}
                    sx={{
                      justifyContent: "flex-end",
                      gap: "s",
                    }}
                  />
                </Flex>
              </>
            ) : (
              <NoResultsFound
                searchTerm={searchResults.keyword}
                page={searchResults.page}
              />
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CollectionPage;
