import SearchCardType from "@/src/types/SearchCardType";

export const mockSearchCards: SearchCardType[] = [
  {
    uuid: "60932400-20f2-0138-8583-05c43d448773",
    title: "Posada Collection",
    url: "https://digitalcollections.nypl.org/collections/posada-collection#/?tab=navigation",
    imageID: "58270299",
    imageURL:
      "https://iiif.nypl.org/iiif/2/58270299/square/!288,288/0/default.jpg",
    numberOfDigitizedItems: 34,
    containsOnSiteMaterial: true,
    recordType: "collection",
    containsAVMaterial: false,
    contentType: "image",
    highlights: [],
    firstIndexed: "1907-01-01T00:00:00Z",
  },
  {
    uuid: "50370c90-cabb-013c-da64-0242ac110002",
    title: "Sarah Myers Blackwell sitting in a tree",
    url: "https://digitalcollections.nypl.org/collections/posada-collection#/?tab=navigation",
    imageID: "58886955",
    imageURL:
      "https://iiif.nypl.org/iiif/2/58886955/square/!288,288/0/default.jpg",
    numberOfDigitizedItems: 1,
    containsOnSiteMaterial: false,
    recordType: "item",
    containsAVMaterial: false,
    contentType: "image",
    highlights: [],
    firstIndexed: "1907-02-01T00:00:00Z",
  },
];
