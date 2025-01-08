"use client";
import {
  Box,
  Menu,
  Pagination,
  Heading,
  FilterBarInline,
  TagSetFilterDataProps,
  TagSet,
  Button,
} from "@nypl/design-system-react-components";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { CardsGrid } from "../grids/cardsGrid";
import LaneLoading from "../lane/laneLoading";
import { displayResults, totalNumPages } from "@/src/utils/utils";
import {
  CARDS_PER_PAGE,
  COLLECTION_SORT_LABELS,
  DEFAULT_FILTERS,
  DEFAULT_PAGE_NUM,
  DEFAULT_SEARCH_TERM,
  DEFAULT_SORT,
} from "@/src/config/constants";
import { SearchManager } from "@/src/utils/searchManager";

const SearchContent = ({ params, data }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const totalPages = totalNumPages(data.numResults, CARDS_PER_PAGE.toString());
  const { push } = useRouter();
  const pathname = usePathname();
  const searchManager = new SearchManager({
    initialPage: Number(params.page) || DEFAULT_PAGE_NUM,
    initialSort: params.sort || DEFAULT_SORT,
    initialFilters: params.filters || DEFAULT_FILTERS,
    initialKeywords: params.keywords || DEFAULT_SEARCH_TERM,
    updateURL: async (queryString: string) => {
      push(`${pathname}?${queryString}`);
    },
    isCollectionSearch: false,
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  console.log(
    searchManager.currentFilters,
    searchManager.currentFilters?.map((filter) => ({
      id: filter.value,
      label: filter.value,
    }))
  );

  const [activeFilters, setActiveFilters] = useState<TagSetFilterDataProps[]>(
    searchManager.currentFilters
      ? searchManager.currentFilters.map((filter) => ({
          id: filter.value,
          label: filter.value,
        }))
      : []
  );

  const handleOnClick = (tagSet) => {
    if (tagSet.id === "clear-filters") {
      setActiveFilters([]);
      return;
    }
    setActiveFilters((prevFilters) =>
      prevFilters.filter((tag) => {
        return tag.id !== tagSet.id;
      })
    );
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          width: "100%",
          gap: "xs",
          marginTop: "-xxl",
          paddingLeft: "225px",
          paddingTop: "m",
          background: "ui.bg.default",
        }}
      >
        <Heading
          size="heading2"
          sx={{
            display: "flex",
            marginBottom: "l",
          }}
          width="max-content"
        >
          {`Displaying ${displayResults(
            data.numResults,
            CARDS_PER_PAGE,
            searchManager.currentPage
          )}
                    results`}
        </Heading>
        <Heading
          size="heading4"
          sx={{
            display: "flex",
            marginBottom: "l",
          }}
          width="max-content"
        >
          Refine your search
        </Heading>
      </Box>

      <Box
        marginTop="150px"
        marginBottom="20px"
        display="flex"
        flexDir="row"
        gap="m"
      >
        <Button
          buttonType="secondary"
          onClick={() => {
            searchManager.handleAddFilter({ filter: "rights", value: "pd" });
          }}
          id={"add-public-domain"}
        >
          {" "}
          Add public domain filter{" "}
        </Button>

        <TagSet
          isDismissible
          id="search-filter-tags"
          onClick={handleOnClick}
          tagSetData={activeFilters}
          type="filter"
        />
        <Menu
          showLabel
          selectedItem={searchManager.currentSort}
          labelText={`Sort by: ${
            COLLECTION_SORT_LABELS[searchManager.currentSort]
          }`}
          listItemsData={[
            {
              id: "chronological-descending",
              label: "Newest to oldest",
              onClick: () => searchManager.handleSortChange("date-desc"),
              type: "action",
            },
            {
              id: "chronological-ascending",
              label: "Oldest to newest",
              onClick: () => searchManager.handleSortChange("date-asc"),
              type: "action",
            },
            {
              id: "alphabetical-descending",
              label: "Title A to Z",
              onClick: () => searchManager.handleSortChange("title-asc"),
              type: "action",
            },
            {
              id: "alphabetical-ascending",
              label: "Title Z to A",
              onClick: () => searchManager.handleSortChange("title-desc"),
              type: "action",
            },
          ]}
        />
      </Box>

      {isLoaded && data.result ? (
        <CardsGrid records={data.result} />
      ) : (
        <>
          <LaneLoading id={1} withTitle={false} />,
          <LaneLoading id={2} withTitle={false} />,
          <LaneLoading id={3} withTitle={false} />,
        </>
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
    </>
  );
};

export default SearchContent;
