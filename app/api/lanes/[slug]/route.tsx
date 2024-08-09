import { NextResponse, NextRequest } from "next/server";
import lanesData from "../../../src/data/lanes";

export const GET = async (
  request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const slugData = lanesData.lanes.find((lane) => lane.slug === params.slug);

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
