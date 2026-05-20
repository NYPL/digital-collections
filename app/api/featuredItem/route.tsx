import { NextResponse, NextRequest } from "next/server";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
export const fetchCache = "force-no-store";

export const GET = async (_request: NextRequest) => {
  const data = await CollectionsApi.getFeaturedItemData();

  const newResponse = NextResponse.json(data, { status: 200 });

  newResponse.headers.set("Cache-Control", "no-store");
  return newResponse;
};
