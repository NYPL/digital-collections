import React from "react";
import { Metadata } from "next";
import PageLayout from "app/components/pageLayout/pageLayout";
import Item from "@/components/items/item";
import { getItemData } from "@/utils/utils";
import { ItemModel } from "@/models/item";

let data = {};
let item;

type ItemProps = {
  params: {
    uuid: string;
    item: ItemModel;
  };
};

const getItem = async (uuid) => {
  const item = await getItemData(uuid);
  return item;
};

export async function generateMetadata({
  params,
}: ItemProps): Promise<Metadata> {
  data = await getItem(params.uuid);
  item = new ItemModel(data);
  params.item = item;
  return {
    title: `${item.title} - NYPL Digital Collections`, //should be item title
  };
}

export default async function Lane({ params }) {
  data = await getItem(params.uuid);
  item = new ItemModel(data);
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
      <Item uuid={params.uuid} />
    </PageLayout>
  );
}
