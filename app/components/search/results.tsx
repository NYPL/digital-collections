"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const SearchResults = ({}) => {
  const queryParams = useSearchParams();
  return (
    <>
      <Suspense>
        <h2>Search params: {queryParams.toString()}</h2>
        <br />
      </Suspense>
    </>
  );
};
export default SearchResults;
