import HomePage from "./src/components/pages/homePage/homePage";
import { RepoApi } from "@/src/utils/apiClients";
import { FeaturedItemDataType } from "../app/src/types/FeaturedItemDataType";
import { revalidatePath } from "next/cache";

export default async function Home() {
  revalidatePath("/");
  const swimLaneData = await RepoApi.getHomePageData();
  const featuredItemData: FeaturedItemDataType =
    await RepoApi.getFeaturedItemData();
  return (
    <HomePage
      data={{ swimLaneData: swimLaneData, featuredItemData: featuredItemData }}
    />
  );
}
