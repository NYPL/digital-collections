import { middleware } from "middleware";
import { NextRequest, NextResponse } from "next/server";

jest.mock("next/server", () => {
  return {
    NextRequest: jest.fn(),
    NextResponse: {
      redirect: jest.fn(() => "redirect response"),
      next: jest.fn(() => "next response"),
    },
  };
});

describe("redirects collection_keywords to q on collections search", () => {
  let request: NextRequest;

  beforeEach(() => {
    request = {
      nextUrl: new URL("http://localhost/collections?collection_keywords=test"),
    } as NextRequest;
  });

  test("redirects collection_keywords to q", () => {
    const response = middleware(request);

    expect(NextResponse.redirect).toHaveBeenCalledWith(
      "http://localhost/collections?q=test",
      301
    );
    expect(response).toBe("redirect response");
  });

  test("goes through unchanged if no collection_keywords= param", () => {
    request = {
      nextUrl: new URL("http://localhost/collections?sort=title-asc"),
    } as NextRequest;

    const response = middleware(request);

    expect(NextResponse.next).toHaveBeenCalled();
    expect(response).toBe("next response");
  });
});
