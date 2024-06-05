// "use client";
import { Hero } from "@nypl/design-system-react-components";
import { useEffect, useState } from "react";

import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
import CampaignHeroLoading from "./campaignHeroLoading";
import defaultFeaturedItem from "../../data/defaultFeaturedItemData";

import appConfig from "appConfig";
import { FeaturedItemData } from "@/types/FeaturedItemData";

import { createURL } from "@/utils/utils";

const CampaignHero = () => {
  const defaultFeaturedItemResponse =
    defaultFeaturedItem[appConfig["environment"]];

  const [data, setData] = useState<FeaturedItemData>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/featuredItem`);
      if (response.ok) {
        const responseData = await response.json();
        setData(responseData);
        return responseData;
      } else {
        console.log("res in error is: ", response);
        setData(defaultFeaturedItemResponse);
        throw new Error(
          "Something went wrong on API server! Method: fetchData() "
        );
      }
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
      backgroundImageSrc={data?.featuredItem.backgroundImageSrc}
      backgroundColor="ui.bg.default"
      isDarkBackgroundImage
      heroType="campaign"
      isDarkText
      heading={
        <CampaignHeroHeading
          numberOfDigitizedItems={data?.numberOfDigitizedItems}
        />
      }
      imageProps={{
        alt: data?.featuredItem.title,
        src: data?.featuredItem.foregroundImageSrc,
        fallbackSrc: data?.featuredItem.foregroundImageSrc,
        onError: (_event) => {
          handleError(_event);
        },
      }}
      subHeaderText={<CampaignHeroSubText featuredItem={data?.featuredItem} />}
    />
  ) : (
    <CampaignHeroLoading />
  );
};

export default CampaignHero;
