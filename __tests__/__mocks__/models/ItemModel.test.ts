import { ItemModel } from "./ItemModel"; // adjust path as needed
import { Maniiifest } from "maniiifest";

jest.mock("maniiifest", () => {
  return {
    Maniiifest: jest.fn().mockImplementation((manifest) => ({
      iterateManifestCanvas: () => manifest.canvases || [],
      iterateManifestCanvasAnnotation: () => manifest.canvasAnnotations || [],
      iterateManifestMetadata: () => manifest.metadata || [],
    })),
  };
});

describe("ItemModel", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv }; // clone original env
    process.env.APP_ENV = "development";
    process.env.COLLECTIONS_API_URL = "https://api.example.com";
  });

  afterAll(() => {
    process.env = originalEnv; // restore env
  });

  const mockManifest = {
    items: [
      { id: "https://iiif.nypl.org/iiif/3/ABC123/full/!700,700/0/default.jpg" },
    ],
    canvases: [
      { id: "https://iiif.nypl.org/iiif/3/ABC123/full/!700,700/0/default.jpg" },
    ],
    canvasAnnotations: [],
    metadata: [
      { label: { en: ["Title"] }, value: { en: ["A Sample Title"] } },
      { label: { en: ["Resource Type"] }, value: { en: ["still image"] } },
      { label: { en: ["Content Type"] }, value: { en: ["image"] } },
      { label: { en: ["Is Restricted"] }, value: { en: ["false"] } },
      { label: { en: ["Library Locations"] }, value: { en: ["Main Library"] } },
      {
        label: { en: ["Identifiers"] },
        value: { en: ["NYPL Catalog ID (b12345)"] },
      },
    ],
  };

  it("constructs an ItemModel with expected values", () => {
    const item = new ItemModel("12345", mockManifest);

    expect(item.uuid).toBe("12345");
    expect(item.title).toBe("A Sample Title");
    expect(item.typeOfResource).toBe("still image");
    expect(item.isRestricted).toBe(false);
    expect(item.contentType).toBe("image");
    expect(item.hasItems).toBe(true);
    expect(item.imageIDs).toEqual(["ABC123"]);
    expect(item.link).toContain("qa-digitalcollections.nypl.org");
    expect(item.manifestURL).toBe("https://api.example.com/manifests/12345");
    expect(item.catalogLink).toContain("b12345");
  });

  it("handles missing metadata fields gracefully", () => {
    const emptyManifest = {
      items: [],
      canvases: [],
      metadata: [],
    };
    const item = new ItemModel("67890", emptyManifest);

    expect(item.title).toBe("");
    expect(item.hasItems).toBe(false);
    expect(item.imageIDs).toEqual([]);
    expect(item.metadata?.title).toBe("");
    expect(item.catalogLink).toBe("");
  });

  it("sets isImage correctly for image content type", () => {
    const item = new ItemModel("abcde", mockManifest);
    expect(item.isImage).toBe(true);
  });

  it("assigns divisionLink from Library Locations if restricted", () => {
    const item = new ItemModel("xyz123", mockManifest);
    expect(item.divisionLink).toBe("Main Library");
  });

  it("parses and joins metadata arrays with <br>", () => {
    const manifest = {
      items: [{}],
      canvases: [
        {
          id: "https://iiif.nypl.org/iiif/3/IMG999/full/!700,700/0/default.jpg",
        },
      ],
      metadata: [
        {
          label: { en: ["Genres"] },
          value: { en: ["Photographs", "Portraits"] },
        },
        { label: { en: ["Rights"] }, value: { en: ["Public Domain"] } },
      ],
    };

    const item = new ItemModel("metaTest", manifest);
    expect(item.metadata?.genres).toBe("Photographs<br>Portraits");
    expect(item.metadata?.rights).toBe("Public Domain");
  });
});
