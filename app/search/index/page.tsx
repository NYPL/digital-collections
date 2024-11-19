import React from "react";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import SearchResults from "../../src/components/search/results";
import { mockItems } from "../../../__tests__/__mocks__/data/mockItems"; // TODO: render mockItems
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";

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
      adobeAnalyticsPageName={createAdobeAnalyticsPageName(
        "search-results",
        ""
      )} //TODO: if there are no query params, page name should be createAdobeAnalyticsPageName("all-items", "")
    >
      <SearchResults showFilter={false} isSearchPage data={mockItems} />
    </PageLayout>
  );
}
