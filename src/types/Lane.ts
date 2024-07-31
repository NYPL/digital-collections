import { CollectionCardDataType } from "./CollectionCardDataType";

export interface LaneDataType {
  title: String;
  slug: String;
  rank: number;
  collections: CollectionCardDataType[];
}

export default LaneDataType;
