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

  constructor(data: any) {
    this.uuid = data.capture.uuid;
    this.mods = data.mods;
    this.capture = data.capture;
    this.typeOfResource = data.mods.typeOfResource.$;
    this.title = data.mods.titleInfo.title
      ? data.mods.titleInfo.title.$
      : data.mods.titleInfo[0].title.$;
    this.isSingleCapture = data.numResults.$ == 1;
    this.imageID = data.imageID;
    this.href = data.href;
  }
}
