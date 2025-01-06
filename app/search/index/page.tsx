import React from "react";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import { getSearchData } from "@/src/utils/apiHelpers";
import SearchContent from "@/src/components/search/content";

export interface SearchParams {
  keywords: string;
  sort: string;
  filters: string[];
  page: number;
}

export type SearchProps = {
  searchParams: SearchParams;
};

export default async function Search({ searchParams }: SearchProps) {
  const pageName = !searchParams.keywords ? "all-items" : "search-results";

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
    >
      <SearchContent params={searchParams} data={data} />
    </PageLayout>
  );
}
