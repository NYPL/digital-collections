import { Hero, Link as DSLink } from "@nypl/design-system-react-components";
import imageURL from "../../utils/utils";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";

const CampaignHero = ({ featuredItems }: any) => {
  const randomIndex = Math.floor(Math.random() * featuredItems.images.length);
  const imageID = featuredItems.images[randomIndex].split(".")[0];

  return (
    <Hero
      backgroundImageSrc={imageURL(imageID)}
      backgroundColor="ui.bg.default"
      heroType="campaign"
      heading={<CampaignHeroHeading />}
      imageProps={{
        alt: "Momoyogusa = Flowers of a Hundred Generations.",
        src: imageURL(imageID),
      }}
      subHeaderText={<CampaignHeroSubText />}
    />
  );
};

export default CampaignHero;
