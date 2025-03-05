import { Maniiifest } from "maniiifest";
// https://github.com/jptmoore/maniiifest

// https://www.npmjs.com/package/@iiif/manifold
// https://github.com/iiif-commons/manifold
export class ItemModel {
  uuid: string;
  mods: any;
  capture: any;
  typeOfResource: string;
  title: string;
  // isPDF?: boolean;
  // isBook?: boolean;
  isSingleCapture: boolean;
  imageID: string;
  href: string;
  metadata?: {
    // Metadata fields
    /* Title */
    title: string;
    // .mods.titleInfo.title
    /* Names */
    names?: string;
    // .mods.name
    /* Collection */
    collection?: string;
    // .mods.relatedItem?
    /* Date/Origin */
    origin: string;
    // .mods.originInfo
    /* Table of Contents */
    tableOfContents?: string;
    /* Library Locations */
    locations: string;
    // .mods.location
    /* Subjects */
    subjects?: string;
    // .mods.subject
    /* Genres */
    genres: string;
    // .mods.genre
    /* Notes */
    notes?: string;
    /* Physical Description */
    physicalDescription?: string;
    // .mods.physicalDescription
    /* Abstract */
    abstract?: string;
    /* Languages */
    languages: string;
    // Link
    link?: string;
    /* Identifiers */
    identifiers: string;
    // .mods.identifier
    /* Access */
    access: string;
    /* Rights */
    rights: string;
    // .cappture.rightsStatement
    typeOfResource: string;
  };

  constructor(data: any, uuid: string, manifest: any) {
    const parser = new Maniiifest(manifest);
    const label = parser?.getManifestLabelByLanguage("en");
    const metadata = parser.iterateManifestMetadata();
    const manifestMetadataHash = {};

    for (const field of metadata) {
      // console.log("with just parser.iterateManifest")
      const label = field.label["en"][0];
      const value = field.value["en"];
      manifestMetadataHash[label] = value;
    }
    console.log("manifestMetadataHash is: ", manifestMetadataHash);

    this.uuid = uuid; //data.uuid; //data.capture.uuid.$;
    this.mods = data.mods;
    this.capture = data.capture;
    /* Metadata fields: Types */
    this.typeOfResource = data.mods.typeOfResource.$;
    /* Metadata fields: Title */
    this.title = data.mods.titleInfo.title
      ? data.mods.titleInfo.title.$
      : data.mods.titleInfo[0].title.$;
    this.isSingleCapture = data.numResults.$ == 1;
    this.imageID = data.imageID;
    this.href = data.href;

    /*
    field labels from manifest metadata section are: 
    Title
    Collection
    Subjects
    Genres
    Rights
    "Date Indexed"
    "Library Location"
    'Resource Type'
    */

    this.metadata = {
      title: manifestMetadataHash["Title"]
        ? manifestMetadataHash["Title"].toString()
        : "",
      collection: manifestMetadataHash["Collection"]
        ? manifestMetadataHash["Collection"].toString()
        : "",
      names: manifestMetadataHash["names"]
        ? manifestMetadataHash["names"].toString()
        : "",
      origin: manifestMetadataHash["Date Indexed"]
        ? manifestMetadataHash["Date Indexed"].toString()
        : "",
      tableOfContents: manifestMetadataHash["Table Of Contents"]
        ? manifestMetadataHash["Table Of Contents"].toString()
        : "",
      locations: manifestMetadataHash["Library Location"]
        ? manifestMetadataHash["Library Location"].toString()
        : "",
      subjects: manifestMetadataHash["Subjects"]
        ? manifestMetadataHash["Subjects"].toString()
        : "",
      genres: manifestMetadataHash["Genres"]
        ? manifestMetadataHash["Genres"].toString()
        : "",
      notes: manifestMetadataHash["Notes"]
        ? manifestMetadataHash["Notes"]?.toString().toString()
        : "",
      physicalDescription: manifestMetadataHash["Physical Description"]
        ? manifestMetadataHash["Physical Description"].toString()
        : "",
      typeOfResource: manifestMetadataHash["Resource Type"]
        ? manifestMetadataHash["Resource Type"].toString()
        : "",
      abstract: manifestMetadataHash["Abstract"]
        ? manifestMetadataHash["Abstract"].toString()
        : "",
      languages: manifestMetadataHash["Languages"]
        ? manifestMetadataHash["Lanugages"].toString()
        : "",
      link: manifestMetadataHash["Link"]
        ? manifestMetadataHash["Link"].toString()
        : "",
      identifiers: manifestMetadataHash["Identifiers"]
        ? manifestMetadataHash["Identifiers"].toString()
        : "",
      access: manifestMetadataHash["Access"]
        ? manifestMetadataHash["Access"].toString()
        : "",
      rights: manifestMetadataHash["Rights"]
        ? manifestMetadataHash["Rights"].toString()
        : "",
    };
  }
}
/*
"Title": "mainTitle",
"Names": "name_mtxt",
"Collection": "rootCollection_s",
"Date Indexed": "dateIndexed_dt",
"Date Captured": "datecaptured_mtxt",
"Copyright Date": "copyrightDate_mtxt",
"Date (Other)": "dateOther_mtxt_s",
"Place": "placeTerm_mtxt_s",
"Edition": "edition_mtxt_s",
"Table Of Contents": "tableOfContents_mtxt",
"Library Location": "physicalLocation_mtxt",
"Subjects": "topic_mtxt_s",
"Genres": "genre_mtxt",
"Notes": "note_mtxt",
"Resource Type": "typeOfResource_mtxt",
"Abstract": "abstract_mtxt",
"Languages": "language_mtxt_s",
"Access": "accessCondition_mtxt",
"Rights": "rights_st",

"Identifier - NYPL MSS ID": "identifier_local_mss",
"Identifier - NYPL Catalog Record ID": "identifier_local_bnumber",
"Identifier - Exhibition ID": "identifier_local_exhibition",
"Identifier - NYP": "identifier_local_catnyp",
"Identifier - Archives EAD ID": "identifier_local_archives_ead"
*/
