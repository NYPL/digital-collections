import { Hero, Link as DSLink } from "@nypl/design-system-react-components";
import { imageURL } from "../../utils/utils";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";

const CampaignHero = ({ featuredItem, numberOfDigitizedItems }: any) => {
  return (
    <Hero
      backgroundImageSrc={featuredItem.imageSrc}
      backgroundColor="ui.bg.default"
      heroType="campaign"
      heading={
        <CampaignHeroHeading numberOfDigitizedItems={numberOfDigitizedItems} />
      }
      imageProps={{
        alt: featuredItem.title,
        src: featuredItem.imageSrc,
      }}
      subHeaderText={<CampaignHeroSubText featuredItem={featuredItem} />}
    />
  );
};

export default CampaignHero;
