import HomePage from "./src/components/pages/homePage/homePage";
import { getHomePageData, getFeaturedItemData } from "@/src/utils/api";
import { FeaturedItemDataType } from "../app/src/types/FeaturedItemDataType";

export default async function Home() {
  const swimLaneData = await getHomePageData();
  const featuredItemData: FeaturedItemDataType = await getFeaturedItemData();
  const data = {
    swimLaneData: swimLaneData,
    featuredItemData: featuredItemData,
  };
  return <HomePage data={data} />;
}
