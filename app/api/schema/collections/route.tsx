import { NextResponse } from "next/server";
import collectionsSchema from "../../../src/data/schemas/collectionsSchema";

export const GET = async () => {
  return NextResponse.json(collectionsSchema, { status: 200 });
};

// http://localhost:3000/api/schema/collections
