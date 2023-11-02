import { Hero, Link as DSLink } from "@nypl/design-system-react-components";
import { imageURL } from "../../utils/utils";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";

const CampaignHero = () => {
  return (
    <Hero
      backgroundImageSrc={imageURL("1269908")}
      backgroundColor="ui.bg.default"
      heroType="campaign"
      heading={<CampaignHeroHeading />}
      imageProps={{
        alt: "Momoyogusa = Flowers of a Hundred Generations.",
        src: imageURL("1269908"),
      }}
      subHeaderText={<CampaignHeroSubText />}
    />
  );
};

export default CampaignHero;
