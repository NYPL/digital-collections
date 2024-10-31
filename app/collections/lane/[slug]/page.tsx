import React, { Suspense } from "react";
import { Metadata } from "next";
import CollectionLanePage from "@/src/components/pages/collectionLanePage/collectionLanePage";
import { slugToString } from "@/src/utils/utils";
import { getLaneData } from "@/src/utils/api";
import { redirect } from "next/navigation";

type LaneProps = {
  params: { slug: string };
  searchParams: { page: number };
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

export default async function Lane({ params, searchParams }: LaneProps) {
  const data = await getLaneData({
    slug: params.slug.replace(/-/g, " "),
    pageNum: searchParams.page,
  });
  // Repo API returns 404s within the data.
  if (data?.headers?.code === "404") {
    redirect("/404");
  }
  const currentPage = Number(searchParams.page) || 1;

  return <CollectionLanePage data={data} currentPage={currentPage} />;
}
