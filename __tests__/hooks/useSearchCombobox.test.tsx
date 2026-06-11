import React from "react";
import {
  renderHook,
  act,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { useSearchCombobox } from "@/src/hooks/useSearchCombobox";
import type { SuggestResult } from "@/src/components/search/searchSuggestions";

const LISTBOX_ID = "test-listbox";

const mockSuggestions: SuggestResult[] = [
  {
    uuid: "a1",
    title: "Cromwell Family Papers",
    type: "Collection",
    highlights: {},
  },
  {
    uuid: "a2",
    title: "Cromwell Albums",
    type: "Item",
    highlights: {},
  },
];

// ---------------------------------------------------------------------------
// TestCombobox: a minimal component that wires the hook to real DOM nodes.
// Used for tests that depend on ref-attached DOM (ARIA attrs, focus, click-outside).
// ---------------------------------------------------------------------------
interface TestComboboxProps {
  keywords: string;
}

function TestCombobox({ keywords }: TestComboboxProps) {
  const {
    suggestions,
    isOpen,
    wrapperRef,
    handleKeyDown,
    handleWrapperBlur,
    statusMessage,
  } = useSearchCombobox({ keywords, listboxId: LISTBOX_ID });

  return (
    <div>
      <div data-testid="wrapper" ref={wrapperRef} onBlur={handleWrapperBlur}>
        <input data-testid="search-input" onKeyDown={handleKeyDown} readOnly />
        {isOpen &&
          suggestions.map((s, i) => (
            <div
              key={s.uuid}
              role="option"
              id={`${LISTBOX_ID}-option-${i}`}
              tabIndex={-1}
            >
              {s.title}
            </div>
          ))}
      </div>
      <button data-testid="outside">Outside</button>
      <div data-testid="live-region" aria-live="polite">
        {statusMessage}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function mockFetchSuccess(suggestions: SuggestResult[] = mockSuggestions) {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ suggestions }),
  }) as jest.Mock;
}

function mockFetchError(status = 500) {
  global.fetch = jest.fn().mockResolvedValue({
    ok: false,
    status,
  }) as jest.Mock;
}

function mockFetchThrow(message = "network error") {
  global.fetch = jest.fn().mockRejectedValue(new Error(message)) as jest.Mock;
}

