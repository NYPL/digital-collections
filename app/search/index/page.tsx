import React from "react";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import { getSearchData } from "@/src/utils/apiHelpers";
import SearchContent from "@/src/components/search/content";
import { Metadata } from "next";
import { Filter } from "@/src/utils/searchManager";

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
    keywords: searchParams.keywords || "type_s:Item",
    sort: searchParams.sort,
    filters: searchParams.filters,
    pageNum: searchParams.page,
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
      <SearchContent data={data} />
    </PageLayout>
  );
}
