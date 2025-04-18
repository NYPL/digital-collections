export type SearchResultRecordType = "Collection" | "Item";
export type SearchResultContentType = "Image" | "Audio" | "Video" | null;
export type SearchResultHighlightType = { field: string; text: string }[];

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
  highlights: SearchResultHighlightType;
  firstIndexed: string;
}

export default SearchCardType;
