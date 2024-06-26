import React from "react";
import { useEffect, useState } from "react";

import FeaturedContentComponent from "../featuredContent/featuredContent";
import SwimLanes from "../swimlanes/swimLanes";
import SwimLanesLoading from "../swimlanes/swimLanesLoading";

const HomePageMainContent = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/homepage");
      const responseData = await response.json();
      console.log(responseData);
      setData(responseData);
    };

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
