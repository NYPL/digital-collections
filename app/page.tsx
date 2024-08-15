import HomePage from "./src/components/pages/homePage/homePage";
import { getHomePageData } from "./src/utils/utils";

export default async function Home() {
  const data = await getHomePageData();
  // const response = await fetch("/api/homepage", {
  //   method: "GET",
  //   cache: "no-store",
  // }).then((res) =>
  //   res.json()
  // )
  // const responseData = await response.json();

  return <HomePage data={data} />;
}
