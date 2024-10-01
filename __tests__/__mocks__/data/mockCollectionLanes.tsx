import { mockCollectionCards } from "./mockCollectionCards";

export const mockCollectionLanes = {
  lanesWithNumItems: [
    {
      name: "Test collections 1",
      slug: "test-collections-1",
      rank: 0,
      collections: mockCollectionCards.slice(0, 4),
    },
    {
      name: "Test collections 2",
      slug: "test-collections-2",
      rank: 1,
      collections: mockCollectionCards.slice(4),
    },
  ],
};
