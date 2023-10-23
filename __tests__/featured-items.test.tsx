import { getItemsData } from "@/pages/api/lanes/items";
import itemsDataHandler from "@/pages/api/lanes/items";
import { NextApiRequest } from "next";

describe("Featured items API endpoint handler", () => {
  it("should respond with 200 status and items data for a GET request", () => {
    const request: NextApiRequest = {
      method: "GET",
    } as NextApiRequest;

    const mockResponse: any = {
      status: jest.fn(function () {
        return this;
      }),
      json: jest.fn(),
    };

    itemsDataHandler(request, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(getItemsData());
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

    itemsDataHandler(request, mockResponse);

    expect(mockResponse.status).not.toHaveBeenCalledWith(200);
  });
});
