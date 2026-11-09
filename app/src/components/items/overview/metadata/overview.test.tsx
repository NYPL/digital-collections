import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import MetadataOverview from "./overview";

describe("MetadataOverview collection hierarchy arrows", () => {
  const metadata = {
    collection:
      '<a href="/collections/parent">Parent Collection</a><br><a href="/collections/child">Child Collection</a>',
  };

  beforeEach(() => {
    document.documentElement.setAttribute("dir", "ltr");
  });

  it("renders right-pointing hierarchy arrow in LTR", async () => {
    render(<MetadataOverview metadata={metadata} />);

    await waitFor(() => {
      expect(
        screen.getByTitle("navigationSubdirectoryArrowRight icon")
      ).toBeInTheDocument();
    });

    expect(
      screen.queryByTitle("navigationSubdirectoryArrowLeft icon")
    ).not.toBeInTheDocument();
  });

  it("renders left-pointing hierarchy arrow in RTL", async () => {
    document.documentElement.setAttribute("dir", "rtl");

    render(<MetadataOverview metadata={metadata} />);

    await waitFor(() => {
      expect(
        screen.getByTitle("navigationSubdirectoryArrowLeft icon")
      ).toBeInTheDocument();
    });

    expect(
      screen.queryByTitle("navigationSubdirectoryArrowRight icon")
    ).not.toBeInTheDocument();
  });

  it("renders hierarchy arrow when collection HTML uses self-closing break tags", async () => {
    const metadataWithSelfClosingBreak = {
      collection:
        '<a href="/collections/parent">Parent Collection</a><br /><a href="/collections/child">Child Collection</a>',
    };

    render(<MetadataOverview metadata={metadataWithSelfClosingBreak} />);

    await waitFor(() => {
      expect(
        screen.getByTitle("navigationSubdirectoryArrowRight icon")
      ).toBeInTheDocument();
    });
  });

  it("renders hierarchy arrow when collection HTML uses break tags with attributes", async () => {
    const metadataWithAttributedBreak = {
      collection:
        '<a href="/collections/parent">Parent Collection</a><br class="separator" /><a href="/collections/child">Child Collection</a>',
    };

    render(<MetadataOverview metadata={metadataWithAttributedBreak} />);

    await waitFor(() => {
      expect(
        screen.getByTitle("navigationSubdirectoryArrowRight icon")
      ).toBeInTheDocument();
    });
  });
});
