import React from "react";
import FeaturedContentComponent from "../featuredContent/featuredContent";
import SwimLanes from "../swimlanes/swimLanes";
import { useEffect, useState } from "react";
import SwimLanesLoading from "../swimlanes/swimLanesLoading";

const HomePageMainContent = () => {
  // const [isSwimLaneLoading, setIsSwimLaneLoading] = useState(false);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    // setIsSwimLaneLoading(true);
    // console.log("isSwimLaneLoading before FETCH IS: ", isSwimLaneLoading);
    const fetchData = async () => {
      const response = await fetch("/api/homepagedata");
      const responseData = await response.json();
      console.log(responseData);
      setData(responseData);
      // setIsSwimLaneLoading(false);
    };

    console.log("fetching swim lane data");
    fetchData();
  }, []);
  return data?.lanesWithNumItems ? (
    <>
      <SwimLanes lanesWithNumItems={[data.lanesWithNumItems[0]]} />
      <FeaturedContentComponent randomNumber={data.randomNumber} />
      <SwimLanes lanesWithNumItems={data.lanesWithNumItems.slice(1)} />
    </>
  ) : (
    <>
      <SwimLanesLoading />
    </>
  );
};

export default HomePageMainContent;
