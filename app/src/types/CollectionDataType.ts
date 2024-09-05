export interface CollectionDataType {
  uuid: string;
  title: string;
  url: string;
  image_id: string | null;
  numItems: number;
  containsOnSiteMaterials: boolean;
}

export default CollectionDataType;
