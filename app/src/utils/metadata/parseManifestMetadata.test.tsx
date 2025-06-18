import { parseManifestMetadata } from "./parseManifestMetadata";

describe("parseManifestMetadata", () => {
  it("parses IIIF metadata into a key-value record", () => {
    const input = [
      {
        label: { en: ["Title"] },
        value: { en: ["A smoking club"] },
      },
      {
        label: { en: ["Genres"] },
        value: { en: ["Prints", "Satirical art"] },
      },
    ];

    const result = parseManifestMetadata(input);

    expect(result["Title"]).toEqual(["A smoking club"]);
    expect(result["Genres"]).toEqual(["Prints", "Satirical art"]);
  });

  it("skips fields with missing labels or values", () => {
    const input = [
      { label: { en: ["Title"] }, value: { en: ["Good data"] } },
      { label: { en: [] }, value: { en: ["Missing label"] } },
      { label: { en: ["No value"] }, value: { en: [] } },
    ];

    const result = parseManifestMetadata(input);

    expect(result["Title"]).toEqual(["Good data"]);
    expect(result["No value"]).toBeUndefined();
  });

  it("handles empty metadata array gracefully", () => {
    const result = parseManifestMetadata([]);
    expect(result).toEqual({});
  });
});
