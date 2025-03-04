import React from "react";
import { Metadata } from "next";
import PageLayout from "@/src/components/pageLayout/pageLayout";
import AllMapsViewer from "@/src/components/allMaps/allMaps";
import allMapsData from "../../src/data/maps/allmaps";
import { getItemData } from "../../src/utils/apiHelpers";
import { ItemModel } from "../../src/models/item";

type MapProps = {
  params: {
    uuid: string;
    item: ItemModel;
  };
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

const getAllMapsObject = async (uuid: string) => {
  const allMapsObj = allMapsData.find((obj) => obj.uuid === uuid);
  // const data = await getItemData(uuid);
  // const item = new ItemModel(data, uuid);
  return allMapsObj;
};

export async function generateMetadata({
  params,
}: MapProps): Promise<Metadata> {
  item = await getItem(params.uuid);
  params.item = item;
  return {
    title: `${item.title} - NYPL Digital Collections`, //should be item title
    openGraph: {
      title: `${item.title} - NYPL Digital Collections`,
    },
  };
}

export default async function MapsPage({ params }: MapProps) {
  const data = await getAllMapsObject(params.uuid);
  const item = await getItem(params.uuid);
  return (
    <PageLayout
      activePage="item"
      breadcrumbs={[
        { text: "Home", url: "/" },
        { text: "All Maps", url: "/maps" },
        {
          text: `${data?.name}`,
          url: `/maps/${params.uuid}`,
        },
      ]}
    >
      {data ? (
        <AllMapsViewer data={data} item={item} uuid={params.uuid} />
      ) : (
        <div>No map found for UUID: {params.uuid}</div>
      )}
    </PageLayout>
  );
}
