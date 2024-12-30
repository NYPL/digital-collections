import React, { Suspense } from "react";
import { Metadata } from "next";
import { CollectionsPage } from "../src/components/pages/collectionsPage/collectionsPage";
import { getCollectionsData } from "@/src/utils/apiHelpers";
import { redirect } from "next/navigation";
import CollectionSearchParams from "@/src/types/CollectionSearchParams";
export type CollectionsProps = {
  params: { slug: string };
  searchParams: CollectionSearchParams;
};

export const metadata: Metadata = {
  title: "Collections - NYPL Digital Collections",
  openGraph: {
    title: "Collections - NYPL Digital Collections",
  },
};

export default async function Collections({ searchParams }: CollectionsProps) {
  const data = await getCollectionsData({
    keyword: searchParams.collection_keywords,
    sortID: searchParams.sort,
    pageNum: searchParams.page,
  });

  // Repo API returns 404s within the data.
  if (
    data?.headers?.code === "404" &&
    data?.headers?.message !== "No collections found"
  ) {
    redirect("/404");
  }

  const renderCollections =
    data?.collection !== undefined && !data?.collection?.nil;
  return (
    <Suspense>
      <CollectionsPage
        data={data}
        params={searchParams}
        renderCollections={renderCollections}
      />
    </Suspense>
  );
}
