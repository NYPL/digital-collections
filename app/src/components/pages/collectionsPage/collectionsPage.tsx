"use client";
import PageLayout from "../../pageLayout/pageLayout";
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Heading,
  HorizontalRule,
  SearchBar,
  Menu,
  Text,
  Pagination,
  Flex,
  Spacer,
} from "@nypl/design-system-react-components";
import { usePathname, useRouter } from "next/navigation";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { CardsGrid } from "../../grids/cardsGrid";
import LaneLoading from "../../lane/laneLoading";
import {
  displayResults,
  totalNumPages,
  createCollectionsQueryStringFromObject,
} from "../../../utils/utils";
import type { SyntheticEvent } from "react";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import NoResultsFound from "../../results/noResultsFound";
import {
  DEFAULT_PAGE_NUM,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_SEARCH_TERM,
  COLLECTION_SORT_LABELS,
} from "@/src/config/constants";

export function CollectionsPage({ data, params, renderCollections }) {
  const { push } = useRouter();
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);
  let collections = [];

  if (renderCollections) {
    collections = Array.isArray(data.collection)
      ? data.collection
      : [data.collection];
  }

  const headingRef = useRef<HTMLHeadingElement>(null);

  const numFound = data.numFound || data.numResults;
  const totalPages = totalNumPages(numFound, data.perPage);

  const [currentPage, setCurrentPage] = useState<number>(
    Number(params.page) || Number(DEFAULT_PAGE_NUM)
  );

  const [currentSort, setCurrentSort] = useState<string>(
    params.sort || DEFAULT_COLLECTION_SORT
  );

  const [currentCollectionKeywords, setcurrentCollectionKeywords] =
    useState<string>(params.collection_keywords || DEFAULT_SEARCH_TERM);

  const updateURL = async (queryString) => {
    setIsLoaded(false);
    await push(`${pathname}?${queryString}`);
    setTimeout(() => {
      setIsLoaded(true);
      headingRef.current?.focus();
    }, 1000);
  };

  const handleSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    // something is so weird about state here.
    // change the values in the object passed down to createCollectionsQueryStringFromObject to be currentPage and currentSort and tell me if it works for you....
    setCurrentPage(Number(DEFAULT_PAGE_NUM));
    setCurrentSort(DEFAULT_COLLECTION_SORT);
    const queryString = createCollectionsQueryStringFromObject({
      collection_keywords: currentCollectionKeywords,
      sort: DEFAULT_COLLECTION_SORT,
      page: DEFAULT_PAGE_NUM,
    });
    updateURL(queryString);
  };

  const handleSearchChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setcurrentCollectionKeywords(target.value);
  };

  const onPageChange = async (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const queryString = createCollectionsQueryStringFromObject({
      collection_keywords: currentCollectionKeywords,
      sort: currentSort,
      page: pageNumber.toString(),
    });
    updateURL(`${queryString}#collections`);
  };

  const onMenuClick = async (id) => {
    setCurrentSort(id);
    const queryString = createCollectionsQueryStringFromObject({
      collection_keywords: currentCollectionKeywords,
      sort: id,
      page: String(currentPage),
    });
    updateURL(`${queryString}#collections`);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <PageLayout
      activePage="collections"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Collections", url: "/collections" },
      ]}
      adobeAnalyticsPageName={createAdobeAnalyticsPageName("all-collections")}
    >
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
        <SearchBar
          sx={{ maxWidth: "462px" }}
          id={"search-collections"}
          textInputProps={{
            isClearable: true,
            isClearableCallback: () => {
              setcurrentCollectionKeywords(DEFAULT_SEARCH_TERM);
            },
            labelText: "Search by collection title",
            name: "collection_keywords",
            placeholder: "Search by collection title",
            defaultValue: currentCollectionKeywords,
            onChange: (e) => handleSearchChange(e),
          }}
          onSubmit={handleSearchSubmit}
          labelText={""}
        />
      </Box>
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      <Flex>
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
          <Menu
            showLabel
            selectedItem={currentSort}
            labelText={`Sort by: ${COLLECTION_SORT_LABELS[currentSort]}`}
            listItemsData={[
              {
                id: "date-desc",
                label: "Newest to oldest",
                onClick: onMenuClick,
                type: "action",
              },
              {
                id: "date-asc",
                label: "Oldest to newest",
                onClick: onMenuClick,
                type: "action",
              },
              {
                id: "title-asc",
                label: "Title A to Z",
                onClick: onMenuClick,
                type: "action",
              },
              {
                id: "title-desc",
                label: "Title Z to A",
                onClick: onMenuClick,
                type: "action",
              },
            ]}
          />
        </Box>
      </Flex>

      {isLoaded ? (
        collections.length > 0 ? (
          <CardsGrid records={collections} />
        ) : (
          <NoResultsFound searchTerm={params.collection_keywords} />
        )
      ) : (
        Array(Math.ceil(collections.length / 4)).fill(
          <LaneLoading withTitle={false} />
        )
      )}

      {totalPages > 1 && (
        <Pagination
          id="pagination-id"
          initialPage={currentPage}
          currentPage={currentPage}
          pageCount={totalPages}
          onPageChange={onPageChange}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "s",
            marginTop: "xxl",
          }}
        />
      )}
    </PageLayout>
  );
}
