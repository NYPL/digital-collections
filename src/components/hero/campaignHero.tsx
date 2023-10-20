import { Hero, Link as DSLink } from "@nypl/design-system-react-components";
import imageURL from "../../utils/utils";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";

const CampaignHero = () => {
  return (
    <Hero
      backgroundImageSrc={imageURL("1269908")}
      backgroundColor="var(--nypl-colors-ui-bg-default)" // don't know why but this still does not like ui.bg.default after upgrading the version of Reservoir.
      color="ui.typography.heading"
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
