import HomePage from "./src/components/pages/homePage/homePage";
import { CollectionsApi } from "@/src/utils/apiClients/apiClients";
import { FeaturedItemDataType } from "../app/src/types/FeaturedItemDataType";
import { Suspense } from "react";

export default async function Home() {
  //revalidatePath("/");
  const swimLaneData = await CollectionsApi.getHomePageData();
  const featuredItemData: FeaturedItemDataType =
    await CollectionsApi.getFeaturedItemData();
  return (
    <Suspense fallback={null}>
      <HomePage
        data={{
          swimLaneData: swimLaneData,
          featuredItemData: featuredItemData,
        }}
      />
    </Suspense>
  );
}
