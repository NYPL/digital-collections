import { GET } from "../../../app/api/suggest/route";
import { NextRequest } from "next/server";

const makeRequest = (q?: string) => {
  const url = `http://localhost/api/suggest${q !== undefined ? `?q=${q}` : ""}`;
  return new NextRequest(url);
};

describe("GET /api/suggest", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    process.env.COLLECTIONS_API_URL = "http://collections-api.test";
    process.env.COLLECTIONS_API_AUTH_TOKEN = "test-token";
  });

  it("returns empty suggestions when q is missing", async () => {
    const res = await GET(makeRequest());
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data).toEqual({ suggestions: [] });
  });

  it("returns empty suggestions when q is fewer than 3 characters", async () => {
    const res = await GET(makeRequest("ab"));
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data).toEqual({ suggestions: [] });
  });

  it("proxies to collections-api and returns suggestions on success", async () => {
    const mockSuggestions = [
      { uuid: "aaa-001", title: "Cromwell Family Papers", type: "Collection" },
    ];
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ suggestions: mockSuggestions }),
    }) as jest.Mock;

    const res = await GET(makeRequest("crom"));
    const data = await res.json();

    expect(global.fetch).toHaveBeenCalledWith(
      "http://collections-api.test/search/suggestions?q=crom",
      {
        headers: { "x-nypl-collections-api-key": "test-token" },
      }
    );
    expect(res.status).toBe(200);
    expect(data).toEqual({ suggestions: mockSuggestions });
  });

  it("returns empty suggestions when the upstream response is not ok", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 503,
    }) as jest.Mock;

    const res = await GET(makeRequest("crom"));
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data).toEqual({ suggestions: [] });
  });

  it("returns empty suggestions when the upstream fetch throws", async () => {
    global.fetch = jest
      .fn()
      .mockRejectedValue(new Error("network error")) as jest.Mock;

    const res = await GET(makeRequest("crom"));
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data).toEqual({ suggestions: [] });
  });

  it("URL-encodes the query parameter before forwarding", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ suggestions: [] }),
    }) as jest.Mock;

    await GET(makeRequest("new york"));

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("new%20york"),
      expect.any(Object)
    );
  });
});
