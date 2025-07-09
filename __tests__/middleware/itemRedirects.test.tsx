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

it("strips /book from url", () => {
  const request = {
    nextUrl: new URL(
      "http://localhost/items/e38130f0-740d-0136-0215-1db482647460/book#page/1/mode/2up"
    ),
  } as NextRequest;
  const response = middleware(request);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/items/e38130f0-740d-0136-0215-1db482647460",
    301
  );
  expect(response).toBe("redirect response");
});
