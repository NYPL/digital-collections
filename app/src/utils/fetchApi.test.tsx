import { fetchApi } from "./fetchApi";

describe("fetchApi", () => {
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

    const response = await fetchApi(mockApiUrl);
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

    const response = await fetchApi(mockApiUrl, {
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

    const response = await fetchApi(mockApiUrl, {
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

    await expect(fetchApi(mockApiUrl)).rejects.toEqual(
      new Error("fetchApi: 500 Internal Server Error")
    );
  });

  it("throws a timeout error if the request takes too long", async () => {
    jest.useFakeTimers();

    (global as any).fetch = jest
      .fn()
      .mockImplementation(() => new Promise(() => {}));

    const apiCall = fetchApi(mockApiUrl);

    jest.advanceTimersByTime(10000);

    await expect(apiCall).rejects.toEqual(
      new Error("fetchApi: Request timed out")
    );

    jest.useRealTimers();
  }, 15000);
});
