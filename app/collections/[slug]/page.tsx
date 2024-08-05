import React from "react";
import { Metadata } from "next";
import PageLayout from "../../../src/components/pageLayout/pageLayout";
import CollectionsPage from "src/components/collections/collections";

type CollectionProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: CollectionProps): Promise<Metadata> {
  const slug = params.slug;
  return {
    title: `${slug} - NYPL Digital Collections`,
  };
}

export default function Collections({ params }: CollectionProps) {
  return (
    <PageLayout
      activePage="lane"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Collections", url: "/collections" },
        {
          text: `${params.slug}`,
          url: `/collections/${params.slug}`,
        },
      ]}
    >
      <CollectionsPage slug={params.slug} />
    </PageLayout>
  );
}
