import CollectionDataType from "./CollectionDataType";

export interface LaneDataType {
  name: String;
  slug: String;
  rank: number;
  collections: CollectionDataType[];
}

export default LaneDataType;
