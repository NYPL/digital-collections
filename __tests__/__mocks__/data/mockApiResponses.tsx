export const mockFeaturedItemResponse = {
  headers: { status: "success", code: "200", message: "ok" },
  numResults: "1",
  capture: {
    uuid: "510d47d9-7c7c-a3d9-e040-e00a18064a99",
    imageLinks: { imageLink: [Array] },
    apiUri:
      "http://api.repo.nypl.org/api/v2/items/mods/510d47d9-7c7c-a3d9-e040-e00a18064a99",
    typeOfResource: "still image",
    imageID: "54795",
    sortString: "0000000001|0000000011|0000000430|0000000001",
    itemLink:
      "http://digitalcollections.nypl.org/items/510d47d9-7c7c-a3d9-e040-e00a18064a99",
    highResLink: "https://link.nypl.org/3iIRPl9YEd2naebMmVbNCAA",
    title: "View of High Bridge and the Harlem River",
    dateDigitized: "2015-10-14T12:02:36Z",
    rightsStatement:
      'The New York Public Library believes that this item is in the public domain under the laws of the United States, but did not make a determination as to its copyright status under the copyright laws of other countries. This item may not be in the public domain under the laws of other countries. Though not required, if you want to credit us as the source, please use the following statement, "From The New York Public Library," and provide a link back to the item on our Digital Collections site. Doing so helps us track how our collection is used and helps justify freely releasing even more content in the future.',
    rightsStatementURI: "http://rightsstatements.org/vocab/NoC-US/1.0/",
  },
};

export const mockItemResponse = {
  headers: {
    status: { $: "success" },
    code: { $: "200" },
    message: { $: "ok" },
  },
  mods: {
    version: "3.4",
    schemaLocation:
      "http://www.loc.gov/mods/v3 http://www.loc.gov/standards/mods/v3/mods-3-4.xsd",
    titleInfo: {
      type: "",
      authority: "",
      usage: "primary",
      lang: "",
      script: "",
      title: [Object],
      subTitle: [Object],
    },
    name: [[Object], [Object]],
    typeOfResource: { usage: "primary", $: "still image" },
    genre: {
      authority: "lctgm",
      valueURI: "http://id.loc.gov/vocabulary/graphicMaterials/tgm008237",
      $: "Prints",
    },
    originInfo: { dateCreated: [Object], edition: [Object] },
    physicalDescription: { form: [Array], extent: [Object], note: [Object] },
    identifier: [[Object], [Object], [Object], [Object]],
    location: { physicalLocation: [Array], shelfLocator: [Object] },
    accessCondition: { type: "copyright notice", $: "© Sanford Biggers" },
  },
  numResults: { $: "2" },
  capture: [
    {
      uuid: [Object],
      apiUri: [Object],
      typeOfResource: [Object],
      imageID: [Object],
      sortString: [Object],
      itemLink: [Object],
      orderInSequence: [Object],
      isPartOfSequence: [Object],
      totalInSequence: [Object],
      title: [Object],
      rightsStatement: [Object],
      rightsStatementURI: [Object],
    },
    {
      uuid: [Object],
      apiUri: [Object],
      typeOfResource: [Object],
      imageID: [Object],
      sortString: [Object],
      itemLink: [Object],
      orderInSequence: [Object],
      isPartOfSequence: [Object],
      totalInSequence: [Object],
      title: [Object],
      rightsStatement: [Object],
      rightsStatementURI: [Object],
    },
  ],
};
