import { waitFor } from "@testing-library/react";
import { apiResponse, getItemsCountFromUUIDs } from "./api";

describe("getItemsCountFromUUIDs()", () => {
  it("should throw an error with a bad request", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 403,
        json: () => Promise.resolve({ nyplAPI: { response: "success" } }),
      })
    ) as jest.Mock;

    const data = ["uuid1", "uuid2"];
    await expect(getItemsCountFromUUIDs(data)).rejects.toEqual(
      new Error("apiResponse: 403 No message")
    );
  });

  it("should return an empty object with a successful request but bad data structure", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ nyplAPI: { response: { counts: {} } } }),
      })
    ) as jest.Mock;

    const data = ["uuid1", "uuid2"];

    await waitFor(async () => {
      expect(await getItemsCountFromUUIDs(data)).toEqual({});
    });
  });

  it("should return a map of all the uuids passed with their item count", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () =>
          Promise.resolve({
            nyplAPI: {
              response: {
                counts: {
                  count: [
                    { uuid: { $: "uuid1" }, count_value: { $: "10" } },
                    { uuid: { $: "uuid2" }, count_value: { $: "45" } },
                  ],
                },
              },
            },
          }),
      })
    ) as jest.Mock;

    const data = ["uuid1", "uuid2"];

    await waitFor(async () => {
      expect(await getItemsCountFromUUIDs(data)).toEqual({
        uuid1: "10",
        uuid2: "45",
      });
    });
  });
});

describe("apiResponse", () => {
  const mockApiUrl = "mockurl.org";
  const mockAuthToken = "mockAuthToken";

  beforeAll(() => {
    process.env.AUTH_TOKEN = mockAuthToken;
  });

  it("makes a GET request and returns response", async () => {
    const mockResponse = { nyplAPI: { response: "mockResponse" } };
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: async () => mockResponse,
      })
    ) as jest.Mock;

    const response = await apiResponse(mockApiUrl);
    expect(fetch).toHaveBeenCalledWith(mockApiUrl, {
      method: "GET",
      headers: {
        Authorization: `Token token=${mockAuthToken}`,
      },
      body: undefined,
    });
    expect(response).toEqual("mockResponse");
  });

  it("makes a POST request with a body and returns response", async () => {
    const mockBody = { key: "value" };
    const mockResponse = { result: "mockPostResponse" };
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: async () => mockResponse,
      })
    ) as jest.Mock;

    const response = await apiResponse(mockApiUrl, {
      method: "POST",
      body: mockBody,
    });

    expect(fetch).toHaveBeenCalledWith(mockApiUrl, {
      method: "POST",
      headers: {
        Authorization: `Token token=${mockAuthToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mockBody),
    });
    expect(response).toEqual(mockResponse);
  });

  it("adds query parameters for GET requests", async () => {
    const mockParams = { param1: "value1", param2: "value2" };
    const mockResponse = { nyplAPI: { response: "mockGetResponseWithParams" } };
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: async () => mockResponse,
      })
    ) as jest.Mock;

    const response = await apiResponse(mockApiUrl, {
      params: mockParams,
    });

    expect(fetch).toHaveBeenCalledWith(
      `${mockApiUrl}?param1=value1&param2=value2`,
      {
        method: "GET",
        headers: {
          Authorization: `Token token=${mockAuthToken}`,
        },
        body: undefined,
      }
    );
    expect(response).toEqual("mockGetResponseWithParams");
  });

  it("throws an error for non-200 status", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 500,
        statusText: "Internal Server Error",
      })
    ) as jest.Mock;

    await expect(apiResponse(mockApiUrl)).rejects.toEqual(
      new Error("apiResponse: 500 Internal Server Error")
    );
  });

  it("throws a timeout error if the request takes too long", async () => {
    jest.useFakeTimers();

    (global as any).fetch = jest
      .fn()
      .mockImplementation(() => new Promise(() => {}));

    const apiCall = apiResponse(mockApiUrl);

    jest.advanceTimersByTime(14000);

    await expect(apiCall).rejects.toEqual(
      new Error("apiResponse: Request timed out")
    );

    jest.useRealTimers();
  }, 20000);
});
