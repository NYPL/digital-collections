import React from "react";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import { getSearchData } from "@/src/utils/apiHelpers";
import SearchContent from "@/src/components/search/content";

export interface SearchParams {
  keywords: string;
  sort: string;
  page: number;
}

export type SearchProps = {
  params: { slug: string };
  searchParams: SearchParams;
};

export default async function Search({ searchParams }: SearchProps) {
  const data = await getSearchData({
    keywords: searchParams.keywords,
    pageNum: searchParams.page,
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
