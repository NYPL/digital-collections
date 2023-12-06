import { render } from "@testing-library/react";
import Home from "../src/pages/index";
import { axe } from "jest-axe";
import { props } from "./data/homepageProps";
import { imageURL } from "@/utils/utils";
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe("Homepage Accessibility", () => {
  const featuredItem = {
    imageID: "5273165",
    imageSrc: imageURL("5273165"),
    uuid: "3a2cced0-12ca-0133-7a6d-58d385a7bbd0",
    title: "Latona Giving Birth to Apollo and Diana on the Island of Delos",
    href: `https://qa-digitalcollections.nypl.org/items/3a2cced0-12ca-0133-7a6d-58d385a7bbd0`,
  };
  it("passes axe accessibility test", async () => {
    window.ResizeObserver = ResizeObserver;
    const { container } = render(
      <Home
        {...props}
        // featuredItem={featuredItem}
        // numberOfDigitizedItems="863,848"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
