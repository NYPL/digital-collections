import { Hero, Link as DSLink } from "@nypl/design-system-react-components";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
import CampaignHeroLoading from "./campaignHeroLoading";
import { useEffect, useState } from "react";

const CampaignHero = ({ imageID }) => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/featuredItem?imageID=${imageID}`);
      const responseData = await response.json();
      setData(responseData);
    };

    fetchData();
  }, [imageID]);

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
        src: data.featuredItem.smallImageSrc,
      }}
      subHeaderText={<CampaignHeroSubText featuredItem={data.featuredItem} />}
    />
  ) : (
    <CampaignHeroLoading />
  );
};

export default CampaignHero;
