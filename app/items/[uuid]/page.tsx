import React from "react";
import { Metadata } from "next";
import { headers } from "next/headers";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { createAdobeAnalyticsPageName } from "../../src/utils/utils";
import { ItemModel } from "../../src/models/item";
import { ItemPage } from "@/src/components/pages/itemPage/itemPage";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";

type ItemProps = {
  params: {
    uuid: string;
    item: ItemModel;
  };
  searchParams: { canvasIndex: number }; //TODO: possibly remove this, since we are using state
};

let item;

const getItemManifest = async (uuid: string) => {
  const clientIP = await getClientIP();
  const data = await CollectionsApi.getManifestForItemUUID(uuid, clientIP);
  return data;
};

const getItemData = async (uuid: string) => {
  try {
    return await CollectionsApi.getItemData(uuid);
  } catch (error: any) {
    return null;
  }
};

const getClientIP = async () => {
  const clientHeaders = await headers();
  const forwardedFor = clientHeaders.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0];
  }
  return clientHeaders.get("x-real-ip");
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

function formatItemBreadcrumbs(item: ItemModel) {
  const breadcrumbData = item.breadcrumbData;
  let breadcrumbs = [{ text: "Home", url: "/" }];
  if (breadcrumbData?.division) {
    breadcrumbs.push({
      text: breadcrumbData?.division.text,
      url: breadcrumbData?.division.path,
    });
  }
  if (breadcrumbData?.collection) {
    console.log(breadcrumbData.collection);
    breadcrumbs.push({
      text: breadcrumbData.collection.text,
      url: breadcrumbData.collection.path,
    });
  }
  breadcrumbs.push({
    text: `${item.title}`,
    url: `/items/${item.uuid}`,
  });
  return breadcrumbs;
}

export default async function ItemViewer({ params, searchParams }: ItemProps) {
  revalidatePath("/");
  const [citationsData, itemData, manifest] = await Promise.all([
    CollectionsApi.getCitationsData(params.uuid),
    getItemData(params.uuid),
    getItemManifest(params.uuid),
  ]);
  if (!itemData) {
    const capture = await CollectionsApi.getCaptureMetadata(params.uuid);
    redirect(
      `/items/${capture.itemUuid}?canvasIndex=${capture.orderInSequence - 1}`
    );
  }
  const item = new ItemModel(params.uuid, manifest, itemData.captures);

  // only allow canvasIndex to be in the range of 0...item.imageIds.length (number of canvases)
  const imageIDs = item.imageIDs || [];
  const maxIndex = imageIDs.length - 1;
  const rawIndex = searchParams.canvasIndex || 0;
  const clampedCanvasIndex = Math.max(0, Math.min(rawIndex, maxIndex));
  const breadcrumbData = formatItemBreadcrumbs(item);
  return (
    <PageLayout
      activePage="item"
      breadcrumbs={breadcrumbData}
      adobeAnalyticsPageName={createAdobeAnalyticsPageName("items", item.title)}
      ga4Data={{
        division: breadcrumbData[1]?.text,
        collection: breadcrumbData[2]?.text ?? "No detail",
        subcollection: item.subcollectionName ?? "No detail",
      }}
    >
      <ItemPage
        citationsData={citationsData}
        manifest={manifest}
        uuid={params.uuid}
        captures={itemData.captures}
        canvasIndex={clampedCanvasIndex}
      />
    </PageLayout>
  );
}
