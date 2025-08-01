export interface CollectionCardDataType {
  uuid: string;
  title: string;
  url: string;
  imageID: string | null;
  imageURL: string;
  numberOfDigitizedItems: number;
  containsOnSiteMaterial: boolean;
}

export default CollectionCardDataType;
