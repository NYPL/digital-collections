import { NextResponse, NextRequest } from "next/server";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
import { FeaturedItemDataType } from "@/src/types/FeaturedItemDataType";
export const fetchCache = "force-no-store";

export const GET = async (
  request: NextRequest
): Promise<NextResponse<FeaturedItemDataType>> => {
  const data = await CollectionsApi.getFeaturedItemData();

  const newResponse = NextResponse.json(data, { status: 200 });

  newResponse.headers.set("Cache-Control", "no-store");
  return newResponse;
};
