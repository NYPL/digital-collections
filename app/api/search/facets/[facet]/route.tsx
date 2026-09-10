import { NextRequest, NextResponse } from "next/server";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";

export const GET = async (
  request: NextRequest,
  context: { params: Promise<{ facet: string }> }
) => {
  const params = await context.params;
  const searchParams = request.nextUrl.searchParams;
  const q = searchParams.get("q") || "";
  const filters = searchParams.get("filters") || "";
  try {
    const response = await CollectionsApi.getFacetOptions(
      params.facet,
      q,
      filters
    );
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
};
