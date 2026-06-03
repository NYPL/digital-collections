import React from "react";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
import { Metadata } from "next";
import SearchPage from "@/src/components/pages/searchPage/searchPage";
import { Filter } from "@/src/types/FilterType";
import { AvailableFilter } from "@/src/types/AvailableFilterType";

export interface SearchParamsType {
  q: string;
  sort: string;
  filters: Filter[];
  page: number;
  availableFilters?: AvailableFilter[];
  viewMode: "grid" | "list";
}

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Search results - NYPL Digital Collections",
  openGraph: {
    title: "Search results - NYPL Digital Collections",
  },
};

export type SearchProps = {
  searchParams: Promise<SearchParamsType>;
};

export default async function Search(props: SearchProps) {
  const searchParams = await props.searchParams;

  const pageName = searchParams.q ? "search-results" : "all-items";

  const searchResults = await CollectionsApi.getSearchData({
    keyword: searchParams.q,
    sort: searchParams.sort,
    filters: searchParams.filters,
    page: searchParams.page,
  });

  // Add available filters from response into searchParams
  const updatedSearchParams = {
    ...searchParams,
    availableFilters: searchResults.availableFilters,
  };

  return (
    <PageLayout
      activePage="search"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Keyword Search", url: "/search/index" },
      ]}
      searchParams={updatedSearchParams}
    >
      <SearchPage searchResults={searchResults} />
    </PageLayout>
  );
}
