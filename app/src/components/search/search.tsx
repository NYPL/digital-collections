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
  const [pdFilter, setPdFilter] = useState(false);
  const { searchManager } = useSearchContext();

  const updateURL = async (queryString) => {
    // Always from /search/index? when called from search bar in the header
    push(`/search/index?${queryString}`);
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
        {/*  <form
          action="/search/index"
          method="get"
          onSubmit={searchManager.handleSearchSubmit()}
        > */}
        <SearchBar
          id="searchbar"
          invalidText="Could not find the item"
          labelText="Search Digital Collections"
          onSubmit={(e) => {
            e.preventDefault();
            let searchQuery = searchManager.handleSearchSubmit();
            if (pdFilter) {
              searchQuery = searchManager.handleAddFilter({
                filter: "rights",
                value: "pd",
              });
            }
            updateURL(searchQuery);
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
        <PublicDomainFilter
          onCheckChange={(isChecked) =>
            isChecked ? setPdFilter(true) : setPdFilter(false)
          }
        />
      </Box>
    </>
  );
};

export default Search;
