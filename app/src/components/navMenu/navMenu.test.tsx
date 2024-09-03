import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import appConfig from "../../appConfig";
import NavMenu from "./navMenu";
import { ENV_KEY } from "../../types/EnvironmentType";

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
      appConfig.DC_URL[appConfig.environment as ENV_KEY] +
        `/search/index?utf8=%E2%9C%93&keywords=`
    );
    expect(getByLabelText("Divisions")).toHaveAttribute(
      "href",
      appConfig.DC_URL[appConfig.environment as ENV_KEY] + `/divisions`
    );
    expect(getByLabelText("Collections")).toHaveAttribute(
      "href",
      appConfig.DC_URL[appConfig.environment as ENV_KEY] + `/collections`
    );
    expect(getByLabelText("About")).toHaveAttribute("href", "/about");
  });
});
