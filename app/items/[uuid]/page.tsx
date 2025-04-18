import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import Item from "../../src/components/items/item";
import { RepoApi } from "../../src/utils/apiClients";
import { createAdobeAnalyticsPageName } from "../../src/utils/utils";
import { ItemModel } from "../../src/models/item";

type ItemProps = {
  params: {
    uuid: string;
    item: ItemModel;
  };
};

const getItemModel = async (uuid: string) => {
  const data = await RepoApi.getItemData(uuid);
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
    openGraph: {
      title: `${item.title} - NYPL Digital Collections`,
    },
  };
}

export default async function ItemPage({ params }: ItemProps) {
  const item = await getItemModel(params.uuid);
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
      <Item item={item} />
    </PageLayout>
  );
}
