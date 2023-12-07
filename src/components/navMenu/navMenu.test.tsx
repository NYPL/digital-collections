import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import appConfig from "../../../__tests__/data/appConfig";
import NavMenu from "@/components/navMenu/navMenu";

describe("Nav menu component", () => {
  it("renders nav menu component", () => {
    render(<NavMenu />);
    expect(screen.getByText("Items")).toBeInTheDocument;
    expect(screen.getByText("Collections")).toBeInTheDocument;
    expect(screen.getByText("Divisions")).toBeInTheDocument;
    expect(screen.getByText("About")).toBeInTheDocument;
  });

  it("has links", () => {
    const { getByLabelText } = render(<NavMenu />);
    expect(getByLabelText("Items")).toHaveAttribute(
      "href",
      appConfig.DC_URL + `/search/index?utf8=%E2%9C%93&keywords=`
    );
    expect(getByLabelText("Divisions")).toHaveAttribute(
      "href",
      appConfig.DC_URL + `/divisions`
    );
    expect(getByLabelText("Collections")).toHaveAttribute(
      "href",
      appConfig.DC_URL + `/collections`
    );
    expect(getByLabelText("About")).toHaveAttribute(
      "href",
      appConfig.DC_URL + `/about`
    );
  });
});
