import React, { Suspense } from "react";
import { Metadata } from "next";
import { CollectionsPage } from "../src/components/pages/collectionsPage/collectionsPage";
import { getCollectionsData } from "@/src/utils/apiHelpers";
import { redirect } from "next/navigation";

export type CollectionsProps = {
  params: { slug: string };
  searchParams: { page: number; sort: string; collection_keyword: string };
};

export const metadata: Metadata = {
  title: "Collections - NYPL Digital Collections",
  openGraph: {
    title: "Collections - NYPL Digital Collections",
  },
};

export default async function Collections({ searchParams }: CollectionsProps) {
  const data = await getCollectionsData({
    keyword: searchParams.collection_keyword,
    sortID: searchParams.sort,
    pageNum: searchParams.page,
  }); // TODO: create model for APICollectionsData from API to clean up the data before it's sent down to the components.

  // Repo API returns 404s within the data.
  if (
    data?.headers?.code === "404" &&
    data?.headers?.message !== "No collections found"
  ) {
    redirect("/404");
  }

  return (
    <Suspense>
      {/* pass entire Repo API Response */}
      <CollectionsPage data={data} />
    </Suspense>
  );
}
