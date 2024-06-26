import { CollectionCardData } from "./CollectionCard";

export interface LaneData {
  title: String;
  slug: String;
  rank: number;
  collections: CollectionCardData[];
}

export default LaneData;
