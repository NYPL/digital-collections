//@ts-no-check
"use client";
import React, { useState, useEffect, useRef } from "react";
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
  const wrapperRef = useRef<HTMLDivElement>(null);

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
        if (!res.ok) {
          setSuggestions([]);
          setIsOpen(false);
          return;
        }
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

  // Close suggestions when the user clicks outside the search component.
  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  // Imperatively set combobox ARIA attributes on the actual <input> element.
  // The DS TextInput spreads additionalInputProps onto its wrapper div, not the
  // input itself, so we must use the DOM directly.
  useEffect(() => {
    const input = wrapperRef.current?.querySelector<HTMLInputElement>("input");
    if (!input) return;
    input.setAttribute("role", "combobox");
    input.setAttribute("aria-haspopup", "listbox");
    input.setAttribute("aria-autocomplete", "list");
    input.setAttribute("aria-controls", LISTBOX_ID);
    input.setAttribute("aria-expanded", String(isOpen));
    // aria-activedescendant is not used — real DOM focus moves to options so
    // VoiceOver reads the focused element directly instead of the typed input value.
    input.removeAttribute("aria-activedescendant");
  }, [isOpen]);

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

  const returnFocusToInput = () => {
    wrapperRef.current?.querySelector<HTMLInputElement>("input")?.focus();
  };

  /**
   * Keyboard handler for the combobox input.
   * ArrowDown moves real DOM focus to the first suggestion so VoiceOver reads
   * the focused option directly. ArrowUp/Enter within the list are handled by
   * the listbox. Runs before dcSearchBar's Enter-to-submit handler.
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;
    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        const newIndex = Math.min(activeIndex + 1, suggestions.length - 1);
        setActiveIndex(newIndex);
        document.getElementById(`${LISTBOX_ID}-option-${newIndex}`)?.focus();
        break;
      }
      case "Escape":
        event.preventDefault();
        closeSuggestions();
        break;
    }
  };

  const statusMessage = isOpen
    ? `${suggestions.length} suggestion${
        suggestions.length === 1 ? "" : "s"
      } available. Use up and down arrow keys to navigate.`
    : "";

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
