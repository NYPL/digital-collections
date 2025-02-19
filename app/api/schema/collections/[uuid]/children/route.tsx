import { NextResponse } from "next/server";
import { collectionsChildrenSchema } from "app/src/data/schemas/collectionsChildrenSchema";

export const GET = async () => {
  return NextResponse.json(collectionsChildrenSchema, { status: 200 });
};

// http://localhost:3000/api/schema/collections/[uuid]/children
