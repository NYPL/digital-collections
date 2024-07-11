import React from "react";
import { Metadata } from "next";
import PageLayout from "components/pageLayout/pageLayout";
import SearchResults from "components/search/results";
export const metadata: Metadata = {
  title: "Search - NYPL Digital Collections",
};

export default function Collections() {
  return (
    <PageLayout
      activePage="collections"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Keyword Search", url: "/search/index" },
      ]}
    >
      <SearchResults />
    </PageLayout>
  );
}
