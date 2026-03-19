import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Shuffle",
};

export const dynamic = "force-dynamic";

export default async function Shuffle() {
  await headers();

  const url: string = await CollectionsApi.getRandomCollectionOrItem();
  return redirect(url);
}
