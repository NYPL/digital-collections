import React from "react";
import { Metadata } from "next";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "../../src/utils/utils";
import { ItemModel } from "../../src/models/item";
import { ItemPage } from "@/src/components/pages/itemPage/itemPage";
import { revalidatePath } from "next/cache";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";

type ItemProps = {
  params: {
    uuid: string;
    item: ItemModel;
  };
  searchParams: { canvasIndex: number };
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

  // only allow canvasIndex to be in the range of 0...item.imageIds.length (number of canvases)
  const imageIDs = item.imageIDs || [];
  const maxIndex = imageIDs.length - 1;
  const rawIndex = searchParams.canvasIndex || 0;
  const clampedCanvasIndex = Math.max(0, Math.min(rawIndex, maxIndex));
  return (
    <PageLayout
      activePage="item"
      breadcrumbs={[
        { text: "Home", url: "/" },
        {
          text: `${item.breadcrumbData.division.text}`,
          url: `${item.breadcrumbData.division.path}`,
        },
        {
          text: `${item.breadcrumbData.collection.text}`,
          url: `${item.breadcrumbData.collection.path}`,
        },
        {
          text: `${item.title}`,
          url: `/items/${params.uuid}`,
        },
      ]}
      adobeAnalyticsPageName={createAdobeAnalyticsPageName("items", item.title)}
    >
      <ItemPage
        manifest={manifest}
        uuid={params.uuid}
        canvasIndex={clampedCanvasIndex} //TODO: figure out why clampedCanvasIndex does not work with the query param added by the viewer
      />
    </PageLayout>
  );
}
