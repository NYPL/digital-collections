import { imageURL } from "../utils/utils";
import { parseBoolean } from "../utils/utils";

export class CollectionCardModel {
  uuid: string;
  title: string;
  url: string;
  imageID: string | null;
  imageURL: string;
  numberOfDigitizedItems: number;
  containsOnSiteMaterial: boolean;

  constructor(data: any) {
    this.uuid = data.uuid;
    this.title = data.title;
    this.url = `/collections/${data.uuid}`;
    this.imageID = data.image_id || data.imageID;
    this.imageURL = imageURL(data.imageID, "square", "!288,288", "0");
    this.numberOfDigitizedItems =
      data.numberOfDigitizedItems || data.numItems || 0;
    this.containsOnSiteMaterial =
      parseBoolean(data.containsOnSiteMaterial) || false;
  }
}
