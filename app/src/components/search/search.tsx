// @ts-nocheck
"use client";
import React, { FormEvent, useState } from "react";
import { Box, SearchBar } from "@nypl/design-system-react-components";
import { useRouter } from "next/navigation";
import PublicDomainFilter from "../publicDomainFilter/publicDomainFilter";
import { headerBreakpoints } from "../../utils/breakpoints";
import DCSearchBar from "./dcSearchBar";

const Search = () => {
  const router = useRouter();
  const [keywords, setKeywords] = useState("");
  const [publicDomainOnly, setPublicDomainOnly] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchUrl =
      `/search/index?` +
      (publicDomainOnly ? `utf8=✓&filters%5Brights%5D=pd&` : ``) +
      `keywords=${encodeURIComponent(keywords)}`;
    router.push(searchUrl);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(event.target.value);
  };

  const handleCheckChange = (isChecked: boolean): void => {
    setPublicDomainOnly(isChecked);
  };

  return (
    <>
      <Box
        id="search-wrapper"
        sx={{
          alignItems: "start",
          width: "100%",
          marginTop: "0px !important",
          paddingTop: "xs",
          [`@media screen and (min-width: ${headerBreakpoints.lgTablet}px)`]: {
            paddingTop: "0px !important",
          },
        }}
      >
        <DCSearchBar
          id="searchbar"
          labelText="Search Digital Collections"
          textInputProps={{
            labelText: "Search keyword(s)",
            name: "textInputName",
            onChange: handleTextChange,
            value: keywords,
            placeholder: "Search keyword(s)",
          }}
          onSubmit={(e) => handleSubmit(e)}
        />
        <PublicDomainFilter onCheckChange={handleCheckChange} />
      </Box>
    </>
  );
};

export default Search;
