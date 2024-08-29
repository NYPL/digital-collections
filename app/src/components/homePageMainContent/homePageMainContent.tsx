import React from "react";
import FeaturedContentComponent from "../featuredContent/featuredContent";
import { useNumColumns } from "../../hooks/useNumColumns";
import { useEffect, useState } from "react";
import CollectionLanes from "../collectionLanes/collectionLanes";
import CollectionLanesLoading from "../collectionLanes/collectionLanesLoading";

const HomePageMainContent = ({ data }) => {
  const numColumns = useNumColumns();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded ? (
    <>
      <CollectionLanes
        numColumns={numColumns}
        lanesWithNumItems={[data.lanesWithNumItems[0]]}
        isSwimLane={true}
      />
      <FeaturedContentComponent randomNumber={data.randomNumber} />
      <CollectionLanes
        numColumns={numColumns}
        lanesWithNumItems={data.lanesWithNumItems.slice(1)}
        isSwimLane={true}
      />
    </>
  ) : (
    <>
      <CollectionLanesLoading />
    </>
  );
};

export default HomePageMainContent;
