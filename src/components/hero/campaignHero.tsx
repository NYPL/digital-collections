import { Hero } from "@nypl/design-system-react-components";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
import CampaignHeroLoading from "./campaignHeroLoading";
import { useEffect, useState } from "react";

const CampaignHero = ({ imageID }) => {
  // const [data, setData] = useState({});
  const [data, setData] = useState<any>({});
  const [smallImageUrl, setSmallImageUrl] = useState("");
  const [largeImageUrl, setLargeImageUrl] = useState("");
  const [retryCountSmallImage, setRetryCountSmallImage] = useState(0);
  const [retryCountLargeImage, setRetryCountLargeImage] = useState(0);
  const maxRetries = 3;

  const fetchFeaturedItem = async () => {
    try {
      const response = await fetch(`/api/featuredItem`);
      const responseData = await response.json();
      setData(responseData);
      // Initialize image URLs
      setSmallImageUrl(responseData.featuredItem.smallImageSrc);
      setLargeImageUrl(responseData.featuredItem.imageSrc);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchFeaturedItem();
  }, [imageID]);

  const updateImageUrl = (originalUrl, retryCount) => {
    return originalUrl.replace(/\/\!([0-9]+),([0-9]+)/, (match, p1, p2) => {
      const newSize = Math.max(parseInt(p1) - 100 * retryCount, 100); // Ensure minimum size of 100
      return `/!${newSize},${newSize}`;
    });
  };

  const attemptLoadImage = (url, setRetryCount, retryCount, setImageUrl) => {
    const img = new Image();
    img.src = url;
    img.onload = () => setImageUrl(url); // Image loaded successfully
    img.onerror = () => {
      if (retryCount < maxRetries) {
        const newRetryCount = retryCount + 1;
        setRetryCount(newRetryCount);
        const newUrl = updateImageUrl(url, newRetryCount);
        attemptLoadImage(newUrl, setRetryCount, newRetryCount, setImageUrl);
      } else {
        console.log("Image failed to load after maximum retries.");
      }
    };
  };

  useEffect(() => {
    if (data.featuredItem?.smallImageSrc) {
      attemptLoadImage(
        data.featuredItem.smallImageSrc,
        setRetryCountSmallImage,
        retryCountSmallImage,
        setSmallImageUrl
      );
    }
  }, [data.featuredItem?.smallImageSrc, retryCountSmallImage]);

  useEffect(() => {
    if (data.featuredItem?.imageSrc) {
      attemptLoadImage(
        data.featuredItem.imageSrc,
        setRetryCountLargeImage,
        retryCountLargeImage,
        setLargeImageUrl
      );
    }
  }, [data.featuredItem?.imageSrc, retryCountLargeImage]);

  return data?.featuredItem ? (
    <Hero
      backgroundImageSrc={largeImageUrl}
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
        src: smallImageUrl, // Use state-updated URL
      }}
      subHeaderText={<CampaignHeroSubText featuredItem={data.featuredItem} />}
    />
  ) : (
    <CampaignHeroLoading />
  );
};

export default CampaignHero;
