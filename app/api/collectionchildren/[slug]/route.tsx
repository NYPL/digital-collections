import { NextRequest } from "next/server";
import { fetchApi } from "@/src/utils/fetchApi/fetchApi";
import { CARDS_PER_PAGE } from "@/src/config/constants";

const oneMonth = 60 * 60 * 24 * 30;

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const uuid = params.slug;
  const page = Number(req.nextUrl.searchParams.get("page")) || 1;

  if (!uuid) {
    return new Response(JSON.stringify({ error: "Missing or invalid UUID" }), {
      status: 400,
    });
  }
  try {
    const apiUrl = `${process.env.COLLECTIONS_API_URL}/collections/${uuid}/children?page=${page}&perPage=${CARDS_PER_PAGE}`;
    const response = await fetchApi({
      apiUrl,
      options: { isRepoApi: false, next: { revalidate: oneMonth } },
    });

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error(
      "Error fetching collection children:",
      error.message || error
    );
    return new Response(
      JSON.stringify({ error: "Failed to fetch collection children" }),
      { status: 500 }
    );
  }
}
