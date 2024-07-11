"use client";
import SearchResults from "../search/results";

interface CollectionPageProps {
  slug: String;
}

const CollectionsPage = ({ slug }: CollectionPageProps) => {
  return (
    <>
      <h2>{slug}</h2>
      <br />
      <SearchResults />
    </>
  );
};
export default CollectionsPage;
