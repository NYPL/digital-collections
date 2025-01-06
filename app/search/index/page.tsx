import React from "react";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import { getSearchData } from "@/src/utils/apiHelpers";
import SearchContent from "@/src/components/search/content";

export interface SearchParams {
  keywords: string;
  sorts: string;
  filters: string[];
  pageNum: number;
}

export type SearchProps = {
  params: { slug: string };
  searchParams: SearchParams;
};

export default async function Search({ searchParams }: SearchProps) {
  const data = await getSearchData({
    keywords: searchParams.keywords,
    sorts: searchParams.sorts,
    filters: searchParams.filters,
    pageNum: searchParams.pageNum,
  });
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
      )} //TODO: if there are no query params, page name should be createAdobeAnalyticsPageName("all-items", "")
    >
      <SearchContent params={searchParams} data={data} />
    </PageLayout>
  );
}
