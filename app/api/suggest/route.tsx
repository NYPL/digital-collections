import { NextRequest, NextResponse } from "next/server";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";

const MIN_QUERY_LENGTH = 3;

export const GET = async (req: NextRequest) => {
  const q = req.nextUrl.searchParams.get("q") ?? "";

  if (q.length < MIN_QUERY_LENGTH) {
    return NextResponse.json({ suggestions: [] });
  }

  try {
    const data = await CollectionsApi.getSuggestions(q);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "unexpected error" },
      { status: 500 }
    );
  }
};
