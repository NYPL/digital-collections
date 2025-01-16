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
    filterField: "string",
    // Results
    results: [
      {
        uuid: "string",
        recordType: "collection | sub-collection | item",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
        numberOfDigitizedItems: "number",
        containsOnSiteMaterials: "boolean | null if type is `item`",
        contentType: "image | multiple images | audio | video | pdf | null",
        onSiteOnly:
          "boolean | null if type is `collection` or `sub-collection`",
        highlights: "{ highlighted_field_name:[ string ] }",
        firstIndexed_dt: "date",
      },
      {
        uuid: "string",
        recordType: "collection | sub-collection | item",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
        numberOfDigitizedItems: "number",
        containsOnSiteMaterials: "boolean | null if type is `item`",
        contentType: "image | multiple images | audio | video | pdf | null",
        onSiteOnly:
          "boolean | null if type is `collection` or `sub-collection`",
        highlights: "{ highlighted_field_name:[ string ] }",
        firstIndexed_dt: "date",
      },
      {
        uuid: "string",
        recordType: "collection | sub-collection | item",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
        numberOfDigitizedItems: "number",
        containsOnSiteMaterials: "boolean | null if type is `item`",
        contentType: "image | multiple images | audio | video | pdf | null",
        onSiteOnly:
          "boolean | null if type is `collection` or `sub-collection`",
        highlights: "{ highlighted_field_name:[ string ] }",
        firstIndexed_dt: "date",
      },
    ],
  },
};

export default searchSchema;
