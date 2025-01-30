import NotFoundPage from "@/src/components/pages/notFoundPage/notFoundPage";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import React from "react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Not found page", () => {
  it("renders a 404 error message", () => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: "/404",
    }));

    render(<NotFoundPage />);
    const heading = screen.getByRole("heading", {
      name: /We couldn't find that page./i,
    });
    expect(heading).toBeInTheDocument();
  });
});
