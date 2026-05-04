import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import SearchSuggestions from "./searchSuggestions";
import { mockSuggestResponse } from "__tests__/__mocks__/data/collectionsApi/mockSuggestResponse";

const { suggestions } = mockSuggestResponse;

describe("SearchSuggestions", () => {
  const defaultProps = {
    suggestions,
    query: "crom",
    activeIndex: -1,
    onSelect: jest.fn(),
    listboxId: "dc-search-suggestions",
  };

  it("renders a listbox with one option per suggestion", () => {
    render(<SearchSuggestions {...defaultProps} />);
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(suggestions.length);
  });

  it("renders nothing when suggestions array is empty", () => {
    const { container } = render(
      <SearchSuggestions {...defaultProps} suggestions={[]} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("marks the active option with aria-selected=true", () => {
    render(<SearchSuggestions {...defaultProps} activeIndex={1} />);
    const options = screen.getAllByRole("option");
    expect(options[0]).toHaveAttribute("aria-selected", "false");
    expect(options[1]).toHaveAttribute("aria-selected", "true");
    expect(options[2]).toHaveAttribute("aria-selected", "false");
  });

  it("assigns sequential ids matching the listboxId prefix", () => {
    render(<SearchSuggestions {...defaultProps} />);
    const options = screen.getAllByRole("option");
    options.forEach((opt, i) => {
      expect(opt).toHaveAttribute("id", `dc-search-suggestions-option-${i}`);
    });
  });

  it("highlights the matching prefix inside a <mark> element", () => {
    render(<SearchSuggestions {...defaultProps} />);
    // The first suggestion "Cromwell Family Papers" starts with "Crom" (case-insensitive)
    const mark = screen.getByRole("listbox").querySelector("mark");
    expect(mark).not.toBeNull();
    expect(mark?.textContent).toBe("Crom");
  });

  it("does not render a <mark> when the title does not start with the query", () => {
    render(
      <SearchSuggestions
        {...defaultProps}
        // query is "xyz" — no title starts with it
        query="xyz"
      />
    );
    const marks = document.querySelectorAll("mark");
    expect(marks).toHaveLength(0);
  });

  it("calls onSelect with the suggestion title on mousedown", () => {
    const onSelect = jest.fn();
    render(<SearchSuggestions {...defaultProps} onSelect={onSelect} />);
    const options = screen.getAllByRole("option");
    fireEvent.mouseDown(options[0]);
    expect(onSelect).toHaveBeenCalledWith(suggestions[0].title);
  });

  it("passes axe accessibility check", async () => {
    /**
     * Wrap in a combobox input so the listbox has a valid owner in the
     * accessibility tree (axe expects role="listbox" to be owned by a
     * role="combobox" or similar).
     */
    const { container } = render(
      <div>
        <input
          role="combobox"
          aria-expanded={true}
          aria-autocomplete="list"
          aria-controls="dc-search-suggestions"
          aria-label="Search"
          readOnly
          value=""
        />
        <SearchSuggestions {...defaultProps} />
      </div>
    );
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
