// /collections/:uuid
const collectionsUUIDSchema = {
  title: "string",
  uuid: "string",
  // for the below fields: if not returned, assuming there isn't one
  archivesCollectionID: "number", // MSS ID, to be used in a archives.nypl.org url
  bNumber: "number", // to be used in a nypl.org/research/research-catalog/bib/ url
  keyDate: "string",
  yearBegin: "datetime",
  divisionTitle: "string", // divisionFullName_mtxt_s
  divisionSlug: "string", // this will be manually pulled from database, slug for division
  shelfLocator: "string", // shelfLocator_mtxt_s
  genres: "string[]",
  topics: "string[]", //topic_mtxt_s
  typeOfResource: "string[]",
  contentNote: "string",
  abstract: "string",
  donorCredit: "string",
  // **AND ALL OTHER POSSIBLE METADATA FIELDS– WIP
};
export default collectionsUUIDSchema;
