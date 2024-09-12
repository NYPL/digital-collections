// import { CollectionCardData } from "app/types/Collection";
import { imageURL } from "../utils/utils";

// TODO: Connect to typescript interface for CollectionCardData
export class CollectionCardModel {
  uuid: string;
  title: string;
  url: string;
  imageID: string | null;
  imageURL: string;
  numItems: number;
  containsOnSiteMaterials: boolean;

  constructor(data: any) {
    this.uuid = data.uuid;
    this.title = data.title;
    this.url = data.url;
    this.imageID = data.image_id;
    this.imageURL = imageURL(data.image_id, "full", "288,", "0");
    this.numItems = data.numItems || 0;
    this.containsOnSiteMaterials = data.containsOnSiteMaterials || false;
  }
}
