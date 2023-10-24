import itemsData from "@/data/featureditems.json";
import type { NextApiRequest, NextApiResponse } from "next";

export const getItemsData = () => {
  return itemsData;
};

const itemsDataHandler = (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { method } = request;
  if (method === "GET") {
    return response.status(200).json(getItemsData());
  }
};
export default itemsDataHandler;

// http://localhost:3000/api/featuredItems