async function runDebounceAndFlush() {
  await act(async () => {
    jest.runAllTimers();
    await Promise.resolve();
  });
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("useSearchCombobox", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  // -------------------------------------------------------------------------
  describe("initial state", () => {
    it("starts closed with no suggestions and activeIndex -1", () => {
      const { result } = renderHook(() =>
        useSearchCombobox({ keywords: "", listboxId: LISTBOX_ID })
      );
      expect(result.current.suggestions).toEqual([]);
      expect(result.current.isOpen).toBe(false);
      expect(result.current.activeIndex).toBe(-1);
      expect(result.current.statusMessage).toBe("");
    });
  });

  // -------------------------------------------------------------------------
  describe("fetch behavior", () => {
    it("does not fetch when keywords has fewer than 3 characters", async () => {
      global.fetch = jest.fn() as jest.Mock;
      renderHook(() =>
        useSearchCombobox({ keywords: "ab", listboxId: LISTBOX_ID })
      );
      await runDebounceAndFlush();
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it("fetches after the debounce when keywords has 3 or more characters", async () => {
      mockFetchSuccess();
      const { result } = renderHook(() =>
        useSearchCombobox({ keywords: "crom", listboxId: LISTBOX_ID })
      );
      await runDebounceAndFlush();
      expect(global.fetch).toHaveBeenCalledWith("/api/suggest?q=crom");
      expect(result.current.suggestions).toEqual(mockSuggestions);
      expect(result.current.isOpen).toBe(true);
    });

    it("URL-encodes the query before forwarding", async () => {
      mockFetchSuccess([]);
      renderHook(() =>
        useSearchCombobox({ keywords: "new york", listboxId: LISTBOX_ID })
      );
      await runDebounceAndFlush();
      expect(global.fetch).toHaveBeenCalledWith("/api/suggest?q=new%20york");
    });

    it("resets activeIndex to -1 when new results arrive", async () => {
      mockFetchSuccess();
      const { result } = renderHook(() =>
        useSearchCombobox({ keywords: "crom", listboxId: LISTBOX_ID })
      );
      // Manually set activeIndex before fetch resolves to simulate prior nav.
      act(() => result.current.setActiveIndex(1));
      await runDebounceAndFlush();
      expect(result.current.activeIndex).toBe(-1);
    });

    it("clears suggestions and closes when the upstream response is not ok", async () => {
      mockFetchError();
      const { result } = renderHook(() =>
        useSearchCombobox({ keywords: "crom", listboxId: LISTBOX_ID })
      );
      await runDebounceAndFlush();
      expect(result.current.suggestions).toEqual([]);
      expect(result.current.isOpen).toBe(false);
    });

    it("clears suggestions and closes when fetch throws", async () => {
      mockFetchThrow();
      const { result } = renderHook(() =>
        useSearchCombobox({ keywords: "crom", listboxId: LISTBOX_ID })
      );
      await runDebounceAndFlush();
      expect(result.current.suggestions).toEqual([]);
      expect(result.current.isOpen).toBe(false);
    });

    it("clears suggestions when keywords drops below 3 characters", () => {
      const { result, rerender } = renderHook(
        ({ keywords }: { keywords: string }) =>
          useSearchCombobox({ keywords, listboxId: LISTBOX_ID }),
        { initialProps: { keywords: "crom" } }
      );
      // Simulate state that would exist after a successful fetch.
      act(() => {
        result.current.setActiveIndex(0);
      });
      rerender({ keywords: "cr" });
      expect(result.current.suggestions).toEqual([]);
      expect(result.current.isOpen).toBe(false);
    });
  });

  // -------------------------------------------------------------------------
  describe("closeSuggestions", () => {
    it("resets suggestions, isOpen, and activeIndex", async () => {
      mockFetchSuccess();
      const { result } = renderHook(() =>
        useSearchCombobox({ keywords: "crom", listboxId: LISTBOX_ID })
      );
      await runDebounceAndFlush();
      expect(result.current.isOpen).toBe(true);

      act(() => result.current.closeSuggestions());

      expect(result.current.suggestions).toEqual([]);
      expect(result.current.isOpen).toBe(false);
      expect(result.current.activeIndex).toBe(-1);
    });
  });

  // -------------------------------------------------------------------------
  describe("statusMessage", () => {
    it("returns a count + navigation hint when open with multiple results", async () => {
      mockFetchSuccess(mockSuggestions); // 2 results
      const { result } = renderHook(() =>
        useSearchCombobox({ keywords: "crom", listboxId: LISTBOX_ID })
      );
      await runDebounceAndFlush();
      expect(result.current.statusMessage).toBe(
        "2 suggestions available below."
      );
    });

    it('uses the singular "suggestion" for exactly 1 result', async () => {
      mockFetchSuccess([mockSuggestions[0]]);
      const { result } = renderHook(() =>
        useSearchCombobox({ keywords: "crom", listboxId: LISTBOX_ID })
      );
      await runDebounceAndFlush();
      expect(result.current.statusMessage).toBe(
        "1 suggestion available below."
      );
    });

    it("returns an empty string when the dropdown is closed", () => {
      const { result } = renderHook(() =>
        useSearchCombobox({ keywords: "", listboxId: LISTBOX_ID })
      );
      expect(result.current.statusMessage).toBe("");
    });
  });

  // -------------------------------------------------------------------------
  describe("handleKeyDown", () => {
    it("is a no-op when the dropdown is closed", () => {
      const { result } = renderHook(() =>
        useSearchCombobox({ keywords: "", listboxId: LISTBOX_ID })
      );
      const event = {
        key: "ArrowDown",
        preventDefault: jest.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;

      act(() => result.current.handleKeyDown(event));

      expect(event.preventDefault).not.toHaveBeenCalled();
      expect(result.current.activeIndex).toBe(-1);
    });

    it("Escape closes the dropdown and calls preventDefault", async () => {
      mockFetchSuccess();
      const { result } = renderHook(() =>
        useSearchCombobox({ keywords: "crom", listboxId: LISTBOX_ID })
      );
      await runDebounceAndFlush();
      expect(result.current.isOpen).toBe(true);

      const event = {
        key: "Escape",
        preventDefault: jest.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;

      act(() => result.current.handleKeyDown(event));

      expect(event.preventDefault).toHaveBeenCalled();
      expect(result.current.isOpen).toBe(false);
    });

    it("ArrowDown sets aria-activedescendant on the input to option-0", async () => {
      mockFetchSuccess();
      render(<TestCombobox keywords="crom" />);
      await runDebounceAndFlush();

      const input = screen.getByTestId("search-input");
      input.focus(); // simulate user already typing in the field
      fireEvent.keyDown(input, { key: "ArrowDown" });

      // Focus stays on the input; VoiceOver reads the option via aria-activedescendant.
      expect(document.activeElement).toBe(input);
      expect(input).toHaveAttribute(
        "aria-activedescendant",
        `${LISTBOX_ID}-option-0`
      );
    });

    it("ArrowDown increments activeIndex (used for aria-activedescendant)", async () => {
      mockFetchSuccess();
      const { result } = renderHook(() =>
        useSearchCombobox({ keywords: "crom", listboxId: LISTBOX_ID })
      );
      await runDebounceAndFlush();

      const event = {
        key: "ArrowDown",
        preventDefault: jest.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;

      act(() => result.current.handleKeyDown(event));

      // activeIndex is 0; the ARIA useEffect will set aria-activedescendant
      // on the input so VoiceOver reads the option without a context switch.
      expect(result.current.activeIndex).toBe(0);
    });

    it("ArrowDown clamps at the last option; ArrowUp decrements", async () => {
      mockFetchSuccess([mockSuggestions[0]]); // only 1 result
      const { result } = renderHook(() =>
        useSearchCombobox({ keywords: "crom", listboxId: LISTBOX_ID })
      );
      await runDebounceAndFlush();

      const down = {
        key: "ArrowDown",
        preventDefault: jest.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;
      const up = {
        key: "ArrowUp",
        preventDefault: jest.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;

      act(() => result.current.handleKeyDown(down));
      expect(result.current.activeIndex).toBe(0);

      // Pressing ArrowDown again at the end should stay clamped at 0.
      act(() => result.current.handleKeyDown(down));
      expect(result.current.activeIndex).toBe(0);

      // ArrowUp from 0 goes to -1 (no active item; input retains focus).
      act(() => result.current.handleKeyDown(up));
      expect(result.current.activeIndex).toBe(-1);
    });
  });

  // -------------------------------------------------------------------------
  describe("click-outside", () => {
    it("closes suggestions on mousedown outside the wrapper", async () => {
      mockFetchSuccess();
      render(<TestCombobox keywords="crom" />);
      await runDebounceAndFlush();

      expect(screen.getAllByRole("option")).toHaveLength(2);

      fireEvent.mouseDown(screen.getByTestId("outside"));

      expect(screen.queryAllByRole("option")).toHaveLength(0);
    });

    it("keeps suggestions open on mousedown inside the wrapper", async () => {
      mockFetchSuccess();
      render(<TestCombobox keywords="crom" />);
      await runDebounceAndFlush();

      fireEvent.mouseDown(screen.getByTestId("search-input"));

      expect(screen.getAllByRole("option")).toHaveLength(2);
    });
  });

  // -------------------------------------------------------------------------
  describe("ARIA attributes on the input element", () => {
    it("sets role=combobox, aria-haspopup, aria-autocomplete, and aria-controls", async () => {
      mockFetchSuccess([]);
      render(<TestCombobox keywords="crom" />);
      await runDebounceAndFlush();

      const input = screen.getByTestId("search-input");
      expect(input).toHaveAttribute("role", "combobox");
      expect(input).toHaveAttribute("aria-haspopup", "listbox");
      expect(input).toHaveAttribute("aria-autocomplete", "list");
      expect(input).toHaveAttribute("aria-controls", LISTBOX_ID);
    });

    it("sets aria-expanded=true when the dropdown is open", async () => {
      mockFetchSuccess();
      render(<TestCombobox keywords="crom" />);
      await runDebounceAndFlush();

      expect(screen.getByTestId("search-input")).toHaveAttribute(
        "aria-expanded",
        "true"
      );
    });

    it("sets aria-expanded=false when the dropdown is closed", async () => {
      render(<TestCombobox keywords="" />);
      await runDebounceAndFlush();

      expect(screen.getByTestId("search-input")).toHaveAttribute(
        "aria-expanded",
        "false"
      );
    });

    it("does not set aria-activedescendant on the input", async () => {
      mockFetchSuccess();
      render(<TestCombobox keywords="crom" />);
      await runDebounceAndFlush();

      expect(screen.getByTestId("search-input")).not.toHaveAttribute(
        "aria-activedescendant"
      );
    });
  });

  // -------------------------------------------------------------------------
  describe("onBlur close (desktop)", () => {
    it("closes suggestions when focus leaves the wrapper", async () => {
      mockFetchSuccess();
      render(<TestCombobox keywords="crom" />);
      await runDebounceAndFlush();

      expect(screen.getAllByRole("option")).toHaveLength(2);

      // Simulate focus leaving the wrapper entirely (relatedTarget outside).
      fireEvent.blur(screen.getByTestId("wrapper"), {
        relatedTarget: screen.getByTestId("outside"),
      });

      expect(screen.queryAllByRole("option")).toHaveLength(0);
    });

    it("does not close when focus moves between elements inside the wrapper", async () => {
      mockFetchSuccess();
      render(<TestCombobox keywords="crom" />);
      await runDebounceAndFlush();

      const input = screen.getByTestId("search-input");
      const firstOption = document.getElementById(`${LISTBOX_ID}-option-0`)!;

      // Focus moves from input to first option — still inside the wrapper.
      fireEvent.blur(screen.getByTestId("wrapper"), {
        relatedTarget: firstOption,
      });

      expect(screen.getAllByRole("option")).toHaveLength(2);
    });
  });

  // -------------------------------------------------------------------------
  describe("statusMessage live region", () => {
    it("announces suggestion count in the live region when results arrive", async () => {
      mockFetchSuccess();
      render(<TestCombobox keywords="crom" />);
      await runDebounceAndFlush();

      expect(screen.getByTestId("live-region")).toHaveTextContent(
        "2 suggestions available below."
      );
    });

    it("clears the live region when the dropdown is closed", async () => {
      mockFetchSuccess();
      render(<TestCombobox keywords="" />);
      await runDebounceAndFlush();

      expect(screen.getByTestId("live-region")).toHaveTextContent("");
    });
  });
});
