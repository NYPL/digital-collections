import { imageURL } from "../../../app/src/utils/utils";
import { mockCollectionLanes } from "./mockCollectionLanes";

export const mockHomePageMainContent = {
  collectionLaneData: {
    lanesWithNumItems: mockCollectionLanes.lanesWithNumItems,
    randomNumber: 1,
  },
  featuredItemData: {
    featuredItem: {
      imageID: "5273165",
      imageSrc: imageURL("5273165"),
      uuid: "3a2cced0-12ca-0133-7a6d-58d385a7bbd0",
      title: "Latona Giving Birth to Apollo and Diana on the Island of Delos",
      href: `https://qa-digitalcollections.nypl.org/items/3a2cced0-12ca-0133-7a6d-58d385a7bbd0`,
    },
    numberOfDigitizedItems: "863,848",
  },
};
