import CollectionDataType from "../CollectionDataType";

export interface SwimLanesProps {
  lanesWithNumItems: {
    slug: string;
    title: string;
    rank: number;
    collections: CollectionDataType[];
  }[];
}
