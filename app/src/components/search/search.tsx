//@ts-no-check
"use client";
import React, { useState } from "react";
import { Box } from "@nypl/design-system-react-components";
import { useRouter } from "next/navigation";
import PublicDomainFilter from "../publicDomainFilter/publicDomainFilter";
import { headerBreakpoints } from "../../utils/breakpoints";
import DCSearchBar from "./dcSearchBar";
import { useSearchContext } from "@/src/context/SearchProvider";
import SearchSuggestions from "./searchSuggestions";
import { useSearchCombobox } from "@/src/hooks/useSearchCombobox";

const LISTBOX_ID = "dc-search-suggestions";

const Search = () => {
  const { searchManager } = useSearchContext();
  const router = useRouter();
  const [keywords, setKeywords] = useState("");
  const [publicDomainOnly, setPublicDomainOnly] = useState(false);

  const {
    suggestions,
    activeIndex,
    setActiveIndex,
    isOpen,
    wrapperRef,
    closeSuggestions,
    returnFocusToInput,
    handleKeyDown,
    statusMessage,
  } = useSearchCombobox({ keywords, listboxId: LISTBOX_ID });

  const handleSubmit = (event) => {
    event.preventDefault();
    closeSuggestions();
    searchManager.setLastFilter(null);
    const searchUrl =
      `/search/index?` +
      (keywords.length > 0 ? `q=${encodeURIComponent(keywords)}` : "") +
      (publicDomainOnly ? `&filters%5Brights%5D=pd` : "");
    router.push(searchUrl);
  };

  const handleSuggestionSelect = (title: string) => {
    setKeywords(title);
    closeSuggestions();
    searchManager.setLastFilter(null);
    router.push(`/search/index?q=${encodeURIComponent(title)}`);
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
      {/* Visually hidden live region announces suggestion availability to screen readers */}
      <Box
        aria-live="polite"
        aria-atomic="true"
        sx={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        {statusMessage}
      </Box>
      {/* position="relative" creates the stacking context for the absolute dropdown */}
      <Box position="relative" ref={wrapperRef}>
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
            autoComplete: "off",
            isClearable: true,
            isClearableCallback: () => {
              setKeywords("");
              closeSuggestions();
            },
            onKeyDown: handleKeyDown,
          }}
          onSubmit={(e) => handleSubmit(e)}
        />
        {isOpen && (
          <SearchSuggestions
            suggestions={suggestions}
            activeIndex={activeIndex}
            onSelect={handleSuggestionSelect}
            listboxId={LISTBOX_ID}
            onActiveIndexChange={setActiveIndex}
            onClose={closeSuggestions}
            returnFocusToInput={returnFocusToInput}
          />
        )}
      </Box>
      <PublicDomainFilter onCheckChange={handleCheckChange} />
    </Box>
  );
};

export default Search;
