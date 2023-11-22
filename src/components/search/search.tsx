import React, { useState } from "react";
import { SearchBar } from "@nypl/design-system-react-components";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const [keywords, setKeywords] = useState("");

  const handleSubmit = (event, router) => {
    event.preventDefault();
    const searchUrl = `https://digitalcollections.nypl.org/search/index?keywords=${encodeURIComponent(
      keywords
    )}`;
    router.push(searchUrl);
  };

  const handleChange = (event) => {
    setKeywords(event.target.value);
  };

  return (
    <SearchBar
      id="searchBar-id"
      invalidText="Could not find the item"
      labelText="Searchbar Label"
      onSubmit={(event) => handleSubmit(event, router)}
      textInputProps={{
        labelText: "Item Search",
        name: "textInputName",
        onChange: handleChange,
        value: keywords,
        placeholder: "Search keyword(s)",
      }}
    />
  );
};

export default Search;
