import { DC_URL } from "../config/constants";

export const dcNavLinks = [
  {
    href: `${DC_URL}/search/index?utf8=%E2%9C%93&keywords=`,
    text: "Items",
  },
  {
    href: `${DC_URL}/collections`,
    text: "Collections",
  },
  {
    href: `${DC_URL}/divisions`,
    text: "Divisions",
  },
  {
    href: `/about`,
    text: "About",
  },
];
