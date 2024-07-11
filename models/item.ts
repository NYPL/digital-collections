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
    const {
      nyplAPI: { request, response },
    } = data;
    this.uuid = request.uuid;
    this.mods = response.mods;
    this.capture = response.capture;
    this.typeOfResource = response.mods.typeOfResource.$;
    this.title = response.mods.titleInfo.title
      ? response.mods.titleInfo.title.$
      : response.mods.titleInfo[0].title.$;
    this.isSingleCapture = response.numResults.$ == 1;
  }
}
