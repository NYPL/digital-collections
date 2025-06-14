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

// manifest url is:  http://localhost:8000/manifests/35052480-c6ef-012f-261d-58d385a7bc34
// apiUrl is:  http://localhost:8000/manifests/35052480-c6ef-012f-261d-58d385a7bc34
// manifest.metadata is:  [
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } }
// ]
// manifestMetadataArray is:  [
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } },
//   { label: { en: [Array] }, value: { en: [Array] } }
// ]
// rawManifestMetadata is:  {
//   Collection: [
//     "<span><a href='http://qa-digitalcollections.nypl.org/collections/32282f70-c6ef-012f-63c0-58d385a7bc34'>Minchô shiken</a></span>"
//   ],
//   Identifiers: [
//     '<span><b>Universal Unique Identifier (UUID):</b> 35052480-c6ef-012f-261d-58d385a7bc34</span>'
//   ],
//   'Dates / Origin': [
//     "<span>Date Issued <a href='http://qa-digitalcollections.nypl.org/search/index?filters=[yearBegin=1746][yearEnd=1746]'>1746</a></span>",
//     "<span>Place: <a href='http://qa-digitalcollections.nypl.org/search/index?filters=[place=Osaka]'>Osaka</a></span>"
//   ],
//   'Library Locations': [
//     "<span><a href='http://qa-digitalcollections.nypl.org/divisions/spencer-collection'>Spencer Collection</a></span>",
//     'Shelf locator: Sorimachi 409'
//   ],
//   Title: [ 'Sorimachi 409' ],
//   Division: [
//     "<span><a href='https://www.nypl.org/locations/schwarzman/wallach-division/spencer-collection'>Spencer Collection</a></span>"
//   ],
//   Place: [ 'Osaka' ],
//   Genres: [
//     "<span><a href='http://qa-digitalcollections.nypl.org/search/index?filters=%5Bgenre%3DIllustrations%5D'>Illustrations</a></span>",
//     "<span><a href='http://qa-digitalcollections.nypl.org/search/index?filters=%5Bgenre%3DBotanical+illustrations%5D'>Botanical Illustrations</a></span>"
//   ],
//   'Resource Type': [
//     "<span><a href='http://qa-digitalcollections.nypl.org/search/index?filters=%5Btype%3Dtext%5D'>Text</a></span>",
//     "<span><a href='http://qa-digitalcollections.nypl.org/search/index?filters=%5Btype%3Dstill+image%5D'>Still Image</a></span>"
//   ],
//   Language: [
//     "<span><a href='http://qa-digitalcollections.nypl.org/search/index?filters=%5Blanguage%3DJapanese%5D'>Japanese</a></span>"
//   ],
//   Rights: [
//     'The New York Public Library believes that this item is in the public domain under the laws of the United States, but did not make a determination as to its copyright status under the copyright laws of other countries. This item may not be in the public domain under the laws of other countries. Though not required, if you want to credit us as the source, please use the following statement, "From The New York Public Library," and provide a link back to the item on our Digital Collections site. Doing so helps us track how our collection is used and helps justify freely releasing even more content in the future.'
//   ],
//   'Is Restricted': [ 'False' ],
//   'Content Type': [ 'image' ]
// }
// normalizedManifestMetadata is:  {
//   title: 'Sorimachi 409',
//   collection: "<span><a href='http://qa-digitalcollections.nypl.org/collections/32282f70-c6ef-012f-63c0-58d385a7bc34'>Minchô shiken</a></span>",
//   names: '',
//   origin: '',
//   dateIssued: '',
//   tableOfContents: '',
//   locations: "<span><a href='http://qa-digitalcollections.nypl.org/divisions/spencer-collection'>Spencer Collection</a></span><br>Shelf locator: Sorimachi 409",
//   subjects: '',
//   genres: "<span><a href='http://qa-digitalcollections.nypl.org/search/index?filters=%5Bgenre%3DIllustrations%5D'>Illustrations</a></span><br><span><a href='http://qa-digitalcollections.nypl.org/search/index?filters=%5Bgenre%3DBotanical+illustrations%5D'>Botanical Illustrations</a></span>",
//   notes: '',
//   physicalDescription: '',
//   typeOfResource: "<span><a href='http://qa-digitalcollections.nypl.org/search/index?filters=%5Btype%3Dtext%5D'>Text</a></span><br><span><a href='http://qa-digitalcollections.nypl.org/search/index?filters=%5Btype%3Dstill+image%5D'>Still Image</a></span>",
//   abstract: '',
//   languages: '',
//   link: '',
//   identifiers: '<span><b>Universal Unique Identifier (UUID):</b> 35052480-c6ef-012f-261d-58d385a7bc34</span>',
//   access: '',
//   rights: 'The New York Public Library believes that this item is in the public domain under the laws of the United States, but did not make a determination as to its copyright status under the copyright laws of other countries. This item may not be in the public domain under the laws of other countries. Though not required, if you want to credit us as the source, please use the following statement, "From The New York Public Library," and provide a link back to the item on our Digital Collections site. Doing so helps us track how our collection is used and helps justify freely releasing even more content in the future.'
// }
// renderableMetadata is:  {
//   title: 'Sorimachi 409',
//   collection: "<span><a href='http://qa-digitalcollections.nypl.org/collections/32282f70-c6ef-012f-63c0-58d385a7bc34'>Minchô shiken</a></span>",
//   locations: "<span><a href='http://qa-digitalcollections.nypl.org/divisions/spencer-collection'>Spencer Collection</a></span><br>Shelf locator: Sorimachi 409",
//   genres: "<span><a href='http://qa-digitalcollections.nypl.org/search/index?filters=%5Bgenre%3DIllustrations%5D'>Illustrations</a></span><br><span><a href='http://qa-digitalcollections.nypl.org/search/index?filters=%5Bgenre%3DBotanical+illustrations%5D'>Botanical Illustrations</a></span>",
//   identifiers: '<span><b>Universal Unique Identifier (UUID):</b> 35052480-c6ef-012f-261d-58d385a7bc34</span>',
//   rights: 'The New York Public Library believes that this item is in the public domain under the laws of the United States, but did not make a determination as to its copyright status under the copyright laws of other countries. This item may not be in the public domain under the laws of other countries. Though not required, if you want to credit us as the source, please use the following statement, "From The New York Public Library," and provide a link back to the item on our Digital Collections site. Doing so helps us track how our collection is used and helps justify freely releasing even more content in the future.',
//   typeOfResource: "<span><a href='http://qa-digitalcollections.nypl.org/search/index?filters=%5Btype%3Dtext%5D'>Text</a></span><br><span><a href='http://qa-digitalcollections.nypl.org/search/index?filters=%5Btype%3Dstill+image%5D'>Still Image</a></span>"
// }
