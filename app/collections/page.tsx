import React from "react";
import { Metadata } from "next";
import { CollectionsPage } from "../src/components/pages/collectionsPage/collectionsPage";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
import { redirect } from "next/navigation";
import PageLayout from "@/src/components/pageLayout/pageLayout";
import { revalidatePath } from "next/cache";
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

export default async function Collections(props: CollectionsProps) {
  revalidatePath("/collections", "page");
  const params = await props.params;
  const searchParams = await props.searchParams;

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
    >
      <CollectionsPage collectionsSearchParams={searchParams} data={data} />
    </PageLayout>
  );
}
