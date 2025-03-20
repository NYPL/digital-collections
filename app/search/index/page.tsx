import React from "react";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import { CollectionsApi } from "@/src/utils/apiClients";
import { Metadata } from "next";
import SearchPage from "@/src/components/pages/searchPage/searchPage";
import { mockSearchResponse } from "__tests__/__mocks__/data/collectionsApi/mockSearchResponse";
import { Filter } from "@/src/types/FilterType";
import { AvailableFilter } from "@/src/types/AvailableFilterType";
import { transformToAvailableFilters } from "@/src/utils/searchManager";
import { revalidatePath } from "next/cache";

export interface SearchParams {
  q: string;
  sort: string;
  filters: Filter[];
  page: number;
  availableFilters?: AvailableFilter[];
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
  revalidatePath("/search/index", "page");
  const pageName = searchParams.q ? "search-results" : "all-items";

  const searchResults = await CollectionsApi.getSearchData({
    keyword: searchParams.q,
    sort: searchParams.sort,
    filters: searchParams.filters,
    page: searchParams.page,
  });

  // mockSearchResponse;

  // Add available filters into searchParams
  const updatedSearchParams = {
    ...searchParams,
    availableFilters: transformToAvailableFilters(
      searchResults.availableFilters
    ),
  };

  return (
    <PageLayout
      activePage="search"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Keyword Search", url: "/search/index" },
      ]}
      adobeAnalyticsPageName={createAdobeAnalyticsPageName(pageName, "")}
      searchParams={updatedSearchParams}
    >
      <SearchPage searchResults={searchResults} />
    </PageLayout>
  );
}
