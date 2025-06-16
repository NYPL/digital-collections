import { NextRequest } from "next/server";
import { fetchApi } from "@/src/utils/fetchApi/fetchApi";
import { CARDS_PER_PAGE } from "@/src/config/constants";

const oneMonth = 60 * 60 * 24 * 30;

const PAGESIZE = 50;

interface CollectionChildren {
  numResults: number;
  page: number;
  perPage: number;
  children: CollectionChild[];
}

interface CollectionChild {
  title: string;
  uuid: string;
  hasSubContainers: boolean;
  itemCount: number;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const uuid = params.slug;

  if (!uuid) {
    return new Response(JSON.stringify({ error: "Missing or invalid UUID" }), {
      status: 400,
    });
  }
  let children: CollectionChild[] = [];
  let page = 1;
  while (true) {
    try {
      let pageResult = await fetchPage(uuid, page);
      children.push(...pageResult.children);
      if (pageResult.children.length < PAGESIZE) {
        break;
      }
      page += 1;
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
  const body = { children: children };
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function fetchPage(
  uuid: string,
  page: number
): Promise<CollectionChildren> {
  const apiUrl = `${process.env.COLLECTIONS_API_URL}/collections/${uuid}/children?page=${page}&perPage=${PAGESIZE}`;
  const response = await fetchApi({
    apiUrl,
    options: { isRepoApi: false, next: { revalidate: oneMonth } },
  });
  return response;
}
