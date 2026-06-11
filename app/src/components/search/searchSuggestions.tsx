"use client";
import React from "react";
import { Box, Text, Button } from "@nypl/design-system-react-components";
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
  onSelect: (title: string) => void;
  listboxId: string;
  onClose: () => void;
  activeIndex: number;
  isTouch?: boolean;
}

const SearchSuggestions = ({
  suggestions,
  onSelect,
  listboxId,
  onClose,
  activeIndex,
  isTouch = false,
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
        return (
          <Box
            key={suggestion.uuid}
            role="option"
            id={`${listboxId}-option-${i}`}
            aria-selected={activeIndex === i}
            aria-label={suggestion.title}
            onMouseDown={(e: React.MouseEvent) => {
              // Prevent the input from losing focus before the click completes.
              e.preventDefault();
              onSelect(suggestion.title);
            }}
            sx={{
              px: "s",
              py: "xs",
              cursor: "pointer",
              bg: "ui.white",
              // Use CSS pseudo-classes for highlighting so that no Chakra class
              // change occurs on the focused element. A class mutation on the
              // focused element causes VoiceOver to interrupt and re-read it
              // (the stutter). State-driven bg caused exactly that.
              "&:hover": { bg: "ui.bg.hover" },
              "&[aria-selected='true']": { bg: "ui.bg.hover" },
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
      {isTouch && (
        <Button
          id={`${listboxId}-close-btn`}
          variant="text"
          onClick={() => {
            onClose();
          }}
          sx={{
            display: "block",
            width: "100%",
            borderTop: "1px solid",
            borderColor: "ui.border.default",
            borderRadius: 0,
            py: "xs",
          }}
        >
          Close
        </Button>
      )}
    </Box>
  );
};

export default SearchSuggestions;
