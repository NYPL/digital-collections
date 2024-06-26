"use client";
import { useSearchParams } from "next/navigation";

const SearchResults = ({}) => {
  const queryParams = useSearchParams();
  return (
    <>
      <h2>Search: {queryParams.toString()}</h2>
      <br />
    </>
  );
};
export default SearchResults;
