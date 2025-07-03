import { GET } from "../../../app/api/collectionchildren/[slug]/route";
import { URL } from "url";

describe("GET /api/collectionchildren", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation((url) => {
      const page = Number(new URL(url)?.searchParams.get("page") ?? 1);
      let numChildren = 0;
      if (page === 1) {
        numChildren = 50;
      } else if (page === 2) {
        numChildren = 25;
      }
      const children = [...Array(numChildren).keys()].map((i) => {
        return {
          title: `item ${i}`,
          uuid: `uuid-${i}`,
          itemCount: 5,
          hasSubContainers: true,
        };
      });

      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ children: children }),
      });
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should respond with status 200 and OK message", async () => {
    const request = {
      method: "GET",
      url: "http://localhost/api/collectionchildren/abcdefg",
    } as unknown as NextRequest;
    const params = { params: { slug: "abcdefg" } };

    const response = await GET(request, params);
    expect(response.status).toBe(200);
    const json = await response.json();
    expect(json.children.length).toBe(75);
  });
});
