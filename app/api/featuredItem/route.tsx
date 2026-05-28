import { NextResponse } from "next/server";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async () => {
  const data = await CollectionsApi.getFeaturedItemData();

  const newResponse = NextResponse.json(data, { status: 200 });

  newResponse.headers.set("Cache-Control", "no-store");
  return newResponse;
};
