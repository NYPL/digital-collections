import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "./search";
import { useSearchParams, useRouter } from "next/navigation";
import { SearchProvider } from "@/src/context/SearchProvider";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));
const mockParams = {
  get: (value) => null,
};
const mockRouter = {
  push: jest.fn(),
};
(useSearchParams as jest.Mock).mockReturnValue(mockParams);
(useRouter as jest.Mock).mockReturnValue(mockRouter);

const component = (
  <SearchProvider>
    <Search />
  </SearchProvider>
);
describe("Search component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it("renders Search component", () => {
    const { getAllByLabelText, getByPlaceholderText } = render(component);
    expect(
      getAllByLabelText("Search Digital Collections")[0]
    ).toBeInTheDocument();
    expect(getByPlaceholderText("Search keyword(s)")).toBeInTheDocument();
  });

  it("handles form submission correctly", () => {
    const { getByPlaceholderText } = render(component);
    fireEvent.change(getByPlaceholderText("Search keyword(s)"), {
      target: { value: "test word" },
    });

    const searchButton = screen.getByRole("button", { name: "Search" });

    fireEvent.click(searchButton);

    expect(mockRouter.push).toHaveBeenCalledWith(
      `/search/index?q=test+word&perPage=48`
    );
  });

  it("uses persisted perPage value when submitting", () => {
    localStorage.setItem("perPage", "96");

    const { getByPlaceholderText } = render(component);
    fireEvent.change(getByPlaceholderText("Search keyword(s)"), {
      target: { value: "test word" },
    });

    const searchButton = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchButton);

    expect(mockRouter.push).toHaveBeenCalledWith(
      `/search/index?q=test+word&perPage=96`
    );
  });

  it("applies filter correctly", () => {
    render(component);

    fireEvent.change(screen.getByPlaceholderText("Search keyword(s)"), {
      target: { value: "test words" },
    });

    const checkbox = screen.getByLabelText(/Search only public domain/i);

    fireEvent.click(checkbox);

    const searchButton = screen.getByRole("button", { name: "Search" });

    fireEvent.click(searchButton);

    expect(mockRouter.push).toHaveBeenCalledWith(
      "/search/index?q=test+words&perPage=48&filters%5Brights%5D=pd"
    );
  });

  it("submits on Enter when no suggestion is active", () => {
    render(component);

    const input = screen.getByPlaceholderText("Search keyword(s)");
    fireEvent.change(input, { target: { value: "ab" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(mockRouter.push).toHaveBeenCalledWith(
      "/search/index?q=ab&perPage=48"
    );
  });

  it("populates the input on Enter when a suggestion is active and does not submit", async () => {
    jest.useFakeTimers();
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        suggestions: [
          {
            uuid: "a1",
            title: "Cromwell Family Papers",
            type: "Collection",
            highlights: {},
          },
        ],
      }),
    }) as jest.Mock;

    render(component);

    const input = screen.getByPlaceholderText("Search keyword(s)");
    fireEvent.change(input, { target: { value: "crom" } });

    await act(async () => {
      jest.runAllTimers();
      await Promise.resolve();
    });

    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(input).toHaveValue("Cromwell Family Papers");
    expect(mockRouter.push).not.toHaveBeenCalled();

    jest.useRealTimers();
  });

  it("applies public domain filter when selecting a suggestion", async () => {
    jest.useFakeTimers();
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        suggestions: [
          {
            uuid: "a1",
            title: "Cromwell Family Papers",
            type: "Collection",
            highlights: {},
          },
        ],
      }),
    }) as jest.Mock;

    render(component);

    // Enable the public domain filter
    const checkbox = screen.getByLabelText(/Search only public domain/i);
    fireEvent.click(checkbox);

    // Type in the search field to get suggestions
    const input = screen.getByPlaceholderText("Search keyword(s)");
    fireEvent.change(input, { target: { value: "crom" } });

    await act(async () => {
      jest.runAllTimers();
      await Promise.resolve();
    });

    // Click on the suggestion
    const suggestion = screen.getByText("Cromwell Family Papers");
    fireEvent.mouseDown(suggestion);

    expect(mockRouter.push).toHaveBeenCalledWith(
      "/search/index?q=Cromwell+Family+Papers&perPage=48&filters%5Brights%5D=pd"
    );

    jest.useRealTimers();
  });
});
