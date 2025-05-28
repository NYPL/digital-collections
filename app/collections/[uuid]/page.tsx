import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName, imageURL } from "@/src/utils/utils";
import CollectionPage from "@/src/components/pages/collectionPage/collectionPage";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
import { AvailableFilterOption } from "@/src/types/AvailableFilterType";

export type CollectionSearchParamsType = {
  q: string;
  sort: string;
  filters: string;
  page: number;
  availableFilters?: Record<string, AvailableFilterOption[]>;
};

type CollectionProps = {
  params: { uuid: string };
  searchParams: CollectionSearchParamsType;
};

export async function generateMetadata({
  params,
}: CollectionProps): Promise<Metadata> {
  const slug = params.uuid;
  const collectionData = await CollectionsApi.getCollectionData(slug);
  const title = collectionData?.title ?? slug;

  return {
    title: `${title} - NYPL Digital Collections`,
    openGraph: {
      title: `${title} - NYPL Digital Collections`,
      images: [
        {
          url: collectionData.imageID
            ? imageURL(collectionData.imageID, "full", "!288,288", "0")
            : "https://digitalcollections.nypl.org/featured_items/ps_mss_831.jpg",
          alt: `${title} - NYPL Digital Collections`,
        },
      ],
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
    }[collection=${collectionData.uuid}]`;
  } else {
    filters = `[collection=${collectionData.uuid}]`;
  }

  const searchResults = await CollectionsApi.getSearchData({
    keyword: searchParams.q,
    sort: searchParams.sort ? searchParams.sort : "sequence",
    page: searchParams.page,
    filters,
  });

  // Remove the collection and division filters from displaying on this page.
  const { collection, division, ...filteredAvailableFilters } =
    searchResults.availableFilters || {};

  // Remove the collection if it's returned in the search results.
  const updatedResults = searchResults.results.filter(
    (item) => item.uuid !== collectionData.uuid
  );

  const updatedSearchResults = {
    ...searchResults,
    results: updatedResults,
  };

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
        searchResults={updatedSearchResults}
        collectionData={collectionData}
      />
    </PageLayout>
  );
}
