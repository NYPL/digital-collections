import { ItemModel } from "../../app/src/models/item"; // adjust path as needed

//general items
import restrictedAndMissingMediaManifest from "../__mocks__/data/collectionsApi/manifests/item/restricted_and_missing_media.json";
import restrictedManifest from "../__mocks__/data/collectionsApi/manifests/item/restricted.json";

//images
import singleImageCaptureManifest from "../__mocks__/data/collectionsApi/manifests/item/image/single_capture.json";
import multiImageCaptureManifest from "../__mocks__/data/collectionsApi/manifests/item/image/multiple_capture.json";

//audio
import singleAudioCaptureManifest from "../__mocks__/data/collectionsApi/manifests/item/audio/single_capture.json";

//video
//note: no multi video capture manifest bc we allegedly don't have Items that have multiple video captures
import singleVideoCaptureManifest from "../__mocks__/data/collectionsApi/manifests/item/video/single_capture.json";
import missingMediaVideoCaptureManifest from "../__mocks__/data/collectionsApi/manifests/item/video/missing_capture.json";

describe("ItemModel - Image - Single Capture", () => {
  const uuid = "a9c43f00-c600-012f-59c3-58d385a7bc34";

  let item: ItemModel;

  beforeEach(() => {
    item = new ItemModel(uuid, singleImageCaptureManifest);
  });

  describe("Non-Manifest/Metadata related fields", () => {
    it("sets the correct UUID", () => {
      expect(item.uuid).toBe(uuid);
    });
    it("generates the correct link and manifestURL", () => {
      const env = process.env.APP_ENV || "";
      const baseLink =
        env === "development" || env === "qa"
          ? `https://qa-digitalcollections.nypl.org/items/${uuid}`
          : `https://digitalcollections.nypl.org/items/${uuid}`;

      expect(item.link).toBe(baseLink);
      expect(item.manifestURL).toContain(`/manifests/${uuid}`);
    });
  });

  describe("sets the correct Manifest-related fields", () => {
    it("sets hasItems correctly based on canvas presence", () => {
      expect(item.hasItems).toBe(true);
    });
    it("extracts a single image ID from canvas", () => {
      expect(item.imageIDs).toHaveLength(1);
      expect(item.imageIDs?.[0]).toBe("1107651");
    });
  });

  describe("sets the correct metadata-related fields", () => {
    // This covers most item fields but not all cases
    it("sets the correct Title", () => {
      expect(item.title).toBe("A smoking club");
      expect(item.metadata.title).toBe("A smoking club");
    });

    it("sets typeOfResource to Text", () => {
      expect(item.typeOfResource).toBe(
        "<span><a href='http://qa-digitalcollections.nypl.org/search/index?filters=%5Btype%3Dstill+image%5D'>Still Image</a></span>"
      );
    });

    it("sets isRestricted to false based on metadata", () => {
      expect(item.isRestricted).toBe(false);
    });

    // this uses Library Location instead of Division data because the Item is not restricted
    it("sets DivisionLink correctly", () => {
      expect(item.divisionLink).toBe(
        "<span><a href='http://qa-digitalcollections.nypl.org/divisions/george-arents-collection'>George Arents Collection</a></span>"
      );
    });

    it("sets contentType to image and isImage to true", () => {
      expect(item.contentType).toBe("image");
      expect(item.isImage).toBe(true);
    });

    it("sets archivesLink and catalogLink to null if they are not present", () => {
      expect(item.archivesLink).toBe(null);
      expect(item.catalogLink).toBe(null);
    });

    it("extracts correct metadata fields like genres and subjects", () => {
      expect(item.metadata.genres).toContain("Prints");
      expect(item.metadata.subjects).toContain("Tobacco");
    });

    it("handles missing optional metadata fields gracefully", () => {
      expect(item.metadata.abstract).toBe("");
      expect(item.metadata.notes).toBe("");
      expect(item.metadata.languages).toBe("");
    });
  });
});

