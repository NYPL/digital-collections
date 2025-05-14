import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import Item from "../../src/components/items/item";
import { RepoApi, CollectionsApi } from "../../src/utils/apiClients";
import { createAdobeAnalyticsPageName } from "../../src/utils/utils";
import { ItemModel } from "../../src/models/item";
import { ItemPage } from "@/src/components/pages/itemPage/itemPage";
import { revalidatePath } from "next/cache";

type ItemProps = {
  params: {
    uuid: string;
    item: ItemModel;
  };
  searchParams: { type: string };
};

let item;

const getItemManifest = async (uuid: string) => {
  const data = await CollectionsApi.getManifestForItemUUID(uuid);
  return data;
};

export async function generateMetadata({
  params,
}: ItemProps): Promise<Metadata> {
  const manifest = await getItemManifest(params.uuid);
  const item = new ItemModel(params.uuid, manifest);
  params.item = item;
  const title = item.title;
  return {
    title: `${title} - NYPL Digital Collections`, //should be item title
    openGraph: {
      title: `${title} - NYPL Digital Collections`,
    },
  };
}

export default async function ItemViewer({ params, searchParams }: ItemProps) {
  revalidatePath("/");
  const manifest = await getItemManifest(params.uuid);
  const item = new ItemModel(params.uuid, manifest);

  return (
    <PageLayout
      activePage="item"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Items", url: "/search/index" },
        {
          text: `${item.title}`,
          url: `/items/${params.uuid}`,
        },
      ]}
      adobeAnalyticsPageName={createAdobeAnalyticsPageName("items", item.title)}
    >
      <ItemPage
        manifest={manifest}
        type={searchParams.type}
        uuid={params.uuid}
      />
    </PageLayout>
  );
}
