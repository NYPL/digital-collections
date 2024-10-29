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

export const CollectionsPage = ({ data }) => {
  const router = useRouter();
  const { replace } = useRouter();
  const queryParams = useSearchParams();
  const query = queryParams.toString();
  const pathname = usePathname();
  const keyword = queryParams.get("collection_keyword");

  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    Number(queryParams.get("page")) || 1
  );

  const numFound = data.numFound ? data.numFound : data.numResults;
  const totalPages = totalNumPages(numFound, data.perPage);
  // console.log("data: ", data);

  // search
  // function handleSearch(term: string) {
  //   const params = new URLSearchParams();
  //   console.log(term);
  //   if (term) {
  //     params.set("collection_keyword", term);
  //   } else {
  //     params.delete("collection_keyword");
  //   }
  //   replace(`${pathname}?${queryParams.toString()}`);
  // }

  // pagination
  const updatePageURL = async (pageNumber: number) => {
    const params = new URLSearchParams();
    console.log("params are", params);

    params.set("page", pageNumber.toString());
    setCurrentPage(pageNumber);
    const url = `${pathname}?${params.toString()}`;
    replace(url);
  };

  const createQueryString = (name, value) => {
    const params = new URLSearchParams();
    params.set(name, value);
    return params.toString();
  };

  // sort
  function onMenuClick(id) {
    query
      ? router.push(
          "/collections" + "?" + query + "&" + createQueryString("sort", id)
        )
      : router.push("/collections" + "?" + createQueryString("sort", id));
  }

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
      adobeAnalyticsPageName="all-collections"
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
        {/* TODO: if keyword provided in the url, maybe we should set the text in the input box to be the keyword provided */}
        <SearchBar
          sx={{ maxWidth: "462px" }}
          id={"search-collections"}
          textInputProps={{
            isClearable: true,
            labelText: "Search by collection title",
            name: "collection_keyword",
            placeholder: "Search by collection title",
          }}
          onSubmit={function (event: React.FormEvent): void {}} // fix
          // onChange={(e) => {
          //   handleSearch(e.target.value);
          // }}
          labelText={""}
          // defaultValue={query}
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
          selectedItem="date-desc"
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
          onPageChange={updatePageURL} // TODO: pagination stuff
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
