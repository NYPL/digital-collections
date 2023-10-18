import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import handler from "@/pages/api/lanes/[...slug]";

jest.mock("fs/promises");

describe("Individual swim lane API endpoints handler", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should respond with 200 status and cleaned file contents for a GET request", async () => {
    const mockReadFile = jest.spyOn(fs, "readFile");
    mockReadFile.mockResolvedValue(JSON.stringify({ key: "value" }));

    const request: NextApiRequest = {
      method: "GET",
      query: {
        slug: "test-slug",
      },
    } as unknown as NextApiRequest;

    const response: NextApiResponse = {
      status: jest.fn(() => response),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    await handler(request, response);

    expect(response.status).toHaveBeenCalledWith(200);

    expect(response.json).toHaveBeenCalledWith({ key: "value" });

    expect(mockReadFile).toHaveBeenCalledWith(
      path.join(process.cwd(), "/src/data/lanes/test-slug/data.json"),
      "utf8"
    );
  });

  it("should respond with an error for non-GET requests", async () => {
    const request: NextApiRequest = {
      method: "POST",
      query: {
        slug: "maps", // A valid 'slug' value
      },
    } as unknown as NextApiRequest;

    const response: NextApiResponse = {
      status: jest.fn(() => response),
    } as unknown as NextApiResponse;

    await handler(request, response);

    expect(response.status).not.toHaveBeenCalledWith(200);
  });
});
