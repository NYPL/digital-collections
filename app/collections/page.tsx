import React from "react";
import { Metadata } from "next";
import { CollectionsPage } from "../src/components/pages/collectionsPage/collectionsPage";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
import { redirect } from "next/navigation";
import PageLayout from "@/src/components/pageLayout/pageLayout";
import { CollectionSearchParamsType } from "./[uuid]/page";

export type CollectionsProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<CollectionSearchParamsType>;
};

export const metadata: Metadata = {
  title: "Collections - NYPL Digital Collections",
  openGraph: {
    title: "Collections - NYPL Digital Collections",
  },
};

export default async function Collections({ searchParams }: CollectionsProps) {
  const resolvedSearchParams = await searchParams;

  const data = await CollectionsApi.getCollectionsData({
    keyword: resolvedSearchParams.q,
    sort: resolvedSearchParams.sort,
    page: resolvedSearchParams.page,
  });

  // Repo API returns 404s within the data.
  if (
    data?.headers?.code === "404" &&
    data?.headers?.message !== "No collections found"
  ) {
    redirect("/404");
  }

  return (
    <PageLayout
      activePage="collections"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "Collections", url: "/collections" },
      ]}
    >
      <CollectionsPage collectionsSearchParams={searchParams} data={data} />
    </PageLayout>
  );
}
