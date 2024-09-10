import React from "react";
import FeaturedContentComponent from "../featuredContent/featuredContent";
import SwimLanes from "../swimlanes/swimLanes";
import SwimLanesLoading from "../swimlanes/swimLanesLoading";
import { useEffect, useState } from "react";

const HomePageMainContent = ({ data }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded ? (
    <>
      <SwimLanes lanesWithNumItems={[data.lanesWithNumItems[0]]} />
      <FeaturedContentComponent randomNumber={data.randomNumber} />
      <SwimLanes lanesWithNumItems={data.lanesWithNumItems.slice(1)} />
    </>
  ) : (
    <>
      <SwimLanesLoading />
    </>
  );
};

export default HomePageMainContent;
