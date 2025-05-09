// collections/:uuid
export const collectionsUUIDSchema = {
  title: "string",
  uuid: "string",
  abstract: "string",
  accessCondition: ["string"],
  archivesCollectionID: "string", // MSS ID, to be used in a archives.nypl.org url
  bNumber: "string", // to be used in a nypl.org/research/research-catalog/bib/ url
  contentNote: ["string"],
  dateCaptured: "string",
  dateCreated: "string",
  dateIssued: "string",
  dateother: "string",
  displayNames: ["string"],
  divisionSlug: "string",
  divisionTitle: "string",
  edition: "string",
  extent: "string",
  form: "string",
  genres: ["string"],
  languages: ["string"],
  names: [
    {
      name: "string",
      roles: ["string"],
    },
  ],
  place: "string",
  shelfLocator: "string",
  tableOfContents: ["string"],
  topics: ["string"],
  typeOfResource: ["string"],
  yearBegin: "integer",
  yearEnd: "integer",
};

export default collectionsUUIDSchema;
