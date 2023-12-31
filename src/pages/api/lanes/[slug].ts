import lanesData from "@/data/lanes";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function slugHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method, query } = request;
  const slug = query.slug as string;
  const slugData = lanesData.lanes.find((lane) => lane.slug === slug);

  if (method === "GET") {
    if (slugData) {
      return response.status(200).json(slugData);
    } else {
      return response.status(404).json({ error: "Lane not found" });
    }
  }
}

// http://localhost:3000/api/lanes/:slug
