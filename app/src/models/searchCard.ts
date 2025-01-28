import { imageURL } from "../utils/utils";

export class SearchCardModel {
  title: string;
  uuid: string;
  url: string;
  imageID: string;
  imageURL: string;
  recordType: "collection" | "sub-collection" | "item";
  numberOfDigitizedItems: number;
  containsOnSiteMaterial: boolean;
  containsAVMaterial: boolean;
  containsMultipleCaptures?: boolean;
  contentType: "image" | "audio" | "video" | "pdf";
  highlights: string[];
  firstIndexed: string;

  constructor(data: any) {
    this.title = data.title;
    this.uuid = data.uuid;
    this.recordType = data.recordType;
    this.imageID = data.imageID;
    this.imageURL = imageURL(data.imageID, "square", "!288,288", "0");
    this.numberOfDigitizedItems = data.numberOfDigitizedItems;
    this.containsOnSiteMaterial = data.containsOnSiteMaterial;
    this.containsAVMaterial = data.containsAVMaterial;
    this.containsMultipleCaptures = data.containsMultipleCaptures;
    this.contentType = data.contentType;
    this.highlights = data.highlights;
    this.firstIndexed = data.firstIndexed_dt;
  }
}
