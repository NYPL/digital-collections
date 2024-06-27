export class ItemModel {
  uuid: string;
  mods: object;
  capture: object;
  typeOfResource: string;
  title: string;
  isPDF: boolean;
  isBook: boolean;
  isSingleCapture: boolean;

  constructor(data: any) {
    this.uuid = data.nyplAPI.request.uuid;
    this.mods = data.nyplAPI.response.mods;
    this.capture = data.nyplAPI.response.capture;
    this.typeOfResource = data.nyplAPI.response.mods.typeOfResource.$;
    this.title = data.nyplAPI.response.mods.titleInfo.title
      ? data.nyplAPI.response.mods.titleInfo.title.$
      : data.nyplAPI.response.mods.titleInfo[0].title.$;
    this.isSingleCapture = data.nyplAPI.response.numResults.$ == 1;
    // this.isBook = data.nyplAPI.response.mods.genre[0].$ === "Books"
    // console.log("flatten: ", data.nyplAPI.response.mods.genre?.flat())
    // this.isPDF = (data.nyplAPI.response.mods.genreincludes("Oral histories") && data.nyplAPI.response.mods.publisher?.includes("American Jewish Committee, Oral History Library")) ? true : false
  }
}
