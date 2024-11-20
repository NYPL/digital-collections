import { apiResponse } from "./api";
import { getItemsCountFromCollections } from "./itemCount";

jest.mock("./api");

describe("getItemsCountFromCollections()", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the correct numItems for each UUID", async () => {
    (apiResponse as jest.Mock)
      .mockResolvedValueOnce(
        Promise.resolve({
          status: 200,
          numItems: 10,
        })
      )
      .mockResolvedValueOnce(
        Promise.resolve({
          status: 200,
          numItems: 20,
        })
      );

    const uuids = ["uuid1", "uuid2"];

    const results = await getItemsCountFromCollections(uuids);

    expect(results).toEqual({
      uuid1: 10,
      uuid2: 20,
    });
  });

  it("should handle server error gracefully", async () => {
    const uuids = ["uuid1"];
    (apiResponse as jest.Mock).mockRejectedValueOnce(
      Promise.resolve({
        status: 400,
      })
    );
    const results = await getItemsCountFromCollections(uuids);
    expect(results).toEqual({
      uuid1: 0,
    });
  });

  it("should handle missing numItems field gracefully", async () => {
    const uuids = ["uuid1"];
    (apiResponse as jest.Mock).mockResolvedValueOnce(
      Promise.resolve({
        status: 200,
      })
    );
    const results = await getItemsCountFromCollections(uuids);
    expect(results).toEqual({
      uuid1: 0,
    });
  });

  it("should handle an empty array of UUIDs", async () => {
    const uuids = [];
    const results = await getItemsCountFromCollections(uuids);
    expect(results).toEqual({});
  });
});
