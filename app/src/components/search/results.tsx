"use client";
import { Suspense } from "react";
import SearchContent from "./content";

function SearchBarFallback() {
  return <>placeholder</>;
}

const SearchResults = ({ showFilter, isSearchPage, data }) => {
  console.log("data is: ", data);
  return (
    <>
      <Suspense fallback={<SearchBarFallback />}>
        <SearchContent
          showFilter={showFilter}
          isSearchPage={isSearchPage}
          data={data}
        />
      </Suspense>
    </>
  );
};
export default SearchResults;
