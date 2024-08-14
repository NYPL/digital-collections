import CollectionDataType from "../CollectionDataType";

export interface SwimLanesProps {
  numColumns: number;
  lanesWithNumItems: {
    slug: string;
    title: string;
    rank: number;
    collections: CollectionDataType[];
  }[];
}
