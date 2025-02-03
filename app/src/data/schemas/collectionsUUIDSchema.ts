const collectionsUUIDSchema = {
  title: "string",
  uuid: "string",
  // for the below fields: if not returned, assuming there isn't one
  archivesCollectionID: "number", //MSS ID, to be used in a archives.nypl.org url
  bNumber: "number", //to be used in a nypl.org/research/research-catalog/bib/ url
  keyDate: "string",
  yearBegin: "datetime",
  divisionTitle: "string", //divisionFullName
  divisionSlug: "string", //divisionShortName - this will be manually pulled from database, slug for division
  shelfLocator: "string", //shelfLocator_mtxt_s (NYPL cleaned off)
  genres: "string[]",
  topics: "string[]", //topic_mtxt_s
  typeOfResource: "string[]",
  //identifiers: "string[]" (need to go through DC to see which ones we return beyond bNumber, MSS ID, and uuid)
  contentNote: "string",

  // related resources???
  // collection history???
  // description: slugs, short description, and long description only in DC database (like CMS), not in MMS
  // maybe in MMS abstract in the mods?

  // COLLECTION STRUCTURE
  // currently, it's at least the title on every subcollection
  // it's the number of results when you hit /subcollections
};

export default collectionsUUIDSchema;
