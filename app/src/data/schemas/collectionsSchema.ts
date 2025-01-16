const collectionsSchema = {
  response: {
    numResults: "6",
    page: "1",
    perPage: "40",
    // move from "collection" to "collections"
    collections: [
      {
        title: "string",
        uuid: "string",
        url: "string",
        imageID: "string",
        numberOfDigitizedItems: "string", // remove numItems
        containsAVMaterial: "boolean",
        constainsOnSiteMaterials: "boolean",
      },
      {
        title: "string",
        uuid: "string",
        url: "string",
        imageID: "string",
        numberOfDigitizedItems: "string",
        containsAVMaterial: "boolean",
        constainsOnSiteMaterials: "boolean",
      },
      {
        title: "string",
        uuid: "string",
        url: "string",
        imageID: "string",
        numberOfDigitizedItems: "string",
        containsAVMaterial: "boolean",
        constainsOnSiteMaterials: "boolean",
      },
      {
        title: "string",
        uuid: "string",
        url: "string",
        imageID: "string",
        numberOfDigitizedItems: "string",
        containsAVMaterial: "boolean",
        constainsOnSiteMaterials: "boolean",
      },
    ],
  },
};

export default collectionsSchema;
