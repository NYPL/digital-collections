"use client";
import React from "react";
import { Box, Text } from "@nypl/design-system-react-components";

export type SuggestResult = {
  uuid: string;
  title: string;
  type: "Item" | "Collection";
};

interface SearchSuggestionsProps {
  suggestions: SuggestResult[];
  query: string;
  activeIndex: number;
  onSelect: (title: string) => void;
  listboxId: string;
}

/**
 * Wraps the matched prefix in a <mark> element and leaves the rest as-is.
 * Falls back to the full title string when no prefix match is found.
 */
function highlightPrefix(title: string, query: string): React.ReactNode {
  if (!query || !title.toLowerCase().startsWith(query.toLowerCase())) {
    return title;
  }
  return (
    <>
      <mark
        style={{
          background: "transparent",
          fontWeight: "bold",
          padding: 0,
        }}
      >
        {title.slice(0, query.length)}
      </mark>
      {title.slice(query.length)}
    </>
  );
}

/**
 * Accessible suggestion dropdown for the global search bar.
 *
 * ARIA pattern: ARIA 1.2 Combobox / Listbox popup.
 * - Container: role="listbox" with a labelled id
 * - Each item: role="option", aria-selected, unique id for aria-activedescendant
 *
 * The parent input must have:
 *   role="combobox"
 *   aria-expanded={isOpen}
 *   aria-autocomplete="list"
 *   aria-controls={listboxId}
 *   aria-activedescendant={activeOptionId | undefined}
 */
const SearchSuggestions = ({
  suggestions,
  query,
  activeIndex,
  onSelect,
  listboxId,
}: SearchSuggestionsProps) => {
  if (!suggestions.length) return null;

  return (
    <Box
      role="listbox"
      id={listboxId}
      aria-label="Search suggestions"
      sx={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        zIndex: 10,
        bg: "ui.white",
        border: "1px solid",
        borderColor: "ui.border.default",
        borderRadius: "sm",
        boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
        mt: "2px",
        overflow: "hidden",
      }}
    >
      {suggestions.map((suggestion, i) => {
        const isActive = i === activeIndex;
        return (
          <Box
            key={suggestion.uuid}
            role="option"
            id={`${listboxId}-option-${i}`}
            aria-selected={isActive}
            onMouseDown={(e: React.MouseEvent) => {
              // Prevent the input from losing focus before the click completes.
              e.preventDefault();
              onSelect(suggestion.title);
            }}
            sx={{
              px: "s",
              py: "xs",
              cursor: "pointer",
              bg: isActive ? "ui.bg.hover" : "ui.white",
              "&:hover": { bg: "ui.bg.hover" },
            }}
          >
            <Text
              size="body2"
              sx={{
                mb: 0,
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {highlightPrefix(suggestion.title, query)}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default SearchSuggestions;
