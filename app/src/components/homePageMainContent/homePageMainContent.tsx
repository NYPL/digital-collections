import React from "react";
import FeaturedContentComponent from "../featuredContent/featuredContent";
import { useEffect, useState } from "react";
import CollectionLanesLoading from "../lane/laneLoading";
import { DC_URL } from "@/src/config/constants";
import Lane from "../lane/lane";

const HomePageMainContent = ({ data }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded ? (
    <>
      {[data.lanesWithNumItems[0]].map((lane, key) => (
        <Lane
          key={key}
          records={lane.collections}
          seeMoreLink={`${DC_URL}/collections/lane`}
          laneName={lane.name}
          laneSlug={lane.slug}
        />
      ))}
      <FeaturedContentComponent randomNumber={data.randomNumber} />
      {data.lanesWithNumItems.slice(1).map((lane, key) => (
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
