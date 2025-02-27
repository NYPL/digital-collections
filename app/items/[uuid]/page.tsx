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

let item;

const getItemModel = async (uuid: string) => {
  const data = await getItemData(uuid);
  return new ItemModel(data, uuid);
  // return item;
};

const getItem = async (uuid: string) => {
  const data = await getItemData(uuid);
  // const item = new ItemModel(data, uuid);
  return data;
};

export async function generateMetadata({
  params,
}: ItemProps): Promise<Metadata> {
  item = await getItem(params.uuid);
  params.item = item;
  return {
    title: `${item.title} - NYPL Digital Collections`, //should be item title
    openGraph: {
      title: `${item.title} - NYPL Digital Collections`,
    },
  };
}

export default async function ItemViewer({ params, searchParams }: ItemProps) {
  const data = await getItem(params.uuid);
  const item = new ItemModel(data);
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
      <ItemPage data={data} type={searchParams.type} uuid={params.uuid} />
    </PageLayout>
  );
}
