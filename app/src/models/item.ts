import { Maniiifest } from "maniiifest";
// https://github.com/jptmoore/maniiifest
import allMapsData from "../data/maps/allmaps";

// https://www.npmjs.com/package/@iiif/manifold
// https://github.com/iiif-commons/manifold
// other resources:
// https://www.npmjs.com/package/@iiif/manifold
// https://github.com/iiif-commons/manifold
import { CONTENT_TYPES } from "../config/constants";
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
  isInAllMaps: any;
  contentType: string;
  manifestURL: string;
  metadata?: {
    // Metadata fields
    /* Title */
    title?: string;
    // .mods.titleInfo.title
    /* Names */
    names?: string;
    // .mods.name
    /* collection */
    collection?: string;
    // .mods.relatedItem?
    /* Date/Origin */
    origin?: string;
    // .mods.originInfo
    /* Table of Contents */
    tableOfContents?: string;
    /* Library Locations */
    locations?: string;
    // .mods.location
    /* Subjects */
    subjects?: string;
    // .mods.subject
    /* Genres */
    genres?: string;
    // .mods.genre
    /* Notes */
    notes?: string;
    /* Physical Description */
    physicalDescription?: string;
    // .mods.physicalDescription
    /* Abstract */
    abstract?: string;
    /* Languages */
    languages?: string;
    // Link
    link?: string;
    /* Identifiers */
    identifiers?: string;
    // .mods.identifier
    /* Access */
    access?: string;
    /* Rights */
    rights?: string;
    // .cappture.rightsStatement
    typeOfResource?: string;
  };
  // metadata?: {
  //   // Metadata fields
  //   /* Title */
  //   title: string;
  //   // .mods.titleInfo.title
  //   /* Names */
  //   names?: string;
  //   // .mods.name
  //   /* Collection */
  //   collection?: string;
  //   // .mods.relatedItem?
  //   /* Date/Origin */
  //   origin: string;
  //   // .mods.originInfo
  //   /* Table of Contents */
  //   tableOfContents?: string;
  //   /* Library Locations */
  //   locations: string;
  //   // .mods.location
  //   /* Subjects */
  //   subjects?: string;
  //   // .mods.subject
  //   /* Genres */
  //   genres: string;
  //   // .mods.genre
  //   /* Notes */
  //   notes?: string;
  //   /* Physical Description */
  //   physicalDescription?: string;
  //   // .mods.physicalDescription
  //   /* Abstract */
  //   abstract?: string;
  //   /* Languages */
  //   languages: string;
  //   // Link
  //   link?: string;
  //   /* Identifiers */
  //   identifiers: string;
  //   // .mods.identifier
  //   /* Access */
  //   access: string;
  //   /* Rights */
  //   rights: string;
  //   // .cappture.rightsStatement
  //   typeOfResource: string;
  // };

  constructor(data: any, uuid: string, manifest: any) {
    // const parser = new Maniiifest(manifest);
    // const label = parser?.getManifestLabelByLanguage("en");
    // console.log(label?.["en"]);
    const isInAllMaps = () => {
      console.log(
        "isInAllMaps : ",
        allMapsData.find((obj) => obj.uuid === this.uuid)
      );
      return (
        this.typeOfResource === "cartographic" &&
        allMapsData.find((obj) => obj.uuid === this.uuid)
      );
    };

    // const manifestMetadataHash = {};
    // if (manifest) {
    //   const parser = new Maniiifest(manifest);
    //   const label = parser?.getManifestLabelByLanguage("en");
    //   const metadata = parser.iterateManifestMetadata();

    //   for (const field of metadata) {
    //     // console.log("with just parser.iterateManifest")
    //     const label = field.label["en"][0];
    //     const value = field.value["en"];
    //     manifestMetadataHash[label] = value;
    //   }
    // console.log("manifestMetadataHash is: ", manifestMetadataHash);

    // }

    // constructor(data: any, uuid: string, manifest: any) {
    const parser = new Maniiifest(manifest);
    const label = parser?.getManifestLabelByLanguage("en");
    const metadata = parser?.iterateManifestMetadata();
    const manifestMetadataHash = {};

    if (metadata) {
      for (const field of metadata) {
        // console.log("with just parser.iterateManifest")
        const label = field.label["en"][0];
        const value = field.value["en"];
        manifestMetadataHash[label] = value;
      }
    }

    console.log("manifestMetadataHash is: ", manifestMetadataHash);
    this.uuid = uuid; //data.uuid; //data.capture.uuid.$;
    this.mods = data.mods;
    this.capture = data.capture;
    /* Metadata fields: Types */
    this.typeOfResource = data.mods.typeOfResource.$
      ? data.mods.typeOfResource.$
      : data.mods.typeOfResource.find((obj) => obj.usage === "primary").$;
    console.log(
      "data.mods.typeOfResource.find((obj) => obj.usage === primary).$ is: ",
      data.mods.typeOfResource.find((obj) => obj.usage === "primary").$
    );
    /* Metadata fields: title */
    this.title = data.mods.titleInfo.title
      ? data.mods.titleInfo.title.$
      : data.mods.titleInfo[0].title.$;
    this.isSingleCapture = data.numResults.$ == 1;
    this.imageID = data.imageID;
    this.href = data.href;
    this.isInAllMaps = isInAllMaps();
    this.contentType = CONTENT_TYPES[this.typeOfResource];
    this.manifestURL = `https://qa-api-collections.nypl.org/manifests/${uuid}`;
    // `http://localhost:8000/manifests/${uuid}`;
    // `${process.env.collectionS_API_URL}/manifests/${uuid}`
    /*
    field labels from manifest metadata section are: 
    title
    collection
    Subjects
    Genres
    Rights
    "Date Indexed"
    "Library Location"
    'Resource Type'
    */

    // this.metadata = {
    //   title: manifestMetadataHash["Title"]
    //     ? manifestMetadataHash["Title"].toString()
    //     : this.title,
    //   collection: manifestMetadataHash["Collection"]
    //     ? manifestMetadataHash["Collection"].toString()
    //     : "",
    //   names: manifestMetadataHash["names"]
    //     ? manifestMetadataHash["names"].toString()
    //     : "",
    //   origin: manifestMetadataHash["Date Indexed"]
    //     ? manifestMetadataHash["Date Indexed"].toString()
    //     : "",
    //   tableOfContents: manifestMetadataHash["Table Of Contents"]
    //     ? manifestMetadataHash["Table Of Contents"].toString()
    //     : "",
    //   locations: manifestMetadataHash["Library Location"]
    //     ? manifestMetadataHash["Library Location"].toString()
    //     : "",
    //   subjects: manifestMetadataHash["Subjects"]
    //     ? manifestMetadataHash["Subjects"].toString()
    //     : "",
    //   genres: manifestMetadataHash["Genres"]
    //     ? manifestMetadataHash["Genres"].toString()
    //     : "",
    //   notes: manifestMetadataHash["Notes"]
    //     ? manifestMetadataHash["Notes"]?.toString().toString()
    //     : "",
    //   physicalDescription: manifestMetadataHash["Physical Description"]
    //     ? manifestMetadataHash["Physical Description"].toString()
    //     : "",
    //   typeOfResource: manifestMetadataHash["Resource Type"]
    //     ? manifestMetadataHash["Resource Type"].toString()
    //     : "",
    //   abstract: manifestMetadataHash["Abstract"]
    //     ? manifestMetadataHash["Abstract"].toString()
    //     : "",
    //   languages: manifestMetadataHash["Languages"]
    //     ? manifestMetadataHash["Lanugages"].toString()
    //     : "",
    //   link: manifestMetadataHash["Link"]
    //     ? manifestMetadataHash["Link"].toString()
    //     : "",
    //   identifiers: manifestMetadataHash["Identifiers"]
    //     ? manifestMetadataHash["Identifiers"].toString()
    //     : "",
    //   access: manifestMetadataHash["Access"]
    //     ? manifestMetadataHash["Access"].toString()
    //     : "",
    //   rights: manifestMetadataHash["Rights"]
    //     ? manifestMetadataHash["Rights"].toString()
    //     : this.typeOfResource,
    // };

    this.metadata = {
      title: manifestMetadataHash["title"]
        ? manifestMetadataHash["title"].toString()
        : "",
      collection: manifestMetadataHash["collection"]
        ? manifestMetadataHash["collection"].toString()
        : "",
      names: manifestMetadataHash["names"]
        ? manifestMetadataHash["names"].toString()
        : "",
      origin: manifestMetadataHash["date_indexed"]
        ? manifestMetadataHash["date_indexed"].toString()
        : "",
      tableOfContents: manifestMetadataHash["table_of_contents"]
        ? manifestMetadataHash["table_of_contents"].toString()
        : "",
      locations: manifestMetadataHash["library_location"]
        ? manifestMetadataHash["library_location"].toString()
        : "",
      subjects: manifestMetadataHash["subjects"]
        ? manifestMetadataHash["subjects"].toString()
        : "",
      genres: manifestMetadataHash["genres"]
        ? manifestMetadataHash["genres"].toString()
        : "",
      notes: manifestMetadataHash["notes"]
        ? manifestMetadataHash["notes"]?.toString().toString()
        : "",
      physicalDescription: manifestMetadataHash["physical_description"]
        ? manifestMetadataHash["physical_description"].toString()
        : "",
      typeOfResource: manifestMetadataHash["resource_type"]
        ? manifestMetadataHash["resource_type"].toString()
        : "",
      abstract: manifestMetadataHash["abstract"]
        ? manifestMetadataHash["abstract"].toString()
        : "",
      languages: manifestMetadataHash["languages"]
        ? manifestMetadataHash["lanugages"].toString()
        : "",
      link: manifestMetadataHash["link"]
        ? manifestMetadataHash["link"].toString()
        : "",
      identifiers: manifestMetadataHash["identifiers"]
        ? manifestMetadataHash["identifiers"].toString()
        : "",
      access: manifestMetadataHash["access"]
        ? manifestMetadataHash["access"].toString()
        : "",
      rights: manifestMetadataHash["rights"]
        ? manifestMetadataHash["rights"].toString()
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
