import { Maniiifest } from "maniiifest";

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
  };

  constructor(data: any, uuid: string, manifest: any) {
    const parser = new Maniiifest(manifest);
    const label = parser?.getManifestLabelByLanguage("en");
    console.log(label?.["en"]);

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
    // this.metadata = {
    //   title: label?.['en'][0];
    //   names: ;
    // }
  }
}
