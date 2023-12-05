import appConfig from "appConfig";

export const dcNavLinks = [
  {
    href: appConfig.DC_URL + `/search/index?utf8=%E2%9C%93&keywords=`,
    text: "Items",
  },
  {
    href: appConfig.DC_URL + `/collections`,
    text: "Collections",
  },
  {
    href: appConfig.DC_URL + `/divisions`,
    text: "Divisions",
  },
  {
    href: appConfig.DC_URL + `/about`,
    text: "About",
  },
];
