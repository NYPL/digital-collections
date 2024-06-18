import { NextResponse } from "next/server";
import lanesData from "../../../data/lanes";
import type { NextApiRequest } from "next";

export const GET = async (request: NextApiRequest, response: NextResponse) => {
  const { query } = request;
  const slug = query.slug as string;
  const slugData = lanesData.lanes.find((lane) => lane.slug === slug);

  if (slugData) {
    return NextResponse.json(
      {
        slugData,
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ error: "Lane not found" }, { status: 404 });
  }
};

// http://localhost:3000/api/lanes/:slug
