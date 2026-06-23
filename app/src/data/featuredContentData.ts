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
    link: "https://www.nyplprint.store/",
    buttonText: "Visit Store",
    buttonId: "featured-visit-store",
    ariaLabel: "Visit the Digital Collections print store",
    imgSrc: "/service-artehouse.jpg",
    imgAlt: "Service Artehouse banner",
  },
  {
    heading: "250 Years of the United States at The New York Public Library",
    overline: "Featured",
    text: "This year, the Library joins our nation in commemorating 250 years since the founding of the United States. As one of the world’s foremost institutions committed to democratic access to knowledge—and as the repository of some of the country’s most important founding documents—the Library is marking this milestone with special exhibitions, free programs and events for all ages, activities, educational offerings, a special anniversary book list, and more!",
    link: "https://www.nypl.org/spotlight/250-years-united-states",
    buttonText: "Learn more",
    buttonId: "featured-learn-more-250-years",
    ariaLabel:
      "Learn more about 250 Years of the United States at The New York Public Library",
    imgSrc: "/250-years.webp",
    imgAlt:
      "250 Years of the United States at The New York Public Library banner",
  },
];

export default featuredContentData;
