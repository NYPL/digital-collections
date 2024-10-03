import LaneDataType from "@/src/types/Lane";
import { mockCollections } from "./mockCollections";

export const mockCollectionLanes = {
  lanesWithNumItems: [
    {
      name: "Test collections 1",
      slug: "test-collections-1",
      rank: 0,
      collections: mockCollections.slice(0, 4),
    },
    {
      name: "Test collections 2",
      slug: "test-collections-2",
      rank: 1,
      collections: mockCollections.slice(4),
    },
  ] as LaneDataType[],
};
