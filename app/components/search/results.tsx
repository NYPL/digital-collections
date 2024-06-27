"use client";
import { Suspense } from "react";
import SearchBody from "./body";

function SearchBarFallback() {
  return <>placeholder</>;
}

const SearchResults = ({}) => {
  return (
    <>
      <Suspense fallback={<SearchBarFallback />}>
        <SearchBody />
      </Suspense>
    </>
  );
};
export default SearchResults;
