export class CollectionModel {
  title: string;
  uuid: string;
  abstract?: string;
  accessCondition?: string[];
  mssID?: string;
  bNumbers?: string[];
  contentNote?: string[];
  dateCaptured: string;
  dateCreated: string;
  dateIssued: string;
  dateOther: string;
  displayNames?: string[];
  divisionSlug?: string;
  divisionTitle?: string;
  edition?: string;
  extent?: string;
  form?: string;
  genres?: string[];
  languages?: string[];
  names?: [
    {
      name: string;
      roles: string[];
    },
  ];
  place?: string;
  shelfLocators?: string[];
  tableOfContents?: string[];
  topics?: string[];
  typeOfResource?: string[];
  yearBegin?: number;
  yearEnd?: number;

  constructor(data: any) {
    this.title = data.title;
    this.uuid = data.uuid;
    this.abstract = data.abstract;
    this.accessCondition = data.accessCondition;
    this.mssID = data.mssID;
    this.bNumbers = data.bnumber?.split(" ");
    this.contentNote = data.contentNote;
    this.dateCaptured = data.dateCaptured;
    this.dateCreated = data.dateCreated;
    this.dateIssued = data.dateIssued;
    this.dateOther = data.dateother;
    this.displayNames = data.displayNames;
    this.divisionSlug = data.divisionSlug;
    this.divisionTitle = data.divisionTitle;
    this.edition = data.edition;
    this.extent = data.extent;
    this.form = data.form;
    this.genres = data.genres;
    this.languages = data.languages;
    this.names = data.names;
    this.place = data.place;
    this.shelfLocators = data.shelfLocators;
    this.tableOfContents = data.tableOfContents;
    this.topics = data.topics;
    this.typeOfResource = data.typeOfResource;
    this.yearBegin = data.yearBegin;
    this.yearEnd = data.yearEnd;
  }
}
