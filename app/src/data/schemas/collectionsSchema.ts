const collectionsSchema = {
  response: {
    numResults: "integer",
    page: "integer",
    perPage: "integer",
    // move from "collection" to "collections"
    collections: [
      {
        title: "string",
        uuid: "string",
        url: "string",
        imageID: "string",
        numberOfDigitizedItems: "string", // remove numItems
        containsAVMaterial: "boolean",
        containsOnSiteMaterials: "boolean",
      },
      {
        title: "string",
        uuid: "string",
        url: "string",
        imageID: "string",
        numberOfDigitizedItems: "string",
        containsAVMaterial: "boolean",
        containsOnSiteMaterials: "boolean",
      },
      {
        title: "string",
        uuid: "string",
        url: "string",
        imageID: "string",
        numberOfDigitizedItems: "string",
        containsAVMaterial: "boolean",
        containsOnSiteMaterials: "boolean",
      },
      {
        title: "string",
        uuid: "string",
        url: "string",
        imageID: "string",
        numberOfDigitizedItems: "string",
        containsAVMaterial: "boolean",
        containsOnSiteMaterials: "boolean",
      },
    ],
  },
};

export default collectionsSchema;
