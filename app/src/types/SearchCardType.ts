export type SearchResultRecordType = "collection" | "sub-collection" | "item";
export type SearchResultContentType = "image" | "audio" | "video" | "pdf";
export interface SearchCardType {
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
  highlights: string[];
  firstIndexed: string;
}

export default SearchCardType;
