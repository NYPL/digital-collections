export interface CollectionCardDataType {
  uuid: string;
  title: string;
  url: string;
  imageID: string | null;
  imageURL: string;
  numberOfDigitizedItems: number;
  containsOnSiteMaterials: boolean;
}

export default CollectionCardDataType;
