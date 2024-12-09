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
} from "@/src/config/constants";

export const CollectionsPage = ({ data, params }) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);
  let collections = [];

  if (data.headers.message === "Collections retrieved successfully") {
    collections = Array.isArray(data.collection)
      ? data.collection
      : [data.collection];
  }

  const headingRef = useRef<HTMLHeadingElement>(null);

  // pagination
  const numFound = data.numFound || data.numResults;
  const totalPages = totalNumPages(numFound, data.perPage);

  // set defaults
  let currentPage = Number(params.page) || DEFAULT_PAGE_NUM;
  let currentSort = params.sort || DEFAULT_COLLECTION_SORT;
  const [currentCollectionKeyword, setCurrentCollectionKeyword] =
    useState<string>(params.collection_keyword || DEFAULT_SEARCH_TERM);

  const handleSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const queryString = createCollectionsQueryStringFromObject({
      collection_keyword: currentCollectionKeyword,
      sort: currentSort,
      page: currentPage,
    });
    setIsLoaded(false);
    await push(`${pathname}?${queryString}`);
    setTimeout(() => {
      setIsLoaded(true);
      headingRef.current?.focus();
    }, 2000);
  };

  const handleSearchChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setCurrentCollectionKeyword(target.value);
  };

  // pagination
  // Question: Do we want to introduce debouncing?
  const onPageChange = async (pageNumber: number) => {
    currentPage = pageNumber;
    const queryString = createCollectionsQueryStringFromObject({
      collection_keyword: currentCollectionKeyword,
      sort: currentSort,
      page: pageNumber.toString(),
    });
    setIsLoaded(false);
    await push(`${pathname}?${queryString}`);
    setTimeout(() => {
      setIsLoaded(true);
      headingRef.current?.focus();
    }, 2000);
  };

  // sort
  const onMenuClick = async (id) => {
    const queryString = createCollectionsQueryStringFromObject({
      collection_keyword: currentCollectionKeyword,
      sort: id,
      page: currentPage,
    });
    setIsLoaded(false);
    await push(`${pathname}?${queryString}`);
    setTimeout(() => {
      setIsLoaded(true);
      headingRef.current?.focus();
    }, 2000);
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
            labelText: "Search by collection title",
            name: "collection_keyword",
            placeholder: "Search by collection title",
            defaultValue: currentCollectionKeyword,
            onChange: (e) => handleSearchChange(e),
          }}
          onSubmit={handleSearchSubmit}
          labelText={""}
        />
      </Box>
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />

      {isLoaded ? (
        collections.length > 0 ? (
          <>
            <Box sx={{ display: "flex", gap: "xs", marginBottom: "l" }}>
              <Text
                sx={{ fontWeight: "500", marginBottom: 0, marginTop: "xs" }}
              >
                {" "}
                Sort by{" "}
              </Text>{" "}
              <Menu
                showSelectionAsLabel
                showLabel
                selectedItem={currentSort}
                labelText={"Sort By"}
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
            <Heading
              size="heading5"
              sx={{ marginBottom: "l" }}
              ref={headingRef}
              tabIndex={-1}
              id={"all-collections-page"}
              width="max-content"
            >
              {`Displaying ${displayResults(
                data.numResults,
                data.perPage,
                data.page
              )}
            results`}
            </Heading>
            <CardsGrid records={collections} />
          </>
        ) : (
          <NoResultsFound searchTerm={currentCollectionKeyword} />
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
};
