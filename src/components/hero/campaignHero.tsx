import { Hero, Link as DSLink } from "@nypl/design-system-react-components";
import { imageURL } from "../../utils/utils";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";

const CampaignHero = ({ featuredImageID }: any) => {
  return (
    <Hero
      backgroundImageSrc={imageURL(featuredImageID)}
      backgroundColor="ui.bg.default"
      heroType="campaign"
      heading={<CampaignHeroHeading />}
      imageProps={{
        alt: "Momoyogusa = Flowers of a Hundred Generations.",
        src: imageURL(featuredImageID),
      }}
      subHeaderText={<CampaignHeroSubText />}
    />
  );
};

export default CampaignHero;
