export class ItemModel {
  uuid: string;
  mods: any;
  capture: any;
  typeOfResource: string;
  title: string;
  isPDF?: boolean;
  isBook?: boolean;
  isSingleCapture: boolean;
  imageID: string;
  href: string;

  constructor(data: any, uuid: string) {
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
  }
}

// // Metadata fields
// /* Title */
// .mods.titleInfo.title
// /* Names */
// .mods.name
// /* Collection */
// .mods.relatedItem?
// /* Date/Origin */
// .mods.originInfo
// /* Table of Contents */
// /* Library Locations */
//   .mods.location
// /* Subjects */
// .mods.subject
// /* Genres */
// .mods.genre
// /* Notes */
// /* Physical Description */
// .mods.physicalDescription
// /* Abstract */

// /* Languages */
// // Link

// /* Identifiers */
// .mods.identifier
// /* Access */
// /* Rights */
// .cappture.rightsStatement
