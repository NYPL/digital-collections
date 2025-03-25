import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import CollectionPage from "@/src/components/pages/collectionPage/collectionPage";
import { mockSearchResponse } from "__tests__/__mocks__/data/collectionsApi/mockSearchResponse";
import { CollectionsApi } from "@/src/utils/apiClients";
import { SearchParams } from "@/search/index/page";

type CollectionProps = {
  params: { slug: string };
  searchParams: SearchParams;
};

export async function generateMetadata({
  params,
}: CollectionProps): Promise<Metadata> {
  const slug = params.slug; //  TODO: this needs to support both a slug or a uuid.
  // We will need to update this later to check if slug is a uuid and then get the slugified title of the collection.
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
  const data = mockSearchResponse;
  // await CollectionsApi.getSearchData({
  //   keyword: searchParams.keywords,
  //   sort: searchParams.sort,
  //   page: searchParams.page,
  //   //filters: collection
  // });

  return (
    <PageLayout
      activePage="collection"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Collections", url: "/collections" },
        {
          text: `${params.slug}`,
          url: `/collections/${params.slug}`,
        },
      ]}
      adobeAnalyticsPageName={createAdobeAnalyticsPageName(
        "collections",
        params.slug
      )}
    >
      <CollectionPage
        slug={"Example collection"}
        searchParams={searchParams}
        data={mockSearchResponse}
      />
    </PageLayout>
  );
}
