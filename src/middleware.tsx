import { NextResponse } from "next/server";

// the list of all allowed origins
const allowedOrigins = [
  // "http://localhost:3000",
  "https://qa-new-digitalcollections.nypl.org",
  "https://new-digitalcollections.nypl.org/",
];

export function middleware(req) {
  // retrieve the current response
  const res = NextResponse.next();

  console.log("req.nextUrl.pathname : ", req.nextUrl.pathname);
  console.log("req.headers.origin : ", req.headers.origin);
  // if the incoming is for the desired API endpoint
  // eventually, I think the protected endpoints should go into a /protected directory
  // then we can just check if the pathname includes "/protected"
  if (
    req.nextUrl.pathname === "/api/homepage" ||
    req.nextUrl.pathname === "/api/featuredItem"
  ) {
    // retrieve the HTTP "Origin" header
    // from the incoming request
    const origin = req.headers.origin;
    //get("origin");

    // if the origin is an allowed one,
    // add it to the 'Access-Control-Allow-Origin' header
    if (allowedOrigins.includes(origin)) {
      res.headers.append("Access-Control-Allow-Origin", origin);
    }

    // add other CORS headers to the response
    res.headers.append(
      "Access-Control-Allow-Credentials",
      process.env.ACCESS_CONTROL_ALLOW_CREDENTIALS
    );

    res.headers.append(
      "Access-Control-Allow-Methods",
      process.env.ACCESS_CONTROL_ALLOW_METHODS
    );
    res.headers.append(
      "Access-Control-Allow-Headers",
      process.env.ACCESS_CONTROL_ALLOW_HEADERS
    );
  } else {
    // add the CORS headers to the response
    res.headers.append("Access-Control-Allow-Credentials", "false");
    res.headers.append("Access-Control-Allow-Origin", "*"); // Allow all origins
    res.headers.append(
      "Access-Control-Allow-Methods",
      "GET,DELETE,PATCH,POST,PUT"
    );
    res.headers.append(
      "Access-Control-Allow-Headers",
      "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date"
    );
  }

  return res;
}

// specify the path regex to apply the middleware to
export const config = {
  matcher: "/api/:path*",
};
