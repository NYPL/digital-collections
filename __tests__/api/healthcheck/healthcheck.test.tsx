import { GET } from "../../../app/api/healthcheck/route";

describe("GET /api/healthcheck", () => {
  it("should respond with status 200 and OK message", async () => {
    const response = await GET();
    expect(response.status).toBe(200);
    const json = await response.json();
    expect(json).toEqual({ status: 200, message: "OK" });
  });
});
