import { normalizeItemMetadataFromManifest } from "./normalizeItemMetdata";

describe("normalizeItemMetadataFromManifest", () => {
  it("normalizes flat metadata with expected fields", () => {
    const raw = {
      Title: ["A smoking club"],
      Collection: ["Tobacco History"],
      Genres: ["Prints", "Satirical art"],
      "Dates / Origin": ["1792"],
      "Date Issued": ["1792"],
      "Library Locations": ["George Arents Collection", "Shelf A"],
      Languages: ["English"],
      Identifiers: ["UUID: 1234"],
      Access: ["Open"],
      Rights: ["Public domain"],
    };

    const result = normalizeItemMetadataFromManifest(raw);

    expect(result.title).toBe("A smoking club");
    expect(result.collection).toBe("Tobacco History");
    expect(result.genres).toBe("Prints<br>Satirical art");
    expect(result.origin).toBe("1792");
    expect(result.dateIssued).toBe("1792");
    expect(result.locations).toBe("George Arents Collection<br>Shelf A");
    expect(result.languages).toBe("English");
    expect(result.identifiers).toBe("UUID: 1234");
    expect(result.access).toBe("Open");
    expect(result.rights).toBe("Public domain");
  });

  it("returns defaults for missing or empty fields", () => {
    const raw = {
      Title: ["Untitled"],
    };

    const result = normalizeItemMetadataFromManifest(raw);

    expect(result.title).toBe("Untitled");
    expect(result.collection).toBe("");
    expect(result.subjects).toBe("");
    expect(result.notes).toBe("");
    expect(result.languages).toBe("");
  });
});
