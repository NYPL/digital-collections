import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { mockItems } from "__tests__/__mocks__/data/mockItems";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import CollectionPage from "@/src/components/pages/collectionPage/collectionPage";

type CollectionProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: CollectionProps): Promise<Metadata> {
  const slug = params.slug; //  TODO: this needs to support both a slug or a uuid. we will need to update this later to check if slug is a uuid and then get the slugified title of the collection
  return {
    title: `${slug} - NYPL Digital Collections`,
    openGraph: {
      title: `${slug} - NYPL Digital Collections`,
    },
  };
}

export default function Collection({ params }: CollectionProps) {
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
      <CollectionPage slug={"Example collection"} data={mockItems} />
    </PageLayout>
  );
}
