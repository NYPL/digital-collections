import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavMenu from "./navMenu";

describe("Nav menu component", () => {
  it("renders nav menu component", () => {
    render(<NavMenu render={1} />);
    expect(screen.getByText("Items")).toBeInTheDocument;
    expect(screen.getByText("Collections")).toBeInTheDocument;
    expect(screen.getByText("Divisions")).toBeInTheDocument;
    expect(screen.getByText("About")).toBeInTheDocument;
  });

  it("has links", () => {
    const { getByLabelText } = render(<NavMenu render={1} />);
    expect(getByLabelText("Items")).toHaveAttribute(
      "href",
      `/search/index?utf8=%E2%9C%93&keywords=`
    );
    expect(getByLabelText("Divisions")).toHaveAttribute("href", `/divisions`);
    expect(getByLabelText("Collections")).toHaveAttribute(
      "href",
      `/collections`
    );
    expect(getByLabelText("About")).toHaveAttribute("href", "/about");
  });
});
