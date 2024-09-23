"use client";
import { Suspense } from "react";
import SearchContent from "./content";

function SearchBarFallback() {
  return <>placeholder</>;
}

const SearchResults = ({ showFilter, data }) => {
  console.log("data is: ", data);
  return (
    <>
      <Suspense fallback={<SearchBarFallback />}>
        <SearchContent showFilter={showFilter} data={data} />
      </Suspense>
    </>
  );
};
export default SearchResults;
