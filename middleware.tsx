import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  //Redirecting unreleased pages.
  if (process.env.APP_ENV === "development" || process.env.APP_ENV === "qa") {
    return NextResponse.next();
  }
  // Excluding /collections and /collections/lane/[slug] from matcher
  else if (url.startsWith("/collections/lane/") || url === "/collections") {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// TODO: Remove pages from matcher as they're released.
export const config = {
  matcher: ["/collections/:path*", "/items/:path*", "/search/:path*"],
};
