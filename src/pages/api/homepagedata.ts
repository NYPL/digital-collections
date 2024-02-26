import data from "@/data/lanes";
import { getNumItems } from "@/utils/utils";
import type { NextApiRequest, NextApiResponse } from "next";

const itemsDataHandler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { method } = request;
  if (method === "GET") {
    const lanes = data.lanes;
    const flatCollections = [].concat(...lanes.map((lane) => lane.collections));
    const collectionsWithNumItems = await Promise.allSettled(
      flatCollections.map(async (collection) => {
        try {
          const numItems = await getNumItems(collection.uuid);
          return { ...collection, numItems };
        } catch (error) {
          return { ...collection, numItems: 0 };
        }
      })
    );
    const updatedLanes = lanes.map((lane) => {
      const updatedCollections = lane.collections.map(() => {
        const result = collectionsWithNumItems.shift();
        return result.status === "fulfilled"
          ? result.value
          : { ...result, value: {} };
      });
      return { ...lane, collections: updatedCollections };
    });
    const randomNumber = Math.floor(Math.random() * 2);

    return response.status(200).json({
      randomNumber,
      lanesWithNumItems: updatedLanes,
    });
  }
};
export default itemsDataHandler;

// http://localhost:3000/api/homepagedata
