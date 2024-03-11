import { Hero } from "@nypl/design-system-react-components";
import { useEffect, useState } from "react";

import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
import CampaignHeroLoading from "./campaignHeroLoading";

const CampaignHero = ({ imageID }) => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/featuredItem`);
      const responseData = await response.json();
      setData(responseData);
    };

    fetchData();
  }, [imageID]);

  return data?.featuredItem ? (
    <Hero
      backgroundImageSrc={data.featuredItem.backgroundImageSrc}
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
        src: data.featuredItem.foregroundImageSrc,
      }}
      subHeaderText={<CampaignHeroSubText featuredItem={data.featuredItem} />}
    />
  ) : (
    <CampaignHeroLoading />
  );
};

export default CampaignHero;
