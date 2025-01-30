import { NextResponse } from "next/server";
import collectionsUUIDSchema from "../../../../src/data/schemas/collectionsUUIDSchema";

export const GET = async () => {
  return NextResponse.json(collectionsUUIDSchema, { status: 200 });
};

// http://localhost:3000/api/schema/collections/:uuid
