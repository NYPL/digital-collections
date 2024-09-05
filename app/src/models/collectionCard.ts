// import { CollectionCardData } from "app/types/Collection";
import { imageURL } from "../utils/utils";
import { stringToSlug } from "../utils/utils";
import { parseBoolean } from "../utils/utils";
// TODO: Connect to typescript interface for CollectionCardData
export class CollectionCardModel {
  uuid: string;
  title: string;
  url: string;
  imageID: string | null;
  imageURL: string;
  numberOfDigitizedItems: number;
  containsOnSiteMaterials: boolean;

  constructor(data: any) {
    this.uuid = data.uuid;
    this.title = data.title;
    this.url =
      process.env.APP_ENV === "development"
        ? `/collections/${stringToSlug(data.title)}`
        : data.url;
    this.imageID = data.image_id;
    // this.imageURL = imageURL(data.image_id, "full", "288,", "0");
    // this.numItems = data.numItems || 0;
    this.url = data.url;
    this.imageID = data.imageID;
    this.imageURL = imageURL(data.imageID, "full", "288,", "0");
    this.numberOfDigitizedItems =
      data.numberOfDigitizedItems || data.numItems || 0;
    this.containsOnSiteMaterials =
      parseBoolean(data.containsOnSiteMaterials) || false;
  }
}
