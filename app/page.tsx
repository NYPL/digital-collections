import HomePage from "./src/components/pages/homePage/homePage";
import { getHomePageData } from "@/src/utils/api";

export default async function Home() {
  const data = await getHomePageData();
  return <HomePage data={data} />;
}
