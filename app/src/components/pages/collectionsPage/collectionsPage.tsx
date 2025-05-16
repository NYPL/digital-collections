"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Heading,
  HorizontalRule,
  Pagination,
  Flex,
  Spacer,
} from "@nypl/design-system-react-components";
import { usePathname, useRouter } from "next/navigation";
import { displayResults, totalNumPages } from "../../../utils/utils";
import NoResultsFound from "../../results/noResultsFound";
import LaneLoading from "../../lane/laneLoading";
import { CardsGrid } from "../../grids/cardsGrid";
import {
  DEFAULT_PAGE_NUM,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_SEARCH_TERM,
  COLLECTION_SORT_LABELS,
  DEFAULT_SEARCH_SORT,
} from "@/src/config/constants";
import { CollectionSearchManager } from "@/src/utils/searchManager";
import { headerBreakpoints } from "@/src/utils/breakpoints";
import DCSearchBar from "../../search/dcSearchBar";
import SortMenu from "../../sortMenu/sortMenu";

export function CollectionsPage({ data, collectionsSearchParams }) {
  const { push } = useRouter();
  const pathname = usePathname();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isFirstLoad = useRef<boolean>(false);

  const [isLoaded, setIsLoaded] = useState(false);
  const totalPages = totalNumPages(data.numResults, data.perPage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const collections = data.collections
    ? Array.isArray(data.collections)
      ? data.collections
      : [data.collections]
    : [];

  const collectionsSearchManager = new CollectionSearchManager({
    initialPage: Number(collectionsSearchParams?.page) || DEFAULT_PAGE_NUM,
    initialSort: collectionsSearchParams?.sort || DEFAULT_COLLECTION_SORT,
    defaultSort: DEFAULT_COLLECTION_SORT,
    initialKeywords: collectionsSearchParams?.q || DEFAULT_SEARCH_TERM,
    lastFilterRef: useRef<string | null>(null),
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
    setIsLoaded(true);
    let didFocusElement = false;
    if (
      collectionsSearchManager.lastFilterRef?.current ||
      collectionsSearchManager.sort
    ) {
      // Search for the button, input, or text element associated with the last used filter/sort
      const selectors = ["button", "input", "p", "h2"];

      for (const selector of selectors) {
        const el = document.querySelector(
          `${selector}[id="${collectionsSearchManager.lastFilterRef.current}"]`
        );
        if (el) {
          (el as HTMLElement).focus();
          didFocusElement = true;
          break;
        }
      }
    }
    if (!didFocusElement && isFirstLoad.current) {
      headingRef.current?.focus();
    }

    isFirstLoad.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collections]);

  return (
    <>
      <Box
        sx={{
          maxWidth: "730px",
          display: "flex",
          flexDirection: "column",
          "> hgroup": {
            marginBottom: 0,
          },
          [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
            maxWidth: "715px",
          },
          "> hgroup > p": {
            fontWeight: "400 !important",
          },
          "> a > span": {
            fontWeight: "500",
          },
          gap: "m",
        }}
      >
        <Heading
          level="h1"
          text="Collections"
          subtitle="Explore the New York Public Library's diverse collections, including digitized photographs, manuscripts, maps, and more. Start exploring by using the search bar below or browse through the collections."
        />
        <DCSearchBar
          id="search-collections"
          labelText="Search collections by title"
          maxWrapperWidth="462px"
          textInputProps={{
            id: "collections-search-text",
            isClearable: true,
            isClearableCallback: () =>
              collectionsSearchManager.handleKeywordChange(DEFAULT_SEARCH_TERM),
            labelText: "Search by collection title",
            name: "collection_keywords",
            placeholder: "Search by collection title",
            defaultValue: data.keywords,
            onChange: (e) =>
              collectionsSearchManager.handleKeywordChange(
                (e.target as HTMLInputElement).value
              ),
          }}
          onSubmit={() => {
            collectionsSearchManager.setLastFilter(null);
            updateURL(collectionsSearchManager.handleSearchSubmit());
          }}
        />
      </Box>

      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      <Flex sx={{ alignItems: "center" }}>
        <Heading
          size="heading5"
          sx={{
            display: collections?.length > 0 ? "flex" : "none",
            marginBottom: "l",
          }}
          ref={headingRef}
          tabIndex={-1}
          id="collections"
          width="max-content"
        >
          {`Displaying ${displayResults(
            data.numResults,
            data.perPage,
            data.page
          )}
            results`}
        </Heading>
        <Spacer />
        <Box
          sx={{
            display: collections?.length > 0 ? "flex" : "none",
            gap: "xs",
            marginBottom: "l",
          }}
        >
          <SortMenu
            options={COLLECTION_SORT_LABELS}
            sort={data.sort}
            searchManager={collectionsSearchManager}
            updateURL={updateURL}
          />
        </Box>
      </Flex>
      {isLoaded ? (
        collections.length > 0 ? (
          <CardsGrid records={collections} />
        ) : (
          <NoResultsFound
            searchTerm={collectionsSearchParams.q}
            page={collectionsSearchParams.page}
            isCollections
          />
        )
      ) : (
        [...Array(12)].map((_, index) => (
          <LaneLoading id={index} key={index} withTitle={false} />
        ))
      )}
      {totalPages > 1 && (
        <Pagination
          id="pagination-id"
          currentPage={collectionsSearchManager.page}
          initialPage={collectionsSearchManager.page}
          pageCount={totalPages}
          onPageChange={(newPage) => {
            collectionsSearchManager.setLastFilter(null);
            updateURL(collectionsSearchManager.handlePageChange(newPage));
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "s",
            marginTop: "xxl",
          }}
        />
      )}
    </>
  );
}
