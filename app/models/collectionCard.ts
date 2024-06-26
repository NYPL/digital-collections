// import { CollectionCardData } from "app/types/Collection";
import { imageURL } from "app/utils/utils";

// TO DO: Connect to typescript interface for CollectionCardData
export class CollectionCardModel {
  uuid: string;
  title: string;
  url: string;
  image_id: string;
  imageURL: string;
  numItems: string;

  constructor(data: any) {
    this.uuid = data.uuid;
    this.title = data.title;
    this.url = data.url;
    this.imageURL = imageURL(data.image_id, "full", "288,", "0");
    this.numItems = data.numItems || 0;
  }
}
