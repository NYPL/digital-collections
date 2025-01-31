import React from "react";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { mockItems } from "../../../__tests__/__mocks__/data/mockItems";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import SearchPage from "@/src/components/pages/searchPage/searchPage";
import { Filter } from "@/src/utils/searchManager";

export interface SearchParams {
  keywords: string;
  sort: string;
  filters: Filter[];
  page: number;
}

export type SearchProps = {
  params: { slug: string };
  searchParams: SearchParams;
};

export default async function Search() {
  return (
    <PageLayout
      activePage="search"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Keyword Search", url: "/search/index" },
      ]}
      adobeAnalyticsPageName={createAdobeAnalyticsPageName(
        "search-results",
        ""
      )}
    >
      <SearchPage data={[...mockItems, ...mockItems]} />
    </PageLayout>
  );
}
