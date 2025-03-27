import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const searchParams = url.searchParams;

  // TODO: add 'keyword' and 'keywords' to the list of params to change to 'q'
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
