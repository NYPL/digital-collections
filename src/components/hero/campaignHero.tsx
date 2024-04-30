import { Hero } from "@nypl/design-system-react-components";
import { useEffect, useState } from "react";

import CampaignHeroSubText from "./campaignHeroSubText";
import CampaignHeroHeading from "./campaignHeroHeading";
import CampaignHeroLoading from "./campaignHeroLoading";

const CampaignHero = ({ imageID }) => {
  const [data, setData] = useState<any>({});
  const [imageSrc, setImageSrc] = useState("482815.jpg");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/featuredItem`);
      const responseData = await response.json();
      setData(responseData);
    };

    fetchData();
  }, [imageID]);
  // const handleError((e) => {
  //   console.log(e)
  // })
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
        fallbackSrc: data.defaultItem.imageSrc,
        // ,
        // onError: (_event) => {
        //   setImageSrc(fallbackImageSrc);
        // },
      }}
      subHeaderText={<CampaignHeroSubText featuredItem={data.featuredItem} />}
    />
  ) : (
    <CampaignHeroLoading />
  );
};

export default CampaignHero;
