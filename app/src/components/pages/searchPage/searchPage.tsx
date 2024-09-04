"use client";
import PageLayout from "../../pageLayout/pageLayout";
import React from "react";
import SearchResults from "../../search/results";
import {
  Box,
  Heading,
  HorizontalRule,
  SearchBar,
} from "@nypl/design-system-react-components";
import { headerBreakpoints } from "../../../utils/breakpoints";

export const SearchPage = () => {
  return (
    <PageLayout
      activePage="collections"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Keyword Search", url: "/search/index" },
      ]}
      adobeAnalyticsPageName="search"
    >
      <SearchResults />
    </PageLayout>
  );
};
