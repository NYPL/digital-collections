import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const searchParams = url.searchParams;

  if (searchParams.has("collection_keywords")) {
    const keywordValue = searchParams.get("collection_keywords");

    searchParams.delete("collection_keywords");
    searchParams.set("q", keywordValue!);

    const newUrl = `${url.origin}${url.pathname}?${searchParams.toString()}`;

    return NextResponse.redirect(newUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
