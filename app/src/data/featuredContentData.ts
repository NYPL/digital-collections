import { FeaturedContentDataType } from "../types/FeaturedContentDataType";

const featuredContentData: FeaturedContentDataType[] = [
  {
    heading: "Spotlight on the public domain",
    overline: "Featured",
    text: "The New York Public Library recently enhanced access to all public domain items in Digital Collections so that everyone has the freedom to enjoy and reuse these materials in almost limitless ways.",
    link: "https://www.nypl.org/research/resources/public-domain-collections",
    buttonText: "Learn more",
    buttonId: "featured-learn-more",
    ariaLabel: "Learn more about the public domain",
    imgSrc: "/pd_banner.png",
    imgAlt: "Public Domain banner",
  },
  {
    heading: "Digital Collections print store",
    overline: "Featured",
    text: "Decorative prints for purchase: choose from archival prints, framed art, stretched canvas, vintage wood, and wall murals.",
    link: "https://nypl.artehouse.com/perl/home.pl",
    buttonText: "Visit Store",
    buttonId: "featured-visit-store",
    ariaLabel: "Visit the Digital Collections print store",
    imgSrc: "/service-artehouse.jpg",
    imgAlt: "Service Artehouse banner",
  },
  {
    heading: "Digital Exhibitions",
    overline: "Featured",
    text: "A New Correct Map of the Trading Part of the West Indies: A Digital exhibitions built with Storiiies using our IIIF resources",
    link: "/exhibitions/A-new-correct-map-of-the-trading-part-of-the-West-Indies",
    buttonText: "Visit",
    buttonId: "featured-visit-exhibition",
    ariaLabel: "Visit the Digital Collections print store",
    imgSrc: "https://iiif.nypl.org/iiif/2/434512/full/693,/0/default.jpg",
    imgAlt: "Service Artehouse banner",
  },
];

export default featuredContentData;
