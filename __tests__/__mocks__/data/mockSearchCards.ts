import type { SearchCardType } from "@/src/types/SearchCardType";

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
    recordType: "Collection",
    containsAVMaterial: false,
    contentType: null,
    highlights: [
      {
        field: "note",
        text: "Christopher Walken <em>examples</em> <em>in</em> the stage production example Kid Champion",
      },
    ],
    firstIndexed: "1907-01-01T00:00:00Z",
  },
  {
    uuid: "50370c90-cabb-013c-da64-0242ac110002",
    title: "Sarah Myers Blackwell sitting in a tree",
    url: "https://digitalcollections.nypl.org/items/50370c90-cabb-013c-da64-0242ac110002",
    imageID: "58886955",
    imageURL:
      "https://iiif.nypl.org/iiif/2/58886955/square/!288,288/0/default.jpg",
    numberOfDigitizedItems: 1,
    containsOnSiteMaterial: false,
    recordType: "Item",
    containsAVMaterial: false,
    containsMultipleCaptures: false,
    contentType: "Image",
    highlights: [
      {
        field: "collection",
        text: "Sarah <em>example</em> sitting <em>in</em> tree",
      },
    ],
    firstIndexed: "1907-02-01T00:00:00Z",
  },
  {
    uuid: "e5462600-c5d9-012f-a6a3-58d385a7bc34",
    title: "Farm Security Administration example photographs",
    url: "https://digitalcollections.nypl.org/collections/farm-security-administration-photographs#/?tab=navigation",
    imageID: "1952272",
    imageURL:
      "https://iiif.nypl.org/iiif/2/1952272/square/!288,288/0/default.jpg",
    numberOfDigitizedItems: 36,
    containsOnSiteMaterial: false,
    recordType: "Collection",
    containsAVMaterial: true,
    contentType: null,
    highlights: [
      {
        field: "description",
        text: "Farm <em>in</em> <em>example</em> photographs",
      },
    ],
    firstIndexed: "1907-02-01T00:00:00Z",
  },
  {
    uuid: "12563fb0-63a2-013b-bd44-0242ac110003",
    title: "Reading in example room",
    imageID: "58613608",
    url: "https://digitalcollections.nypl.org/items/12563fb0-63a2-013b-bd44-0242ac110003",
    imageURL:
      "https://iiif.nypl.org/iiif/2/58613608/square/!288,288/0/default.jpg",
    recordType: "Item",
    numberOfDigitizedItems: 1,
    containsOnSiteMaterial: true,
    containsAVMaterial: false,
    containsMultipleCaptures: true,
    contentType: "Image",
    highlights: [
      { field: "Title", text: "Reading <em>in</em> <em>example</em> room" },
      { field: "Note", text: "Reading <em>example</em> room" },
    ],
    firstIndexed: "1908-02-01T00:00:00Z",
  },
];
