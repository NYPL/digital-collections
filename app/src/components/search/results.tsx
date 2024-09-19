"use client";
import { Suspense } from "react";
import SearchContent from "./content";

function SearchBarFallback() {
  return <>placeholder</>;
}

const SearchResults = ({ showFilter }) => {
  return (
    <>
      <Suspense fallback={<SearchBarFallback />}>
        <SearchContent showFilter={showFilter} />
      </Suspense>
    </>
  );
};
export default SearchResults;
