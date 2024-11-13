import React from "react";
import { Metadata } from "next";
import CollectionLanePage from "@/src/components/pages/collectionLanePage/collectionLanePage";
import { slugToString } from "@/src/utils/utils";

type LaneProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: LaneProps): Promise<Metadata> {
  const title = slugToString(params.slug);
  return {
    title: `${title} - NYPL Digital Collections`,
    openGraph: {
      title: `${title} - NYPL Digital Collections`,
    },
  };
}

export default function Lane() {
  return <CollectionLanePage />;
}
