"use client";
import { Suspense } from "react";
import SearchContent from "./content";
import { useRouter } from "next/navigation";

function SearchBarFallback() {
  return <>placeholder</>;
}

const SearchResults = ({}) => {
  const router = useRouter();

  if (process.env.APP_ENV === "qa" || process.env.APP_ENV === "production") {
    router.replace("/", undefined);
  }

  return (
    <>
      <Suspense fallback={<SearchBarFallback />}>
        <SearchContent />
      </Suspense>
    </>
  );
};
export default SearchResults;
