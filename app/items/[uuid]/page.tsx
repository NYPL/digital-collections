import React from "react";
import { Metadata } from "next";
import { headers } from "next/headers";
import PageLayout from "../../src/components/pageLayout/pageLayout";
import { imageURL, createAdobeAnalyticsPageName } from "../../src/utils/utils";
import { ItemModel } from "../../src/models/item";
import { ItemPage } from "@/src/components/pages/itemPage/itemPage";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
import { extractAllAnchorsFromHTML } from "@/src/utils/metadata/extractAnchorHrefs";

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
  const [itemDetail, manifest] = await Promise.all([
    getItemData(params.uuid),
    getItemManifest(params.uuid),
  ]);
  // If we get no item data, this ends up being a canvas redirect anyway
  if (!itemDetail) {
    return {};
  }
  const item = new ItemModel(params.uuid, manifest, itemDetail);
  params.item = item;
  const title = item.title;
  return {
    title: `${title} - NYPL Digital Collections`, //should be item title
    openGraph: {
      title: `${title} - NYPL Digital Collections`,
      images: [
        {
          url: item.imageIDs
            ? imageURL(item.imageIDs[0], "full", "!288,288", "0")
            : "/noImage.png",
          alt: `${title} - NYPL Digital Collections`,
        },
      ],
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
  console.log("params are: ", params);
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

  const item = new ItemModel(params.uuid, manifest, itemData);

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
        collection: breadcrumbData[2]?.text,
        subcollection: item.subcollectionName ?? undefined,
        contentType: item.contentType,
        resourceType: extractAllAnchorsFromHTML(item.typeOfResource)
          .map((anchor) => anchor.text.toLowerCase())
          .join(","),
      }}
    >
      <ItemPage
        citationsData={citationsData}
        manifest={manifest}
        uuid={params.uuid}
        itemDetail={itemData}
        canvasIndex={clampedCanvasIndex}
      />
    </PageLayout>
  );
}
