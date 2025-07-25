import type {
  SearchResultContentType,
  SearchResultHighlightType,
  SearchResultRecordType,
} from "../types/SearchCardType";
import type { AvailableFilterOption } from "../types/AvailableFilterType";
import {
  imageURL,
  formatHighlightText,
  capitalize,
  getRecordType,
  getCollectionFilterFromUUID,
} from "../utils/utils";

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
    this.recordType = capitalize(data.recordType) as SearchResultRecordType;
    this.imageID = data.imageID;
    this.url =
      this.recordType === "Item"
        ? `/items/${data.uuid}`
        : `/collections/${data.uuid}`;

    this.imageURL = imageURL(data.imageID, "square", "!288,288", "0");
    this.numberOfDigitizedItems = data.numberOfDigitizedItems;
    this.containsOnSiteMaterial = data.containsOnSiteMaterial;
    this.containsAVMaterial = data.containsAVMaterial;
    this.containsMultipleCaptures = data.containsMultipleCaptures;
    this.contentType = data.contentType
      ? (capitalize(data.contentType[0]) as SearchResultContentType)
      : null;
    this.highlights =
      Object.keys(data.highlights).length > 0
        ? formatHighlightText(data.highlights)
        : [{ field: "", text: "" }];
    this.firstIndexed = data.firstIndexed_dt;
  }
}
