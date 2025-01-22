const collectionsSchema = {
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
    // move from "collection" to "collections"
    collections: [
      {
        title: "string",
        uuid: "string",
        url: "string",
        imageID: "string",
        numberOfDigitizedItems: "string", // remove numItems
        containsAVMaterial: "boolean",
        containsOnSiteMaterial: "boolean",
      },
      {
        title: "string",
        uuid: "string",
        url: "string",
        imageID: "string",
        numberOfDigitizedItems: "string", // remove numItems
        containsAVMaterial: "boolean",
        containsOnSiteMaterial: "boolean",
      },
      {
        title: "string",
        uuid: "string",
        url: "string",
        imageID: "string",
        numberOfDigitizedItems: "string", // remove numItems
        containsAVMaterial: "boolean",
        containsOnSiteMaterial: "boolean",
      },
      {
        title: "string",
        uuid: "string",
        url: "string",
        imageID: "string",
        numberOfDigitizedItems: "string", // remove numItems
        containsAVMaterial: "boolean",
        containsOnSiteMaterial: "boolean",
      },
    ],
  },
};

export default collectionsSchema;
