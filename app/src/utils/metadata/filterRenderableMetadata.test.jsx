import {
  getRenderableMetadata,
  metadataFieldToDisplay,
} from "../utils/filterRenderableMetadata";

describe("getRenderableMetadata", () => {
  it("filters and returns only the fields defined in metadataFieldToDisplay", () => {
    const input = {
      title: "A smoking club",
      collection: "Some collection",
      randomField: "Should be excluded",
      abstract: "",
      rights: "Public domain",
    };

    const result = getRenderableMetadata(input);

    expect(result).toEqual({
      title: "A smoking club",
      collection: "Some collection",
      rights: "Public domain",
    });

    expect(Object.keys(result)).not.toContain("randomField");
    expect(Object.keys(result)).not.toContain("abstract");
  });

  it("returns an empty object if no valid fields are present", () => {
    const result = getRenderableMetadata({ foo: "bar", bar: "baz" });
    expect(result).toEqual({});
  });

  it("includes all metadataFieldToDisplay keys when values are defined", () => {
    const input = Object.fromEntries(
      Object.keys(metadataFieldToDisplay).map((key) => [
        key,
        `Value for ${key}`,
      ])
    );

    const result = getRenderableMetadata(input);

    expect(Object.keys(result).sort()).toEqual(
      Object.keys(metadataFieldToDisplay).sort()
    );
  });
});
