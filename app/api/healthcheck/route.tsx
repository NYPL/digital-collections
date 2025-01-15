import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ status: 200, message: "OK" });
};

// // http://localhost:3000/api/healthcheck
