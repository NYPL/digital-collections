import { NextResponse, NextRequest } from "next/server";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
export const fetchCache = "force-no-store";

export const GET = async (request: NextRequest, response: NextResponse) => {
  const data = await CollectionsApi.getFeaturedItemData();

  const newResponse = NextResponse.json(data, { status: 200 });

  newResponse.headers.set("Cache-Control", "no-store");
  return newResponse;
};
