import { Maniiifest } from "maniiifest";
// https://github.com/jptmoore/maniiifest
// other resources:
// https://www.npmjs.com/package/@iiif/manifold
// https://github.com/iiif-commons/manifold
import { CONTENT_TYPES } from "../config/constants";

import {
  getItemTitleFromRepoAPI,
  getTypeOfResourceFromRepoAPI,
  getContentType,
} from "../utils/utils";
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
  contentType: string;
  manifestURL: string;
  metadata?: {
    // Metadata fields
    /* title */
    title: string;
    // .mods.titleInfo.title
    /* Names */
    names?: string;
    // .mods.name
    /* collection */
    collection?: string;
    // .mods.relatedItem?
    /* Date/Origin */
    origin: string;
    dateCreated?: string;
    dateIssued: string;
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
    const metadata = Array.from(parser.iterateManifestMetadata());
    const manifestMetadataHash = {};

    if (metadata) {
      for (const field of metadata) {
        const label = field.label["en"][0];
        const value = field.value["en"];
        manifestMetadataHash[label] = value;
      }
    }

    console.log("manifestMetadataHash is: ", manifestMetadataHash);
    this.uuid = uuid; //data.uuid; //data.capture.uuid.$;
    // this.mods = data.mods;
    // this.capture = data.capture;
    /* Metadata fields: Types */
    (this.typeOfResource = manifestMetadataHash["Resource Type"]
      ? manifestMetadataHash["Resource Type"].toString()
      : ""),
      //getTypeOfResourceFromRepoAPI(data);
      /* Metadata fields: title */
      (this.title = manifestMetadataHash["Title"]
        ? manifestMetadataHash["Title"].toString()
        : ""), //getItemTitleFromRepoAPI(data);
      (this.isSingleCapture = data.numResults.$ == 1); //isSingleCapture
    // this.imageID = data.imageID;
    // this.href = data.href;
    // TO DO: What to do if there is more than one type present?
    this.contentType = getContentType(
      manifestMetadataHash["Content Type"].length > 0
        ? manifestMetadataHash["Content Type"][0]
        : manifestMetadataHash["Content Type"]
    ); //CONTENT_TYPES[this.typeOfResource];
    this.manifestURL = `http://localhost:8000/manifests/${uuid}`; //`https://qa-api-collections.nypl.org/manifests/${uuid}`;
    // TO DO: use ENV var ie. `${process.env.collectionS_API_URL}/manifests/${uuid}`
    // TO DO: add _isCartographic for map stuff
    this.metadata = {
      title: manifestMetadataHash["Title"]
        ? manifestMetadataHash["Title"].toString()
        : "",
      collection: manifestMetadataHash["Collection"]
        ? manifestMetadataHash["Collection"].toString()
        : "",
      names: manifestMetadataHash["Names"]
        ? manifestMetadataHash["Names"].toString()
        : "",
      origin: manifestMetadataHash["Dates / origin"]
        ? manifestMetadataHash["Dates / origin"].toString()
        : "",
      // dateCreated: manifestMetadataHash["Dates / origin"]
      //   ? manifestMetadataHash["Dates / origin"].toString()
      //   : "",
      dateIssued: manifestMetadataHash["Date Issued"]
        ? manifestMetadataHash["Date Issued"].toString()
        : "",
      tableOfContents: manifestMetadataHash["Table of Contents"]
        ? manifestMetadataHash["Table of Contents"].toString()
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
"title": "maintitle",
"Names": "name_mtxt",
"collection": "rootcollection_s",
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
