// import { CollectionCardData } from "app/types/Collection";
import { imageURL } from "src/utils/utils";

// TODO: Connect to typescript interface for CollectionCardData
export class CollectionCardModel {
  uuid: string;
  title: string;
  url: string;
  imageID: string;
  imageURL: string;
  numItems: number;

  constructor(data: any) {
    this.uuid = data.uuid;
    this.title = data.title;
    this.url = data.url;
    this.imageID = data.image_id;
    this.imageURL = imageURL(data.image_id, "full", "288,", "0");
    this.numItems = data.numItems || 0;
  }
}
