import { Hero, Link as DSLink } from "@nypl/design-system-react-components";
import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
import CampaignHeroLoading from "./campaignHeroLoading";
import { useEffect, useState } from "react";

const CampaignHero = ({ imageID }) => {
  console.log(imageID);
  // const [isFeaturedItemLoading, setIsFeaturedItemLoading] = useState(false);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    // setIsFeaturedItemLoading(true);
    // console.log(
    //   "isFeaturedItemLoading before FETCH IS: ",
    //   isFeaturedItemLoading
    // );

    const fetchData = async () => {
      const response = await fetch(`/api/featuredHero?imageID=${imageID}`);
      const responseData = await response.json();
      console.log(responseData);
      setData(responseData);
      // setIsFeaturedItemLoading(false);
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
