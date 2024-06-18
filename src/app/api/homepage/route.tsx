import data from "../../data/lanes";
import { getItemsCountFromUUIDs } from "../../utils/utils";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (request: NextRequest, response: NextResponse) => {
  const randomNumber = Math.floor(Math.random() * 2);
  const lanes = data.lanes;
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

  const newResponse = NextResponse.json(
    {
      randomNumber,
      lanesWithNumItems: updatedLanes,
    },
    { status: 200 }
  );

  newResponse.headers.set("Cache-Control", "s-maxage=86400");

  return newResponse;
};

// http://localhost:3000/api/homepage
