import { getLanesData } from "@/pages/migrated/api/lanes";
import lanesDataHandler from "@/pages/migrated/api/lanes";
import { NextApiRequest } from "next";
describe("All lanes API endpoint handler", () => {
  it("should respond with 200 status and lanes data for a GET request", () => {
    const request: NextApiRequest = {
      method: "GET",
    } as NextApiRequest;

    const mockResponse: any = {
      status: jest.fn(function () {
        return this;
      }),
      json: jest.fn(),
    };

    lanesDataHandler(request, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(getLanesData());
  });

  it("should respond with an error for non-GET requests", () => {
    const request: NextApiRequest = {
      method: "POST",
    } as NextApiRequest;

    const mockResponse: any = {
      status: jest.fn(function () {
        return this;
      }),
    };

    lanesDataHandler(request, mockResponse);

    expect(mockResponse.status).not.toHaveBeenCalledWith(200);
  });
});
