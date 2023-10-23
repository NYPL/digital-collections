import slugHandler from "@/pages/api/lanes";
import { NextApiRequest } from "next";

it("should respond with 200 status and lanes data for a GET request", () => {
  const request: NextApiRequest = {
    method: "GET",
    query: {
      slug: "maps",
    },
  } as unknown as NextApiRequest;

  const mockResponse: any = {
    status: jest.fn(function () {
      return this;
    }),
    json: jest.fn(),
  };

  slugHandler(request, mockResponse);

  expect(mockResponse.status).toHaveBeenCalledWith(200);
});

it("should respond with an error for nonexistent slugs", () => {
  const request: NextApiRequest = {
    method: "GET",
    query: {
      slug: "not-a-slug",
    },
  } as unknown as NextApiRequest;

  const mockResponse: any = {
    status: jest.fn(function () {
      return this;
    }),
    json: jest.fn(),
  };

  slugHandler(request, mockResponse);

  expect(mockResponse.status).toHaveBeenCalledWith(404);
  expect(mockResponse.json).toHaveBeenCalledWith({ error: "Lane not found" });
});
