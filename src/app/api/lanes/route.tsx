import { NextResponse } from "next/server";
import lanesData from "../../data/lanes";

export const GET = async () => {
  return NextResponse.json(lanesData, { status: 200 });
};

// http://localhost:3000/api/lanes
