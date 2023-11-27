import React, { useState } from "react";
import { SearchBar } from "@nypl/design-system-react-components";
import { useRouter } from "next/router";
import PublicDomainFilter from "../publicDomainFilter/publicDomainFilter";

const Search = () => {
  const router = useRouter();
  const [keywords, setKeywords] = useState("");
  const [publicDomainOnly, setPublicDomainOnly] = useState(false);

  const handleSubmit = (event, router) => {
    event.preventDefault();
    const searchUrl =
      `https://digitalcollections.nypl.org/search/index?` +
      (publicDomainOnly ? `filters%5Brights%5D=pd&` : ``) +
      `keywords=${encodeURIComponent(keywords)}`;
    router.push(searchUrl);
  };

  const handleTextChange = (event) => {
    setKeywords(event.target.value);
  };

  const handleCheckChange = (isChecked) => {
    setPublicDomainOnly(isChecked);
    console.log(publicDomainOnly);
  };

  return (
    <>
      <SearchBar
        id="searchbar"
        invalidText="Could not find the item"
        labelText="Search Digital Collections"
        onSubmit={(event) => handleSubmit(event, router)}
        textInputProps={{
          labelText: "Item Search",
          name: "textInputName",
          onChange: handleTextChange,
          value: keywords,
          placeholder: "Search keyword(s)",
        }}
      />
      <PublicDomainFilter onCheckChange={handleCheckChange} />
    </>
  );
};

export default Search;
