import type {
  SearchResultContentType,
  SearchResultHighlightType,
  SearchResultRecordType,
} from "../types/SearchCardType";
import type {
  AvailableFilter,
  AvailableFilterOption,
} from "../types/AvailableFilterType";
import {
  imageURL,
  formatHighlightText,
  capitalize,
  getRecordTypeFromURINYPLLink,
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

  constructor(data: any, collectionFilters: AvailableFilter[]) {
    const recordType = getRecordTypeFromURINYPLLink(
      data.type
    ) as SearchResultRecordType;
    // const availableCollectionFilters = filters[]
    const correspondingCollectionFilter =
      recordType !== "Item"
        ? getCollectionFilterFromUUID(data.uuid, collectionFilters)
        : "";
    console.log(
      "correspondingCollectionFilter is: ",
      correspondingCollectionFilter
    );
    const queryParam = correspondingCollectionFilter
      ? `&Collection=${correspondingCollectionFilter}`
      : "";
    this.title = data.title;
    this.uuid = data.uuid;
    this.url =
      recordType === "Item"
        ? `/items/${data.uuid}`
        : `/collections/${data.uuid}${queryParam}`;
    // http://localhost:3000/collections/5cd94760-c52a-012f-bcd4-3c075448cc4b&Collection=[object%20Object]
    // : `/collections/${data.uuid}${queryParam}`;

    // TODO: comment this back in when recordType is added to the endpoint
    // data.recordType === "item"
    //   ? `/items/${data.uuid}`
    //   : `/collections/${data.uuid}`;

    this.recordType = getRecordTypeFromURINYPLLink(
      data.type
    ) as SearchResultRecordType;

    // TODO: comment this back in when recordType is added to the endpoint
    // this.recordType = capitalize(data.recordType) as SearchResultRecordType;
    this.imageID = data.imageID;
    this.imageURL = imageURL(data.imageID, "square", "!288,288", "0");
    this.numberOfDigitizedItems = data.numberOfDigitizedItems;
    this.containsOnSiteMaterial = data.containsOnSiteMaterial;
    this.containsAVMaterial = data.containsAVMaterial;
    this.containsMultipleCaptures = data.containsMultipleCaptures;
    this.contentType = data.contentType
      ? (capitalize(data.contentType) as SearchResultContentType)
      : null;
    this.highlights =
      Object.keys(data.highlights).length > 0
        ? formatHighlightText(data.highlights)
        : [{ field: "", text: "" }];
    this.firstIndexed = data.firstIndexed_dt;
  }
}
