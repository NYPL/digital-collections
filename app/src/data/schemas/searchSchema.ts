const searchSchema = {
  // Keyword
  keyword: "string",
  // Pagination fields
  numResults: "integer",
  page: "integer",
  perPage: "integer",
  // Filters:
  // The 4 fields below would not be returned if not requested
  sort: "string ie: title-desc",
  rightsFilter: "publicDomain | availableOnline | onSiteMaterial",
  dateStart: "integer ie: 1800",
  dateEnd: "integer ie: 1900",
  // All filters always returned, empty if there are no available options
  availableFilters: {
    topic: [
      {
        name: "string",
        count: "integer",
      },
    ],
    name: [],
    collection: [],
    genre: [],
    place: [],
    publisher: [],
    division: [],
    type: [],
  },
  // Results
  results: [
    {
      uuid: "string",
      recordType: "collection | item",
      title: "string",
      imageID: "string | null",
      numberOfDigitizedItems: "number",
      containsOnSiteMaterial: "boolean",
      containsAVMaterial: "boolean", // keeping bc the logic exists and it's already there
      containsMultipleCaptures: "boolean", // used to determine whether or not an item should display the "multiple images" tag,
      // ^^ will only be returned on item
      contentType: "image | audio | video | pdf | null", // null
      highlights: { highlighted_field_name: ["string"] },
      firstIndexed_dt: "date",
    },
    {
      uuid: "string",
      recordType: "collection | item",
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
      recordType: "collection | item",
      title: "string",
      imageID: "string | null",
      numberOfDigitizedItems: "number",
      containsOnSiteMaterial: "boolean",
      containsAVMaterial: "boolean", // keeping bc the logic exists and it's already there
      containsMultipleCaptures: "boolean", // used to determine whether or not an item should display the "multiple images" tag
      contentType: "image | audio | video | null", // null
      highlights: { highlighted_field_name: ["string"] },
      firstIndexed_dt: "date",
    },
  ],
};

export default searchSchema;
