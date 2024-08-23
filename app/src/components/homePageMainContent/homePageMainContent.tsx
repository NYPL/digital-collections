import React from "react";
import FeaturedContentComponent from "../featuredContent/featuredContent";
import SwimLanes from "../swimlanes/swimLanes";
import SwimLanesLoading from "../swimlanes/swimLanesLoading";
import { useNumColumns } from "../../hooks/useNumColumns";
import useBreakpoints from "@/src/hooks/useBreakpoints";
import { useEffect, useState } from "react";
const HomePageMainContent = ({ data }) => {
  const numColumns = useNumColumns();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded ? (
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
