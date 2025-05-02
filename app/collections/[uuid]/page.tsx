import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import CollectionPage from "@/src/components/pages/collectionPage/collectionPage";
import { CollectionsApi } from "@/src/utils/apiClients";
import { SearchParams } from "@/search/index/page";

type CollectionProps = {
  params: { uuid: string };
  searchParams: SearchParams;
};

export async function generateMetadata({
  params,
}: CollectionProps): Promise<Metadata> {
  const slug = params.uuid;
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

  // Add collection filter to every search.
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

  // Remove the collection and division filters from displaying on this page.
  const { collection, division, ...filteredAvailableFilters } =
    searchResults.availableFilters || {};

  console.log("filtered ss", filteredAvailableFilters);

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
