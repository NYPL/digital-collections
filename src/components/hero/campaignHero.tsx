import { Hero, Link as DSLink } from "@nypl/design-system-react-components";
import { imageURL } from "../../utils/utils";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
import CampaignHeroLoading from "./campaignHeroLoading";
import { useEffect, useState } from "react";

const CampaignHero = ({ featuredItem, numberOfDigitizedItems }: any) => {
  // useEffect(() => {
  //   const fetchHeroData = async () => {
  //     console.log("imageID", imageID);
  //     const response = await fetch(`/api/featuredHero?imageID=${imageID}`);
  //     const data = await response.json();
  //     const isFeaturedItemLoading = setIsFeaturedItemLoading(false);
  //     console.log("isFeaturedItemLoading  IS: ", isFeaturedItemLoading);

  //     console.log(data);
  //     setHeroData(data);
  //   };
  // });

  return (
    <Hero
      backgroundImageSrc={featuredItem.imageSrc}
      backgroundColor="ui.bg.default"
      isDarkBackgroundImage
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
