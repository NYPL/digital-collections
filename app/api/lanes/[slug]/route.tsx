import { NextResponse, NextRequest } from "next/server";
import lanesData from "../../../src/data/lanesData";

export const GET = async (
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  const { slug } = await params;
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
