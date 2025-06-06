import HomePage from "./src/components/pages/homePage/homePage";
import { RepoApi, CollectionsApi } from "@/src/utils/apiClients/apiClients";
import { FeaturedItemDataType } from "../app/src/types/FeaturedItemDataType";
import { revalidatePath } from "next/cache";

export default async function Home() {
  revalidatePath("/");
  const swimLaneData = await CollectionsApi.getHomePageData();
  const featuredItemData: FeaturedItemDataType =
    await RepoApi.getFeaturedItemData();
  return (
    <HomePage
      data={{ swimLaneData: swimLaneData, featuredItemData: featuredItemData }}
    />
  );
}
