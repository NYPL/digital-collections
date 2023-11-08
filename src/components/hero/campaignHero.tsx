import { Hero, Link as DSLink } from "@nypl/design-system-react-components";
import { imageURL } from "../../utils/utils";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";

const CampaignHero = ({ featuredItem }: any) => {
  return (
    <Hero
      backgroundImageSrc={imageURL(featuredItem.imageID)}
      backgroundColor="ui.bg.default"
      heroType="campaign"
      heading={<CampaignHeroHeading />}
      imageProps={{
        alt: featuredItem.title,
        src: imageURL(featuredItem.imageID),
      }}
      subHeaderText={<CampaignHeroSubText featuredItem={featuredItem} />}
    />
  );
};

export default CampaignHero;
