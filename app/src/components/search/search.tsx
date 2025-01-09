// @ts-nocheck
"use client";
import React, { FormEvent, useState } from "react";
import { Box, SearchBar } from "@nypl/design-system-react-components";
import { useRouter, usePathname } from "next/navigation";
import PublicDomainFilter from "../publicDomainFilter/publicDomainFilter";
import { headerBreakpoints } from "../../utils/breakpoints";
import { useSearchContext } from "@/src/context/SearchContext";

const Search = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const { searchManager } = useSearchContext();

  const updateURL = async (queryString) => {
    push(`${pathname}?${queryString}`);
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
          onSubmit={(e) => {
            e.preventDefault();
            const searchQuery = searchManager.handleSearchSubmit();
            updateURL(`/search/index?${searchQuery}`);
          }}
          textInputProps={{
            name: "keywords",
            labelText: "Search keyword(s)",
            onChange: (e) =>
              searchManager.handleKeywordChange(
                (e.target as HTMLInputElement).value
              ),

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
        <PublicDomainFilter onCheckChange={() => {}} />
      </Box>
    </>
  );
};

export default Search;
