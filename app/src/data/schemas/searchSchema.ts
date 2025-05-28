const searchSchema = {
  // Keyword
  keyword: "string",
  // Pagination fields
  numResults: "integer",
  page: "integer",
  perPage: "integer",
  // Filters:
  // Sort is default relevance
  sort: "string ie: title-desc",
  // The 3 fields below return null if not applied/requested
  rightsFilter: "publicDomain | availableOnline | onSiteMaterial",
  dateStart: "integer ie: 1800",
  dateEnd: "integer ie: 1900",
  // All filters always returned, empty if there are no available options
  availableFilters: {
    topic: [
      {
        name: "string",
        count: "integer",
        selected: "boolean",
      },
    ],
    name: [],
    collection: [],
    subcollection: [],
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
      recordType: "Collection | Item",
      title: "string",
      partName: "string",
      imageID: "string | null",
      numberOfDigitizedItems: "number",
      containsOnSiteMaterial: "boolean",
      containsAVMaterial: "boolean",
      containsMultipleCaptures: "boolean",
      contentType: "(image | audio | video) [] | null",
      highlights: { highlighted_field_name: ["string"] },
      firstIndexed_dt: "date",
      score: "number",
      typeOfResource: "string[] | null",
    },
  ],
};

export default searchSchema;
