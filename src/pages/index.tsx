import CampaignHero from "../components/hero/campaignHero";
import { TemplateAppContainer } from "@nypl/design-system-react-components";
import Header from "@/components/header/header";
import HomePageMainContent from "@/components/homePageMainContent/homePageMainContent";
import ExploreFurther from "@/components/exploreFurther/exploreFurther";
import NotificationBanner from "@/components/notificationBanner/notificationBanner";
import { featuredImageID } from "@/utils/utils";

export default function Home(props: any = {}) {
  console.log("props", props);
  // const imageID = featuredImageID();
  return (
    <>
      {/**
       * * @TODO: Header will need to be pulled into a reusable Layout component (DC Facelift phase 2)
       * * Let this be @7emansell 's problem if possible **/}
      <NotificationBanner />
      <Header />
      <TemplateAppContainer
        breakout={<CampaignHero imageID={props.imageID} />}
        contentPrimary={<HomePageMainContent />}
      />
      <ExploreFurther />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const imageID = context.query.imageID
    ? featuredImageID(context.query.imageID)
    : featuredImageID();

  return {
    props: {
      imageID: imageID,
    },
  };
}
