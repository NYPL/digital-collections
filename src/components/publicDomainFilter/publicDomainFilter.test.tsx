import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PublicDomainFilter from "./publicDomainFilter";

describe("Public Domain Filter component", () => {
  it("renders and handles checkbox changes", () => {
    const onCheckChangeMock = jest.fn();
    const { getByLabelText } = render(
      <PublicDomainFilter
        uniqueId={"desktop"}
        onCheckChange={onCheckChangeMock}
      />
    );
    const checkbox = getByLabelText(/Search only public domain/i);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(onCheckChangeMock).toHaveBeenCalledWith(true);
    expect(checkbox).toBeChecked();
  });
});
