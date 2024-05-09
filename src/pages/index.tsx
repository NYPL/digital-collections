import CampaignHero from "../components/hero/campaignHero";
import {
  DSProvider,
  SkipNavigation,
  TemplateAppContainer,
} from "@nypl/design-system-react-components";
import Header from "@/components/header/header";
import HomePageMainContent from "@/components/homePageMainContent/homePageMainContent";
import ExploreFurther from "@/components/exploreFurther/exploreFurther";
import NotificationBanner from "@/components/notificationBanner/notificationBanner";
import Layout from "@/components/layout/layout";

export default function Home(props: any = {}) {
  return (
    <Layout activePage="home">
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
