"use client";
import { useSearchParams } from "next/navigation";

const Collections = ({ slug }) => {
  const queryParams = useSearchParams();
  const tab = queryParams.get("tab");

  return (
    <>
      <h2>
        {slug} {queryParams.toString()}
      </h2>
      <br />
    </>
  );
};
export default Collections;
