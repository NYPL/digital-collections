import lanesData from "../../../app/data/lanes";
import { GET } from "../../../app/api/lanes/route";
describe("All lanes API endpoint handler", () => {
  it("should respond with 200 status and lanes data for a GET request", async () => {
    const mockResponse = await GET();
    const data = await mockResponse.json();
    expect(mockResponse.status).toBe(200);
    expect(data).toEqual(lanesData);
  });
});
