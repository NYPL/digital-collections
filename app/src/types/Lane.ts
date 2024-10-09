import CollectionDataType from "./CollectionDataType";
export interface LaneDataType {
  name: string;
  slug: string;
  rank: number;
  collections: CollectionDataType[];
}

export default LaneDataType;
