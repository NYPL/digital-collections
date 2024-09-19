"use client";
import PageLayout from "../../pageLayout/pageLayout";
import React from "react";
import SearchResults from "../../search/results";
import { mockCollectionCards } from "__tests__/__mocks__/data/mockCollectionCards";
import {
  Box,
  Heading,
  HorizontalRule,
  SearchBar,
} from "@nypl/design-system-react-components";
import { headerBreakpoints } from "../../../utils/breakpoints";
import { CollectionsGrid } from "../../grids/collectionsGrid";

export const CollectionsPage = () => {
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
          [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
            maxWidth: "715px",
          },
          "> hgroup > p": {
            fontWeight: "400 !important",
          },
        }}
      >
        <Heading
          level="h1"
          text="Collections"
          subtitle="Explore the New York Public Library's diverse collections, including digitized photographs, manuscripts, maps, and more. Start exploring by using the search bar below or browse through the collections."
        />
        <SearchBar
          sx={{ maxWidth: "462px", marginTop: "l" }}
          id={"search-collections"}
          textInputProps={{
            isClearable: true,
            labelText: "Search by collection title",
            name: "searchinput",
            placeholder: "Search by collection title",
          }}
          onSubmit={function (event: React.FormEvent): void {}}
          labelText={""}
        />
      </Box>
      <HorizontalRule sx={{ marginTop: "xxl", marginBottom: "xxl" }} />
      {/* <CollectionsGrid data={mockCollectionCards}/> */}
      <SearchResults showFilter={true} />
    </PageLayout>
  );
};
