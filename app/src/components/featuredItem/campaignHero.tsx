import { Hero } from "@nypl/design-system-react-components";
import { useEffect, useState } from "react";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
import CampaignHeroLoading from "./campaignHeroLoading";
import defaultFeaturedItem from "../../data/defaultFeaturedItemData";
import appConfig from "../../../../appConfig";
import { FeaturedItemDataType } from "../../types/FeaturedItemDataType";
import React from "react";
import { ENV_KEY } from "../../types/EnvironmentType";
import Image from "next/image";

const CampaignHero = ({ featuredItemData }) => {
  const defaultFeaturedItemResponse =
    defaultFeaturedItem[appConfig["environment"] as ENV_KEY];

  const [data, setData] = useState<FeaturedItemDataType>(
    featuredItemData || defaultFeaturedItemResponse
  );

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log("error loading campaign hero:", e);
    setData(defaultFeaturedItemResponse);
    console.log("data in CampaignHero component is:", data);
  };

  return data?.featuredItem ? (
    <Hero
      backgroundImageSrc={data.featuredItem.backgroundImageSrc}
      backgroundColor="ui.bg.default"
      isDarkBackgroundImage
      heroType="campaign"
      isDarkText
      heading={
        <CampaignHeroHeading
          numberOfDigitizedItems={data.numberOfDigitizedItems}
        />
      }
      imageProps={{
        component: (
          <Image
            alt={data.featuredItem.title}
            src={data.featuredItem.foregroundImageSrc}
            fill
            loading={"eager"}
            onError={(_event) => {
              handleError(_event);
            }}
          />
        ),
      }}
      subHeaderText={<CampaignHeroSubText featuredItem={data.featuredItem} />}
    />
  ) : (
    <CampaignHeroLoading />
  );
};

export default CampaignHero;
