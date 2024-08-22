import React from "react";
import FeaturedContentComponent from "../featuredContent/featuredContent";
import SwimLanes from "../swimlanes/swimLanes";
import SwimLanesLoading from "../swimlanes/swimLanesLoading";
import { useNumColumns } from "../../hooks/useNumColumns";

const HomePageMainContent = ({ data }) => {
  const numColumns = useNumColumns();

  return data?.lanesWithNumItems ? (
    <>
      <SwimLanes
        numColumns={numColumns}
        lanesWithNumItems={[data.lanesWithNumItems[0]]}
      />
      <FeaturedContentComponent randomNumber={data.randomNumber} />
      <SwimLanes
        numColumns={numColumns}
        lanesWithNumItems={data.lanesWithNumItems.slice(1)}
      />
    </>
  ) : (
    <>
      <SwimLanesLoading />
    </>
  );
};

export default HomePageMainContent;
