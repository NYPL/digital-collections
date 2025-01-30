import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { mockDivisionResponse } from "__tests__/__mocks__/data/api/mockDivisionResponse";
import {
  useRouter,
  useSearchParams,
  useParams,
  usePathname,
} from "next/navigation";
import DivisionPage from "@/src/components/pages/divisionPage/divisionPage";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
  useParams: jest.fn(),
  usePathname: jest.fn(),
}));

beforeEach(() => {
  (useRouter as jest.Mock).mockImplementation(() => ({
    pathname: "/division/billy-rose-theatre-division",
  }));
});

describe("Collection swimlane landing page accessibility", () => {
  it("passes axe accessibility test", async () => {
    (useParams as jest.Mock).mockReturnValue({
      slug: "recently-digitized-collections",
    });
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn((key: string) => {
        if (key === "page") return 1;
        return null;
      }),
    });
    const { container } = render(<DivisionPage data={mockDivisionResponse} />);
    expect(await axe(container)).toHaveNoViolations();
  }, 60000);
});
