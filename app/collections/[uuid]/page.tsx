import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { imageURL } from "@/src/utils/utils";
import CollectionPage from "@/src/components/pages/collectionPage/collectionPage";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
import { AvailableFilterOption } from "@/src/types/AvailableFilterType";

export type CollectionSearchParamsType = {
  q: string;
  sort: string;
  filters: string;
  page: number;
  availableFilters?: Record<string, AvailableFilterOption[]>;
  viewMode?: "grid" | "list";
};

type CollectionProps = {
  params: Promise<{ uuid: string }>;
  searchParams: Promise<CollectionSearchParamsType>;
};

export async function generateMetadata({
  params,
}: CollectionProps): Promise<Metadata> {
  const { uuid: slug } = await params;
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
  const { uuid } = await params;
  const resolvedSearchParams = await searchParams;
  let collectionData = await CollectionsApi.getCollectionData(uuid);

  // Add collection filter to every search.
  let filters;
  if (resolvedSearchParams.filters) {
    filters = `${
      resolvedSearchParams?.filters ? resolvedSearchParams?.filters : ""
    }[collection=${collectionData.uuid}]`;
  } else {
    filters = `[collection=${collectionData.uuid}]`;
  }

  const searchResults = await CollectionsApi.getSearchData({
    keyword: resolvedSearchParams.q,
    sort: resolvedSearchParams.sort ? resolvedSearchParams.sort : "sequence",
    page: resolvedSearchParams.page,
    filters,
  });

  // Remove the collection and division filters from displaying on this page.
  const { collection, division, ...filteredAvailableFilters } =
    searchResults.availableFilters || {};

  const updatedSearchParams = {
    ...resolvedSearchParams,
    availableFilters: filteredAvailableFilters,
  };
  return (
    <PageLayout
      activePage="collection"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Collections", url: "/collections" },
        {
          text: `${collectionData.title}`,
          url: `/collections/${uuid}`,
        },
      ]}
      ga4Data={{
        collection: collectionData.title,
        division: collectionData.divisionTitle,
      }}
    >
      <CollectionPage
        searchParams={updatedSearchParams}
        searchResults={searchResults}
        collectionData={collectionData}
      />
    </PageLayout>
  );
}
