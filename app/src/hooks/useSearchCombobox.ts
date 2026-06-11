import { useState, useEffect, useRef, useCallback } from "react";
import type { SuggestResult } from "@/src/components/search/searchSuggestions";

const MIN_SUGGEST_CHARS = 3;
const DEBOUNCE_MS = 300;

interface UseSearchComboboxOptions {
  keywords: string;
  listboxId: string;
}

export interface UseSearchComboboxReturn {
  suggestions: SuggestResult[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  isOpen: boolean;
  isTouch: boolean;
  wrapperRef: React.RefObject<HTMLDivElement>;
  closeSuggestions: () => void;
  returnFocusToInput: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleWrapperBlur: (event: React.FocusEvent<HTMLDivElement>) => void;
  statusMessage: string;
}

/**
 * Manages all combobox state and side effects for the search typeahead.
 */

export function useSearchCombobox({
  keywords,
  listboxId,
}: UseSearchComboboxOptions): UseSearchComboboxReturn {
  const [suggestions, setSuggestions] = useState<SuggestResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Detect coarse-pointer (touch) devices on mount.
  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

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

  const closeSuggestions = useCallback(() => {
    setSuggestions([]);
    setIsOpen(false);
    setActiveIndex(-1);
  }, []);

  // Close suggestions when the user clicks outside the search component.
  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        closeSuggestions();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, closeSuggestions]);

  // Imperatively set combobox ARIA attributes on the actual <input> element.
  // The DS TextInput spreads additionalInputProps onto its wrapper div, not the
  // input itself, so we must use the DOM directly.
  useEffect(() => {
    const input = wrapperRef.current?.querySelector<HTMLInputElement>("input");
    if (!input) return;
    input.setAttribute("role", "combobox");
    input.setAttribute("aria-haspopup", "listbox");
    input.setAttribute("aria-autocomplete", "list");
    input.setAttribute("aria-controls", listboxId);
    input.setAttribute("aria-expanded", String(isOpen));
    // With aria-activedescendant, focus stays on the input and VoiceOver reads
    // the referenced option. This avoids the combobox→listbox context switch
    // that causes VoiceOver to restart its announcement (the "stutter").
    if (activeIndex >= 0) {
      input.setAttribute(
        "aria-activedescendant",
        `${listboxId}-option-${activeIndex}`
      );
    } else {
      input.removeAttribute("aria-activedescendant");
    }
  }, [isOpen, listboxId, activeIndex]);

  const returnFocusToInput = useCallback(() => {
    wrapperRef.current?.querySelector<HTMLInputElement>("input")?.focus();
  }, []);

  // Close the listbox when focus leaves the component on non-touch devices.
  // Touch devices use a Close button instead because onBlur fires too eagerly
  // when a screen reader moves focus to options, closing the list prematurely.
  const handleWrapperBlur = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      if (!isOpen || isTouch) return;
      if (event.currentTarget.contains(event.relatedTarget as Node)) return;
      closeSuggestions();
    },
    [isOpen, isTouch, closeSuggestions]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen) return;
      switch (event.key) {
        case "ArrowDown": {
          event.preventDefault();
          setActiveIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
          break;
        }
        case "ArrowUp": {
          event.preventDefault();
          setActiveIndex((prev) => Math.max(prev - 1, -1));
          break;
        }
        case "Escape":
          event.preventDefault();
          closeSuggestions();
          break;
      }
    },
    [isOpen, suggestions.length, closeSuggestions]
  );

  const statusMessage = isOpen
    ? `${suggestions.length} suggestion${
        suggestions.length === 1 ? "" : "s"
      } available below.`
    : "";

  return {
    suggestions,
    activeIndex,
    setActiveIndex,
    isOpen,
    isTouch,
    wrapperRef,
    closeSuggestions,
    returnFocusToInput,
    handleKeyDown,
    handleWrapperBlur,
    statusMessage,
  };
}
