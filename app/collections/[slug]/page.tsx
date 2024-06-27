import React from "react";
import { Metadata } from "next";
import PageLayout from "app/components/pageLayout/pageLayout";
import CollectionsPage from "app/components/collections/collections";
import { useSearchParams } from "next/navigation";

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

export default function Lane({ params }: CollectionProps) {
  return (
    <PageLayout
      activePage="lane"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Collections", url: "/collections" },
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
