import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import appConfig from "../../../../appConfig";
import NavMenu from "./navMenu";
import { ENV_KEY } from "../../types/EnvironmentType";
import { DC_URL } from "../../config/constants";

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
      `${DC_URL}/search/index?utf8=%E2%9C%93&keywords=`
    );
    expect(getByLabelText("Divisions")).toHaveAttribute(
      "href",
      `${DC_URL}/divisions`
    );
    expect(getByLabelText("Collections")).toHaveAttribute(
      "href",
      `${DC_URL}/collections`
    );
    expect(getByLabelText("About")).toHaveAttribute("href", "/about");
  });
});
