"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Heading,
  HorizontalRule,
  SearchBar,
  Menu,
  Pagination,
  Flex,
  Spacer,
} from "@nypl/design-system-react-components";
import PageLayout from "../../pageLayout/pageLayout";
import { usePathname, useRouter } from "next/navigation";
import {
  createAdobeAnalyticsPageName,
  displayResults,
  totalNumPages,
} from "../../../utils/utils";
import NoResultsFound from "../../results/noResultsFound";
import LaneLoading from "../../lane/laneLoading";
import { CardsGrid } from "../../grids/cardsGrid";
import {
  DEFAULT_PAGE_NUM,
  DEFAULT_COLLECTION_SORT,
  DEFAULT_SEARCH_TERM,
  COLLECTION_SORT_LABELS,
} from "@/src/config/constants";
import { SearchManager } from "@/src/utils/searchManager";
import { headerBreakpoints } from "@/src/utils/breakpoints";

export function CollectionsPage({ data, params, renderCollections }) {
  const { push } = useRouter();
  const pathname = usePathname();
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const numFound = data.numFound || data.numResults;
  const totalPages = totalNumPages(numFound, data.perPage);
  const collections = renderCollections
    ? Array.isArray(data.collection)
      ? data.collection
      : [data.collection]
    : [];

  const searchManager = new SearchManager({
    initialPage: Number(params.page) || DEFAULT_PAGE_NUM,
    initialSort: params.sort || DEFAULT_COLLECTION_SORT,
    initialKeywords: params.collection_keywords || DEFAULT_SEARCH_TERM,
    updateURL: async (queryString: string) => {
      push(`${pathname}?${queryString}`);
    },
    isCollectionSearch: true,
  });

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
          id="search-collections"
          textInputProps={{
            isClearable: true,
            isClearableCallback: () =>
              searchManager.handleSearchChange(DEFAULT_SEARCH_TERM),
            labelText: "Search by collection title",
            name: "collection_keywords",
            placeholder: "Search by collection title",
            defaultValue: searchManager.currentKeywords,
            onChange: (e) =>
              searchManager.handleSearchChange(
                (e.target as HTMLInputElement).value
              ),
          }}
          onSubmit={() => searchManager.handleSearchSubmit}
          labelText="Search collections by title"
          aria-label="Search collections by title"
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
          <Menu
            showLabel
            selectedItem={searchManager.currentSort}
            labelText={`Sort by: ${
              COLLECTION_SORT_LABELS[searchManager.currentSort]
            }`}
            listItemsData={[
              {
                id: "date-desc",
                label: "Newest to oldest",
                onClick: () => searchManager.handleSortChange("date-desc"),
                type: "action",
              },
              {
                id: "date-asc",
                label: "Oldest to newest",
                onClick: () => searchManager.handleSortChange("date-asc"),
                type: "action",
              },
              {
                id: "title-asc",
                label: "Title A to Z",
                onClick: () => searchManager.handleSortChange("title-asc"),
                type: "action",
              },
              {
                id: "title-desc",
                label: "Title Z to A",
                onClick: () => searchManager.handleSortChange("title-desc"),
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
          <LaneLoading id="lane-loading" withTitle={false} />
        )
      )}
      {totalPages > 1 && (
        <Pagination
          id="pagination-id"
          currentPage={searchManager.currentPage}
          initialPage={searchManager.currentPage}
          pageCount={totalPages}
          onPageChange={(newPage) => {
            searchManager.handlePageChange(newPage);
          }}
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
