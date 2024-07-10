import { CollectionCardData } from "./CollectionCard";

export interface LaneDataType {
  title: String;
  slug: String;
  rank: number;
  collections: CollectionCardData[];
}

export default LaneDataType;
