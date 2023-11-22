import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "@/components/search/search";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const mockRouter = {
  push: jest.fn(),
};
(useRouter as jest.Mock).mockReturnValue(mockRouter);

describe("Search component", () => {
  it("renders Search component", () => {
    const { getByLabelText, getByPlaceholderText } = render(<Search />);
    expect(getByLabelText("Search Digital Collections")).toBeInTheDocument();
    expect(getByPlaceholderText("Search keyword(s)")).toBeInTheDocument();
  });

  it("handles form submission correctly", () => {
    const { getByLabelText, getByPlaceholderText } = render(<Search />);
    fireEvent.change(getByPlaceholderText("Search keyword(s)"), {
      target: { value: "test word" },
    });
    fireEvent.submit(getByLabelText("Search Digital Collections"));
    expect(mockRouter.push).toHaveBeenCalledWith(
      "https://digitalcollections.nypl.org/search/index?keywords=test%20word"
    );
  });

  it("applies filter correctly", () => {
    //TODO
  });
});
