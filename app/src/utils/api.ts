import data from "../../src/data/lanes";
import { getItemsCountFromUUIDs } from "../../src/utils/utils";
import { NextResponse, NextRequest } from "next/server";
import type { LaneDataType } from "../../src/types/Lane";
export const fetchCache = "force-no-store";

const homePageData = async () => {
  const randomNumber = Math.floor(Math.random() * 2);
  const lanes: LaneDataType[] = data.lanes as unknown as LaneDataType[];

  // Get all the UUIDs from the collections
  const allCollectionUUIDs: string[] = lanes.reduce((acc, lane) => {
    return acc.concat(lane.collections.map((collection) => collection.uuid));
  }, [] as string[]);
  const uuidtoItemCountMap = await getItemsCountFromUUIDs(allCollectionUUIDs);

  // Update the collections for each lane with the number of items
  const updatedLanes = lanes.map((lane) => {
    const updatedCollections = lane.collections.map((collection) => {
      return {
        ...collection,
        numItems: uuidtoItemCountMap[collection.uuid] || "0",
      };
    });
    return { ...lane, collections: updatedCollections };
  });

  const newResponse = { randomNumber, lanesWithNumItems: updatedLanes };
  return newResponse;
};

export const getHomePageData = async () => {
  const data = await homePageData();
  console.log("data in utils/api.ts is :", data);
  if (data.lanesWithNumItems[0]) {
    return data;
  } else {
    console.log("There is an error getting the home page data: ", data);
    throw new Error(
      "Something went wrong on API server! Method: getHomePageData() "
    );
  }
};
