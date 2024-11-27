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
    collections: [
      {
        uuid: "string",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
        numberOfDigitizedItems: "number",
        containsOnSiteMaterials: "boolean",
        containsAVMaterial: "boolean",
      },
      {
        uuid: "string",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
        numberOfDigitizedItems: "number",
        containsOnSiteMaterials: "boolean",
        containsAVMaterial: "boolean",
      },
      {
        uuid: "string",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
        numberOfDigitizedItems: "number",
        containsOnSiteMaterials: "boolean",
        containsAVMaterial: "boolean",
      },
    ],
    items: [
      {
        uuid: "string",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
        containsMultipleImages: "booleam",
      },
      {
        uuid: "string",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
        containsMultipleImages: "booleam",
      },
      {
        uuid: "string",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
        containsMultipleImages: "booleam",
      },
    ],
  },
};

export default searchSchema;
