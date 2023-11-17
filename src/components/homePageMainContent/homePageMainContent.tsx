import React from "react";
import FeaturedContentComponent from "../featuredContent/featuredContent";
import SwimLanes from "../swimlanes/swimLanes";

const HomePageMainContent = ({ testRandomNumber, lanesWithNumItems }) => {
  return (
    <>
      <SwimLanes lanesWithNumItems={[lanesWithNumItems[0]]} />
      <FeaturedContentComponent testRandomNumber={testRandomNumber} />
      <SwimLanes lanesWithNumItems={lanesWithNumItems.slice(1)} />
    </>
  );
};

export default HomePageMainContent;
