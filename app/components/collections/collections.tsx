"use client";
import SearchResults from "../search/results";
const Collections = ({ slug }) => {
  return (
    <>
      <h2>{slug}</h2>
      <br />
      <SearchResults />
    </>
  );
};
export default Collections;
