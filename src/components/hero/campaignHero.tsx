import { Hero, Link as DSLink } from "@nypl/design-system-react-components";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
import CampaignHeroLoading from "./campaignHeroLoading";
import { useEffect, useState } from "react";

const CampaignHero = ({ imageID }) => {
  console.log(imageID);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/featuredHero?imageID=${imageID}`);
      const responseData = await response.json();
      console.log(responseData);
      setData(responseData);
    };

    console.log("fetching hero data");
    fetchData();
  });

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
