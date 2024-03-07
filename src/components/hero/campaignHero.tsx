import { Hero } from "@nypl/design-system-react-components";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
import CampaignHeroLoading from "./campaignHeroLoading";
import { useEffect, useState } from "react";

const CampaignHero = ({ imageID }) => {
  const [data, setData] = useState<any>({});
  const [loadAttempt, setLoadAttempt] = useState(0);

  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = src;
    });
  };

  const fetchFeaturedItem = async () => {
    try {
      const response = await fetch(`/api/featuredItem`);
      const responseData = await response.json();
      setData(responseData);
      await preloadImage(responseData.featuredItem.imageSrc);
    } catch (error) {
      console.error("Error loading image:", error);
      setLoadAttempt((prevAttempt) => prevAttempt + 1); // Trigger another attempt
    }
  };

  useEffect(() => {
    fetchFeaturedItem();
  }, [imageID, loadAttempt]); // Retry fetching when loadAttempt changes

  return data?.featuredItem ? (
    <Hero
      backgroundImageSrc={data.featuredItem.imageSrc}
      backgroundColor="ui.bg.default"
      isDarkBackgroundImage
      heroType="campaign"
      heading={
        <CampaignHeroHeading
          numberOfDigitizedItems={data.numberOfDigitizedItems}
        />
      }
      imageProps={{
        alt: data.featuredItem.title,
        src: data.featuredItem.imageSrc,
      }}
      subHeaderText={<CampaignHeroSubText featuredItem={data.featuredItem} />}
    />
  ) : (
    <CampaignHeroLoading />
  );
};

export default CampaignHero;
