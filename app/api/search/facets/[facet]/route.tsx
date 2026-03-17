import { NextRequest, NextResponse } from "next/server";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";

export const GET = async (
  request: NextRequest,
  { params }: { params: { facet: string } }
) => {
  const { facet } = params;
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";

  try {
    const response = await CollectionsApi.getFacetOptions(facet, {
      keyword: q,
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
};

// Example: /api/search/facets/publisher?q=shakespeare
