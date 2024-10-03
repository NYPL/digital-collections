import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import SearchResults from "../../src/components/search/results";
import { mockCollectionCards } from "../../../__tests__/__mocks__/data/mockCollectionCards";
import { mockItems } from "../../../__tests__/__mocks__/data/mockItems"; // TODO: render mockItems

export type SearchProps = {
  params: { slug: string };
  searchParams: { page: string };
};

export default async function Search() {
  return (
    <PageLayout
      activePage="collections"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Keyword Search", url: "/search/index" },
      ]}
      adobeAnalyticsPageName="search"
    >
      <SearchResults showFilter={false} isSearchPage={true} data={mockItems} />
    </PageLayout>
  );
}
