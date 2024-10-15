import PageLayout from "@/src/components/pageLayout/pageLayout";
import ErrorPage from "@/src/components/pages/errorPage/errorPage";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import React from "react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Error Page", () => {
  it("renders an error message", () => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: "/test-error",
    }));

    render(
      <PageLayout activePage={"serverError"}>
        <ErrorPage />
      </PageLayout>
    );

    const heading = screen.getByRole("heading", {
      name: /Something went wrong on our end./i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("has a link that can open the feedback box", async () => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: "/test-error",
    }));

    render(
      <PageLayout activePage={"serverError"}>
        <ErrorPage />
      </PageLayout>
    );

    const button = screen.getByText(/contact us/);
    fireEvent.click(button);

    expect(
      screen.getByText(/What is your feedback about?/)
    ).toBeInTheDocument();
  });
});
