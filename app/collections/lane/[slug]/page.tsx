import React, { Suspense } from "react";
import { Metadata } from "next";
import CollectionLanePage from "@/src/components/pages/collectionLanePage/collectionLanePage";
import { slugToString } from "@/src/utils/utils";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
import { redirect } from "next/navigation";

type LaneProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: number }>;
};

export async function generateMetadata(props: LaneProps): Promise<Metadata> {
  const params = await props.params;
  const title = slugToString(params.slug);
  return {
    title: `${title} - NYPL Digital Collections`,
    openGraph: {
      title: `${title} - NYPL Digital Collections`,
    },
  };
}

export default async function Lane(props: LaneProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const data = await CollectionsApi.getLaneData({
    slug: params.slug.replace(/-/g, " "),
    sort: "items-count",
    pageNum: searchParams.page,
  });
  const currentPage = Number(searchParams.page) || 1;

  return <CollectionLanePage data={data} currentPage={currentPage} />;
}
