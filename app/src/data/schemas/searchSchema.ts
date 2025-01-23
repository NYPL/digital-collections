const searchSchema = {
  response: {
    // Keyword included in search
    keyword: "string",
    // Pagination fields
    numResults: "integer",
    page: "integer",
    perPage: "integer",
    // Sort fields
    sort: "string ie: title DESC",
    // Filter fields
    filterField: "string", // copy subject to change
    // Results
    results: [
      {
        uuid: "string",
        recordType: "collection | sub-collection | item",
        title: "string",
        url: "string", // probably don't need?
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
        url: "string", // probably don't need?
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
        url: "string", // probably don't need?
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
  },
};

export default searchSchema;
