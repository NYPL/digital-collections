"use client";
import { Suspense } from "react";
import SearchContent from "./content";

function SearchBarFallback() {
  return <>placeholder</>;
}

const SearchResults = ({}) => {
  return (
    <>
      <Suspense fallback={<SearchBarFallback />}>
        <SearchContent />
      </Suspense>
    </>
  );
};
export default SearchResults;
