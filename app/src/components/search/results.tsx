"use client";
import { Suspense } from "react";
import SearchContent from "./content";

const SearchResults = ({ showFilter, data, params }) => {
  return (
    <>
      <Suspense>
        <SearchContent params={params} showFilter={showFilter} data={data} />
      </Suspense>
    </>
  );
};
export default SearchResults;
