"use client";
import PageLayout from "../../pageLayout/pageLayout";
import React from "react";
import SearchResults from "../../search/results";
import {
  Box,
  Heading,
  HorizontalRule,
  Menu,
  SearchBar,
  Text,
} from "@nypl/design-system-react-components";
import { headerBreakpoints } from "../../../utils/breakpoints";
// interface CollectionPageProps {
//   slug: String;
// }

export const CollectionsPage = () => {
  return (
    <PageLayout
      activePage="collections"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Collections", url: "/collections" },
      ]}
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
      <Text> Sort by </Text>{" "}
      <Menu
        //showSelectionAsLabel
        showLabel
        selectedItem="chronological-descending"
        labelText={"Sort By"}
        listItemsData={[
          {
            id: "chronological-descending",
            label: "Newest to oldest",
            onClick: function Ua() {},
            type: "action",
          },
          {
            id: "chronological-ascending",
            label: "Oldest to newest",
            onClick: function Ua() {},
            type: "action",
          },
          {
            id: "alphabetical-descending",
            label: "Title A to Z",
            onClick: function Ua() {},
            type: "action",
          },
          {
            id: "alphabetical-ascending",
            label: "Title Z to A",
            onClick: function Ua() {},
            type: "action",
          },
        ]}
      />
      <SearchResults />
    </PageLayout>
  );
};
