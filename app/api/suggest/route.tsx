import { NextRequest, NextResponse } from "next/server";

const MIN_QUERY_LENGTH = 3;

export const GET = async (req: NextRequest) => {
  const q = req.nextUrl.searchParams.get("q") ?? "";

  if (q.length < MIN_QUERY_LENGTH) {
    return NextResponse.json({ suggestions: [] });
  }

  const apiUrl = `${
    process.env.COLLECTIONS_API_URL
  }/search/suggestions?q=${encodeURIComponent(q)}`;

  try {
    const res = await fetch(apiUrl, {
      headers: {
        "x-nypl-collections-api-key":
          process.env.COLLECTIONS_API_AUTH_TOKEN ?? "",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `collections-api responded with ${res.status}` },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "unexpected error" },
      { status: 500 }
    );
  }
};
