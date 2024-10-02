import React from "react";
import FeaturedContentComponent from "../featuredContent/featuredContent";
import { useEffect, useState } from "react";
import CollectionLanesLoading from "../lane/laneLoading";
import { DC_URL } from "@/src/config/constants";
import { Lane as DCLane } from "../lane/lane";
import LaneDataType from "@/src/types/Lane";

interface HomePageMainContentProps {
  swimlanes: LaneDataType[];
  randomNumber: number;
}

const HomePageMainContent = ({
  swimlanes,
  randomNumber,
}: HomePageMainContentProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const firstSwimLane = swimlanes[0];
  return isLoaded ? (
    <>
      <div style={{ marginTop: "-3rem" }} />
      <DCLane
        key={0}
        records={firstSwimLane.collections}
        seeMoreLink={`${DC_URL}/collections/lane`}
        laneName={firstSwimLane.name}
        laneSlug={firstSwimLane.slug}
      />
      <FeaturedContentComponent randomNumber={randomNumber} />
      {swimlanes.slice(1).map((lane, key) => (
        <DCLane
          key={key}
          records={lane.collections}
          seeMoreLink={`${DC_URL}/collections/lane`}
          laneName={lane.name}
          laneSlug={lane.slug}
        />
      ))}
    </>
  ) : (
    <CollectionLanesLoading />
  );
};

export default HomePageMainContent;
