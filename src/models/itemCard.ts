import { imageURL } from "src/utils/utils";

export class ItemCardModel {
  uuid: string;
  title: string;
  url: string;
  imageID: string;
  imageURL: string;

  constructor(data: any) {
    this.uuid = data.uuid;
    this.title = data.title;
    this.url = data.url;
    this.imageID = data.image_id;
    this.imageURL = imageURL(data.image_id, "full", "288,", "0");
  }
}
