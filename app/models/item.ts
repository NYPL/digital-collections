export class ItemModel {
  uuid: string;
  mods: any;
  capture: any;
  typeOfResource: string;
  title: string;
  isPDF: boolean;
  isBook: boolean;
  isSingleCapture: boolean;

  constructor(data: any) {
    this.uuid = data.nyplAPI.request.uuid;
    this.mods = data.nyplAPI.response.mods;
    this.capture = data.nyplAPI.response.capture;
    console.log("this.capture is: ", data.nyplAPI.response.capture);
    this.typeOfResource = data.nyplAPI.response.mods.typeOfResource.$;
    this.title = data.nyplAPI.response.mods.titleInfo.title
      ? data.nyplAPI.response.mods.titleInfo.title.$
      : data.nyplAPI.response.mods.titleInfo[0].title.$;
    this.isSingleCapture = data.nyplAPI.response.numResults.$ == 1;
  }
}
