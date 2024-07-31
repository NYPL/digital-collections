import { SwimLanesProps } from "src/types/props/SwimLanesProps";
import { mockCollections } from "./mockCollections";

export const mockSwimLanes: SwimLanesProps = {
  numColumns: 4,
  lanesWithNumItems: [
    {
      title: "Test collections 1",
      slug: "test-collections-1",
      rank: 0,
      collections: mockCollections.slice(0, 4),
    },
    {
      title: "Test collections 2",
      slug: "test-collections-2",
      rank: 1,
      collections: mockCollections.slice(4),
    },
  ],
};
