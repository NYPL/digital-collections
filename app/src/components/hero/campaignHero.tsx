import { Hero } from "@nypl/design-system-react-components";
import { useEffect, useState } from "react";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
import CampaignHeroLoading from "./campaignHeroLoading";
import defaultFeaturedItem from "../../data/defaultFeaturedItemData";
import appConfig from "../../appConfig";
import { FeaturedItemDataType } from "../../types/FeaturedItemDataType";
import React from "react";
import { ENV_KEY } from "../../types/EnvironmentType";

const CampaignHero = () => {
  const defaultFeaturedItemResponse =
    defaultFeaturedItem[appConfig["environment"] as ENV_KEY];

  const [data, setData] = useState<FeaturedItemDataType>();

  useEffect(() => {
    const fetchData = async () => {
      let response;
      let responseData: FeaturedItemDataType;
      try {
        const response = await fetch("/api/featuredItem", {
          method: "GET",
          cache: "no-store",
        });
        responseData = await response.json();
      } catch (e) {
        console.log("CampaignHero error: ", e);
        console.log("using fallback featured item");
        responseData = defaultFeaturedItemResponse;
      }
      setData(responseData);
    };

    fetchData();
  }, [defaultFeaturedItemResponse]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log(e);
    setData(defaultFeaturedItemResponse);
    console.log("data is:", data);
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
