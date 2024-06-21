import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.APP_ENV === "development") {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    "/collections/lane/:path*",
    "/divisions/:path*",
    "/divisions",
    "/collections",
  ],
};
