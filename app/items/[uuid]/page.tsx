import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import Item from "../../src/components/items/item";
import { getItemData } from "../../src/utils/apiHelpers";
import { createAdobeAnalyticsPageName } from "../../src/utils/utils";
import { ItemModel } from "../../src/models/item";
import { ItemPage } from "@/src/components/pages/itemPage/itemPage";

type ItemProps = {
  params: {
    uuid: string;
    item: ItemModel;
  };
  searchParams: { type: string };
};

const getItemModel = async (uuid: string) => {
  const data = await getItemData(uuid);
  const item = new ItemModel(data, uuid);
  return item;
};

export async function generateMetadata({
  params,
}: ItemProps): Promise<Metadata> {
  const item = await getItemModel(params.uuid);
  params.item = item;
  return {
    title: `${item.title} - NYPL Digital Collections`, //should be item title
    openGraph: {
      title: `${item.title} - NYPL Digital Collections`,
    },
  };
}

export default async function ItemViewer({ params, searchParams }: ItemProps) {
  const item = await getItemModel(params.uuid);
  return (
    <PageLayout
      activePage="item"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Items", url: "/items" },
        {
          text: `${item.title}`,
          url: `/items/${params.uuid}`,
        },
      ]}
      adobeAnalyticsPageName={createAdobeAnalyticsPageName("items", item.title)}
    >
      <ItemPage item={item} type={searchParams.type} />
    </PageLayout>
  );
}
