import React, { Suspense } from "react";
import { Metadata } from "next";
import { CollectionsPage } from "../src/components/pages/collectionsPage/collectionsPage";
// import { mockCollectionCards } from "__tests__/__mocks__/data/mockCollectionCards";
import { getCollectionsData } from "@/src/utils/api";
import { redirect } from "next/navigation";

export type CollectionsProps = {
  params: { slug: string };
  searchParams: { page: number; sort: string; keyword: string };
};

export const metadata: Metadata = {
  title: "Collections - NYPL Digital Collections",
};

export default async function Collections({ searchParams }: CollectionsProps) {
  const data = await getCollectionsData({
    title: searchParams.keyword,
    sortID: searchParams.sort,
    pageNum: searchParams.page,
  });

  // Repo API returns 404s within the data.
  if (data?.headers?.code === "404") {
    redirect("/404");
  }

  return (
    <Suspense>
      {/* pass entire Repo API Response */}
      <CollectionsPage data={data} />
    </Suspense>
  );
}
