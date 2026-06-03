import HomePage from "./src/components/pages/homePage/homePage";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
import { FeaturedItemDataType } from "../app/src/types/FeaturedItemDataType";

export const dynamic = "force-dynamic";

export default async function Home() {
  const swimLaneData = await CollectionsApi.getHomePageData();
  const featuredItemData: FeaturedItemDataType =
    await CollectionsApi.getFeaturedItemData();
  return (
    <HomePage
      data={{ swimLaneData: swimLaneData, featuredItemData: featuredItemData }}
    />
  );
}
