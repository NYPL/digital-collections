//@ts-no-check
"use client";
import React, { useState, useEffect } from "react";
import { Box } from "@nypl/design-system-react-components";
import { useRouter } from "next/navigation";
import PublicDomainFilter from "../publicDomainFilter/publicDomainFilter";
import { headerBreakpoints } from "../../utils/breakpoints";
import DCSearchBar from "./dcSearchBar";
import { useSearchContext } from "@/src/context/SearchProvider";
import SearchSuggestions, { type SuggestResult } from "./searchSuggestions";

const LISTBOX_ID = "dc-search-suggestions";
const MIN_SUGGEST_CHARS = 3;
const DEBOUNCE_MS = 300;

const Search = () => {
  const { searchManager } = useSearchContext();
  const router = useRouter();
  const [keywords, setKeywords] = useState("");
  const [publicDomainOnly, setPublicDomainOnly] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch suggestions with debounce whenever the keyword changes.
  useEffect(() => {
    if (keywords.length < MIN_SUGGEST_CHARS) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/suggest?q=${encodeURIComponent(keywords)}`
        );
        const data = await res.json();
        const results: SuggestResult[] = data.suggestions ?? [];
        setSuggestions(results);
        setIsOpen(results.length > 0);
        setActiveIndex(-1);
      } catch {
        setSuggestions([]);
        setIsOpen(false);
      }
    }, DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [keywords]);

  const closeSuggestions = () => {
    setSuggestions([]);
    setIsOpen(false);
    setActiveIndex(-1);
  };

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

  /**
   * Keyboard handler for the combobox input.
   * Runs before dcSearchBar's Enter-to-submit handler so preventDefault()
   * prevents the form submission when a suggestion is being accepted.
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, -1));
        break;
      case "Enter":
        if (activeIndex >= 0) {
          event.preventDefault();
          handleSuggestionSelect(suggestions[activeIndex].title);
        }
        break;
      case "Escape":
        event.preventDefault();
        closeSuggestions();
        break;
    }
  };

  const activeDescendant =
    activeIndex >= 0 ? `${LISTBOX_ID}-option-${activeIndex}` : undefined;

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
      {/* position="relative" creates the stacking context for the absolute dropdown */}
      <Box position="relative">
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
            onKeyDown: handleKeyDown,
            additionalInputProps: {
              role: "combobox",
              "aria-expanded": isOpen,
              "aria-autocomplete": "list",
              "aria-controls": LISTBOX_ID,
              "aria-activedescendant": activeDescendant,
            },
          }}
          onSubmit={(e) => handleSubmit(e)}
        />
        {isOpen && (
          <SearchSuggestions
            suggestions={suggestions}
            query={keywords}
            activeIndex={activeIndex}
            onSelect={handleSuggestionSelect}
            listboxId={LISTBOX_ID}
          />
        )}
      </Box>
      <PublicDomainFilter onCheckChange={handleCheckChange} />
    </Box>
  );
};

export default Search;
