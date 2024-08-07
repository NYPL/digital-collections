import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import appConfig from "../../appConfig";
import MobileNavMenu from "./mobileNavMenu";
import { ENV_KEY } from "src/types/EnvironmentType";

describe("Mobile nav menu component", () => {
  it("renders mobile nav menu component", () => {
    const { getByTitle } = render(<MobileNavMenu />);
    expect(getByTitle("utilityHamburger icon")).toBeInTheDocument();
  });

  it("opens and closes", () => {
    const { getByTitle, getByText } = render(<MobileNavMenu />);
    fireEvent.click(screen.getByLabelText("Open Navigation"));
    expect(getByTitle("close icon")).toBeInTheDocument();
    expect(getByText("Items")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Close Navigation"));
    const menuItems = screen.queryAllByText("Items");
    expect(menuItems).toHaveLength(0);
  });

  it("has links", () => {
    render(<MobileNavMenu />);
    fireEvent.click(screen.getByLabelText("Open Navigation"));
    expect(screen.getByLabelText("Items")).toHaveAttribute(
      "href",
      `${
        appConfig.DC_URL[appConfig.environment as ENV_KEY]
      }/search/index?utf8=%E2%9C%93&keywords=`
    );
    expect(screen.getByLabelText("Divisions")).toHaveAttribute(
      "href",
      `${appConfig.DC_URL[appConfig.environment as ENV_KEY]}/divisions`
    );
    expect(screen.getByLabelText("Collections")).toHaveAttribute(
      "href",
      `${appConfig.DC_URL[appConfig.environment as ENV_KEY]}/collections`
    );
    expect(screen.getByLabelText("About")).toHaveAttribute("href", `/about`);
  });
});
