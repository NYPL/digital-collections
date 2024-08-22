import HomePage from "./src/components/pages/homePage/homePage";
import { getHomePageData, getFeaturedItemData } from "@/src/utils/api";
import { FeaturedItemDataType } from "../app/src/types/FeaturedItemDataType";
import { revalidatePath } from "next/cache";

export default async function Home() {
  revalidatePath("/");
  const swimLaneData = await getHomePageData();
  const featuredItemData: FeaturedItemDataType = await getFeaturedItemData();
  return (
    <HomePage
      data={{ swimLaneData: swimLaneData, featuredItemData: featuredItemData }}
    />
  );
}
