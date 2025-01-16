const searchSchema = {
  response: {
    headers: {
      status: "200",
      code: "200",
      message: "some copy",
    },
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
        recordType: "collection | sub-collection",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
        numberOfDigitizedItems: "number",
        containsOnSiteMaterials: "boolean",
        highlights: "{ highlighted_field_name:[ string ] }",
        firstIndexed_dt: "date",
      },
      {
        uuid: "string",
        recordType: "item",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
        contentType: "image | multiple images | audio | video | pdf",
        onSiteOnly: "boolean",
        highlights: "{ highlighted_field_name:[ string ] }",
        firstIndexed_dt: "date",
      },
      {
        uuid: "string",
        recordType: "collection | sub-collection",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
        numberOfDigitizedItems: "number",
        containsOnSiteMaterials: "boolean",
        highlights: "{ highlighted_field_name:[ string ] }",
        firstIndexed_dt: "date",
      },
      {
        uuid: "string",
        recordType: "item",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
        contentType: "image | multiple images | audio | video | pdf",
        onSiteOnly: "boolean",
        highlights: "{ highlighted_field_name:[ string ] }",
        firstIndexed_dt: "date",
      },
    ],
  },
};

export default searchSchema;
