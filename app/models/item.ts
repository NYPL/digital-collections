import { imageURL } from "app/utils/utils";

// TO DO: Connect to typescript interface for CollectionCardData
export class ItemModel {
  mods: object;
  capture: object;
  typeOfResource: string;
  title: string;
  // uuid: string;
  // numResults: number;
  // image_id: string;
  // imageURL: string;

  constructor(data: any) {
    // this.imageURL = imageURL(data.image_id, "full", "288,", "0");
    this.mods = data.mods;
    this.capture = data.capture;
    this.typeOfResource = data.mods.typeOfResource.$;
    this.title = data.mods.titleInfo.title.$;
    // this.uuid = data.mods.;
    // this.numResults = number;
    // this.image_id = string;
    // this.imageURL = string;
  }
}
