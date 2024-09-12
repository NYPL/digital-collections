export interface CollectionCardDataType {
  uuid: string;
  title: string;
  url: string;
  imageID: string | null;
  imageURL: string;
  numItems: number;
  containsOnSiteMaterials: boolean;
}

export default CollectionCardDataType;
