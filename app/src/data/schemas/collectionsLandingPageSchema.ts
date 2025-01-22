const collectionsLandingPageSchema = {
  response: {
    numResults: "integer",
    page: "integer",
    perPage: "integer",
    items: [
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

export default collectionsLandingPageSchema;
