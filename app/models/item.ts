export class ItemModel {
  uuid: string;
  mods: object;
  capture: object;
  typeOfResource: string;
  title: string;
  isPDF: boolean;
  isBook: boolean;

  constructor(data: any) {
    this.uuid = data.nyplAPI.request.uuid;
    this.mods = data.nyplAPI.response.mods;
    this.capture = data.nyplAPI.response.capture;
    this.typeOfResource = data.nyplAPI.response.mods.typeOfResource.$;
    this.title = data.nyplAPI.response.mods.titleInfo.title
      ? data.nyplAPI.response.mods.titleInfo.title.$
      : data.nyplAPI.response.mods.titleInfo[0].title.$;
    // this.isBook = data.nyplAPI.response.mods.genre[0].$ == "Books"
    // this.isPDF = (data.nyplAPI.response.mods.genre.includes("Oral histories") && data.nyplAPI.response.mods.publisher.includes("American Jewish Committee, Oral History Library")) ? true : false
  }
}
