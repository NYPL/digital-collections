import React from "react";
import FeaturedContentComponent from "../featuredContent/featuredContent";
import { useEffect, useState } from "react";
import { Lane as DCLane } from "../lane/lane";
import LaneDataType from "@/src/types/LaneDataType";
import LaneLoading from "../lane/laneLoading";

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
        seeMoreLink={`/collections/lane`}
        laneName={firstSwimLane.name}
        laneSlug={firstSwimLane.slug}
      />
      <FeaturedContentComponent randomNumber={randomNumber} />
      {swimlanes.slice(1).map((lane, key) => (
        <DCLane
          key={key}
          records={lane.collections}
          seeMoreLink={`/collections/lane`}
          laneName={lane.name}
          laneSlug={lane.slug}
        />
      ))}
    </>
  ) : (
    <>
      {[...Array(24)].map((_, index) => (
        <LaneLoading id={index} key={index} />
      ))}
    </>
  );
};

export default HomePageMainContent;
