import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Redirecting unreleased pages.
  if (process.env.APP_ENV === "development") {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// TODO: Remove pages from matcher as they're released.
export const config = {
  matcher: [
    "/collections",
    "/collections/:path*",
    "/divisions",
    "/divisions/:path*",
    "/items/:path*",
    "/search/:path*",
  ],
};
