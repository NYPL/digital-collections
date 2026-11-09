import React from "react";
import { render, screen } from "@testing-library/react";
import Item from "./item";

jest.mock("./viewer/viewer", () => {
  return function MockItemMediaViewer() {
    return <div data-testid="item-media-viewer" />;
  };
});

jest.mock("./viewer/fallback", () => {
  return function MockItemMediaViewerFallback() {
    return <div data-testid="item-media-viewer-fallback" />;
  };
});

jest.mock("./overview/overview", () => {
  return function MockItemOverview() {
    return <div data-testid="item-overview" />;
  };
});

jest.mock("../../context/CanvasProvider", () => ({
  CanvasProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

jest.mock("../../context/MapViewProvider", () => ({
  MapViewProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("Item", () => {
  const baseItem = {
    title: "Arabic Translation Test Title",
    hasItems: true,
    isRestricted: false,
  };

  it("renders an English LTR heading when viewer is shown", () => {
    render(<Item item={baseItem as any} />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: baseItem.title,
    });

    expect(screen.getByTestId("item-media-viewer")).toBeInTheDocument();
    expect(heading).toHaveClass("notranslate");
    expect(heading).toHaveAttribute("lang", "en");
    expect(heading).toHaveAttribute("dir", "ltr");
  });

  it("renders an English LTR heading when viewer fallback is shown", () => {
    const restrictedItem = {
      ...baseItem,
      isRestricted: true,
    };

    render(<Item item={restrictedItem as any} />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: restrictedItem.title,
    });

    expect(
      screen.getByTestId("item-media-viewer-fallback")
    ).toBeInTheDocument();
    expect(heading).toHaveClass("notranslate");
    expect(heading).toHaveAttribute("lang", "en");
    expect(heading).toHaveAttribute("dir", "ltr");
  });
});
