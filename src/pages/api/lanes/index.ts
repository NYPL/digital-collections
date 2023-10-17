import lanesData from "@/data/lanes.json";
import type { NextApiRequest, NextApiResponse } from "next";

export const getLanesData = () => {
  return lanesData;
};

const lanesDataHandler = (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { method } = request;
  if (method === "GET") {
    return response.status(200).json(getLanesData());
  }
};
export default lanesDataHandler;

// http://localhost:3000/api/lanes

