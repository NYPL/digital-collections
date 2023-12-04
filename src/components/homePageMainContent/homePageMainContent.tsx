import React from "react";
import FeaturedContentComponent from "../featuredContent/featuredContent";
import SwimLanes from "../swimlanes/swimLanes";

const HomePageMainContent = ({ randomNumber, lanesWithNumItems }) => {
  return (
    <>
      <SwimLanes lanesWithNumItems={[lanesWithNumItems[0]]} />
      <FeaturedContentComponent randomNumber={randomNumber} />
      <SwimLanes lanesWithNumItems={lanesWithNumItems.slice(1)} />
    </>
  );
};

export default HomePageMainContent;
