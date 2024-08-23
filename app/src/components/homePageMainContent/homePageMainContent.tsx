import React from "react";
import FeaturedContentComponent from "../featuredContent/featuredContent";
import SwimLanes from "../swimlanes/swimLanes";
import SwimLanesLoading from "../swimlanes/swimLanesLoading";
import { useNumColumns } from "../../hooks/useNumColumns";
import useBreakpoints from "@/src/hooks/useBreakpoints";

const HomePageMainContent = ({ data }) => {
  // const numColumns = useNumColumns();
  const { isLargerThanLargeTablet, isLargerThanLargeMobile } = useBreakpoints();
  const numColumns = isLargerThanLargeTablet
    ? 4
    : isLargerThanLargeMobile
    ? 2
    : 4;
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
