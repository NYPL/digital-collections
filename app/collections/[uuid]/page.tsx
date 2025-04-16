import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import CollectionPage from "@/src/components/pages/collectionPage/collectionPage";
import { CollectionsApi } from "@/src/utils/apiClients";
import { SearchParams } from "@/search/index/page";
import { mockCollectionChildrenResponse } from "__tests__/__mocks__/data/mockCollectionStructure";
import { mockCollectionResponse } from "__tests__/__mocks__/data/collectionsApi/mockCollectionResponse";
import { Filter } from "../../src/types/FilterType";
import { filterToString, stringToFilter } from "@/src/utils/searchManager";

type CollectionProps = {
  params: { uuid: string };
  searchParams: SearchParams;
};

export async function generateMetadata({
  params,
}: CollectionProps): Promise<Metadata> {
  const slug = params.uuid; //  TODO: this needs to support both a slug or a uuid.
  return {
    title: `${slug} - NYPL Digital Collections`,
    openGraph: {
      title: `${slug} - NYPL Digital Collections`,
    },
  };
}

export default async function Collection({
  params,
  searchParams,
}: CollectionProps) {
  let collectionData = await CollectionsApi.getCollectionData(params.uuid);

  let filters;
  if (searchParams.filters) {
    filters = `${
      searchParams?.filters ? searchParams?.filters : ""
    }[collection=${collectionData.title}||${collectionData.uuid}]`;
  } else {
    filters = `[collection=${collectionData.title}||${collectionData.uuid}]`;
  }

  const searchResults = await CollectionsApi.getSearchData({
    keyword: searchParams.q,
    sort: searchParams.sort,
    page: searchParams.page,
    filters,
  });

  // Filter out the collection filter for this page.
  const { collection, ...filteredAvailableFilters } =
    searchResults.availableFilters || {};

  const updatedSearchParams = {
    ...searchParams,
    availableFilters: filteredAvailableFilters,
  };

  return (
    <PageLayout
      activePage="collection"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Collections", url: "/collections" },
        {
          text: `${params.uuid}`,
          url: `/collections/${params.uuid}`,
        },
      ]}
      adobeAnalyticsPageName={createAdobeAnalyticsPageName(
        "collections",
        params.uuid
      )}
    >
      <CollectionPage
        searchParams={updatedSearchParams}
        searchResults={searchResults}
        collectionData={collectionData}
      />
    </PageLayout>
  );
}
