import { Hero } from "@nypl/design-system-react-components";
import { useState } from "react";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
import CampaignHeroLoading from "./campaignHeroLoading";
import defaultFeaturedItem from "../../data/defaultFeaturedItemData";
import { FeaturedItemDataType } from "../../types/FeaturedItemDataType";
import React from "react";

const CampaignHero = ({ featuredItemData }) => {
  const defaultFeaturedItemResponse = defaultFeaturedItem;

  const [data, setData] = useState<FeaturedItemDataType>(
    featuredItemData || defaultFeaturedItemResponse
  );

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if ((window as any).newrelic) {
      (window as any).newrelic.noticeError(
        "Error loading campaign hero default image"
      );
    }
    setData(defaultFeaturedItemResponse);
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
        alt: data.featuredItem.title,
        src: data.featuredItem.foregroundImageSrc,
        fallbackSrc: data.featuredItem.foregroundImageSrc,
        onError: (_event) => {
          handleError(_event);
        },
      }}
      subHeaderText={<CampaignHeroSubText featuredItem={data.featuredItem} />}
    />
  ) : (
    <CampaignHeroLoading />
  );
};

export default CampaignHero;
