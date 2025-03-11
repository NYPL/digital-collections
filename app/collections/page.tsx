import React from "react";
import { Metadata } from "next";
import { CollectionsPage } from "../src/components/pages/collectionsPage/collectionsPage";
import { CollectionsApi } from "@/src/utils/apiClients";
import { redirect } from "next/navigation";
import CollectionSearchParams from "@/src/types/CollectionSearchParams";
import PageLayout from "@/src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "@/src/utils/utils";
import { revalidatePath } from "next/cache";

revalidatePath("/collections", "page");

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
  const data = await CollectionsApi.getCollectionsData({
    keyword: searchParams.q,
    sort: searchParams.sort,
    page: searchParams.page,
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
      adobeAnalyticsPageName={createAdobeAnalyticsPageName("all-collections")}
    >
      <CollectionsPage collectionsSearchParams={searchParams} data={data} />
    </PageLayout>
  );
}
