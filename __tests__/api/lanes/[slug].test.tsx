import { NextRequest } from "next/server";
import { GET } from "../../../src/app/api/lanes/[slug]/route";
describe("GET /api/lanes/[slug]", () => {
  it("should respond with 200 status and lanes data for a GET request", async () => {
    const request = {
      method: "GET",
      url: "http://localhost/api/lanes/maps",
    } as unknown as NextRequest;
    const params = { params: { slug: "maps" } };
    const mockResponse = await GET(request, params);
    expect(mockResponse.status).toBe(200);
  });

  it("should respond with an error for nonexistent slugs", async () => {
    const request = {
      method: "GET",
      url: "http://localhost/api/lanes/not-a-slug",
    } as unknown as NextRequest;
    const params = { params: { slug: "not-a-slug" } };
    const mockResponse = await GET(request, params);
    expect(mockResponse.status).toBe(404);
    const data = await mockResponse.json();
    expect(data).toEqual({ error: "Lane not found" });
  });
});
