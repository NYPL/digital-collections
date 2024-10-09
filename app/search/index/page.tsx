import React from "react";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import SearchResults from "../../src/components/search/results";
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
      <SearchResults showFilter={false} isSearchPage data={mockItems} />
    </PageLayout>
  );
}
