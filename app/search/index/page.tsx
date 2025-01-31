import React from "react";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import { getSearchData } from "@/src/utils/apiHelpers";
import { Metadata } from "next";
import { Filter } from "@/src/utils/searchManager";
import SearchPage from "@/src/components/pages/searchPage/searchPage";

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

  const data = await getSearchData({
    keyword: searchParams.keywords || "type_s:Item",
    sort: searchParams.sort,
    filters: searchParams.filters,
    page: searchParams.page,
  });

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
      <SearchPage data={data} />
    </PageLayout>
  );
}
