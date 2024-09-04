import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
// import Item from "../../src/components/items/item";
import { stringToSlug } from "../../src/utils/utils";
import { getItemData } from "../../src/utils/api";
import { ItemModel } from "../../src/models/item";
import { ItemPage } from "../../src/components/pages/itemsPage/itemPage";

type ItemProps = {
  params: {
    uuid: string;
    item: ItemModel;
  };
};

const getItemModel = async (uuid: string) => {
  const data = await getItemData(uuid);
  // console.log("data is: ", data)
  const item = new ItemModel(data);
  return item;
};

export async function generateMetadata({
  params,
}: ItemProps): Promise<Metadata> {
  const item = await getItemModel(params.uuid);
  params.item = item;
  return {
    title: `${item.title} - NYPL Digital Collections`, //should be item title
  };
}

export default async function Item({ params }: ItemProps) {
  // const item = await getItemModel(params.uuid);
  // const pageName = `items|${stringToSlug(item.title)}`;
  return (
    // <PageLayout
    //   activePage="item"
    //   breadcrumbs={[
    //     { text: "Home", url: "/" },
    //     { text: "All Items", url: "/items" },
    //     {
    //       text: `${item.title}`,
    //       url: `/items/${params.uuid}`,
    //     },
    //   ]}
    //   adobeAnalyticsPageName={pageName}
    // >
    //   <Item item={item} />
    // </PageLayout>
    <ItemPage params={params} />
  );
}
