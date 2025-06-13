export const trackGa4PageView = (
  division?: string,
  collection?: string,
  subCollection?: string
) => {
  const dataLayer = window["dataLayer"] || [];
  dataLayer.push({
    event: "page_view",
    division_center: division ? division : "No Detail",
    collection: collection ? collection : "No Detail",
    subcollection: subCollection ? subCollection : "No Detail",
  });
};
