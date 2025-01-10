"use client";
import { Suspense } from "react";
import SearchContent from "./content";

const SearchResults = ({ data, params }) => {
  return (
    <>
      <Suspense>
        <SearchContent data={data} />
      </Suspense>
    </>
  );
};
export default SearchResults;
