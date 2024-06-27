"use client";
import SearchResults from "../search/results";
const CollectionsPage = ({ slug }) => {
  return (
    <>
      <h2>{slug}</h2>
      <br />
      <SearchResults />
    </>
  );
};
export default CollectionsPage;
