export interface SearchCardType {
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
}

export default SearchCardType;
