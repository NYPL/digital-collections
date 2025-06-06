import { NextResponse } from "next/server";
import lanesData from "../../src/data/lanesData";

export const GET = async () => {
  return NextResponse.json(lanesData, { status: 200 });
};

// http://localhost:3000/api/lanes
