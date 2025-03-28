import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "./search";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
const mockRouter = {
  push: jest.fn(),
};
(useRouter as jest.Mock).mockReturnValue(mockRouter);

describe("Search component", () => {
  it("renders Search component", () => {
    const { getAllByLabelText, getByPlaceholderText } = render(<Search />);
    expect(
      getAllByLabelText("Search Digital Collections")[0]
    ).toBeInTheDocument();
    expect(getByPlaceholderText("Search keyword(s)")).toBeInTheDocument();
  });

  it("handles form submission correctly", () => {
    const { getByPlaceholderText } = render(<Search />);
    fireEvent.change(getByPlaceholderText("Search keyword(s)"), {
      target: { value: "test word" },
    });

    const searchButton = screen.getByRole("button");

    fireEvent.click(searchButton);

    expect(mockRouter.push).toHaveBeenCalledWith(`/search/index?q=test%20word`);
  });

  it("applies filter correctly", () => {
    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText("Search keyword(s)"), {
      target: { value: "test words" },
    });

    const checkbox = screen.getByLabelText(/Search only public domain/i);

    fireEvent.click(checkbox);

    const searchButton = screen.getByRole("button");

    fireEvent.click(searchButton);

    expect(mockRouter.push).toHaveBeenCalledWith(
      `/search/index?q=test%20words&filters=%5BrightsFilter%3DpublicDomain%5D`
    );
  });
});
