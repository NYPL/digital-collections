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

it("transforms collection_keywords to q and maintains other parameters", () => {
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

it("redirects existing collection slug to uuid", () => {
  request = {
    nextUrl: new URL("http://localhost/collections/script-b"),
  } as NextRequest;

  const response = middleware(request);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/collections/5af6c940-c45b-013c-85aa-0242ac110005",
    301
  );
  expect(response).toBe("redirect response");
});

it("redirects non-existent collection slug to title search", () => {
  request = {
    nextUrl: new URL("http://localhost/collections/hello-im-not-a-real-slug"),
  } as NextRequest;

  const response = middleware(request);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?q=Hello+Im+Not+A+Real+Slug",
    301
  );
  expect(response).toBe("redirect response");
});

it("passes a collection uuid through", () => {
  request = {
    nextUrl: new URL(
      "http://localhost/collections/bc920670-c5f9-012f-63ad-58d385a7bc34"
    ),
  } as NextRequest;

  const response = middleware(request);

  expect(NextResponse.next).toHaveBeenCalled();
  expect(response).toBe("next response");
});
