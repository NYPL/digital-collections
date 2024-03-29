import data from "@/data/lanes";
import { getItemsCountFromUUIDs } from "@/utils/utils";
import type { NextApiRequest, NextApiResponse } from "next";

const homepageHandler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { method } = request;
  if (method === "GET") {
    const randomNumber = Math.floor(Math.random() * 2);
    const lanes = data.lanes;
    // Get all the UUIDs from the collections
    const allCollectionUUIDs = lanes.reduce((acc, lane) => {
      return acc.concat(lane.collections.map((collection) => collection.uuid));
    }, []);
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

    // 24 hour cache
    response.setHeader("Cache-Control", "s-maxage=86400");

    return response.status(200).json({
      randomNumber,
      lanesWithNumItems: updatedLanes,
    });
  }
};

export default homepageHandler;
// http://localhost:3000/api/homepage
