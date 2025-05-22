import { render, waitFor } from "@testing-library/react";
import React from "react";
import { useSubcollectionRedirect } from "./useSubcollectionRedirect";

function TestPageComponent() {
  useSubcollectionRedirect();
  return <div>Test</div>;
}

describe("useSubcollectionRedirect", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should redirect to new URL with subcollection filter", async () => {
    const replaceMock = jest.fn();

    jest.spyOn(window, "location", "get").mockReturnValue({
      ...window.location,
      pathname: "/collections/123e4567-e89b-12d3-a456-426614174000",
      hash: "#/?tab=navigation&roots=5:6cea9e80-c5aa-012f-63d6-58d385a7bc34/5:fb72bd20-c5aa-012f-5141-58d385a7bc34",
      origin: "http://localhost",
      search: "",
      replace: replaceMock,
    } as unknown as Location);

    render(<TestPageComponent />);

    await waitFor(() => {
      expect(replaceMock).toHaveBeenCalledWith(
        "http://localhost/collections/123e4567-e89b-12d3-a456-426614174000?filters=%5Bsubcollection%3Dfb72bd20-c5aa-012f-5141-58d385a7bc34%5D"
      );
    });
  });

  it("should not redirect if pathname does not match", async () => {
    const replaceMock = jest.fn();

    jest.spyOn(window, "location", "get").mockReturnValue({
      ...window.location,
      pathname: "/divisions",
      hash: "#",
      origin: "http://localhost",
      search: "",
      replace: replaceMock,
    } as unknown as Location);

    render(<TestPageComponent />);

    await waitFor(() => {
      expect(replaceMock).not.toHaveBeenCalled();
    });
  });

  it("should not redirect if hash does not contain 'roots='", async () => {
    const replaceMock = jest.fn();

    jest.spyOn(window, "location", "get").mockReturnValue({
      ...window.location,
      pathname: "/collections/123e4567-e89b-12d3-a456-426614174000",
      hash: "#/?nothin",
      origin: "http://localhost",
      search: "",
      replace: replaceMock,
    } as unknown as Location);

    render(<TestPageComponent />);

    await waitFor(() => {
      expect(replaceMock).not.toHaveBeenCalled();
    });
  });

  it("should not redirect if no UUIDs found", async () => {
    const replaceMock = jest.fn();

    jest.spyOn(window, "location", "get").mockReturnValue({
      ...window.location,
      pathname: "/collections/123e4567-e89b-12d3-a456-426614174000",
      hash: "#/?tab=navigation&roots=%2Froot:no-uuid-here",
      origin: "http://localhost",
      search: "",
      replace: replaceMock,
    } as unknown as Location);

    render(<TestPageComponent />);

    await waitFor(() => {
      expect(replaceMock).not.toHaveBeenCalled();
    });
  });
});
