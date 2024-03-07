import { Hero } from "@nypl/design-system-react-components";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
import CampaignHeroLoading from "./campaignHeroLoading";
import { useEffect, useState } from "react";

const CampaignHero = ({ imageID }) => {
  const [data, setData] = useState<any>({});
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3; // Maximum number of retries for loading the image

  const fetchFeaturedItem = async () => {
    try {
      const response = await fetch(`/api/featuredItem`);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleImageError = () => {
    if (retryCount < maxRetries) {
      // Increment retry count and trigger image reload
      setRetryCount(retryCount + 1);
    } else {
      // Handle the case where the image fails to load after maximum retries
      console.log("Image failed to load after maximum retries.");
    }
  };

  useEffect(() => {
    fetchFeaturedItem();
  }, [imageID]);

  useEffect(() => {
    // This effect runs when retryCount changes, excluding the first fetch
    if (retryCount > 0 && retryCount <= maxRetries) {
      console.log(`Retrying image load: attempt ${retryCount}`);
    }
  }, [retryCount]);

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
        src: data.featuredItem.imageSrc + `?retry=${retryCount}`, // Adding a query parameter to force the browser to retry loading the image
      }}
      subHeaderText={<CampaignHeroSubText featuredItem={data.featuredItem} />}
    />
  ) : (
    <CampaignHeroLoading />
  );
};

export default CampaignHero;
