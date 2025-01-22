const itemObject = {
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
};

export default itemObject;
