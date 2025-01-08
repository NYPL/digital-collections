"use client";
import {
  Box,
  Menu,
  Pagination,
  Heading,
  TagSetFilterDataProps,
  TagSet,
  Button,
} from "@nypl/design-system-react-components";
import React, { useEffect, useState } from "react";
import { CardsGrid } from "../grids/cardsGrid";
import LaneLoading from "../lane/laneLoading";
import { displayResults, totalNumPages } from "@/src/utils/utils";
import { CARDS_PER_PAGE, COLLECTION_SORT_LABELS } from "@/src/config/constants";
import { useSearchContext } from "@/src/context/SearchContext";
import { usePathname, useRouter } from "next/navigation";

const SearchContent = ({ data }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();
  const { push } = useRouter();
  const totalPages = totalNumPages(data.numResults, CARDS_PER_PAGE.toString());
  const { searchManager } = useSearchContext();

  const updateURL = async (queryString) => {
    setIsLoaded(false);
    await push(`${pathname}?${queryString}`);
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [activeFilters, setActiveFilters] = useState<TagSetFilterDataProps[]>(
    searchManager.currentFilters.map((filter) => ({
      id: filter.value,
      label: filter.value,
    }))
  );

  const handleOnClick = (tagSet) => {
    if (tagSet.id === "clear-filters") {
      setActiveFilters([]);
      searchManager.clearAllFilters();
      return;
    }
    setActiveFilters((prevFilters) =>
      prevFilters.filter((tag) => tag.id !== tagSet.id)
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
            push(
              `${pathname}?${searchManager.handleAddFilter({
                filter: "rights",
                value: "pd",
              })}`
            );
            setActiveFilters(
              searchManager.currentFilters.map((filter) => ({
                id: filter.value,
                label: filter.value,
              }))
            );
          }}
          id={"add-public-domain"}
        >
          {" "}
          Add public domain filter{" "}
        </Button>
        <Button
          buttonType="secondary"
          onClick={() => {
            push(
              `${pathname}?${searchManager.handleAddFilter({
                filter: "topic",
                value: "musicals",
              })}`
            );
            setActiveFilters(
              searchManager.currentFilters.map((filter) => ({
                id: filter.value,
                label: filter.value,
              }))
            );
          }}
          id={"add-musicals"}
        >
          {" "}
          Add musical filter{" "}
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
              id: "date-desc",
              label: "Newest to oldest",
              onClick: () => {
                push(
                  `${pathname}?${searchManager.handleSortChange("date-desc")}`
                );
              },
              type: "action",
            },
            {
              id: "date-asc",
              label: "Oldest to newest",
              onClick: () => {
                push(
                  `${pathname}?${searchManager.handleSortChange("date-asc")}`
                );
              },
              type: "action",
            },
            {
              id: "title-asc",
              label: "Title A to Z",
              onClick: () => {
                push(
                  `${pathname}?${searchManager.handleSortChange("title-asc")}`
                );
              },
              type: "action",
            },
            {
              id: "title-desc",
              label: "Title Z to A",
              onClick: () => {
                push(
                  `${pathname}?${searchManager.handleSortChange("title-desc")}`
                );
              },
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
            push(`${pathname}?${searchManager.handlePageChange(newPage)}`);
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
