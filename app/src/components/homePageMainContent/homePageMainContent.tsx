import React from "react";
import { useEffect, useState } from "react";
import FeaturedContentComponent from "../featuredContent/featuredContent";
import SwimLanes from "../swimlanes/swimLanes";
import SwimLanesLoading from "../swimlanes/swimLanesLoading";
import { useNumColumns } from "../../hooks/useNumColumns";

const HomePageMainContent = () => {
  const numColumns = useNumColumns();
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/homepage", {
        method: "GET",
        cache: "no-store",
      });
      const responseData = await response.json();
      setData(responseData);
    };

    fetchData();
  }, []);

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
