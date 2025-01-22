const resultObject = {
  uuid: "string",
  recordType: "collection | sub-collection | item",
  title: "string",
  url: "string", // probably don't need?
  imageID: "string | null",
  numberOfDigitizedItems: "number",
  containsOnSiteMaterial: "boolean",
  containsAVMaterial: "boolean", // keeping bc the logic exists and it's already there
  containsMultipleCaptures: "boolean", // used to determine whether or not an item should display the "multiple images" tag
  contentType: "image | audio | video | pdf | null", // null
  highlights: "{ highlighted_field_name:[ string ] }",
  firstIndexed_dt: "date",
};

export default resultObject;
