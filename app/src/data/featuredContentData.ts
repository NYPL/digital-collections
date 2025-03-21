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
];

export default featuredContentData;
