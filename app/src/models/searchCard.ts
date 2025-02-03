import {
  SearchResultContentType,
  SearchResultHighlightType,
  SearchResultRecordType,
} from "../types/SearchCardType";
import { imageURL, formatHighlightText, capitalize } from "../utils/utils";

export class SearchCardModel {
  title: string;
  uuid: string;
  url: string;
  imageID: string;
  imageURL: string;
  recordType: SearchResultRecordType;
  numberOfDigitizedItems: number;
  containsOnSiteMaterial: boolean;
  containsAVMaterial: boolean;
  containsMultipleCaptures?: boolean;
  contentType: SearchResultContentType;
  highlights: SearchResultHighlightType;
  firstIndexed: string;

  constructor(data: any) {
    this.title = data.title;
    this.uuid = data.uuid;
    this.url =
      data.recordType === "item"
        ? `/items/${data.uuid}`
        : `/collections/${data.uuid}`;
    this.recordType = capitalize(data.recordType) as SearchResultRecordType;
    this.imageID = data.imageID;
    this.imageURL = imageURL(data.imageID, "square", "!288,288", "0");
    this.numberOfDigitizedItems = data.numberOfDigitizedItems;
    this.containsOnSiteMaterial = data.containsOnSiteMaterial;
    this.containsAVMaterial = data.containsAVMaterial;
    this.containsMultipleCaptures = data.containsMultipleCaptures;
    this.contentType = data.contentType
      ? (capitalize(data.contentType) as SearchResultContentType)
      : null;
    this.highlights = formatHighlightText(data.highlights);
    this.firstIndexed = data.firstIndexed_dt;
  }
}
