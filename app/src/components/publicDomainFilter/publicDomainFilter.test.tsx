import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import PublicDomainFilter from "./publicDomainFilter";

describe("Public Domain Filter component", () => {
  it("renders and handles checkbox changes", async () => {
    const onCheckChangeMock = jest.fn();
    const { getByLabelText } = render(
      <PublicDomainFilter onCheckChange={onCheckChangeMock} />
    );
    const checkbox = getByLabelText(/Search only public domain/i);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(onCheckChangeMock).toHaveBeenCalledWith(true);
    setTimeout(() => {
      expect(checkbox).toBeChecked();
    }, 50);
  });
});
