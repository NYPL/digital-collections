export type SearchResultRecordType = "Collection" | "Sub-collection" | "Item";
export type SearchResultContentType = "Image" | "Audio" | "Video" | "PDF";
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
