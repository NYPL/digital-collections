"use client";
import PageLayout from "../../pageLayout/pageLayout";
import React, { useState, useEffect } from "react";
import SearchResults from "../../search/results";
import {
  Box,
  Heading,
  HorizontalRule,
  SearchBar,
  Menu,
  Text,
  Pagination,
} from "@nypl/design-system-react-components";
import {
  useParams,
  useSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { CardsGrid } from "../../grids/cardsGrid";
import LaneLoading from "../../lane/laneLoading";
import { slugToString, totalNumPages } from "../../../utils/utils";
import type { SyntheticEvent } from "react";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";

export const CollectionsPage = ({ data }) => {
  const router = useRouter();

  const { push } = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);

  // pagination
  const numFound = data.numFound ? data.numFound : data.numResults;
  const totalPages = totalNumPages(numFound, data.perPage);

  // defaults
  let currentPage = Number(searchParams.get("page")) || 1;
  let currentSort = searchParams.get("sort") || "date-desc";
  let currentCollectionKeyword = searchParams.get("collection_keyword") || "";

  const handleSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const queryString = createQueryStringFromObject({
      collection_keyword: currentCollectionKeyword,
      sort: currentSort,
      page: currentPage,
    });
    await push(`${pathname}?${queryString}`);
  };

  // I'm not actually sure if this is necessary but it's in the research catalog
  const handleSearchChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    currentCollectionKeyword = target.value;
  };

  // pagination
  // Question: Do we want to introduce debouncing?
  const onPageChange = async (pageNumber: number) => {
    currentPage = pageNumber;
    const queryString = createQueryStringFromObject({
      collection_keyword: currentCollectionKeyword,
      sort: currentSort,
      page: pageNumber.toString(),
    });
    console.log("queryString is: ", queryString);
    await push(`${pathname}?${queryString}`);
  };

  // TODO: right now, whenever a user hits earch, the url is created with all params including the defaults.
  // Perhaps the query string should only include the values that are not defaults.
  const createQueryStringFromObject = (paramObj) => {
    const params = new URLSearchParams();
    Object.keys(paramObj).map((name, value) => {
      params.set(
        name.toString(),
        name === "page" ? paramObj[name].toString() : paramObj[name]
      );
    });
    return params.toString();
  };

  // sort
  const onMenuClick = async (id) => {
    console.log("currentSort before is: ", currentSort);
    console.log("current sort after is : ", currentSort);
    const queryString = createQueryStringFromObject({
      collection_keyword: currentCollectionKeyword,
      sort: id,
      page: currentPage,
    });
    await push(`${pathname}?${queryString}`);
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
          onSubmit={handleSearchSubmit} // TODO: fix
          labelText={""}
        />
      </Box>
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      <Box sx={{ display: "flex", gap: "xs", marginBottom: "l" }}>
        <Text sx={{ fontWeight: "500", marginBottom: 0, marginTop: "xs" }}>
          {" "}
          Sort by{" "}
        </Text>{" "}
        <Menu
          showSelectionAsLabel
          showLabel
          selectedItem={currentSort} // TODO: currentSort
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
              id: "title-desc",
              label: "Title A to Z",
              onClick: onMenuClick,
              type: "action",
            },
            {
              id: "title-asc",
              label: "Title Z to A",
              onClick: onMenuClick,
              type: "action",
            },
          ]}
        />
      </Box>

      {isLoaded ? (
        <CardsGrid records={data.collection} />
      ) : (
        <>
          <LaneLoading withTitle={false} />,
          <LaneLoading withTitle={false} />,
          <LaneLoading withTitle={false} />,
        </>
      )}

      {totalPages > 1 && (
        <Pagination
          id="pagination-id"
          initialPage={currentPage}
          currentPage={currentPage}
          pageCount={totalPages}
          onPageChange={onPageChange} // TODO: pagination stuff
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
