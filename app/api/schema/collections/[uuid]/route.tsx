import { NextResponse } from "next/server";
import collectionsLandingPageSchema from "../../../../src/data/schemas/collectionsLandingPageSchema";

export const GET = async () => {
  return NextResponse.json(collectionsLandingPageSchema, { status: 200 });
};

// http://localhost:3000/api/schema/collections/:uuid
