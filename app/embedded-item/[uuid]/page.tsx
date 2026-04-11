import React from "react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type ItemEmbedProps = {
  params: {
    uuid: string;
  };
  searchParams;
};

export default function ItemEmbedViewer({
  params,
  searchParams,
}: ItemEmbedProps) {
  revalidatePath("/");
  const queryString = new URLSearchParams({
    manifest: `${process.env.COLLECTIONS_API_URL}/manifests/${params.uuid}`,
    config: "/uvConfig.json",
    ...searchParams,
  }).toString();
  console.log(queryString);
  redirect(`/_next/static/uv.html#?${queryString}`);
}
