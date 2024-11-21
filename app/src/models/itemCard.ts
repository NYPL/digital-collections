import { imageURL } from "../utils/utils";

export class ItemCardModel {
  title: string;
  uuid: string;
  url: string;
  imageID: string;
  imageURL: string;

  constructor(data: any) {
    this.uuid = data.uuid;
    this.title = data.title;
    this.url = `https://digitalcollections.nypl.org/items/${data.uuid}`;
    this.imageID = data.imageID;
    this.imageURL = imageURL(data.imageID, "full", "288,", "0");
  }
}
