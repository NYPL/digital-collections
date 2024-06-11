import { collectionData } from "./Collection";
import { CollectionCardData } from "./CollectionCard";
export interface laneData {
  title: String;
  slug: String;
  rank: number;
  collections: [collectionData];
}

export default laneData;
