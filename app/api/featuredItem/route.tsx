import { NextResponse, NextRequest } from "next/server";
import { RepoApi } from "@/src/utils/apiClients";
export const fetchCache = "force-no-store";

export const GET = async (request: NextRequest, response: NextResponse) => {
  const data = await RepoApi.getFeaturedItemData();

  const newResponse = NextResponse.json(data, { status: 200 });

  newResponse.headers.set("Cache-Control", "no-store");
  return newResponse;
};
