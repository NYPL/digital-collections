const collectionsLandingPageSchema = {
  response: {
    headers: {
      status: "200",
      code: "200",
      message: "some copy",
    },
    numResults: "6",
    page: "1",
    perPage: "40",
    items: [
      {
        uuid: "string",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
      },
      {
        uuid: "string",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
      },
      {
        uuid: "string",
        title: "string",
        url: "string",
        imageID: "string | null",
        imageURL: "string",
      },
    ],
  },
};

export default collectionsLandingPageSchema;
