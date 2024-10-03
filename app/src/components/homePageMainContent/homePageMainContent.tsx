import React from "react";
import FeaturedContentComponent from "../featuredContent/featuredContent";
import { useEffect, useState } from "react";
import CollectionLanes from "../lanes/collectionLanes/collectionLanes";
import CollectionLanesLoading from "../lanes/collectionLanes/collectionLanesLoading";
import { DC_URL } from "@/src/config/constants";

const HomePageMainContent = ({ data }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded ? (
    <>
      <CollectionLanes
        lanesWithNumItems={[data.lanesWithNumItems[0]]}
        seeMoreLink={`${DC_URL}/collections/lane`}
      />
      <FeaturedContentComponent randomNumber={data.randomNumber} />
      <CollectionLanes
        lanesWithNumItems={data.lanesWithNumItems.slice(1)}
        seeMoreLink={`${DC_URL}/collections/lane`}
      />
    </>
  ) : (
    <>
      <CollectionLanesLoading />
    </>
  );
};

export default HomePageMainContent;
