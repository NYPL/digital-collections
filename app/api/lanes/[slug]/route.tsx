import { NextResponse, NextRequest } from "next/server";
import lanesData from "../../../src/data/lanesData";

export const GET = async (
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) => {
  const params = await context.params;
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
