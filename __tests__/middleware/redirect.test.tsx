import { middleware } from "middleware";
import { NextRequest, NextResponse } from "next/server";
// TO DO: add tests for 'keyword' and 'keywords'

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

  it("redirects collection_keywords to q", () => {
    const request = {
      nextUrl: new URL("http://localhost/collections?collection_keywords=test"),
    } as NextRequest;
    const response = middleware(request);

    expect(NextResponse.redirect).toHaveBeenCalledWith(
      "http://localhost/collections?q=test",
      301
    );
    expect(response).toBe("redirect response");
  });

  it("redirects collection_keywords to q and maintains other parameters", () => {
    const request = {
      nextUrl: new URL(
        "http://localhost/collections?collection_keywords=test&sort=title-asc&page=23"
      ),
    } as NextRequest;
    const response = middleware(request);

    expect(NextResponse.redirect).toHaveBeenCalledWith(
      "http://localhost/collections?sort=title-asc&page=23&q=test",
      301
    );
    expect(response).toBe("redirect response");
  });

  it("goes through unchanged if no collection_keywords= param", () => {
    request = {
      nextUrl: new URL("http://localhost/collections?sort=title-asc"),
    } as NextRequest;

    const response = middleware(request);

    expect(NextResponse.next).toHaveBeenCalled();
    expect(response).toBe("next response");
  });
});
