import CampaignHero from "../components/hero/campaignHero";
import { TemplateAppContainer } from "@nypl/design-system-react-components";
import HomePageMainContent from "@/components/homePageMainContent/homePageMainContent";
import ExploreFurther from "@/components/exploreFurther/exploreFurther";
import Layout from "@/components/layout/layout";
import { useContext, useEffect } from "react";
import { breadcrumbsContext } from "./breadcrumbsContext";

export default function Home(props: any = {}) {
  const { breadcrumbs, setBreadcrumbs } = useContext(breadcrumbsContext);
  useEffect(() => {
    setBreadcrumbs([{ text: "Home", url: "/" }]);
  }, []);
  return (
    <Layout activePage="home" breadcrumbs={breadcrumbs}>
      <TemplateAppContainer
        breakout={
          <div id="hero">
            <CampaignHero imageID={props.imageID} />
          </div>
        }
        contentPrimary={<HomePageMainContent />}
      />
      <ExploreFurther />
    </Layout>
  );
}
