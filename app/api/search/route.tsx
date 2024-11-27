import { NextResponse } from "next/server";
import searchSchema from "../../src/data/schemas/searchSchema";

export const GET = async () => {
  return NextResponse.json(searchSchema, { status: 200 });
};

// http://localhost:3000/api/search
