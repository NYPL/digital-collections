import { NextResponse } from "next/server";
import searchFacetsSchema from "../../../src/data/schemas/searchFacetsSchema";

export const GET = async () => {
  return NextResponse.json(searchFacetsSchema, { status: 200 });
};

// http://localhost:3000/api/search/facets
