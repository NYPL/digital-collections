"use client";
import React from "react";
import { Box, Text } from "@nypl/design-system-react-components";
import parse from "html-react-parser";
import { formatHighlightText, highlightTitleWords } from "@/src/utils/utils";

export type SuggestResult = {
  uuid: string;
  title: string;
  type: "Item" | "Collection";
  highlights: Record<string, string[]>;
};

interface SearchSuggestionsProps {
  suggestions: SuggestResult[];
  activeIndex: number;
  onSelect: (title: string) => void;
  listboxId: string;
  onActiveIndexChange: (i: number) => void;
  onClose: () => void;
  returnFocusToInput: () => void;
}

const SearchSuggestions = ({
  suggestions,
  activeIndex,
  onSelect,
  listboxId,
  onActiveIndexChange,
  onClose,
  returnFocusToInput,
}: SearchSuggestionsProps) => {
  if (!suggestions.length) return null;

  const handleListboxKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const options = Array.from(
      e.currentTarget.querySelectorAll<HTMLElement>('[role="option"]')
    );
    const currentIdx = options.indexOf(document.activeElement as HTMLElement);

    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        const nextIdx = Math.min(currentIdx + 1, suggestions.length - 1);
        onActiveIndexChange(nextIdx);
        options[nextIdx]?.focus();
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        if (currentIdx <= 0) {
          onActiveIndexChange(-1);
          returnFocusToInput();
        } else {
          const prevIdx = currentIdx - 1;
          onActiveIndexChange(prevIdx);
          options[prevIdx]?.focus();
        }
        break;
      }
      case "Enter": {
        e.preventDefault();
        if (currentIdx >= 0) {
          onSelect(suggestions[currentIdx].title);
        }
        break;
      }
      case "Escape": {
        e.preventDefault();
        onClose();
        returnFocusToInput();
        break;
      }
    }
  };

  return (
    <Box
      role="listbox"
      id={listboxId}
      aria-label="Search suggestions"
      onKeyDown={handleListboxKeyDown}
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
            aria-label={suggestion.title}
            tabIndex={-1}
            onFocus={() => onActiveIndexChange(i)}
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
              {parse(
                highlightTitleWords(
                  suggestion.title,
                  formatHighlightText(suggestion.highlights ?? {})
                )
              )}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default SearchSuggestions;
