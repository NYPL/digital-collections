const searchSchema = {
  // Sort fields
  // Filter fields
  // Keyword included in search
  response: {
    headers: {
      status: "200",
      code: "200",
      message: "some copy",
    },
    // Pagination fields
    numResults: "6",
    page: "1",
    perPage: "40",
    sort: "title DESC",
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
      },
    ],
  },
};

export default searchSchema;
