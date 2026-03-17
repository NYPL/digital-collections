import { NextRequest, NextResponse } from "next/server";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";

export const GET = async (
  request: NextRequest,
  { params }: { params: { facet: string } }
) => {
  const { facet } = params;
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const page = Number(url.searchParams.get("page") || "1");
  const perPage = Number(url.searchParams.get("perPage") || "10");

  try {
    const response = await CollectionsApi.getFacetOptions(facet, {
      keyword: q,
      page,
      perPage,
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
};

// Example: /api/search/facets/publisher?q=shakespeare&page=1&perPage=10
