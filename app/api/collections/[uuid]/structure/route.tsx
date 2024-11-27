import { NextResponse } from "next/server";
import collectionsStructureSchema from "../../../../src/data/schemas/collectionsStructureSchema";

export const GET = async () => {
  return NextResponse.json(collectionsStructureSchema, { status: 200 });
};

// http://localhost:3000/api/collections/:uuid/structure
