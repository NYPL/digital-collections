import React from "react";
import { SearchBar } from "@nypl/design-system-react-components";
import { useRouter } from "next/router";

const handleSubmit = (event, router) => {
  event.preventDefault();
  const keywords = event.target.textInputName.value;
  const searchUrl = `https://digitalcollections.nypl.org/search/index?keywords=${encodeURIComponent(
    keywords
  )}`;
  router.push(searchUrl);
};

const Search = () => {
  const router = useRouter();
  return (
    <SearchBar
      id="searchBar-id"
      invalidText="Could not find the item"
      labelText="SearchBar Label"
      onSubmit={(event) => handleSubmit(event, router)}
      textInputProps={{
        labelText: "Item Search",
        name: "textInputName",
        placeholder: "Search keyword(s)",
      }}
    />
  );
};

export default Search;
