import { ItemModel } from "./ItemModel"; // adjust path as needed
import { Maniiifest } from "maniiifest";
//general items
import missingMetadataItemCaptureManifest from "../__mocks__/data/collectionsApi/manifests/item/missing_metadata.json";
import restrictedItemCaptureManifest from "../__mocks__/data/collectionsApi/manifests/item/restricted.json";
//images
import singleImageCaptureManifest from "../__mocks__/data/collectionsApi/manifests/item/image/single_capture.json";
import multiImageCaptureManifest from "../__mocks__/data/collectionsApi/manifests/item/image/multiple_capture.json";
//audio
import singleAudioCaptureManifest from "../__mocks__/data/collectionsApi/manifests/item/audio/single_capture.json";
import multiAudioCaptureManifest from "../__mocks__/data/collectionsApi/manifests/item/audio/multiple_capture.json";
import missingMediaAudioCaptureManifest from "../__mocks__/data/collectionsApi/manifests/item/audio/missing_media.json";
//video
//note: no multi video capture manifest bc we allegedly don't have Items that have multiple video captures
import singleVideoCaptureManifest from "../__mocks__/data/collectionsApi/manifests/item/video/single_capture.json";
import missingMediaVideoCaptureManifest from "../__mocks__/data/collectionsApi/manifests/item/video/missing_media.json";

describe("ItemModel - Single Image Capture", () => {
  const uuid = "a9c43f00-c600-012f-59c3-58d385a7bc34";

  let item: ItemModel;
  //   uuid: string;
  // mods: any;
  // capture: any;
  // typeOfResource: string;
  // title: string;
  // isSingleCapture: boolean;
  // imageIDs?: string[];
  // href: string;
  // contentType: string;
  // hasItems?: boolean;
  // manifestURL: string;
  // link: string;
  // isRestricted: boolean;
  // isImage: boolean;
  // archivesLink?: string | null | undefined;
  // catalogLink?: string | null | undefined;
  // divisionLink: string;
  beforeEach(() => {
    item = new ItemModel(uuid, singleImageCaptureManifest);
  });

  it("sets the correct UUID and title", () => {
    expect(item.uuid).toBe(uuid);
    expect(item.title).toBe("A smoking club");
  });

  it("sets hasItems correctly based on canvas presence", () => {
    expect(item.hasItems).toBe(true);
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

  describe("sets the correct metadata fields", () => {
    // title: string;
    // names?: string;
    // collection?: string;
    // origin: string;
    // dateCreated?: string;
    // dateIssued: string;
    // tableOfContents?: string;
    // locations: string;
    // subjects?: string;
    // genres: string;
    // notes?: string;
    // physicalDescription?: string;
    // abstract?: string;
    // languages: string;
    // link?: string;
    // identifiers: string;
    // access: string;
    // rights: string;
    // typeOfResource: string;
    it("sets the correct Title", () => {
      expect(item.metadata.title).toBe("A smoking club");
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

  it("extracts a single image ID from canvas", () => {
    expect(item.imageIDs).toHaveLength(1);
    expect(item.imageIDs?.[0]).toBe("1107651");
    expect(item.isSingleCapture).toBe(true);
  });

  it("sets isRestricted to false based on metadata", () => {
    expect(item.isRestricted).toBe(false);
  });

  it("sets contentType to image and isImage to true", () => {
    expect(item.contentType).toBe("image");
    expect(item.isImage).toBe(true);
  });
});
