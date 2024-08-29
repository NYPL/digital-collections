import { NextResponse, NextRequest } from "next/server";
import { getFeaturedItemData } from "@/src/utils/api";
export const fetchCache = "force-no-store";

export const GET = async (request: NextRequest, response: NextResponse) => {
  const data = await getFeaturedItemData();

  const newResponse = NextResponse.json(data, { status: 200 });

  newResponse.headers.set("Cache-Control", "no-store");
  return newResponse;
};
