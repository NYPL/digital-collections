export interface CollectionDataType {
  uuid: string;
  title: string;
  url: string;
  imageID: string | null;
  numberOfDigitizedItems: number;
  containsOnSiteMaterials: boolean | string;
  containsAVMaterial: boolean;
}

export default CollectionDataType;
