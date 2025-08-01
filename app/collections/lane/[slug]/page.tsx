import React, { Suspense } from "react";
import { Metadata } from "next";
import CollectionLanePage from "@/src/components/pages/collectionLanePage/collectionLanePage";
import { slugToString } from "@/src/utils/utils";
import { RepoApi } from "@/src/utils/apiClients/apiClients";
import { redirect } from "next/navigation";

type LaneProps = {
  params: { slug: string };
  searchParams: { page: number };
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

export default async function Lane({ params, searchParams }: LaneProps) {
  const data = await RepoApi.getLaneData({
    slug: params.slug.replace(/-/g, " "),
    pageNum: searchParams.page,
  });
  const currentPage = Number(searchParams.page) || 1;

  return <CollectionLanePage data={data} currentPage={currentPage} />;
}
