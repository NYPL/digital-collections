import { FeaturedItemData } from "../types/FeaturedItemData";
type Environment = "development" | "qa" | "production";

const defaultFeaturedItem: Record<Environment, FeaturedItemData> = {
  development: {
    featuredItem: {
      imageID: "482815",
      backgroundImageSrc: "/482815.jpg",
      foregroundImageSrc: "/482815.jpg",
      uuid: "510d47d9-4f93-a3d9-e040-e00a18064a99",
      title: "Watuppa, From water front, Brooklyn",
      href: "https://qa-digitalcollections.nypl.org/items/510d47d9-4f93-a3d9-e040-e00a18064a99",
    },
    numberOfDigitizedItems: "875,861",
  },
  qa: {
    featuredItem: {
      imageID: "482815",
      backgroundImageSrc: "/482815.jpg",
      foregroundImageSrc: "/482815.jpg",
      uuid: "510d47d9-4f93-a3d9-e040-e00a18064a99",
      title: "Watuppa, From water front, Brooklyn",
      href: "https://qa-digitalcollections.nypl.org/items/510d47d9-4f93-a3d9-e040-e00a18064a99",
    },
    numberOfDigitizedItems: "875,861",
  },
  production: {
    featuredItem: {
      imageID: "482815",
      backgroundImageSrc: "/482815.jpg",
      foregroundImageSrc: "/482815.jpg",
      uuid: "510d47d9-4f93-a3d9-e040-e00a18064a99",
      title: "Watuppa, From water front, Brooklyn",
      href: "https://digitalcollections.nypl.org/items/510d47d9-4f93-a3d9-e040-e00a18064a99",
    },
    numberOfDigitizedItems: "875,861",
  },
};

export default defaultFeaturedItem;
