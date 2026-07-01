import { render, screen } from "@testing-library/react";
import SearchCardGridLoading from "./searchCardGridLoading";

describe("SearchCardGridLoading", () => {
  it("renders list-style loading cards when view mode is list", () => {
    render(<SearchCardGridLoading id={0} viewMode="list" />);

    expect(screen.getAllByTestId("search-card-skeleton-loader")).toHaveLength(
      4
    );
  });

  it("renders grid-style loading cards when view mode is grid", () => {
    render(
      <SearchCardGridLoading
        id={1}
        viewMode="grid"
        numColumns={4}
        largeMobileColumns={2}
      />
    );

    expect(screen.getAllByTestId("search-card-skeleton-loader")).toHaveLength(
      12
    );
  });
});
