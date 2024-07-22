// @ts-nocheck
"use client";
import React, { useState } from "react";
import { Box, SearchBar } from "@nypl/design-system-react-components";
import { useRouter } from "next/navigation";
import PublicDomainFilter from "../publicDomainFilter/publicDomainFilter";
import { headerBreakpoints } from "../../utils/breakpoints";
import { DC_URL } from "../../config/constants";

const Search = () => {
  const router = useRouter();
  const [keywords, setKeywords] = useState("");
  const [publicDomainOnly, setPublicDomainOnly] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchUrl =
      DC_URL +
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
          [`@media screen and (min-width: ${headerBreakpoints.lgTablet})`]: {
            paddingTop: "0px !important",
          },
          "#searchbar-form-searchbar": {
            marginBottom: "0px !important",
          },
          "#searchbar-form-searchbar > button": {
            maxWidth: "unset",
          },
        }}
      >
        <SearchBar
          id="searchbar"
          invalidText="Could not find the item"
          labelText="Search Digital Collections"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            handleSubmit(event)
          }
          textInputProps={{
            labelText: "Search keyword(s)",
            name: "textInputName",
            onChange: handleTextChange,
            value: keywords,
            placeholder: "Search keyword(s)",
          }}
          sx={{
            flexFlow: "row nowrap",
            [`@media screen and (max-width: ${headerBreakpoints.lgMobile})`]: {
              button: {
                textIndent: "-9000px",
                gap: 0,
                padding: "xs",
                borderRadius: "0px 2px 2px 0px",
                "> svg": {
                  width: "18px",
                  height: "18px",
                  margin: 0,
                },
              },
            },
          }}
        />
        <PublicDomainFilter onCheckChange={handleCheckChange} />
      </Box>
    </>
  );
};

export default Search;
