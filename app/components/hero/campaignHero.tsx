import { Hero } from "@nypl/design-system-react-components";
import { useEffect, useState } from "react";

import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
import CampaignHeroLoading from "./campaignHeroLoading";
import defaultFeaturedItem from "../../data/defaultFeaturedItemData";

import appConfig from "../../../appConfig";
import { FeaturedItemData } from "../../types/FeaturedItemData";
import React from "react";

const CampaignHero = () => {
  const defaultFeaturedItemResponse =
    defaultFeaturedItem[appConfig["environment"]];

  const [data, setData] = useState<FeaturedItemData>();

  useEffect(() => {
    const fetchData = async () => {
      let response;
      let responseData: FeaturedItemData;
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

  const handleError = (e: any) => {
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
