const collectionsSchema = {
  // Keyword included in search
  keyword: "string",
  // Pagination fields
  numResults: "integer",
  page: "integer",
  perPage: "integer",
  // Sort fields
  sort: "string ie: title DESC",
  // move from "collection" to "collections"
  collections: [
    {
      title: "string",
      uuid: "string",
      imageID: "string | null",
      numberOfDigitizedItems: "integer", // remove numItems
      containsAVMaterial: "boolean",
      containsOnSiteMaterial: "boolean",
      firstIndexed: "datetime",
    },
    {
      title: "string",
      uuid: "string",
      imageID: "string | null",
      numberOfDigitizedItems: "integer", // remove numItems
      containsAVMaterial: "boolean",
      containsOnSiteMaterial: "boolean",
      firstIndexed: "datetime",
    },
    {
      title: "string",
      uuid: "string",
      imageID: "string | null",
      numberOfDigitizedItems: "integer", // remove numItems
      containsAVMaterial: "boolean",
      containsOnSiteMaterial: "boolean",
      firstIndexed: "datetime",
    },
    {
      title: "string",
      uuid: "string",
      imageID: "string | null",
      numberOfDigitizedItems: "integer", // remove numItems
      containsAVMaterial: "boolean",
      containsOnSiteMaterial: "boolean",
      firstIndexed: "datetime",
    },
  ],
};

export default collectionsSchema;
