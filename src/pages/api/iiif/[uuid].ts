import manifestData from "@/data/manifest.json";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function slugHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method, query } = request;
  const uuid = query.uuid as string;
  // const manifestData =
  return response.status(200).json(manifestData);

  // if (method === "GET") {
  //   if (uuid) {
  //     return response.status(200).json(manifestData);
  //   } else {
  //     return response.status(404).json({ error: " not found" });
  //   }
  // }
}

// http://localhost:3000/api/lanes/:slug
