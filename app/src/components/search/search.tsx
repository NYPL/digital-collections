// @ts-nocheck
"use client";
import React, { FormEvent, useState } from "react";
import { Box, SearchBar } from "@nypl/design-system-react-components";
import { useRouter } from "next/navigation";
import PublicDomainFilter from "../publicDomainFilter/publicDomainFilter";
import { headerBreakpoints } from "../../utils/breakpoints";
//import { SearchManager } from "@/src/utils/searchManager";

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

  // const searchManager = new SearchManager({
  //   initialPage: Number(params.page) || DEFAULT_PAGE_NUM,
  //   initialSort: params.sort || DEFAULT_COLLECTION_SORT,
  //   initialKeywords: params.collection_keywords || DEFAULT_SEARCH_TERM,
  //   updateURL: async (queryString: string) => {
  //     push(`${pathname}?${queryString}`);
  //   },
  //   isCollectionSearch: true,
  // });

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
          onSubmit={(event) => handleSubmit(event)}
          textInputProps={{
            labelText: "Search keyword(s)",
            name: "textInputName",
            onChange: handleTextChange,
            value: keywords,
            placeholder: "Search keyword(s)",
          }}
          sx={{
            flexFlow: "row nowrap",
            button: {
              borderRadius: "0px 2px 2px 0px",
              "> svg": {
                width: "14px",
                height: "14px",
              },
              paddingTop: "xs",
              paddingBottom: "xs",
              paddingLeft: "s !important",
              paddingRight: "s !important",
              "> span": {
                display: "block !important",
              },
            },
            [`@media screen and (max-width: ${headerBreakpoints.lgMobile}px)`]:
              {
                button: {
                  padding: "xs !important",
                  gap: 0,
                  "> span": {
                    display: "none !important",
                  },
                  "> svg": {
                    width: "18px",
                    height: "18px",
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
