
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeading,
	Flex,
	Heading,
	Hero,
	HorizontalRule,
	Link as DSLink,
	SimpleGrid,
	Spacer,
	TemplateAppContainer,
	Text,
} from "@nypl/design-system-react-components";

import imageURL from "@/utils/utils";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
const CampaignHero = () => {
  
  return(
    <>
    <Hero
      backgroundImageSrc={imageURL("1269908")}
      backgroundColor="var(--nypl-colors-ui-bg-default)"
      // background="ui.bg.default"
      // foregroundColor="ui.bg.default"
      color="ui.typography.heading"
      // textColor="black"
      heroType="campaign"
      // heading={<Heading color="black" level="one" id="campaign-hero" text="hello"/>}
      heading={ <CampaignHeroHeading/>}
      imageProps={{
        alt: "Image example",
        src: imageURL("1269908"),
      }}
      subHeaderText={<CampaignHeroSubText/>}
    />
    </>
  )
}

export default CampaignHero