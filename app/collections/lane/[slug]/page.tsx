import React from "react";
import { Metadata } from "next";
import PageLayout from "../../../src/components/pageLayout/pageLayout";
import CollectionLanePage from "@/src/components/pages/collectionLanePage/collectionLanePage";
import { slugToString } from "@/src/utils/utils";

type LaneProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: LaneProps): Promise<Metadata> {
  const slug = params.slug;
  const title = slugToString(params.slug);
  return {
    title: `${title} - NYPL Digital Collections`,
  };
}

export default function Lane({ params }: LaneProps) {
  const pageName = `dc|collections|lane|${params.slug}`;
  return (
    <PageLayout
      activePage="lane"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Collections", url: "/collections" },
        {
          text: `${params.slug}`,
          url: `/collections/lane/${params.slug}`,
        },
      ]}
      adobeAnalyticsPageName={pageName}
    >
      <CollectionLanePage />
    </PageLayout>
  );
}
