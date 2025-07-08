import { imageURL } from "../utils/utils";

export class ItemCardModel {
  title: string;
  uuid: string;
  url: string;
  imageID: string;
  imageURL: string;
  canvasIndex?: number;

  constructor(data: any) {
    this.uuid = data.uuid;
    this.title = data.title;
    this.url = data.canvasIndex
      ? `/items/${data.uuid}?canvasIndex=${data.canvasIndex}`
      : `/items/${data.uuid}`;
    this.imageID = data.imageID;
    this.imageURL = imageURL(data.imageID, "square", "!288,288", "0");
  }
}
