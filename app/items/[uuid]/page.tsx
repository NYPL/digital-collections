import React from "react";
import { Metadata } from "next";
import PageLayout from "app/components/pageLayout/pageLayout";
import Item from "@/components/items/item";
import { getItemData } from "@/utils/utils";
import { ItemModel } from "@/models/item";

type ItemProps = {
  params: {
    uuid: string;
    item: ItemModel;
  };
};

const getItemModel = async (uuid: string) => {
  const data = await getItemData(uuid);
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

export default async function ItemPage({ params }: ItemProps) {
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
    >
      <Item item={item} />
    </PageLayout>
  );
}
