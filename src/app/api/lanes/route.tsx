import { NextResponse } from "next/server";
import lanesData from "../../data/lanes";
import type { NextApiRequest } from "next";

export const getLanesData = () => {
  return lanesData;
};

export const GET = async (request: NextApiRequest, response: NextResponse) => {
  return NextResponse.json(getLanesData(), { status: 200 });
};

// http://localhost:3000/api/lanes
