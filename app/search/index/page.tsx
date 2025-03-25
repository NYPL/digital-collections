import React from "react";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import { CollectionsApi } from "@/src/utils/apiClients";
import { Metadata } from "next";
import SearchPage from "@/src/components/pages/searchPage/searchPage";
import { mockSearchResponse } from "__tests__/__mocks__/data/collectionsApi/mockSearchResponse";
import { Filter } from "@/src/types/FilterType";

export interface SearchParams {
  keywords: string;
  sort: string;
  filters: Filter[];
  page: number;
}

export const metadata: Metadata = {
  title: "Search results - NYPL Digital Collections",
  openGraph: {
    title: "Search results - NYPL Digital Collections",
  },
};

export type SearchProps = {
  searchParams: SearchParams;
};

export default async function Search({ searchParams }: SearchProps) {
  const pageName = searchParams.keywords ? "search-results" : "all-items";

  const data = mockSearchResponse;
  // await CollectionsApi.getSearchData({
  //   keyword: searchParams.keywords,
  //   sort: searchParams.sort,
  //   filters: searchParams.filters,
  //   page: searchParams.page,
  // });

  return (
    <PageLayout
      activePage="search"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Keyword Search", url: "/search/index" },
      ]}
      adobeAnalyticsPageName={createAdobeAnalyticsPageName(pageName, "")}
      searchParams={searchParams} //!
    >
      <SearchPage data={mockSearchResponse} />
    </PageLayout>
  );
}
