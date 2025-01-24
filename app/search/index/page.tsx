import React from "react";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { mockItems } from "../../../__tests__/__mocks__/data/mockItems"; // TODO: render mockItems
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import SearchContent from "@/src/components/search/content";

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
      <SearchContent data={mockItems} />
    </PageLayout>
  );
}
