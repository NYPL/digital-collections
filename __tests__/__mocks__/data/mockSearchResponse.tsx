export const mockSearchResponse = {
  keyword: "in",
  numResults: 4,
  page: 1,
  perPage: 48,
  results: [
    {
      uuid: "60932400-20f2-0138-8583-05c43d448773",
      recordType: "collection",
      title: "Posada Collection",
      imageID: "58270299",
      numberOfDigitizedItems: 34,
      containsOnSiteMaterial: true,
      containsAVMaterial: false,
      contentType: "image",
      highlights: {
        mainTitle_st: [
          "Christopher Walken examples in the stage production example Kid Champion",
        ],
      },
      firstIndexed_dt: "1907-01-01T00:00:00Z",
    },
    {
      uuid: "50370c90-cabb-013c-da64-0242ac110002",
      recordType: "item",
      title: "Sarah Myers Blackwell sitting in a tree",
      imageID: "58886955",
      numberOfDigitizedItems: 1,
      containsOnSiteMaterial: false,
      containsAVMaterial: false, // keeping bc the logic exists and it's already there
      containsMultipleCaptures: false, // used to determine whether or not an item should display the "multiple images" tag
      contentType: "image",
      highlights: {
        mainTitle_st: ["Sarah example sitting in tree"],
      },
      firstIndexed_dt: "1907-02-01T00:00:00Z",
    },
    {
      uuid: "e5462600-c5d9-012f-a6a3-58d385a7bc34",
      recordType: "sub-collection",
      title: "Farm Security Administration Photographs",
      imageID: "1952272",
      numberOfDigitizedItems: 36,
      containsOnSiteMaterial: false,
      containsAVMaterial: false,
      contentType: null,
      highlights: {
        mainTitle_st: ["Farm in example photographs"],
      },
      firstIndexed_dt: "1907-02-01T00:00:00Z",
    },
    {
      uuid: "12563fb0-63a2-013b-bd44-0242ac110003",
      recordType: "item",
      title:
        "Reading room of the Schomburg Collection at the 135th Street Branch Library. Lawrence Reddick, curator, seated at right",
      imageID: "58886955",
      numberOfDigitizedItems: 1,
      containsOnSiteMaterial: false,
      containsAVMaterial: false,
      containsMultipleCaptures: true,
      contentType: "image",
      highlights: {
        mainTitle_st: ["Reading in example room"],
      },
      firstIndexed_dt: "1908-02-01T00:00:00Z",
    },
  ],
};
