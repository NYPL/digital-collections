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
import { headerBreakpoints } from "@/src/utils/breakpoints";
import { CollectionSearch } from "../../search/collectionSearch";
import { MobileSearchBanner } from "../../mobileSearchBanner/mobileSearchBanner";
import { displayResults, totalNumPages } from "@/src/utils/utils";
import {
  CARDS_PER_PAGE,
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
import NoResultsFound from "../../results/noResultsFound";
import SearchCardGridLoading from "../../grids/searchCardGridLoading";
import CollectionStructure from "../../collectionStructure/collectionStructure";
import BackToTopLink from "../../backToTopLink/backToTopLink";
import CollectionMetadata, {
  CollectionMetadataProps,
} from "../../collectionMetadata/collectionMetadata";
import CollectionSearchParamsType from "@/src/types/CollectionSearchParams";
import { SearchResultsType } from "@/src/types/SearchResultsType";

type CollectionPageProps = {
  searchResults: SearchResultsType;
  searchParams: CollectionSearchParamsType;
  collectionData: CollectionMetadataProps;
};

const CollectionPage = ({
  searchResults,
  searchParams,
  collectionData,
}: CollectionPageProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isFirstLoad = useRef<boolean>(false);
  const [filtersExpanded, setFiltersExpanded] = useState(false);

  const collectionSearchManager = new GeneralSearchManager({
    initialPage: Number(searchParams?.page) || DEFAULT_PAGE_NUM,
    initialSort: searchParams?.sort || DEFAULT_SEARCH_SORT,
    initialFilters: stringToFilter(searchParams?.filters),
    initialKeywords: searchParams?.q || DEFAULT_SEARCH_TERM,
    initialAvailableFilters: searchParams?.availableFilters,
    lastFilterRef: useRef<string | null>(null),
  });

  const totalPages = totalNumPages(
    searchResults.numResults.toString(),
    CARDS_PER_PAGE
  );
  const { push } = useRouter();
  const pathname = usePathname();

  const updateURL = async (queryString) => {
    setIsLoaded(false);
    push(`${pathname}?${queryString}`, { scroll: false });
  };
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    let didFocusElement = false;
    if (
      collectionSearchManager.lastFilterRef?.current &&
      (collectionSearchManager.filters.length > 0 ||
        collectionSearchManager.sort !== "relevance")
    ) {
      // Search for the button, input, or text element associated with the last used filter/sort
      const selectors = ["button", "input", "p"];

      for (const selector of selectors) {
        const el = document.querySelector(
          `${selector}[id="${collectionSearchManager.lastFilterRef.current}"]`
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
            setFiltersExpanded={setFiltersExpanded}
            filtersExpanded={filtersExpanded}
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
            updateURL={updateURL}
            searchManager={collectionSearchManager}
          />
          <Box width="100%">
            <CollectionSearch
              searchManager={collectionSearchManager}
              key={searchResults.keyword.length}
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
                    aria-live="polite"
                    // @ts-ignore
                    tabIndex="-1"
                    margin="0"
                  >{`Displaying ${displayResults(
                    searchResults.numResults,
                    CARDS_PER_PAGE,
                    collectionSearchManager.page
                  )} results`}</Heading>
                  <SortMenu
                    options={SEARCH_SORT_LABELS}
                    searchManager={collectionSearchManager}
                    updateURL={updateURL}
                    setFiltersExpanded={setFiltersExpanded}
                  />
                </>
              )}
            </Flex>

            {searchResults.results.length > 0 ? (
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
                <Flex marginTop="xxl" marginBottom="xxl" alignContent="center">
                  <BackToTopLink />
                  <Pagination
                    id="pagination-id"
                    initialPage={1}
                    currentPage={collectionSearchManager.page}
                    pageCount={totalPages}
                    onPageChange={(newPage) => {
                      collectionSearchManager.setLastFilter(null);
                      setIsLoaded(false);
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