describe("ItemModel - Image - Multiple Capture", () => {
  const uuid = "d6799d40-c0bf-0139-b046-0242ac110004";

  let item: ItemModel;

  beforeEach(() => {
    item = new ItemModel(uuid, multiImageCaptureManifest);
  });

  describe("Non-Manifest/Metadata related fields", () => {
    it("sets the correct UUID", () => {
      expect(item.uuid).toBe(uuid);
    });
    it("generates the correct link and manifestURL", () => {
      const env = process.env.APP_ENV || "";
      const baseLink =
        env === "development" || env === "qa"
          ? `https://qa-digitalcollections.nypl.org/items/${uuid}`
          : `https://digitalcollections.nypl.org/items/${uuid}`;

      expect(item.link).toBe(baseLink);
      expect(item.manifestURL).toContain(`/manifests/${uuid}`);
    });
  });

  describe("sets the correct Manifest-related fields", () => {
    it("sets hasItems correctly based on canvas presence", () => {
      expect(item.hasItems).toBe(true);
    });
    it("extracts a single image ID from canvas", () => {
      expect(item.imageIDs).toHaveLength(5);
      expect(item.imageIDs).toStrictEqual([
        "58317977",
        "58317978",
        "58317979",
        "58317980",
        "58317981",
      ]);
    });
  });

  describe("sets the correct metadata-related fields", () => {
    it("sets the correct Title", () => {
      expect(item.title).toBe("Print Block by José Guadalupe Posada");
      expect(item.metadata.title).toBe("Print Block by José Guadalupe Posada");
    });

    it("sets isRestricted to false based on metadata", () => {
      expect(item.isRestricted).toBe(false);
    });

    it("sets contentType to image and isImage to true", () => {
      expect(item.contentType).toBe("image");
      expect(item.isImage).toBe(true);
    });
  });
});

describe("ItemModel - Video - Single Capture", () => {
  const uuid = "d6799d40-c0bf-0139-b046-0242ac110004";

  let item: ItemModel;

  beforeEach(() => {
    item = new ItemModel(uuid, singleVideoCaptureManifest);
  });

  describe("sets the correct Manifest-related fields", () => {
    it("sets hasItems correctly based on canvas presence", () => {
      expect(item.hasItems).toBe(true);
    });
    it("does not extracts image ID from canvas", () => {
      expect(item.imageIDs).toBe(null);
    });
  });

  describe("sets the correct metadata-related fields", () => {
    it("sets contentType to video and isImage to false", () => {
      expect(item.contentType).toBe("video");
      expect(item.isImage).toBe(false);
    });
    it("sets archivesLink and catalogLink correctly", () => {
      expect(item.archivesLink).toBe(null);
      expect(item.catalogLink).toBe(
        "https://www.nypl.org/research/research-catalog/bib/b19942863"
      );
    });
  });
});

describe("ItemModel - Video - Missing Captures", () => {
  const uuid = "0b850640-e377-0130-8565-3c075448cc4b";

  let item: ItemModel;

  beforeEach(() => {
    item = new ItemModel(uuid, missingMediaVideoCaptureManifest);
  });

  describe("sets the correct Manifest-related fields", () => {
    it("sets hasItems correctly based on canvas presence", () => {
      expect(item.hasItems).toBe(false);
    });
    it("does not extracts image ID from canvas", () => {
      expect(item.imageIDs).toBe(null);
    });
  });

  describe("sets the correct metadata-related fields", () => {
    it("sets contentType to video and isImage to false", () => {
      expect(item.contentType).toBe("video");
      expect(item.isImage).toBe(false);
    });
    it("sets archivesLink and catalogLink correctly", () => {
      expect(item.archivesLink).toBe(null);
      expect(item.catalogLink).toBe(
        "https://www.nypl.org/research/research-catalog/bib/b19807132"
      );
    });
  });
});

describe("ItemModel - Audio - Single Capture", () => {
  const uuid = "1df2df50-c32b-0133-e4e8-60f81dd2b63c";

  let item: ItemModel;

  beforeEach(() => {
    item = new ItemModel(uuid, singleAudioCaptureManifest);
  });

  describe("sets the correct Manifest-related fields", () => {
    it("sets hasItems correctly based on canvas presence", () => {
      expect(item.hasItems).toBe(true);
    });
    it("does not extract image ID from canvas", () => {
      expect(item.imageIDs).toBe(null);
    });
  });

  describe("sets the correct metadata-related fields", () => {
    it("sets contentType to video and isImage to false", () => {
      expect(item.contentType).toBe("audio");
      expect(item.isImage).toBe(false);
    });
    it("sets archivesLink and catalogLink correctly", () => {
      expect(item.archivesLink).toBe(null);
      expect(item.catalogLink).toBe(
        "https://www.nypl.org/research/research-catalog/bib/b22235863"
      );
    });
  });
});

describe("ItemModel - Restricted", () => {
  const uuid = "794fcf20-b822-0133-7afc-60f81dd2b63c";

  let item: ItemModel;

  beforeEach(() => {
    item = new ItemModel(uuid, restrictedManifest);
  });

  describe("sets the correct metadata-related fields", () => {
    it("sets isRestricted to true based on metadata", () => {
      expect(item.isRestricted).toBe(true);
    });

    it("sets DivisionLink correctly for restricted Items", () => {
      expect(item.divisionLink).toBe(
        "<span><a href='https://www.nypl.org/locations/schwarzman/manuscripts-division'>Manuscripts and Archives Division</a></span>"
      );
    });
  });
});

/* TODO: 
find example with Archives (bnumber) link
possibly refine DivsionLink logic
*/
