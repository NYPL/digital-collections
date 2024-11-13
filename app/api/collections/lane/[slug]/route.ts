import { getLaneData } from "@/src/utils/api";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page");
  const data = await getLaneData({
    slug: params.slug.replace(/-/g, " "),
    pageNum: Number(page),
  });

  return NextResponse.json(data, { status: 200 });
};

// http://localhost:3000/api/lanes/:slug
