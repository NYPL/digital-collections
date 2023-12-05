import React, { useState } from "react";
import { Box, SearchBar } from "@nypl/design-system-react-components";
import { useRouter } from "next/router";
import PublicDomainFilter from "../publicDomainFilter/publicDomainFilter";
import appConfig from "appConfig";
import { headerBreakpoints } from "@/utils/breakpoints";

const Search = () => {
  const router = useRouter();
  const [keywords, setKeywords] = useState("");
  const [publicDomainOnly, setPublicDomainOnly] = useState(false);

  const handleSubmit = (event, router) => {
    event.preventDefault();
    const searchUrl =
      appConfig.DC_URL +
      `/search/index?` +
      (publicDomainOnly ? `utf8=✓&filters%5Brights%5D=pd&` : ``) +
      `keywords=${encodeURIComponent(keywords)}`;
    router.push(searchUrl);
  };

  const handleTextChange = (event) => {
    setKeywords(event.target.value);
  };

  const handleCheckChange = (isChecked): void => {
    setPublicDomainOnly(isChecked);
  };

  return (
    <>
      <Box
        id="search-wrapper"
        sx={{
          alignItems: "start",
          width: "100%",
          [`@media screen and (min-width: ${headerBreakpoints.lgMobile})`]: {
            pt: "xs",
          },
          [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
            pt: "0px",
          },
        }}
      >
        <SearchBar
          id="searchbar"
          invalidText="Could not find the item"
          labelText="Search Digital Collections"
          onSubmit={(event) => handleSubmit(event, router)}
          textInputProps={{
            labelText: "Search keyword(s)",
            name: "textInputName",
            onChange: handleTextChange,
            value: keywords,
            placeholder: "Search keyword(s)",
          }}
          sx={{
            [`@media screen and (min-width: ${headerBreakpoints.lgMobile})`]: {
              flexFlow: "column nowrap",
            },
            [`@media screen and (min-width: ${headerBreakpoints.smTablet})`]: {
              flexFlow: "row nowrap",
            },
          }}
        />
        <PublicDomainFilter onCheckChange={handleCheckChange} />
      </Box>
    </>
  );
};

export default Search;
