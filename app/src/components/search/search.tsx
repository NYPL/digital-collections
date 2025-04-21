//@ts-no-check
"use client";
import React, { useState } from "react";
import { Box } from "@nypl/design-system-react-components";
import { useRouter } from "next/navigation";
import PublicDomainFilter from "../publicDomainFilter/publicDomainFilter";
import { headerBreakpoints } from "../../utils/breakpoints";
import DCSearchBar from "./dcSearchBar";
import { useSearchContext } from "@/src/context/SearchProvider";

const Search = () => {
  const router = useRouter();
  const [keywords, setKeywords] = useState("");
  const [publicDomainOnly, setPublicDomainOnly] = useState(false);
  const { lastFilterRef } = useSearchContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    lastFilterRef.current = null;
    const searchUrl =
      `/search/index?` +
      (keywords.length > 0 ? `q=${encodeURIComponent(keywords)}` : "") +
      (publicDomainOnly ? `&filters=%5Brights%3DpublicDomain%5D` : "");
    router.push(searchUrl);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(event.target.value);
  };

  const handleCheckChange = (isChecked: boolean): void => {
    setPublicDomainOnly(isChecked);
  };

  return (
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
          id: "search-text",
          labelText: "Search keyword(s)",
          name: "keywords",
          onChange: handleTextChange,
          value: keywords,
          placeholder: "Search keyword(s)",
        }}
        onSubmit={(e) => handleSubmit(e)}
      />
      <PublicDomainFilter onCheckChange={handleCheckChange} />
    </Box>
  );
};

export default Search;
