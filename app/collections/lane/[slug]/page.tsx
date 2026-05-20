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

export async function generateMetadata({
  params,
}: LaneProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slugToString(slug);
  return {
    title: `${title} - NYPL Digital Collections`,
    openGraph: {
      title: `${title} - NYPL Digital Collections`,
    },
  };
}

export default async function Lane({ params, searchParams }: LaneProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const data = await CollectionsApi.getLaneData({
    slug: slug.replace(/-/g, " "),
    sort: "items-count",
    pageNum: resolvedSearchParams.page,
  });
  const currentPage = Number(resolvedSearchParams.page) || 1;

  return <CollectionLanePage data={data} currentPage={currentPage} />;
}
