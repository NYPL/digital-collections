import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "@/components/search/search";
import { useRouter } from "next/router";
import appConfig from "../../../__tests__/data/appConfig";

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
      appConfig.DC_URL[appConfig.environment] +
        `/search/index?keywords=test%20word`
    );
  });

  it("applies filter correctly", () => {
    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText("Search keyword(s)"), {
      target: { value: "test words" },
    });

    const checkbox = screen.getByLabelText(/Search only public domain/i);

    fireEvent.click(checkbox);

    fireEvent.submit(screen.getByLabelText("Search Digital Collections"));

    expect(mockRouter.push).toHaveBeenCalledWith(
      appConfig.DC_URL[appConfig.environment] +
        `/search/index?utf8=✓&filters%5Brights%5D=pd&keywords=test%20words`
    );
  });
});
