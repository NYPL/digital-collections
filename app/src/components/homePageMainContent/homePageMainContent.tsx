import React from "react";
import FeaturedContentComponent from "../featuredContent/featuredContent";
import { useEffect, useState } from "react";
import CollectionLanesLoading from "../lane/laneLoading";
import { DC_URL } from "@/src/config/constants";
import Lane from "../lane/lane";
import LaneDataType from "@/src/types/Lane";

interface HomePageMainContentProps {
  swimlanes: LaneDataType[];
  randomNumber: number;
}

const HomePageMainContent = ({
  swimlanes,
  randomNumber,
}: HomePageMainContentProps) => {
  console.log(swimlanes);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded ? (
    <>
      {[swimlanes[0]].map((lane, key) => (
        <Lane
          key={key}
          records={lane.collections}
          seeMoreLink={`${DC_URL}/collections/lane`}
          laneName={lane.name}
          laneSlug={lane.slug}
        />
      ))}
      <FeaturedContentComponent randomNumber={randomNumber} />
      {swimlanes.slice(1).map((lane, key) => (
        <Lane
          key={key}
          records={lane.collections}
          seeMoreLink={`${DC_URL}/collections/lane`}
          laneName={lane.name}
          laneSlug={lane.slug}
        />
      ))}
    </>
  ) : (
    <>
      <CollectionLanesLoading />
    </>
  );
};

export default HomePageMainContent;
