export const mockSearchResponse = {
  keyword: "example",
  numResults: 4,
  page: 1,
  perPage: 48,
  results: [
    {
      uuid: "string",
      recordType: "collection | sub-collection | item",
      title: "string",
      imageID: "string | null",
      numberOfDigitizedItems: "number",
      containsOnSiteMaterial: "boolean",
      containsAVMaterial: "boolean", // keeping bc the logic exists and it's already there
      containsMultipleCaptures: "boolean", // used to determine whether or not an item should display the "multiple images" tag,
      contentType: "image | audio | video | pdf | null", // null
      highlights: { highlighted_field_name: ["string"] },
      firstIndexed_dt: "date",
    },
    {
      uuid: "string",
      recordType: "collection | sub-collection | item",
      title: "string",
      imageID: "string | null",
      numberOfDigitizedItems: "number",
      containsOnSiteMaterial: "boolean",
      containsAVMaterial: "boolean", // keeping bc the logic exists and it's already there
      containsMultipleCaptures: "boolean", // used to determine whether or not an item should display the "multiple images" tag
      contentType: "image | audio | video | pdf | null", // null
      highlights: { highlighted_field_name: ["string"] },
      firstIndexed_dt: "date",
    },
    {
      uuid: "string",
      recordType: "collection | sub-collection | item",
      title: "string",
      imageID: "string | null",
      numberOfDigitizedItems: "number",
      containsOnSiteMaterial: "boolean",
      containsAVMaterial: "boolean", // keeping bc the logic exists and it's already there
      containsMultipleCaptures: "boolean", // used to determine whether or not an item should display the "multiple images" tag
      contentType: "image | audio | video | pdf | null", // null
      highlights: { highlighted_field_name: ["string"] },
      firstIndexed_dt: "date",
    },
  ],
};
