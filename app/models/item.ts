import { imageURL } from "app/utils/utils";

// TO DO: Connect to typescript interface for CollectionCardData
export class ItemModel {
  mods: object;
  capture: object;
  typeOfResource: string;
  title: string;

  constructor(data: any) {
    this.mods = data.mods;
    this.capture = data.capture;
    this.typeOfResource = data.mods.typeOfResource.$;
    this.title = data.mods.titleInfo.title
      ? data.mods.titleInfo.title.$
      : data.mods.titleInfo[0].title.$;
  }
}
