import { ExploreFurtherDataType } from "../types/ExploreFurtherDataType";
import serviceArtehouse from "../../../public/service-artehouse.jpg";
import researchCatalog from "../../../public/ResearchCatalogThumbnail_v2.jpg";
import serviceArchives from "../../../public/service-archives.jpg";
import serviceApi from "../../../public/service-api.jpg";
import serviceDpla from "../../../public/service-dpla.jpg";

const exploreFurtherData: ExploreFurtherDataType[] = [
  {
    title: "Digital Collections Print Store",
    description:
      "Decorative prints for purchase: choose from archival prints, framed art, stretched canvas, vintage wood, and wall murals.",
    url: "http://nypl.artehouse.com/perl/home.pl",
    image: serviceArtehouse,
    imgAlt: "Service Artehouse",
  },
  {
    title: "NYPL Archives and Manuscripts",
    description:
      "Contains finding aids for over 10,000 unique collections (digitized and non-digitized) in almost every conceivable format.",
    url: "http://archives.nypl.org/",
    image: serviceArchives,
    imgAlt: "Service Archives",
  },
  {
    title: "NYPL Research Catalog",
    description:
      "Discover NYPL's world-renowned research collections, featuring more than 46 million items. Plus, access materials from library collections at Columbia University, Harvard University, and Princeton University.",
    url: "https://www.nypl.org/research/research-catalog/ ",
    image: researchCatalog,
    imgAlt: "NYPL Research Catalog",
  },
  {
    title: "NYPL Digital Collections API",
    description:
      "The Library's digitized collections are available as machine-readable data: over 1 million objects and records for you to search, crawl and compute.",
    url: "https://api.repo.nypl.org/",
    image: serviceApi,
    imgAlt: "Service API",
  },
  {
    title: "Digital Public Library of America",
    description:
      "Brings together the riches of America's libraries, archives, and museums, and makes them freely available to the world.",
    url: "http://dp.la/",
    image: serviceDpla,
    imgAlt: "Service Digital Public Library",
  },
];

export default exploreFurtherData;
