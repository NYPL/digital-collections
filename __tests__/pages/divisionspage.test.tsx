import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { mockDivisionsResponse } from "__tests__/__mocks__/data/api/mockDivisionsResponse";
import DivisionsPage from "@/src/components/pages/divisionsPage/divisionsPage";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

beforeEach(() => {
  (useRouter as jest.Mock).mockImplementation(() => ({
    pathname: "/divisions",
  }));
});

describe("All divisions page accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <DivisionsPage
        summary={mockDivisionsResponse.summary}
        divisions={mockDivisionsResponse.divisions}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
