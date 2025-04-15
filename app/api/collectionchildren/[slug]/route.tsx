import { NextRequest } from "next/server";
import { fetchApi } from "@/src/utils/fetchApi";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const uuid = params.slug;

  console.log("UUID:", uuid);

  if (!uuid) {
    return new Response(JSON.stringify({ error: "Missing or invalid UUID" }), {
      status: 400,
    });
  }
  try {
    const apiUrl = `${process.env.COLLECTIONS_API_URL}/collections/${uuid}/children`;

    console.log(apiUrl);
    const response = await fetchApi({
      apiUrl,
      options: { isRepoApi: false },
    });

    console.log(response);

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
