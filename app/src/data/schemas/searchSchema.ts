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
    // facets are an array of objects past in the request body
    filterByPublicDomain: "boolean",
    filterByAvailableOnline: "boolean",
    filterByOnSiteOnly: "boolean",
    facets: [
      {
        topic: {
          facet_counts: {
            facet_queries: {
              string: "integer",
            },
            facet_fields: {
              topic_mtxt_s: ["string", "integer", "string", "integer"],
            },
          },
        },
      },
      {
        name: {
          facet_counts: {
            facet_queries: {
              string: "integer",
            },
            facet_fields: {
              namePart_mtxt_s: ["string", "integer", "string", "integer"],
            },
          },
        },
      },
      {
        collection: {
          facet_counts: {
            facet_queries: {
              uuid: "integer",
            },
            facet_fields: {
              rootCollection_rootCollectionUUID_s: [
                "string||uuid",
                "integer",
                "string||uuid",
                "integer",
              ],
            },
          },
        },
      },
      {
        place: {
          facet_counts: {
            facet_queries: {
              string: "integer",
            },
            facet_fields: {
              placeTerm_mtxt_s: ["string", "integer", "string", "integer"],
            },
          },
        },
      },
      {
        genre: {
          facet_counts: {
            facet_queries: {
              string: "integer",
            },
            facet_fields: {
              genre_mtxt_s: ["string", "integer", "string", "integer"],
            },
          },
        },
      },
      {
        publisher: {
          facet_counts: {
            facet_queries: {
              string: "integer",
            },
            facet_fields: {
              publisher_mtxt_s: ["string", "integer", "string", "integer"],
            },
          },
        },
      },
      {
        division: {
          facet_counts: {
            facet_queries: {
              string: "integer",
            },
            facet_fields: {
              divisionFullname_mtxt_s: [
                "string",
                "integer",
                "string",
                "integer",
              ],
            },
          },
        },
      },
      {
        type: {
          facet_counts: {
            facet_queries: {
              string: "integer",
            },
            facet_fields: {
              typeOfResource_mtxt_s: ["string", "integer", "string", "integer"],
            },
          },
        },
      },
    ],
    // Results
    results: [
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
  },
};

export default searchSchema;
